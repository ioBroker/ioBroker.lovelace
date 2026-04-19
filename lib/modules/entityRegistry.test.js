/* global describe it */
const expect = require('chai').expect;
const EntityRegistry = require('./entityRegistry');

function makeAdapter() {
    return {
        log: { debug: () => {}, warn: () => {} },
        getObjectAsync: async () => ({ native: { entities: {}, entityCategories: {} } }),
        setObject: async () => {},
    };
}

function makeEntityData(entities = [], entityId2Entity = {}) {
    return { entities, entityId2Entity };
}

function makeEntity(overrides = {}) {
    return {
        entity_id: 'binary_sensor.test',
        platform: 'binary_sensor',
        attributes: {
            friendly_name: 'Test Device',
            icon: 'mdi:test',
            device_class: 'motion',
        },
        context: {
            id: 'adapter.0.device',
            deviceId: 'adapter.0.parent',
            roomId: 'enum.rooms.living_room',
            aliases: ['alias1'],
            capabilities: null,
        },
        ...overrides,
    };
}

function makeRegistry(overrides = {}) {
    const entityData = makeEntityData();
    const responses = [];
    const updates = [];
    return new EntityRegistry({
        adapter: makeAdapter(),
        entityData,
        sendResponse: (ws, id, data) => responses.push({ ws, id, data }),
        sendUpdate: event => updates.push(event),
        _responses: responses,
        _updates: updates,
        ...overrides,
    });
}

describe('modules/entityRegistry', function () {
    describe('getEntityId / storeEntityId', function () {
        it('returns undefined for unknown ioBroker id', function () {
            const registry = makeRegistry();
            expect(registry.getEntityId('adapter.0.unknown')).to.be.undefined;
        });

        it('round-trips stored entity id', function () {
            const registry = makeRegistry();
            registry.storeEntityId('adapter.0.device', 'light.living_room');
            expect(registry.getEntityId('adapter.0.device')).to.equal('light.living_room');
        });

        it('overwrites previously stored entity id', function () {
            const registry = makeRegistry();
            registry.storeEntityId('adapter.0.device', 'light.old');
            registry.storeEntityId('adapter.0.device', 'light.new');
            expect(registry.getEntityId('adapter.0.device')).to.equal('light.new');
        });

        it('stores multiple ids independently', function () {
            const registry = makeRegistry();
            registry.storeEntityId('adapter.0.device1', 'light.one');
            registry.storeEntityId('adapter.0.device2', 'switch.two');
            expect(registry.getEntityId('adapter.0.device1')).to.equal('light.one');
            expect(registry.getEntityId('adapter.0.device2')).to.equal('switch.two');
        });
    });

    describe('convertEntryForDisplay', function () {
        it('maps all expected fields from entity_id-keyed entry', function () {
            const registry = makeRegistry();
            const entry = {
                entity_id: 'light.living_room',
                name: 'Living Room',
                original_name: 'Original Name',
                area_id: 'area_1',
                icon: 'mdi:lamp',
                original_icon: 'mdi:lamp-original',
                device_id: 'device_42',
                labels: ['tag1'],
                hidden: false,
                entity_category: 'config',
                translation_key: null,
                platform: 'light',
                display_precision: 2,
            };
            const result = registry.convertEntryForDisplay(entry);
            expect(result.ei).to.equal('light.living_room');
            expect(result.en).to.equal('Living Room'); // name takes precedence
            expect(result.ai).to.equal('area_1');
            expect(result.ic).to.equal('mdi:lamp'); // icon takes precedence
            expect(result.di).to.equal('device_42');
            expect(result.lb).to.deep.equal(['tag1']);
            expect(result.hb).to.equal(false);
            expect(result.ec).to.equal('config');
            expect(result.tk).to.be.null;
            expect(result.pl).to.equal('light');
            expect(result.dp).to.equal(2);
        });

        it('falls back to original_name when name is null', function () {
            const registry = makeRegistry();
            const entry = { name: null, original_name: 'Original', entity_id: 'x.y' };
            expect(registry.convertEntryForDisplay(entry).en).to.equal('Original');
        });

        it('falls back to original_icon when icon is null', function () {
            const registry = makeRegistry();
            const entry = { icon: null, original_icon: 'mdi:fallback', entity_id: 'x.y' };
            expect(registry.convertEntryForDisplay(entry).ic).to.equal('mdi:fallback');
        });
    });

    describe('_createEntryFromEntity', function () {
        it('creates a basic entry with correct fields', function () {
            const registry = makeRegistry();
            const entity = makeEntity();
            const entry = registry._createEntryFromEntity(entity);

            expect(entry.entity_id).to.equal('binary_sensor.test');
            expect(entry.platform).to.equal('binary_sensor');
            expect(entry.original_name).to.equal('Test Device');
            expect(entry.original_icon).to.equal('mdi:test');
            expect(entry.device_class).to.equal('motion');
            expect(entry.original_device_class).to.equal('motion');
            expect(entry.device_id).to.equal('adapter.0.parent');
            expect(entry.area_id).to.equal('enum.rooms.living_room');
            expect(entry.aliases).to.deep.equal(['alias1']);
        });

        it('creates sensor options for sensor platform', function () {
            const registry = makeRegistry();
            const entity = makeEntity({
                entity_id: 'sensor.temp',
                platform: 'sensor',
                attributes: {
                    friendly_name: 'Temperature',
                    display_precision: 1,
                    suggested_display_precision: 2,
                    unit_of_measurement: '°C',
                },
            });
            const entry = registry._createEntryFromEntity(entity);
            expect(entry.options).to.have.property('sensor');
            expect(entry.options.sensor.display_precision).to.equal(1);
            expect(entry.options.sensor.suggested_display_precision).to.equal(2);
            expect(entry.options.sensor.unit_of_measurement).to.equal('°C');
        });

        it('creates light options for light platform', function () {
            const registry = makeRegistry();
            const entity = makeEntity({
                entity_id: 'light.rgb',
                platform: 'light',
                attributes: { friendly_name: 'RGB Light', favorite_colors: ['#ff0000'] },
            });
            const entry = registry._createEntryFromEntity(entity);
            expect(entry.options.light.favorite_colors).to.deep.equal(['#ff0000']);
        });

        it('creates lock options for lock platform', function () {
            const registry = makeRegistry();
            const entity = makeEntity({
                platform: 'lock',
                attributes: { friendly_name: 'Door Lock', default_code: '1234' },
            });
            const entry = registry._createEntryFromEntity(entity);
            expect(entry.options.lock.default_code).to.equal('1234');
        });

        it('has null options for platforms without special handling', function () {
            const registry = makeRegistry();
            const entry = registry._createEntryFromEntity(makeEntity());
            expect(entry.options).to.be.null;
        });
    });

    describe('updateEntityFromRegistry', function () {
        it('does nothing when entity is marked as manual', function () {
            const registry = makeRegistry();
            registry.storeEntityId('adapter.0.device', 'binary_sensor.updated');
            const entity = makeEntity({ isManual: true });
            const originalId = entity.entity_id;
            registry.updateEntityFromRegistry(entity);
            expect(entity.entity_id).to.equal(originalId);
        });

        it('does nothing when no entry exists for entity', function () {
            const registry = makeRegistry();
            const entity = makeEntity();
            const originalId = entity.entity_id;
            registry.updateEntityFromRegistry(entity);
            expect(entity.entity_id).to.equal(originalId);
        });

        it('updates entity_id, name, and icon from stored entry', function () {
            const registry = makeRegistry();
            // Manually populate _entries like loadEntityRegistry would
            registry._entries['adapter.0.device'] = {
                entity_id: 'binary_sensor.updated',
                name: 'Updated Name',
                original_name: 'Original Name',
                icon: 'mdi:updated',
                original_icon: 'mdi:original',
                platform: 'binary_sensor',
                device_class: 'door',
                original_device_class: 'motion',
            };
            const entityData = { entityId2Entity: {} };
            registry.entityData = entityData;

            const entity = makeEntity();
            registry.updateEntityFromRegistry(entity);

            expect(entity.entity_id).to.equal('binary_sensor.updated');
            expect(entity.attributes.friendly_name).to.equal('Updated Name');
            expect(entity.attributes.icon).to.equal('mdi:updated');
            expect(entity.attributes.device_class).to.equal('door');
        });

        it('falls back to original_name when name is null', function () {
            const registry = makeRegistry();
            registry._entries['adapter.0.device'] = {
                entity_id: 'binary_sensor.test',
                name: null,
                original_name: 'Original',
                icon: null,
                original_icon: null,
                platform: 'binary_sensor',
                device_class: null,
                original_device_class: null,
            };
            registry.entityData = { entityId2Entity: {} };
            const entity = makeEntity();
            registry.updateEntityFromRegistry(entity);
            expect(entity.attributes.friendly_name).to.equal('Original');
        });
    });
});
