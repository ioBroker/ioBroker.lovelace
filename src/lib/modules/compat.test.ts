import { expect } from 'chai';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const CompatModule = require('../modules/compat');

describe('modules/compat config_entries/subscribe', function () {
    it('acks once and sends no extra result on the subscription id', function () {
        const responses: { id: unknown; result: unknown }[] = [];
        const raw: string[] = [];
        const mod = new CompatModule({
            sendResponse: (_ws: unknown, id: unknown, result: unknown) => responses.push({ id, result }),
        });
        const ws = { send: (data: string) => raw.push(data) };

        const handled = mod.processMessage(ws, { type: 'config_entries/subscribe', id: 77 });

        expect(handled).to.equal(true);
        // Exactly one result for the subscription id, and nothing else pushed on the socket.
        expect(responses).to.deep.equal([{ id: 77, result: null }]);
        expect(raw).to.have.lengthOf(0);
    });
});
