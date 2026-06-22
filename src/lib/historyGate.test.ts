import { expect } from 'chai';
import * as sinon from 'sinon';
import { getHistoryGated, boundHistoryCount, DEFAULT_HISTORY_MAX_COUNT, HARD_HISTORY_MAX_COUNT } from './historyGate';

describe('boundHistoryCount', function () {
    it('falls back to the default when unset or non-positive (prevents an unbounded request)', function () {
        expect(boundHistoryCount(undefined)).to.equal(DEFAULT_HISTORY_MAX_COUNT);
        expect(boundHistoryCount(0)).to.equal(DEFAULT_HISTORY_MAX_COUNT);
        expect(boundHistoryCount(-5)).to.equal(DEFAULT_HISTORY_MAX_COUNT);
    });

    it('keeps a sane configured value', function () {
        expect(boundHistoryCount(500)).to.equal(500);
    });

    it('caps an excessively large configured value', function () {
        expect(boundHistoryCount(10_000_000)).to.equal(HARD_HISTORY_MAX_COUNT);
    });
});

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

    it('times out a hung getHistory and frees the gate slot (no deadlock)', async function () {
        const clock = sinon.useFakeTimers();
        try {
            const adapter = {
                // never settles -> would hold its gate slot forever without the timeout
                sendToAsync: (): Promise<unknown> => new Promise<unknown>(() => {}),
                log: { warn: (): void => {} },
            };

            // Fill all gate slots with hung calls + one that has to queue behind them.
            const hung = [
                getHistoryGated(adapter, 'history.0', { id: 'a' }),
                getHistoryGated(adapter, 'history.0', { id: 'b' }),
                getHistoryGated(adapter, 'history.0', { id: 'c' }),
            ];
            const queued = getHistoryGated(adapter, 'history.0', { id: 'd' });

            // The three in-flight calls time out, return empty and release their slots.
            await clock.tickAsync(60000);
            for (const p of hung) {
                expect(await p).to.deep.equal({ result: [] });
            }

            // The queued call got a freed slot, ran, and also times out -> no permanent deadlock.
            await clock.tickAsync(60000);
            expect(await queued).to.deep.equal({ result: [] });
        } finally {
            clock.restore();
        }
    });
});
