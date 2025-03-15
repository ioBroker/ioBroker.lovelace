/**
 * Create statistics in the backend and send them to the frontend.
 * Prorably needs history... let's see how much we can do.
 * Maybe fixes problems with too much data sent to the frontend. :-)
 */
class StatisticsRecorder {
    /**
     * Constructor
     *
     * @param {object} options - options
     * @param {object} options.server - server object
     * @param {object} options.adapter - adapter object
     * @param {object} options.log - log object
     * @param {object} options.personModule - person module
     */
    constructor(options) {
        this.server = options.server;
        this.adapter = options.adapter;
        this.log = options.log;
        this.personModule = options.personModule;
        this.dataSingleton = options.dataSingleton;
    }

    /**
     * Get history for entity.
     *
     * @param {string} id iobroker object id.
     * @param {number} start in ms
     * @param {number} end in ms
     * @param {number} step in ms
     * @param {string|undefined} aggregate how to aggregate the data
     * @param {string} user - user id
     * @returns {Promise<{val: any, ts: number}[]>} - array of history data
     */
    async getHistory(id, start, end, step, aggregate, user) {
        if (!this.adapter.config.history) {
            this.log.warn(`History instance is not selected in the settings`);
            return [];
        } else {
            const history = this.adapter.config.history;
            const count = (end - start) / step;
            const options = {
                start,
                end,
                step,
                count,
                aggregate,
                user,
            };
            if (id) {
                const result = await this.adapter.sendToAsync(history, 'getHistory', { id, options });
                if (result.error) {
                    this.log.error(`Error getting history for ${id}: ${result.error}`);
                }
                if (result && result.result) {
                    return result;
                } else {
                    return [];
                }
            } else {
                return [];
            }
        }
    }

    /**
     * Process message from the frontend.
     *
     * @param ws - websocket connection
     * @param message - message object
     * @returns {Promise<boolean>} - true if the message was processed
     */
    async processMessage(ws, message) {
        if (message.type?.startsWith('recorder/')) {
            if (message.type === 'recorder/info') {
                //wants some info object about recorder.. not sure what that is supposed to be.
                //see data/recorder.ts for type definition (but no comments.. hm)
                const result = {
                    backlog: 0,
                    db_in_default_location: true,
                    max_backlog: 65000,
                    migration_in_progress: false,
                    migration_is_live: false,
                    recording: true,
                    thread_running: true,
                };
                this.server._sendResponse(ws, message.id, result);
                return true;
            } else if (message.type === 'recorder/get_statistics_metadata') {
                //wants object of type StatisticsMetaData for each entity in statustisc_ids:
                const result = [];
                for (const entityId of message.statistic_ids) {
                    const entity = this.dataSingleton.entityId2Entity[entityId];
                    if (!entity) {
                        this.log.warn(`Entity ${entityId} not found`);
                        continue;
                    }
                    this.log.debug(`Getting metadata for ${entityId}`);
                    result.push({
                        statistic_id: entityId,
                        display_unit_of_measurement: entity.attributes.unit_of_measurement,
                        has_mean: true,
                        has_sum: true,
                        name: null,
                        source: 'recorder',
                        statistics_unit_of_measurement: entity.attributes.unit_of_measurement,
                        unit_class: 'temperature',
                    });
                }
                this.server._sendResponse(ws, message.id, result);
                return true;
            } else if (message.type === 'recorder/statistics_during_period') {
                this.log.debug(`Getting statistics for period ${JSON.stringify(message)}`);
                const result = {};
                const user = this.personModule.getUserIDFromName(ws.__auth?.username); //get user id from name
                const start = new Date(message.start_time).getTime();
                const end = message.end_time ? new Date(message.end_time).getTime() : Date.now();
                let step = undefined;
                //for possible values, see recorder.ts: "5minute" | "hour" | "day" | "week" | "month"
                switch (message.period) {
                    case '5minute':
                        step = 30000;
                        break;
                    case 'hour':
                        step = 3600000;
                        break;
                    case 'day':
                        step = 86400000;
                        break;
                    case 'week':
                        step = 604800000;
                        break;
                    case 'month':
                        step = 2628000000;
                        break;
                    default:
                        this.log.warn(`Unknown period ${message.period}, default to hour`);
                        step = 3600000;
                        break;
                }
                //need to a new call for each aggregate. Those roughly correspond to possible types.
                const aggregates = []; //get min and max values.
                //"change" | "state" | "sum" | "min" | "max" | "mean";
                if (message.types && message.types.includes('state')) {
                    aggregates.push(undefined);
                }
                if (message.type && message.types.includes('min')) {
                    aggregates.push('min');
                }
                if (message.types && message.types.includes('max')) {
                    aggregates.push('max');
                }
                if (message.types && message.types.includes('mean')) {
                    aggregates.push('average');
                }
                if (message.types && message.types.includes('sum')) {
                    aggregates.push('total');
                }
                if (message.types && message.types.includes('change')) {
                    aggregates.push('onchange');
                }
                for (const entityId of message.statistic_ids) {
                    const entity = this.dataSingleton.entityId2Entity[entityId];
                    if (!entity) {
                        this.log.warn(`Entity ${entityId} not found`);
                        continue;
                    }
                    this.log.debug(`Getting statistics for ${entityId}`);
                    const id = entity.context.STATE.getId || entity.context.STATE.setId;
                    const entityResult = [];
                    for (const aggregate of aggregates) {
                        const currentResults = await this.getHistory(id, start, end, step, aggregate, user);
                        for (let i = 0; i < currentResults.length; i++) {
                            if (!entityResult[i]) {
                                //create new result
                                const result = {
                                    start: currentResults[i].ts,
                                    end: currentResults[i + 1]?.ts || end,
                                };
                                if (aggregate) {
                                    result[aggregate] = currentResults[i].value;
                                } else {
                                    result.state = currentResults[i].value;
                                }
                                entityResult.push(result);
                            } else {
                                //update result
                                if (aggregate) {
                                    entityResult[i][aggregate] = currentResults[i].value;
                                } else {
                                    entityResult[i].state = currentResults[i].value;
                                }
                            }
                        }
                    }
                }
                this.server._sendResponse(ws, message.id, result);
                return true;
            }
        }
    }
}

module.exports = StatisticsRecorder;
