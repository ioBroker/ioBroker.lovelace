import { expect } from 'chai';
import { Converter } from './converter';
import type { ConverterParameters } from './converter';
import type { BaseEntity } from '../entities/baseEntity';

function makeEntity(entityId: string, stateId: string, deviceId: string): BaseEntity {
    return {
        entity_id: entityId,
        attributes: {},
        context: { id: deviceId, STATE: { getId: stateId } },
    } as unknown as BaseEntity;
}

function makeRegistry(): {
    getReservedEntityId(key: string): string | undefined;
    reserveEntityId(key: string, id: string): void;
} {
    const store = new Map<string, string>();
    return {
        getReservedEntityId: (key: string) => store.get(key),
        reserveEntityId: (key: string, id: string) => {
            store.set(key, id);
        },
    };
}

function makeParams(
    entityRegistry: ReturnType<typeof makeRegistry>,
    existingEntities: BaseEntity[],
): ConverterParameters {
    return {
        id: 'test.0',
        controls: { type: 'x', states: [] } as unknown as ConverterParameters['controls'],
        objects: {},
        existingEntities,
        adapter: { log: { debug: () => {}, warn: () => {} } } as unknown as ioBroker.Adapter,
        entityRegistry,
    };
}

describe('converters/converter duplicate entity_id resolution', function () {
    it('resolves a fresh collision by appending the state-id segment once', function () {
        const registry = makeRegistry();
        const existingEntities: BaseEntity[] = [];

        const devA = makeEntity('binary_sensor.Foo', 'binary_sensor.devA.stateA', 'device.A');
        Converter._processEntities([devA], makeParams(registry, existingEntities));
        expect(devA.entity_id).to.equal('binary_sensor.Foo');

        const devB = makeEntity('binary_sensor.Foo', 'binary_sensor.devB.stateB', 'device.B');
        Converter._processEntities([devB], makeParams(registry, existingEntities));
        expect(devB.entity_id).to.equal('binary_sensor.Foo_stateb');
    });

    it('does not chain-grow entity_ids across restarts when a stale reservation collides again', function () {
        // Regression test for: many devices sharing a generated display name ended up with entity_ids
        // that kept growing across adapter restarts by concatenating more and more device/state name
        // segments (e.g. "binary_sensor.Foo_state_marwin_rakete_josephine_..."), because collision
        // resolution used the already-reserved (possibly already suffixed) entity_id as its base
        // instead of the freshly generated ("raw") one.
        const registry = makeRegistry();
        // Simulate a previous run: device B already collided once (against some now-irrelevant other
        // device) and got reserved with an unrelated leftover suffix "_bar".
        registry.reserveEntityId('binary_sensor.binary_sensor.devB.stateB', 'binary_sensor.Foo_bar');

        const existingEntities: BaseEntity[] = [];

        // This run: a brand-new device C has no reservation yet, and its own freshly generated raw id
        // happens to equal device B's old (suffixed) reserved id.
        const devC = makeEntity('binary_sensor.Foo_bar', 'binary_sensor.devC.stateC', 'device.C');
        Converter._processEntities([devC], makeParams(registry, existingEntities));
        expect(devC.entity_id).to.equal('binary_sensor.Foo_bar');

        // Device B is processed next, restoring its stale reservation - which now collides with devC.
        // Its freshly generated (raw) id for this run is still the plain "Foo".
        const devB = makeEntity('binary_sensor.Foo', 'binary_sensor.devB.stateB', 'device.B');
        Converter._processEntities([devB], makeParams(registry, existingEntities));

        // Must resolve from the raw "Foo" + its own state segment, not from the stale "Foo_bar" -
        // no leftover/foreign segment carried forward.
        expect(devB.entity_id).to.equal('binary_sensor.Foo_stateb');
    });

    it('gives each device its own stable registry key when it has no readable state of its own', function () {
        // Regression test for the actual reported bug: several buttonSensor devices (no ACTUAL/
        // ON_ACTUAL state -> BinarySensorEntity leaves STATE.getId as '', not null/undefined) all
        // sharing the same generated display name ("Türklingel") ended up with entity_ids growing by
        // one more concatenated device name per device - all within a single run, no restart needed,
        // starting from a completely empty registry. Root cause: _registryKey used `??`, which does
        // not treat an empty string as "missing", so every such device collapsed onto the identical
        // key "binary_sensor." and kept overwriting each other's reservation.
        const registry = makeRegistry();
        const existingEntities: BaseEntity[] = [];

        function makeButtonEntity(deviceId: string): BaseEntity {
            return {
                entity_id: 'binary_sensor.Foo',
                attributes: {},
                context: { id: deviceId, STATE: { getId: '' } },
            } as unknown as BaseEntity;
        }

        const resultIds: string[] = [];
        for (const deviceId of ['device.A', 'device.B', 'device.C', 'device.D']) {
            const entity = makeButtonEntity(deviceId);
            Converter._processEntities([entity], makeParams(registry, existingEntities));
            resultIds.push(entity.entity_id);
        }

        // Each device gets its own short suffix derived from its own device id - not a chain
        // incorporating every previously processed device's name.
        expect(resultIds).to.deep.equal([
            'binary_sensor.Foo',
            'binary_sensor.Foo_b',
            'binary_sensor.Foo_c',
            'binary_sensor.Foo_d',
        ]);
    });
});
