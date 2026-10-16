import { expect } from 'chai';
import { isJinjaTemplate, renderJinja, extractEntityIds } from './jinja';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const entityData = require('../../../lib/dataSingleton');

function setEntities(): void {
    entityData.entityId2Entity = {
        'sensor.temp': {
            entity_id: 'sensor.temp',
            state: 21.5,
            attributes: { unit_of_measurement: '°C' },
            context: { room: 'Kitchen', roomId: 'enum.rooms.kitchen', deviceId: 'zigbee.0.sensor' },
        },
        'sun.sun': { entity_id: 'sun.sun', state: 'above_horizon', attributes: { elevation: 12 } },
        'light.kitchen': {
            entity_id: 'light.kitchen',
            state: 'on',
            attributes: {},
            context: { room: 'Kitchen', roomId: 'enum.rooms.kitchen', deviceId: 'hue.0.kitchen' },
        },
    };
    entityData.entities = Object.values(entityData.entityId2Entity);
}

describe('modules/jinja', function () {
    beforeEach(setEntities);

    it('detects Jinja markers', function () {
        expect(isJinjaTemplate('{{ states("sensor.temp") }}')).to.equal(true);
        expect(isJinjaTemplate('{% if true %}x{% endif %}')).to.equal(true);
        expect(isJinjaTemplate('plain text')).to.equal(false);
        expect(isJinjaTemplate('{lovelace.0.some.id}')).to.equal(false);
    });

    it('renders states()', function () {
        expect(renderJinja('{{ states("sensor.temp") }}')).to.equal('21.5');
        expect(renderJinja('Temp: {{ states("sensor.temp") }} C')).to.equal('Temp: 21.5 C');
    });

    it('renders states.domain.object and attributes', function () {
        expect(renderJinja('{{ states.sun.sun.state }}')).to.equal('above_horizon');
        expect(renderJinja('{{ state_attr("sensor.temp", "unit_of_measurement") }}')).to.equal('°C');
    });

    it('supports is_state and control flow', function () {
        expect(renderJinja('{% if is_state("sun.sun", "above_horizon") %}day{% else %}night{% endif %}')).to.equal(
            'day',
        );
        expect(renderJinja('{% if is_state("light.kitchen", "off") %}off{% else %}on{% endif %}')).to.equal('on');
    });

    it('unknown entity yields "unknown", not a crash', function () {
        expect(renderJinja('{{ states("sensor.does_not_exist") }}')).to.equal('unknown');
    });

    it('returns an error string instead of throwing on a broken template', function () {
        const out = renderJinja('{{ states( }}');
        expect(out).to.be.a('string');
        expect(out.toLowerCase()).to.contain('error');
    });

    it('renders the variables the caller sent along', function () {
        //this is how template-entity-row and friends pass the row they are about
        const vars = { config: { entity: 'light.kitchen' }, user: 'achim' };
        expect(renderJinja('{{ user }}: {{ config.entity }}', vars)).to.equal('achim: light.kitchen');
        expect(renderJinja('{{ states(config.entity) }}', vars)).to.equal('on');
        expect(renderJinja('{{ config.entity }}')).to.equal('');
    });

    it('answers the area functions from the room the entity is in', function () {
        expect(renderJinja('{{ area_name("light.kitchen") }}')).to.equal('Kitchen');
        expect(renderJinja('{{ area_id("light.kitchen") }}')).to.equal('enum.rooms.kitchen');
        //a device id and an area name are lookups as well, just like in Home Assistant
        expect(renderJinja('{{ area_name("hue.0.kitchen") }}')).to.equal('Kitchen');
        expect(renderJinja('{{ area_entities("Kitchen") | count }}')).to.equal('2');
        expect(renderJinja('{{ areas() | join(",") }}')).to.equal('enum.rooms.kitchen');
        //an entity without a room has no area, and that must not throw
        expect(renderJinja('{{ area_name("sun.sun") }}')).to.equal('');
    });

    it('answers the device functions', function () {
        expect(renderJinja('{{ device_id("light.kitchen") }}')).to.equal('hue.0.kitchen');
        expect(renderJinja('{{ device_entities("hue.0.kitchen") | join(",") }}')).to.equal('light.kitchen');
    });

    it('supports iif, float and int', function () {
        expect(renderJinja('{{ iif(is_state("light.kitchen", "on"), "AN", "AUS") }}')).to.equal('AN');
        expect(renderJinja('{{ float(states("sensor.temp")) + 1 }}')).to.equal('22.5');
        expect(renderJinja('{{ int(states("sensor.temp")) }}')).to.equal('21');
        //not a number -> the given default, instead of aborting the template
        expect(renderJinja('{{ float(states("light.kitchen"), 0) }}')).to.equal('0');
        expect(renderJinja('{{ int("7x", 5) }}')).to.equal('5');
    });

    it('expands a list of entity ids to their states', function () {
        expect(renderJinja('{% for e in expand(area_entities("Kitchen")) %}{{ e.state }};{% endfor %}')).to.equal(
            '21.5;on;',
        );
    });

    it('extracts referenced entity_ids (known ones only)', function () {
        const ids = extractEntityIds('{{ states("sensor.temp") }} {{ is_state("sun.sun","x") }} {{ states("a.b") }}');
        expect(ids).to.have.members(['sensor.temp', 'sun.sun']);
        expect(ids).to.not.include('a.b');
    });
});
