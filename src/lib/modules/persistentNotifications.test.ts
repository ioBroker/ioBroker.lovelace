import { expect } from 'chai';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const PersistentNotifications = require('../modules/persistentNotifications');

function makeModule(): { mod: any; stored: () => Record<string, any> } {
    let list = '{}';
    const adapter = {
        namespace: 'lovelace.0',
        log: { debug: () => {}, info: () => {}, warn: () => {}, error: () => {} },
        setStateAsync: (_id: string, val: string) => {
            list = val;
            return Promise.resolve();
        },
        getStateAsync: () => Promise.resolve({ val: list }),
    };
    const mod = new PersistentNotifications({
        adapter,
        server: { getClientsWithSubscription: () => [] },
    });
    return { mod, stored: () => JSON.parse(list) };
}

describe('modules/persistentNotifications', function () {
    const TS = 1791400000000;

    it('creates one notification per write, even when the change arrives twice', async function () {
        // A states database that fans out per matching subscription pattern (redis does) delivers a
        // change twice when two patterns match it. That created two identical notifications.
        const { mod, stored } = makeModule();

        await mod.onStateChange('lovelace.0.notifications.add', { val: 'hello', ack: false, ts: TS });
        await mod.onStateChange('lovelace.0.notifications.add', { val: 'hello', ack: false, ts: TS });

        const notifications = stored();
        expect(Object.keys(notifications)).to.have.length(1);
        expect(notifications[TS]).to.include({ message: 'hello', notification_id: TS, created_at: TS });
    });

    it('keeps two notifications that say something else in the same millisecond', async function () {
        const { mod, stored } = makeModule();

        await mod.onStateChange('lovelace.0.notifications.add', { val: 'first', ack: false, ts: TS });
        await mod.onStateChange('lovelace.0.notifications.add', { val: 'second', ack: false, ts: TS });

        const notifications = stored();
        expect(Object.keys(notifications)).to.have.length(2);
        expect(Object.values(notifications).map((n: any) => n.message)).to.have.members(['first', 'second']);
    });

    it('updates the notification of an id that is written again', async function () {
        const { mod, stored } = makeModule();

        await mod.onStateChange('lovelace.0.notifications.add', {
            val: JSON.stringify({ notification_id: 7, message: 'before' }),
            ack: false,
            ts: TS,
        });
        await mod.onStateChange('lovelace.0.notifications.add', {
            val: JSON.stringify({ notification_id: 7, message: 'after' }),
            ack: false,
            ts: TS + 5000,
        });

        const notifications = stored();
        expect(Object.keys(notifications)).to.deep.equal(['7']);
        expect(notifications[7].message).to.equal('after');
    });

    it('ignores an acknowledged write, so its own value does not come back as a notification', async function () {
        const { mod, stored } = makeModule();

        await mod.onStateChange('lovelace.0.notifications.add', { val: 'hello', ack: true, ts: TS });

        expect(stored()).to.deep.equal({});
    });

    it('clears a notification by id', async function () {
        const { mod, stored } = makeModule();

        await mod.onStateChange('lovelace.0.notifications.add', { val: 'hello', ack: false, ts: TS });
        await mod.onStateChange('lovelace.0.notifications.clear', { val: TS, ack: false, ts: TS + 1 });

        expect(stored()).to.deep.equal({});
    });
});
