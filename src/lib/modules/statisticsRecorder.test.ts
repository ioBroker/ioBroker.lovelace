import { expect } from 'chai';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const StatisticsRecorder = require('../modules/statisticsRecorder');

function makeModule(entities: any[]): { mod: any; responses: any[] } {
    const responses: any[] = [];
    const entityId2Entity: Record<string, any> = {};
    for (const e of entities) {
        entityId2Entity[e.entity_id] = e;
    }
    const mod = new StatisticsRecorder({
        server: { _sendResponse: (_ws: unknown, _id: unknown, result: unknown) => responses.push(result) },
        adapter: { config: {} },
        log: { debug: () => {}, warn: () => {} },
        personModule: { getUserIDFromName: () => 'system.user.admin' },
        dataSingleton: { entities, entityId2Entity },
    });
    return { mod, responses };
}

const ENTITIES = [
    { entity_id: 'sensor.energy', attributes: { unit_of_measurement: 'kWh', device_class: 'energy' } },
    { entity_id: 'sensor.temp', attributes: { unit_of_measurement: '°C', device_class: 'temperature' } },
    { entity_id: 'sensor.no_unit', attributes: {} },
];

describe('modules/statisticsRecorder recorder/list_statistic_ids', function () {
    it('lists entities with a unit and skips those without', async function () {
        const { mod, responses } = makeModule(ENTITIES);
        const handled = await mod.processMessage({}, { type: 'recorder/list_statistic_ids', id: 1 });
        expect(handled).to.equal(true);
        const ids = responses[0].map((s: any) => s.statistic_id);
        expect(ids).to.have.members(['sensor.energy', 'sensor.temp']);
    });

    it('reports energy as a sum statistic with unit_class energy', async function () {
        const { mod, responses } = makeModule(ENTITIES);
        await mod.processMessage({}, { type: 'recorder/list_statistic_ids', id: 1 });
        const energy = responses[0].find((s: any) => s.statistic_id === 'sensor.energy');
        expect(energy.unit_class).to.equal('energy');
        expect(energy.has_sum).to.equal(true);
        expect(energy.mean_type).to.equal(0);
        expect(energy.statistics_unit_of_measurement).to.equal('kWh');
    });

    it('reports temperature as an arithmetic-mean statistic', async function () {
        const { mod, responses } = makeModule(ENTITIES);
        await mod.processMessage({}, { type: 'recorder/list_statistic_ids', id: 1 });
        const temp = responses[0].find((s: any) => s.statistic_id === 'sensor.temp');
        expect(temp.unit_class).to.equal(null);
        expect(temp.has_sum).to.equal(false);
        expect(temp.mean_type).to.equal(1);
    });

    it('honours the statistic_type=sum filter', async function () {
        const { mod, responses } = makeModule(ENTITIES);
        await mod.processMessage({}, { type: 'recorder/list_statistic_ids', statistic_type: 'sum', id: 1 });
        const ids = responses[0].map((s: any) => s.statistic_id);
        expect(ids).to.deep.equal(['sensor.energy']);
    });
});

describe('modules/statisticsRecorder recorder/statistics_during_period', function () {
    const STEP = 3600000; // hour
    const T0 = Date.parse('2026-06-15T00:00:00.000Z');

    function makeEnergyModule(series: { ts: number; value: number }[]): { mod: any; responses: any[] } {
        const responses: any[] = [];
        const entity = {
            entity_id: 'sensor.energy',
            attributes: { unit_of_measurement: 'kWh', device_class: 'energy' },
            context: { STATE: { getId: 'src.0.energy' } },
        };
        const mod = new StatisticsRecorder({
            server: { _sendResponse: (_ws: unknown, _id: unknown, result: unknown) => responses.push(result) },
            adapter: {
                config: { history: 'history.0' },
                sendToAsync: () => Promise.resolve({ result: series }),
            },
            log: { debug: () => {}, info: () => {}, warn: () => {}, error: () => {} },
            personModule: { getUserIDFromName: () => 'system.user.admin' },
            dataSingleton: { entities: [entity], entityId2Entity: { 'sensor.energy': entity } },
        });
        return { mod, responses };
    }

    it('returns per-bucket change derived from the cumulative counter', async function () {
        // cumulative kWh; one extra bucket before the window (T0 - STEP) for the first delta.
        const { mod, responses } = makeEnergyModule([
            { ts: T0 - STEP, value: 10 },
            { ts: T0, value: 12 },
            { ts: T0 + STEP, value: 15 },
        ]);
        await mod.processMessage(
            { __auth: { username: 'admin' } },
            {
                type: 'recorder/statistics_during_period',
                id: 5,
                start_time: new Date(T0).toISOString(),
                end_time: new Date(T0 + 2 * STEP).toISOString(),
                period: 'hour',
                statistic_ids: ['sensor.energy'],
                types: ['change'],
            },
        );

        // The result must be keyed by entity id (the bug was an always-empty {}).
        expect(responses[0]).to.have.property('sensor.energy');
        const buckets = responses[0]['sensor.energy'];
        expect(buckets).to.have.lengthOf(2);
        expect(buckets[0]).to.include({ start: T0, change: 2 });
        expect(buckets[1]).to.include({ start: T0 + STEP, change: 3 });
    });
});

describe('modules/statisticsRecorder statistics null-gap handling', function () {
    const STEP = 3600000;
    const T0 = Date.parse('2026-06-15T00:00:00.000Z');

    function makeMeanModule(series: { ts: number; value: number | null }[]): { mod: any; responses: any[] } {
        const responses: any[] = [];
        const entity = {
            entity_id: 'sensor.temp',
            attributes: { unit_of_measurement: '°C', device_class: 'temperature' },
            context: { STATE: { getId: 'src.0.temp' } },
        };
        const mod = new StatisticsRecorder({
            server: { _sendResponse: (_ws: unknown, _id: unknown, result: unknown) => responses.push(result) },
            adapter: { config: { history: 'history.0' }, sendToAsync: () => Promise.resolve({ result: series }) },
            log: { debug: () => {}, info: () => {}, warn: () => {}, error: () => {} },
            personModule: { getUserIDFromName: () => 'system.user.admin' },
            dataSingleton: { entities: [entity], entityId2Entity: { 'sensor.temp': entity } },
        });
        return { mod, responses };
    }

    it('never emits a bucket with null mean/state (would crash the frontend converter)', async function () {
        const { mod, responses } = makeMeanModule([
            { ts: T0, value: 5 },
            { ts: T0 + STEP, value: null }, // empty hour
            { ts: T0 + 2 * STEP, value: 7 },
        ]);
        await mod.processMessage(
            { __auth: { username: 'admin' } },
            {
                type: 'recorder/statistics_during_period',
                id: 7,
                start_time: new Date(T0).toISOString(),
                end_time: new Date(T0 + 3 * STEP).toISOString(),
                period: 'hour',
                statistic_ids: ['sensor.temp'],
                types: ['mean', 'state'],
            },
        );
        const buckets = responses[0]['sensor.temp'];
        for (const b of buckets) {
            // every bucket must have a usable numeric mean or state, never null
            expect(typeof b.mean === 'number' || typeof b.state === 'number').to.equal(true);
            expect(b.mean === null || b.state === null).to.equal(false);
        }
    });
});
