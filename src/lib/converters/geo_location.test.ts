import { expect } from 'chai';
import { processManualEntity } from './geo_location';
import { BaseEntity } from '../entities/baseEntity';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const entityData = require('../../../lib/dataSingleton');
entityData.adapter = entityData.adapter || {};
entityData.adapter.namespace = 'lovelace.0';

const DEVICE_ID = 'test.geo_device';

function makeObj(id: string): ioBroker.Object {
    return { _id: id, type: 'state', common: { name: id, role: '' }, native: {} } as unknown as ioBroker.Object;
}

function makeEntity(): BaseEntity {
    return new BaseEntity(null, null, null, makeObj(DEVICE_ID), 'geo_location', 'geo_location.test');
}

describe('converters/geo_location', function () {
    describe('processManualEntity', function () {
        it('sets source to "gps" when attr_source is not set', function () {
            const entity = makeEntity();
            const result = processManualEntity(DEVICE_ID, makeObj(DEVICE_ID), entity, {}, {});
            expect(result[0].attributes.source).to.equal('gps');
        });

        it('uses attr_source when provided', function () {
            const entity = makeEntity();
            const result = processManualEntity(
                DEVICE_ID,
                makeObj(DEVICE_ID),
                entity,
                {},
                { attr_source: 'home_network' },
            );
            expect(result[0].attributes.source).to.equal('home_network');
        });
    });
});
