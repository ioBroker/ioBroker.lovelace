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
        adapter: { log: { debug: () => {} } } as unknown as ioBroker.Adapter,
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
});
