import { expect } from 'chai';
import { TodoEntity } from './todoEntity';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const entityData = require('../../../lib/dataSingleton');
entityData.log = { warn: () => {}, error: () => {} };
entityData.adapter = entityData.adapter || {};
entityData.adapter.namespace = 'lovelace.0';

describe('entities/todo', function () {
    describe('historyParser', function () {
        it('returns item count for valid JSON array', function () {
            const entity = new TodoEntity('Shopping', null, 'todo.shopping');
            const hp = entity.context.STATE.historyParser!;
            expect(hp('', JSON.stringify([1, 2, 3]))).to.equal('3');
        });

        it('returns "0" for empty array', function () {
            const entity = new TodoEntity('Shopping', null, 'todo.shopping');
            const hp = entity.context.STATE.historyParser!;
            expect(hp('', '[]')).to.equal('0');
        });

        it('returns "unknown" for invalid JSON', function () {
            const entity = new TodoEntity('Shopping', null, 'todo.shopping');
            const hp = entity.context.STATE.historyParser!;
            expect(hp('', 'not-json')).to.equal('unknown');
        });

        it('returns count for array of objects', function () {
            const entity = new TodoEntity('Shopping', null, 'todo.shopping');
            const hp = entity.context.STATE.historyParser!;
            expect(hp('', JSON.stringify([{ text: 'milk' }, { text: 'eggs' }]))).to.equal('2');
        });
    });
});
