/* global it before */
const tools = require('./testTools');
const expect = require('chai').expect;

/**
 * The notifications the adapter has stored.
 *
 * @param harness {object} - instance of the ioBroker harness
 * @returns {Promise<Record<string, object>>} the stored notifications by id
 */
async function readNotifications(harness) {
    const state = await harness.states.getStateAsync('lovelace.0.notifications.list');
    return JSON.parse((state && state.val) || '{}');
}

exports.runTests = function (suite) {
    suite('notifications', getHarness => {
        let harness;

        before(async () => {
            tools.clearClient();
            harness = getHarness();
            await tools.startAndGetEntities(harness, {}, [], []);
        });

        it('creates one notification per write to notifications.add', async () => {
            await harness.states.setStateAsync('lovelace.0.notifications.add', { val: 'hello world', ack: false });
            await tools.delay(500);

            const notifications = await readNotifications(harness);
            const ids = Object.keys(notifications).filter(id => notifications[id].message === 'hello world');
            expect(ids).to.have.length(1);
        });

        it('takes a json value as the notification itself', async () => {
            await harness.states.setStateAsync('lovelace.0.notifications.add', {
                val: JSON.stringify({ notification_id: 'integration', title: 'a title', message: 'a message' }),
                ack: false,
            });
            await tools.delay(500);

            const notifications = await readNotifications(harness);
            expect(notifications.integration).to.include({ title: 'a title', message: 'a message' });
        });

        it('clears a notification again', async () => {
            await harness.states.setStateAsync('lovelace.0.notifications.clear', { val: 'integration', ack: false });
            await tools.delay(500);

            const notifications = await readNotifications(harness);
            expect(notifications.integration).to.equal(undefined);
        });
    });
};
