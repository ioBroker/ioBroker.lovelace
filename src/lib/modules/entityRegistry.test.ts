import { expect } from 'chai';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const EntityRegistry = require('../modules/entityRegistry');

function makeAdapter(): ioBroker.Adapter {
    return {
        log: { debug: () => {}, warn: () => {} },
        getObjectAsync: () => Promise.resolve({ native: { entries: {}, iobIdToEntityId: {}, entityCategories: {} } }),
        setObject: async () => {},
    } as unknown as ioBroker.Adapter;
}

function makeEntityData(entities: unknown[] = [], entityId2Entity: Record<string, unknown> = {}): unknown {
    return { entities, entityId2Entity };
}

function makeEntity(overrides: Record<string, unknown> = {}): Record<string, unknown> {
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

function makeRegistry(overrides: Record<string, unknown> = {}): InstanceType<typeof EntityRegistry> {
    const entityData = makeEntityData();
    const responses: unknown[] = [];
    const updates: unknown[] = [];
    return new EntityRegistry({
        adapter: makeAdapter(),
        entityData,
        sendResponse: (ws: unknown, id: unknown, data: unknown) => responses.push({ ws, id, data }),
        sendUpdate: (event: unknown) => updates.push(event),
        _responses: responses,
        _updates: updates,
        ...overrides,
    });
}

describe('modules/entityRegistry', function () {
    describe('reserveEntityId / getReservedEntityId', function () {
        it('returns undefined for unknown composite key', function () {
            const registry = makeRegistry();
            expect(registry.getReservedEntityId('light.adapter.0.unknown')).to.be.undefined;
        });

        it('round-trips reserved entity id', function () {
            const registry = makeRegistry();
            registry.reserveEntityId('light.adapter.0.device', 'light.living_room');
            expect(registry.getReservedEntityId('light.adapter.0.device')).to.equal('light.living_room');
        });

        it('overwrites previously reserved entity id', function () {
            const registry = makeRegistry();
            registry.reserveEntityId('light.adapter.0.device', 'light.old');
            registry.reserveEntityId('light.adapter.0.device', 'light.new');
            expect(registry.getReservedEntityId('light.adapter.0.device')).to.equal('light.new');
        });

        it('stores multiple composite keys independently', function () {
            const registry = makeRegistry();
            registry.reserveEntityId('light.adapter.0.device1', 'light.one');
            registry.reserveEntityId('switch.adapter.0.device2', 'switch.two');
            expect(registry.getReservedEntityId('light.adapter.0.device1')).to.equal('light.one');
            expect(registry.getReservedEntityId('switch.adapter.0.device2')).to.equal('switch.two');
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
            expect(result.en).to.equal('Living Room');
            expect(result.ai).to.equal('area_1');
            expect(result.ic).to.equal('mdi:lamp');
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
            const entry = (
                registry as Record<string, unknown> & {
                    _createEntryFromEntity: (e: unknown) => Record<string, unknown>;
                }
            )._createEntryFromEntity(entity);

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
            const entry = (
                registry as Record<string, unknown> & {
                    _createEntryFromEntity: (e: unknown) => Record<string, unknown>;
                }
            )._createEntryFromEntity(entity);
            expect(entry.options).to.have.property('sensor');
            expect((entry.options as Record<string, Record<string, unknown>>).sensor.display_precision).to.equal(1);
            expect(
                (entry.options as Record<string, Record<string, unknown>>).sensor.suggested_display_precision,
            ).to.equal(2);
            expect((entry.options as Record<string, Record<string, unknown>>).sensor.unit_of_measurement).to.equal(
                '°C',
            );
        });

        it('creates light options for light platform', function () {
            const registry = makeRegistry();
            const entity = makeEntity({
                entity_id: 'light.rgb',
                platform: 'light',
                attributes: { friendly_name: 'RGB Light', favorite_colors: ['#ff0000'] },
            });
            const entry = (
                registry as Record<string, unknown> & {
                    _createEntryFromEntity: (e: unknown) => Record<string, unknown>;
                }
            )._createEntryFromEntity(entity);
            expect((entry.options as Record<string, Record<string, unknown>>).light.favorite_colors).to.deep.equal([
                '#ff0000',
            ]);
        });

        it('creates lock options for lock platform', function () {
            const registry = makeRegistry();
            const entity = makeEntity({
                platform: 'lock',
                attributes: { friendly_name: 'Door Lock', default_code: '1234' },
            });
            const entry = (
                registry as Record<string, unknown> & {
                    _createEntryFromEntity: (e: unknown) => Record<string, unknown>;
                }
            )._createEntryFromEntity(entity);
            expect((entry.options as Record<string, Record<string, unknown>>).lock.default_code).to.equal('1234');
        });

        it('has null options for platforms without special handling', function () {
            const registry = makeRegistry();
            const entry = (
                registry as Record<string, unknown> & {
                    _createEntryFromEntity: (e: unknown) => Record<string, unknown>;
                }
            )._createEntryFromEntity(makeEntity());
            expect(entry.options).to.be.null;
        });
    });

    describe('updateEntityFromRegistry', function () {
        it('does nothing when entity is marked as manual', function () {
            const registry = makeRegistry();
            (registry as Record<string, unknown>)._entries = {
                'binary_sensor.test': { entity_id: 'binary_sensor.updated' },
            };
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
            (registry as Record<string, unknown>)._entries = {
                'binary_sensor.test': {
                    entity_id: 'binary_sensor.updated',
                    name: 'Updated Name',
                    original_name: 'Original Name',
                    icon: 'mdi:updated',
                    original_icon: 'mdi:original',
                    platform: 'binary_sensor',
                    device_class: 'door',
                    original_device_class: 'motion',
                },
            };
            const entityData = { entityId2Entity: {} };
            (registry as Record<string, unknown>).entityData = entityData;

            const entity = makeEntity();
            registry.updateEntityFromRegistry(entity);

            expect(entity.entity_id).to.equal('binary_sensor.updated');
            expect((entity.attributes as Record<string, unknown>).friendly_name).to.equal('Updated Name');
            expect((entity.attributes as Record<string, unknown>).icon).to.equal('mdi:updated');
            expect((entity.attributes as Record<string, unknown>).device_class).to.equal('door');
        });

        it('falls back to original_name when name is null', function () {
            const registry = makeRegistry();
            (registry as Record<string, unknown>)._entries = {
                'binary_sensor.test': {
                    entity_id: 'binary_sensor.test',
                    name: null,
                    original_name: 'Original',
                    icon: null,
                    original_icon: null,
                    platform: 'binary_sensor',
                    device_class: null,
                    original_device_class: null,
                },
            };
            (registry as Record<string, unknown>).entityData = { entityId2Entity: {} };
            const entity = makeEntity();
            registry.updateEntityFromRegistry(entity);
            expect((entity.attributes as Record<string, unknown>).friendly_name).to.equal('Original');
        });
    });

    describe('config/entity_registry/update options (favorite_colors)', function () {
        it('nests options under options_domain and returns them in entity_entry', function () {
            const responses: { data: unknown }[] = [];
            const entity = makeEntity({
                entity_id: 'light.rgb',
                platform: 'light',
                attributes: { friendly_name: 'RGB', favorite_colors: [] },
                context: { id: 'adapter.0.light.rgb' },
            });
            const entityData = { entities: [entity], entityId2Entity: { 'light.rgb': entity } };
            const registry = new EntityRegistry({
                adapter: makeAdapter(),
                entityData,
                sendResponse: (_ws: unknown, _id: unknown, data: unknown) => responses.push({ data }),
                sendUpdate: () => {},
            });

            const colors = [['rgb_color', [255, 0, 0]]];
            const handled = registry.processMessage(
                {},
                {
                    type: 'config/entity_registry/update',
                    entity_id: 'light.rgb',
                    options_domain: 'light',
                    options: { favorite_colors: colors },
                    id: 1,
                },
            );

            expect(handled).to.equal(true);
            const entry = (responses[0].data as { entity_entry: Record<string, any> }).entity_entry;
            // options must be nested under the domain, not flattened
            expect(entry.options).to.have.property('light');
            expect(entry.options.light.favorite_colors).to.deep.equal(colors);
            expect(entry.options).to.not.have.property('favorite_colors');
            // the helper key must not leak into the stored entry
            expect(entry).to.not.have.property('options_domain');
            // and the value propagates onto the entity attribute
            expect((entity.attributes as Record<string, unknown>).favorite_colors).to.deep.equal(colors);
        });

        it('clears stored options on reset (empty options replaces, not merges)', function () {
            const responses: { data: unknown }[] = [];
            const entity = makeEntity({
                entity_id: 'light.rgb',
                platform: 'light',
                attributes: { friendly_name: 'RGB', favorite_colors: [] },
                context: { id: 'adapter.0.light.rgb' },
            });
            const entityData = { entities: [entity], entityId2Entity: { 'light.rgb': entity } };
            const registry = new EntityRegistry({
                adapter: makeAdapter(),
                entityData,
                sendResponse: (_ws: unknown, _id: unknown, data: unknown) => responses.push({ data }),
                sendUpdate: () => {},
            });

            // set favorite colors
            registry.processMessage(
                {},
                {
                    type: 'config/entity_registry/update',
                    entity_id: 'light.rgb',
                    options_domain: 'light',
                    options: { favorite_colors: [['rgb_color', [1, 2, 3]]] },
                    id: 1,
                },
            );
            // reset: frontend's `favorite_colors: undefined` is dropped by JSON, arriving as options: {}
            registry.processMessage(
                {},
                {
                    type: 'config/entity_registry/update',
                    entity_id: 'light.rgb',
                    options_domain: 'light',
                    options: {},
                    id: 2,
                },
            );

            const entry = (responses[1].data as { entity_entry: Record<string, any> }).entity_entry;
            expect(entry.options.light).to.deep.equal({});
            expect(entry.options.light).to.not.have.property('favorite_colors');
        });
    });
});
