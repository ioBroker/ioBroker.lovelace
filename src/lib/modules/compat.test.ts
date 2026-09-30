import { expect } from 'chai';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const CompatModule = require('../modules/compat');

describe('modules/compat config_entries/subscribe', function () {
    it('acks then sends one empty initial event, and no second result', function () {
        const responses: unknown[] = [];
        const raw: unknown[] = [];
        const mod = new CompatModule({
            sendResponse: (_ws: unknown, id: unknown, result: unknown) => responses.push({ id, result }),
        });
        const ws = { send: (data: string) => raw.push(JSON.parse(data)) };

        const handled = mod.processMessage(ws, { type: 'config_entries/subscribe', id: 77 });

        expect(handled).to.equal(true);
        // No separate sendResponse call - everything goes out in one batched send.
        expect(responses).to.have.lengthOf(0);
        expect(raw).to.deep.equal([
            [
                { id: 77, type: 'result', success: true, result: null },
                { id: 77, type: 'event', event: [] },
            ],
        ]);
    });
});

describe('modules/compat empty stub replies', function () {
    const cases: [string, unknown][] = [
        ['config/category_registry/list', []],
        ['homeassistant/expose_entity/list', { exposed_entities: {} }],
        ['integration/descriptions', {}],
        ['manifest/list', []],
        ['config/floor_registry/list', []],
        ['config/label_registry/list', []],
        ['repairs/list_issues', { issues: [] }],
    ];
    for (const [type, expected] of cases) {
        it(`${type} -> stub`, function () {
            const responses: { id: unknown; result: unknown }[] = [];
            const mod = new CompatModule({
                sendResponse: (_ws: unknown, id: unknown, result: unknown) => responses.push({ id, result }),
            });
            const handled = mod.processMessage({ send: () => {} }, { type, id: 5 });
            expect(handled).to.equal(true);
            expect(responses).to.deep.equal([{ id: 5, result: expected }]);
        });
    }
});

describe('modules/compat http/config', function () {
    it('answers the http settings with nothing pending', function () {
        // The frontend asks for them right after connecting as an administrator; unanswered this only
        // produced "Unknown request: {"type":"http/config"}" in the log of the adapter.
        const responses: { id: unknown; result: any }[] = [];
        const mod = new CompatModule({
            sendResponse: (_ws: unknown, id: unknown, result: unknown) => responses.push({ id, result }),
        });

        const handled = mod.processMessage({ send: () => {} }, { type: 'http/config', id: 53 });

        expect(handled).to.equal(true);
        expect(responses[0].id).to.equal(53);
        // A pending configuration would open a dialog asking to review it.
        expect(responses[0].result.pending).to.equal(null);
        expect(responses[0].result.stable).to.deep.equal({
            use_x_forwarded_for: false,
            trusted_proxies: [],
            use_x_frame_options: true,
            ip_ban_enabled: false,
            login_attempts_threshold: -1,
        });
        expect(responses[0].result.default).to.deep.equal(responses[0].result.stable);
    });
});
