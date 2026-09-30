/* global it before after */
const WebSocket = require('ws');
const tools = require('./testTools');
const expect = require('chai').expect;

/** Ask the adapter for its configuration, the way the frontend does after connecting. */
async function readConfig() {
    return new Promise((resolve, reject) => {
        const client = new WebSocket(`ws://localhost:${tools.lovelacePort}`);
        client.on('error', reject);
        client.on('open', () => {
            client.send(JSON.stringify({ id: 1, type: 'auth', access_token: 'no_token' }));
            client.send(JSON.stringify({ id: 2, type: 'get_config' }));
        });
        client.on('message', data => {
            const message = JSON.parse(data.toString('utf8'));
            if (message.id === 2 && message.type === 'result') {
                client.close();
                resolve(message.result);
            }
        });
    });
}

exports.runTests = function (suite) {
    suite('config', getHarness => {
        let harness;
        let previousCurrency;

        before(async () => {
            tools.clearClient();
            harness = getHarness();
            // ioBroker takes free text as its currency, and users write the symbol there.
            const systemConfig = await harness.objects.getObjectAsync('system.config');
            previousCurrency = systemConfig.common.currency;
            systemConfig.common.currency = '€h';
            await harness.objects.setObjectAsync('system.config', systemConfig);
            await tools.startAndGetEntities(harness, {}, [], []);
        });

        after(async () => {
            const systemConfig = await harness.objects.getObjectAsync('system.config');
            systemConfig.common.currency = previousCurrency;
            await harness.objects.setObjectAsync('system.config', systemConfig);
        });

        it('reports a currency the frontend can format with (#749)', async () => {
            // The energy dashboard hands the currency to Intl.NumberFormat, which throws on anything
            // but an ISO code - and that error left the electricity tab loading forever.
            const config = await readConfig();
            expect(config.currency).to.equal('EUR');
            expect(() =>
                new Intl.NumberFormat('de-DE', { style: 'currency', currency: config.currency }).format(1),
            ).to.not.throw();
        });
    });
};
