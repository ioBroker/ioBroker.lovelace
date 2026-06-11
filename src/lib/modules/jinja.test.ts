import { expect } from 'chai';
import { isJinjaTemplate, renderJinja, extractEntityIds } from './jinja';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const entityData = require('../../../lib/dataSingleton');

function setEntities(): void {
    entityData.entityId2Entity = {
        'sensor.temp': { entity_id: 'sensor.temp', state: 21.5, attributes: { unit_of_measurement: '°C' } },
        'sun.sun': { entity_id: 'sun.sun', state: 'above_horizon', attributes: { elevation: 12 } },
        'light.kitchen': { entity_id: 'light.kitchen', state: 'on', attributes: {} },
    };
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

    it('extracts referenced entity_ids (known ones only)', function () {
        const ids = extractEntityIds('{{ states("sensor.temp") }} {{ is_state("sun.sun","x") }} {{ states("a.b") }}');
        expect(ids).to.have.members(['sensor.temp', 'sun.sun']);
        expect(ids).to.not.include('a.b');
    });
});
