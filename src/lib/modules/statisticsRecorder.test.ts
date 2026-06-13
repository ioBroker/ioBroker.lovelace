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
