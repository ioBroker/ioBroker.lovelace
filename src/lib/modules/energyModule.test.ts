import { expect } from 'chai';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const EnergyModule = require('../modules/energyModule');

function makeModule(storedPrefs?: unknown): { mod: any; responses: any[]; warnings: string[]; saved: any[] } {
    const responses: any[] = [];
    const warnings: string[] = [];
    const saved: any[] = [];
    const storage: any = { native: { prefs: storedPrefs } };
    const adapter = {
        log: { debug: () => {}, info: () => {}, warn: (m: string) => warnings.push(m), error: () => {} },
        getObjectAsync: () => Promise.resolve(storedPrefs === undefined ? null : storage),
        setObject: (_id: string, obj: any) => {
            saved.push(obj.native.prefs);
            return Promise.resolve();
        },
    };
    const mod = new EnergyModule({
        adapter,
        sendResponse: (_ws: unknown, _id: unknown, result: unknown) => responses.push(result),
    });
    return { mod, responses, warnings, saved };
}

describe('modules/energyModule power_config -> stat_rate', function () {
    it('derives stat_rate from a standard single power sensor when saving', async function () {
        // The energy settings dialog only saves power_config; every power card (summary
        // "Stromquellen" graph, "Jetzt" power flow) reads only the top-level stat_rate.
        const { mod, responses } = makeModule();
        await mod.init();

        mod.processMessage(
            {},
            {
                type: 'energy/save_prefs',
                id: 1,
                energy_sources: [
                    {
                        type: 'grid',
                        stat_energy_from: 'sensor.import',
                        power_config: { stat_rate: 'sensor.power_now' },
                    },
                ],
            },
        );

        expect(responses[0].energy_sources[0].stat_rate).to.equal('sensor.power_now');
        // power_config is kept so the dialog still shows the user's choice.
        expect(responses[0].energy_sources[0].power_config).to.deep.equal({ stat_rate: 'sensor.power_now' });
    });

    it('heals preferences that were stored without stat_rate by an older version', async function () {
        // Without this, an existing installation keeps empty power graphs until the user opens and
        // re-saves the energy settings dialog.
        const { mod, responses } = makeModule({
            energy_sources: [
                { type: 'grid', stat_energy_from: 'sensor.import', power_config: { stat_rate: 'sensor.power_now' } },
            ],
            device_consumption: [],
            device_consumption_water: [],
        });
        await mod.init();

        mod.processMessage({}, { type: 'energy/get_prefs', id: 2 });
        expect(responses[0].energy_sources[0].stat_rate).to.equal('sensor.power_now');
    });

    it('applies to battery sources as well, and leaves other source types untouched', async function () {
        const { mod, responses } = makeModule();
        await mod.init();

        mod.processMessage(
            {},
            {
                type: 'energy/save_prefs',
                id: 3,
                energy_sources: [
                    {
                        type: 'battery',
                        stat_energy_from: 'sensor.bat_out',
                        stat_energy_to: 'sensor.bat_in',
                        power_config: { stat_rate: 'sensor.bat_power' },
                    },
                    // solar keeps its own stat_rate (the dialog saves it directly there)
                    { type: 'solar', stat_energy_from: 'sensor.solar', stat_rate: 'sensor.solar_power' },
                ],
            },
        );

        expect(responses[0].energy_sources[0].stat_rate).to.equal('sensor.bat_power');
        expect(responses[0].energy_sources[1].stat_rate).to.equal('sensor.solar_power');
    });

    it('warns instead of pointing at a non-existent helper for inverted / two-sensor configs', async function () {
        const { mod, responses, warnings } = makeModule();
        await mod.init();

        mod.processMessage(
            {},
            {
                type: 'energy/save_prefs',
                id: 4,
                energy_sources: [
                    { type: 'grid', stat_energy_from: 'sensor.a', power_config: { stat_rate_inverted: 'sensor.inv' } },
                    {
                        type: 'battery',
                        stat_energy_from: 'sensor.b',
                        power_config: { stat_rate_from: 'sensor.dis', stat_rate_to: 'sensor.chg' },
                    },
                ],
            },
        );

        // No stat_rate is invented - HA would use a generated helper entity we do not create.
        expect(responses[0].energy_sources[0].stat_rate).to.equal(undefined);
        expect(responses[0].energy_sources[1].stat_rate).to.equal(undefined);
        expect(warnings).to.have.lengthOf(2);
        expect(warnings[0]).to.contain('inverted');
        expect(warnings[1]).to.contain('from/to');
    });
});
