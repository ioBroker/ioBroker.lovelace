import { expect } from 'chai';
import { Types } from '@iobroker/type-detector';
import type { PatternControl } from '@iobroker/type-detector';
import { MediaPlayerConverter } from './media_player';
import type { ConverterParameters } from './converter';

const DEVICE_ID = 'test.media_device';
const STATE_ID = `${DEVICE_ID}.state`;

function makeObj(id: string, writable = true): ioBroker.Object {
    return {
        _id: id,
        type: 'state',
        common: { name: id, role: '', read: true, write: writable, type: 'boolean' },
        native: {},
    } as unknown as ioBroker.Object;
}

function makeParameters(states: Array<{ id?: string; name: string }>): ConverterParameters {
    const objects: Record<string, ioBroker.Object> = { [DEVICE_ID]: makeObj(DEVICE_ID) };
    for (const s of states) {
        if (s.id) {
            objects[s.id] = makeObj(s.id);
        }
    }
    return {
        id: DEVICE_ID,
        controls: { states, type: Types.media } as unknown as PatternControl,
        friendlyName: 'Test Player',
        room: undefined,
        func: undefined,
        objects,
        existingEntities: [],
        adapter: { log: { debug: () => {}, warn: () => {} } } as unknown as ioBroker.Adapter,
        entityRegistry: { getEntityId: () => undefined, storeEntityId: () => {} },
    };
}

describe('converters/media_player', function () {
    describe('STATE.historyParser', function () {
        it('raw true/1/"play" → playing', function () {
            const params = makeParameters([{ id: STATE_ID, name: 'STATE' }]);
            const entity = MediaPlayerConverter.convertEntities(params)[0];
            const hp = entity.context.STATE.historyParser!;
            expect(hp('', true)).to.equal('playing');
            expect(hp('', 1)).to.equal('playing');
            expect(hp('', 'play')).to.equal('playing');
        });

        it('raw false/0/"pause" → paused', function () {
            const params = makeParameters([{ id: STATE_ID, name: 'STATE' }]);
            const entity = MediaPlayerConverter.convertEntities(params)[0];
            const hp = entity.context.STATE.historyParser!;
            expect(hp('', false)).to.equal('paused');
            expect(hp('', 0)).to.equal('paused');
            expect(hp('', 'pause')).to.equal('paused');
        });

        it('raw "stop"/2/null → idle', function () {
            const params = makeParameters([{ id: STATE_ID, name: 'STATE' }]);
            const entity = MediaPlayerConverter.convertEntities(params)[0];
            const hp = entity.context.STATE.historyParser!;
            expect(hp('', 'stop')).to.equal('idle');
            expect(hp('', 2)).to.equal('idle');
            expect(hp('', null)).to.equal('idle');
        });
    });
});
