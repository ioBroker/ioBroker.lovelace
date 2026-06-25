import { expect } from 'chai';
import { Types } from '@iobroker/type-detector';
import Converter, { type ConverterParameters } from './converter';
import type { BaseEntity } from '../entities/baseEntity';
import { buildManualViaConverter, syntheticControlStates, SYNTHETIC_CONTROL_TYPES } from './syntheticControl';

describe('converters/syntheticControl', function () {
    it('syntheticControlStates returns null for non-bridged types and a map for cover', function () {
        expect(syntheticControlStates('input_number', {})).to.equal(null);
        expect(syntheticControlStates('cover', { state_SET: 'js.0.level' })).to.deep.equal({ SET: 'js.0.level' });
    });

    it('climate resolves to thermostat (heat) or air condition (cool) from hvac_default', function () {
        const resolver = SYNTHETIC_CONTROL_TYPES.climate;
        expect(typeof resolver).to.equal('function');
        const fn = resolver as (custom: Record<string, unknown>) => Types;
        expect(fn({})).to.equal(Types.thermostat);
        expect(fn({ hvac_default: 'heat' })).to.equal(Types.thermostat);
        expect(fn({ hvac_default: 'cool' })).to.equal(Types.airCondition);
    });

    it('builds a synthetic PatternControl from the picker states and runs the registered converter', function () {
        let received: ConverterParameters | undefined;
        const orig = Converter.converters[Types.blind];
        // Register a stub converter so the bridge can be tested without the full cover machinery.
        Converter.converters[Types.blind] = class extends Converter {
            static convertEntities(params: ConverterParameters): BaseEntity[] {
                received = params;
                return [{ entity_id: 'cover.x', attributes: {}, context: { type: 'cover' } } as unknown as BaseEntity];
            }
        };
        try {
            const entities = buildManualViaConverter({
                entityType: 'cover',
                id: 'js.0.blind',
                custom: {
                    entity: 'cover',
                    name: 'blind',
                    state_SET: 'js.0.level',
                    state_ACTUAL: 'js.0.actual',
                    attr_device_class: 'window',
                    attr_assumed_state: true,
                },
                objects: {},
                adapter: {} as unknown as ioBroker.Adapter,
                entityRegistry: { getReservedEntityId: () => undefined, reserveEntityId: () => {} },
                forcedEntityId: 'cover.blind',
            });

            // The synthetic control carries the picked states under their type-detector role names.
            expect(received!.controls.type).to.equal(Types.blind);
            expect(received!.controls.states).to.deep.include({ id: 'js.0.level', name: 'SET' });
            expect(received!.controls.states).to.deep.include({ id: 'js.0.actual', name: 'ACTUAL' });
            expect(received!.forcedEntityId).to.equal('cover.blind');

            // attr_* and assumed_state are applied to the converted entity, and it is marked manual.
            expect(entities[0].attributes.device_class).to.equal('window');
            expect(entities[0].attributes.assumed_state).to.equal(true);
            expect(entities[0].isManual).to.equal(true);
        } finally {
            Converter.converters[Types.blind] = orig;
        }
    });

    it('does not apply empty attr_* values (so a cleared select stays unset)', function () {
        const orig = Converter.converters[Types.blind];
        Converter.converters[Types.blind] = class extends Converter {
            static convertEntities(): BaseEntity[] {
                return [{ entity_id: 'cover.x', attributes: {}, context: { type: 'cover' } } as unknown as BaseEntity];
            }
        };
        try {
            const entities = buildManualViaConverter({
                entityType: 'cover',
                id: 'js.0.blind',
                custom: { entity: 'cover', name: 'blind', attr_device_class: '', state_SET: 'js.0.level' },
                objects: {},
                adapter: {} as unknown as ioBroker.Adapter,
                entityRegistry: { getReservedEntityId: () => undefined, reserveEntityId: () => {} },
            });
            expect(entities[0].attributes).to.not.have.property('device_class');
        } finally {
            Converter.converters[Types.blind] = orig;
        }
    });
});
