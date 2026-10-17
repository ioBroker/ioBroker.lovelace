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

    it('formats a date with strftime, like now() in Home Assistant', function () {
        //a fixed point in time, read in UTC so the result does not depend on the test machine
        const ts = 1792260309; // 2026-10-17T18:05:09Z, a Saturday
        expect(renderJinja(`{{ ${ts} | timestamp_custom("%Y-%m-%d %H:%M:%S", false) }}`)).to.equal(
            '2026-10-17 18:05:09',
        );
        expect(renderJinja(`{{ ${ts} | timestamp_custom("%A, %d. %B %Y", false) }}`)).to.equal(
            'Saturday, 17. October 2026',
        );
        expect(renderJinja(`{{ ${ts} | timestamp_custom("%d.%m.%y %I:%M %p", false) }}`)).to.equal('17.10.26 06:05 PM');
        //glibc "%-d" asks for the number without padding, and %% is a literal percent
        expect(renderJinja(`{{ ${ts} | timestamp_custom("%-d.%-m. 100%%", false) }}`)).to.equal('17.10. 100%');
        expect(renderJinja(`{{ ${ts} | timestamp_utc }}`)).to.equal('2026-10-17T18:05:09+00:00');
        expect(renderJinja(`{{ ${ts} | as_datetime | as_timestamp }}`)).to.equal(String(ts));
    });

    it('gives now() and utcnow() the fields of a Python datetime', function () {
        const now = new Date();
        expect(renderJinja('{{ now().strftime("%Y") }}')).to.equal(String(now.getFullYear()));
        expect(renderJinja('{{ now().year }}-{{ now().month }}')).to.equal(
            `${now.getFullYear()}-${now.getMonth() + 1}`,
        );
        //the hour is padded by strftime but not as an attribute - as in Home Assistant
        expect(renderJinja('{{ now().strftime("%H") }}')).to.equal(String(now.getHours()).padStart(2, '0'));
        expect(renderJinja('{{ utcnow().strftime("%Y-%m-%dT%H:%M") }}')).to.equal(now.toISOString().slice(0, 16));
        //a bare now() prints the way str(datetime) does, not as a JS date string
        expect(renderJinja('{{ now() }}')).to.match(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}[+-]\d{2}:\d{2}$/);
        expect(renderJinja('{{ (now().timestamp() - now().timestamp()) | int }}')).to.equal('0');
        //today_at is the usual way to compare a time of day
        expect(renderJinja('{{ today_at("07:30").strftime("%H:%M:%S") }}')).to.equal('07:30:00');
    });

    it('turns a state into a date and formats it', function () {
        entityData.entityId2Entity['sensor.last_seen'] = {
            entity_id: 'sensor.last_seen',
            state: '2026-10-17T18:05:09+00:00',
            attributes: {},
        };
        expect(renderJinja('{{ states("sensor.last_seen") | as_datetime | as_timestamp }}')).to.equal('1792260309');
        expect(renderJinja('{{ as_datetime(states("sensor.last_seen")).strftime("%Y") }}')).to.equal('2026');
        //an unparsable value gives the default instead of aborting the template
        expect(renderJinja('{{ as_datetime(states("light.kitchen"), "nie") }}')).to.equal('nie');
    });

    it('extracts referenced entity_ids (known ones only)', function () {
        const ids = extractEntityIds('{{ states("sensor.temp") }} {{ is_state("sun.sun","x") }} {{ states("a.b") }}');
        expect(ids).to.have.members(['sensor.temp', 'sun.sun']);
        expect(ids).to.not.include('a.b');
    });
});
