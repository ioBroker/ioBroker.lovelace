/**
 * Create statistics in backend and send them to frontend.
 * Prorably needs history... let's see how much we can do.
 * Maybe fixes problems with too much data send to frontend. :-)
 */
class StatisticsRecorder {
    /**
     * Constructor
     *
     * @param {object} options - options
     */
    constructor(options) {
        this.options = options;
        this.log = options.log;
        this.statistics = {};
    }

    /**
     * Process message from frontend.
     *
     * @param ws - websocket connection
     * @param message - message object
     * @returns {Promise<boolean>} - true if message was processed
     */
    async processMessage(ws, message) {
        if (message.type?.startsWith('recorder/')) {
            if (message.type === 'recorder/get_statistics_metadata') {
                //wants object of type StatisticsMetaData for each entity in statustisc_ids:
                for (const entityId of message.statistic_ids) {
                    const entity = this.options.dataSingleton.entityId2Entity[entityId];
                    if (!entity) {
                        this.log.warn(`Entity ${entityId} not found`);
                        continue;
                    }
                    this.log.debug(`Getting metadata for ${entityId}`);
                }
                return true;
            }
        }
    }
}

module.exports = StatisticsRecorder;
