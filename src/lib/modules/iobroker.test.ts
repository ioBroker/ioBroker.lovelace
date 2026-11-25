import { expect } from 'chai';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const IoBrokerModule = require('./iobroker');

interface Call {
    fn: string;
    args: unknown[];
}

/**
 * fake adapter: states/objects/files in memory, a user without rights is rejected
 *
 * @param rights - rights of the "other" group per user
 */
function makeAdapter(rights: Record<string, Record<string, boolean>> = {}): { adapter: any; calls: Call[] } {
    const calls: Call[] = [];
    const states: Record<string, ioBroker.State> = {
        'home-guard.0.status.mode': { val: 'full', ack: true, ts: 1, lc: 1, from: 'x' },
        'secret.0.pin': { val: '1234', ack: true, ts: 1, lc: 1, from: 'x' },
    };
    const check = (options: { user?: string } | undefined, id: string): void => {
        if (id.startsWith('secret.') && options?.user !== 'system.user.admin') {
            throw new Error('permissionError');
        }
    };
    // the methods answer asynchronously like the real adapter
    const later =
        <A extends unknown[], R>(fn: (...args: A) => R) =>
        (...args: A): Promise<R> =>
            Promise.resolve().then(() => fn(...args));
    const adapter = {
        log: { debug: () => {}, warn: () => {} },
        config: { history: 'sql.0' },
        getForeignStateAsync: later((id: string, options?: { user?: string }) => {
            calls.push({ fn: 'getForeignState', args: [id, options] });
            check(options, id);
            return states[id] ?? null;
        }),
        setForeignStateAsync: later((id: string, state: unknown, options?: { user?: string }) => {
            calls.push({ fn: 'setForeignState', args: [id, state, options] });
            check(options, id);
        }),
        getForeignObjectAsync: later((id: string, options?: { user?: string }) => {
            calls.push({ fn: 'getForeignObject', args: [id, options] });
            if (id === 'system.config') {
                return { common: { language: 'de' } };
            }
            // history adapters (history, sql, influxdb) set common.getHistory
            if (id === 'system.adapter.sql.0' || id === 'system.adapter.history.0') {
                return { _id: id, type: 'instance', common: { getHistory: true } };
            }
            if (id.startsWith('system.adapter.')) {
                return { _id: id, type: 'instance', common: {} };
            }
            return { _id: id, type: 'state', common: {} };
        }),
        getObjectViewAsync: later((design: string, type: string, params: unknown, options: unknown) => {
            calls.push({ fn: 'getObjectView', args: [design, type, params, options] });
            return { rows: [{ id: 'system.adapter.home-guard.0', value: { common: { webComponents: ['a.json'] } } }] };
        }),
        sendToAsync: later((instance: string, command: string, message: unknown, options: unknown) => {
            calls.push({ fn: 'sendTo', args: [instance, command, message, options] });
            if (command === 'getHistory') {
                return { result: [{ val: 1, ts: 2 }] };
            }
            return [{ value: 'a', label: 'A' }];
        }),
        readFileAsync: later((adapterName: string, file: string, options: unknown) => {
            calls.push({ fn: 'readFile', args: [adapterName, file, options] });
            if (file.endsWith('.png')) {
                return { file: Buffer.from([1, 2, 3]), mimeType: 'image/png' };
            }
            return { file: Buffer.from('export const a = 1;'), mimeType: 'application/javascript' };
        }),
        calculatePermissionsAsync: later((user: string) => ({
            user,
            acl: rights[user] ? { other: rights[user] } : {},
        })),
    };
    return { adapter, calls };
}

function makeModule(rights?: Record<string, Record<string, boolean>>): {
    mod: any;
    calls: Call[];
    subscribed: string[];
} {
    const { adapter, calls } = makeAdapter(rights);
    const subscribed: string[] = [];
    const mod = new IoBrokerModule({
        adapter,
        sendResponse: (ws: any, id: unknown, result?: unknown) =>
            ws.send(JSON.stringify({ id, type: 'result', success: true, result: result ?? null })),
        getUserIDFromName: (name: string | undefined) => `system.user.${name || 'admin'}`,
        subscribeState: (id: string) => subscribed.push(id),
    });
    return { mod, calls, subscribed };
}

function makeWs(username = 'admin'): { ws: any; sent: any[] } {
    const sent: any[] = [];
    const ws = { send: (data: string) => sent.push(JSON.parse(data)), readyState: 1, __auth: { username } };
    return { ws, sent };
}

describe('modules/iobroker', function () {
    it('ignores messages that are not iobroker/*', async function () {
        const { mod } = makeModule();
        const { ws, sent } = makeWs();
        expect(await mod.processMessage(ws, { id: 1, type: 'get_states' })).to.equal(false);
        expect(sent).to.have.length(0);
    });

    it('answers info with the protocol version and the system language', async function () {
        const { mod } = makeModule();
        const { ws, sent } = makeWs();
        await mod.processMessage(ws, { id: 1, type: 'iobroker/info' });
        expect(sent[0].result).to.deep.equal({ version: 1, systemLang: 'de' });
    });

    it('reads and writes states with the rights of the logged-in user', async function () {
        const { mod, calls } = makeModule();
        const { ws, sent } = makeWs('guest');
        // the message id is "id" (HA protocol), so the state comes in "state_id"
        await mod.processMessage(ws, { id: 1, type: 'iobroker/get_state' });
        expect(sent[0].success).to.equal(false);
        sent.length = 0;
        calls.length = 0;
        await mod.processMessage(ws, { id: 3, type: 'iobroker/get_state', state_id: 'home-guard.0.status.mode' });
        expect(sent[0].result.val).to.equal('full');
        expect(calls[0].args[1]).to.deep.equal({ user: 'system.user.guest' });
        await mod.processMessage(ws, { id: 4, type: 'iobroker/get_state', state_id: 'secret.0.pin' });
        expect(sent[1].success).to.equal(false);
        await mod.processMessage(ws, {
            id: 5,
            type: 'iobroker/set_state',
            state_id: 'home-guard.0.status.mode',
            state: 'off',
        });
        expect(sent[2].success).to.equal(true);
        expect(calls.find(c => c.fn === 'setForeignState')!.args).to.deep.equal([
            'home-guard.0.status.mode',
            { val: 'off', ack: false },
            { user: 'system.user.guest' },
        ]);
    });

    it('pushes subscribed state changes until unsubscribed', async function () {
        const { mod, subscribed } = makeModule();
        const { ws, sent } = makeWs();
        const wss = { clients: [ws] };
        await mod.processMessage(ws, {
            id: 7,
            type: 'iobroker/subscribe_states',
            state_ids: ['home-guard.0.status.mode'],
        });
        expect(sent[0].success).to.equal(true);
        expect(subscribed).to.deep.equal(['home-guard.0.status.mode']);
        expect(mod.referencesState('home-guard.0.status.mode', wss)).to.equal(true);
        expect(mod.collectSubscribedIds(wss)).to.deep.equal(['home-guard.0.status.mode']);
        mod.onStateChange('home-guard.0.status.mode', { val: 'night' }, wss);
        mod.onStateChange('other.0.x', { val: 1 }, wss);
        expect(sent).to.have.length(2);
        expect(sent[1]).to.deep.equal({
            id: 7,
            type: 'event',
            event: { id: 'home-guard.0.status.mode', state: { val: 'night' } },
        });
        mod.removeSubscription(ws, 7);
        mod.onStateChange('home-guard.0.status.mode', { val: 'off' }, wss);
        expect(sent).to.have.length(2);
        expect(mod.referencesState('home-guard.0.status.mode', wss)).to.equal(false);
    });

    it('does not subscribe a state the user may not read', async function () {
        const { mod, subscribed } = makeModule();
        const { ws, sent } = makeWs('guest');
        await mod.processMessage(ws, { id: 8, type: 'iobroker/subscribe_states', state_ids: ['secret.0.pin'] });
        expect(sent[0].success).to.equal(false);
        expect(subscribed).to.have.length(0);
    });

    it('lists objects of a type as id -> object', async function () {
        const { mod, calls } = makeModule();
        const { ws, sent } = makeWs('guest');
        await mod.processMessage(ws, {
            id: 9,
            type: 'iobroker/get_object_view',
            object_type: 'instance',
            start: 'system.adapter.',
            end: 'system.adapter.香',
        });
        expect(Object.keys(sent[0].result)).to.deep.equal(['system.adapter.home-guard.0']);
        expect(calls[0].args[3]).to.deep.equal({ user: 'system.user.guest' });
    });

    it('sendTo needs the right "sendto"', async function () {
        const { mod, calls } = makeModule({
            'system.user.guest': { sendto: false },
            'system.user.family': { sendto: true },
        });
        const guest = makeWs('guest');
        await mod.processMessage(guest.ws, {
            id: 10,
            type: 'iobroker/send_to',
            instance: 'home-guard.0',
            command: 'getMessengers',
        });
        expect(guest.sent[0].success).to.equal(false);
        expect(guest.sent[0].error.code).to.equal('unauthorized');
        expect(calls.filter(c => c.fn === 'sendTo')).to.have.length(0);
        const family = makeWs('family');
        await mod.processMessage(family.ws, {
            id: 11,
            type: 'iobroker/send_to',
            instance: 'home-guard.0',
            command: 'getMessengers',
            message: {},
        });
        expect(family.sent[0].result).to.deep.equal([{ value: 'a', label: 'A' }]);
        const admin = makeWs('admin');
        await mod.processMessage(admin.ws, {
            id: 12,
            type: 'iobroker/send_to',
            instance: 'home-guard.0',
            command: 'x',
        });
        expect(admin.sent[0].success).to.equal(true);
    });

    it('reads the history of a state from the configured history instance', async function () {
        const { mod, calls } = makeModule();
        const { ws, sent } = makeWs();
        await mod.processMessage(ws, {
            id: 13,
            type: 'iobroker/get_history',
            state_id: 'home-guard.0.status.mode',
            options: { count: 5 },
        });
        expect(sent[0].result).to.deep.equal([{ val: 1, ts: 2 }]);
        const call = calls.find(c => c.fn === 'sendTo')!;
        expect(call.args.slice(0, 3)).to.deep.equal([
            'sql.0',
            'getHistory',
            { id: 'home-guard.0.status.mode', options: { count: 5 } },
        ]);
    });

    it('sends get_history only to history instances', async function () {
        const { mod, calls } = makeModule();
        const { ws, sent } = makeWs();
        await mod.processMessage(ws, {
            id: 30,
            type: 'iobroker/get_history',
            state_id: 'home-guard.0.status.mode',
            options: { instance: 'history.0' },
        });
        expect(sent[0].success).to.equal(true);
        for (const instance of ['javascript.0', 'admin', '../sql.0']) {
            calls.length = 0;
            await mod.processMessage(ws, {
                id: 31,
                type: 'iobroker/get_history',
                state_id: 'home-guard.0.status.mode',
                options: { instance },
            });
            expect(sent.at(-1).success, instance).to.equal(false);
            expect(
                calls.some(c => c.fn === 'sendTo'),
                instance,
            ).to.equal(false);
        }
    });

    it('reads files as text or base64 and refuses to leave the folder', async function () {
        const { mod } = makeModule();
        const { ws, sent } = makeWs();
        await mod.processMessage(ws, {
            id: 14,
            type: 'iobroker/read_file',
            adapter: 'home-guard.admin',
            file: 'webcomponents/a.js',
        });
        expect(sent[0].result).to.deep.equal({ mimeType: 'application/javascript', data: 'export const a = 1;' });
        await mod.processMessage(ws, {
            id: 15,
            type: 'iobroker/read_file',
            adapter: 'home-guard.admin',
            file: 'img/a.png',
        });
        expect(sent[1].result).to.deep.equal({ mimeType: 'image/png', base64: 'AQID' });
        await mod.processMessage(ws, {
            id: 16,
            type: 'iobroker/read_file',
            adapter: 'home-guard.admin',
            file: '../../etc/passwd',
        });
        expect(sent[2].success).to.equal(false);
    });
});
