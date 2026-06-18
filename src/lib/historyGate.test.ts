import { expect } from 'chai';
import { getHistoryGated } from './historyGate';

describe('historyGate', function () {
    it('never runs more than the maximum number of getHistory calls at once', async function () {
        let active = 0;
        let maxActive = 0;
        const resolvers: (() => void)[] = [];

        const adapter = {
            sendToAsync(_instance: string, _command: string, _message: unknown): Promise<unknown> {
                active++;
                maxActive = Math.max(maxActive, active);
                return new Promise<unknown>(resolve => {
                    resolvers.push(() => {
                        active--;
                        resolve({ result: [] });
                    });
                });
            },
        };

        // Fire many more requests than the gate allows concurrently.
        const calls = Array.from({ length: 20 }, () => getHistoryGated(adapter, 'history.0', { id: 'x' }));

        // Let the gate admit the first batch.
        await new Promise(r => setTimeout(r, 5));
        expect(maxActive).to.be.at.most(3);
        expect(active).to.be.at.most(3);

        // Drain: resolve calls one by one, which should pull queued ones in.
        while (resolvers.length) {
            resolvers.shift()!();
            await new Promise(r => setTimeout(r, 0));
        }
        await Promise.all(calls);

        expect(maxActive).to.equal(3);
    });

    it('passes the command and message through to sendToAsync and returns its result', async function () {
        const seen: { instance: string; command: string; message: unknown }[] = [];
        const adapter = {
            sendToAsync(instance: string, command: string, message: unknown): Promise<unknown> {
                seen.push({ instance, command, message });
                return Promise.resolve({ result: [1, 2, 3] });
            },
        };

        const res = await getHistoryGated(adapter, 'history.0', { id: 'abc' });

        expect(seen).to.deep.equal([{ instance: 'history.0', command: 'getHistory', message: { id: 'abc' } }]);
        expect(res).to.deep.equal({ result: [1, 2, 3] });
    });
});
