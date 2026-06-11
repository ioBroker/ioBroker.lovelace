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
