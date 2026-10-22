import { expect } from 'chai';
import { evaluateCondition, collectEntityIds, UnsupportedConditionError } from './conditionEvaluator';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const ConditionModule = require('./condition');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const entityData = require('../../../lib/dataSingleton');

function setEntities(entities: Record<string, any>): void {
    entityData.entityId2Entity = entities;
    entityData.entities = Object.values(entities);
    entityData.iobID2entity = {};
    for (const entity of Object.values(entities)) {
        const iobId = entity.context?.STATE?.getId;
        if (iobId) {
            entityData.iobID2entity[iobId] = [entity];
        }
    }
}

function makeEntity(entityId: string, state: unknown, attributes: Record<string, unknown> = {}): any {
    return {
        entity_id: entityId,
        state,
        attributes,
        last_changed: Date.now() / 1000,
        context: { STATE: { getId: `iob.0.${entityId.replace('.', '_')}` }, ATTRIBUTES: [] },
    };
}

function makeModule(): { mod: any } {
    return {
        mod: new ConditionModule({
            adapter: { log: { debug: () => {}, warn: () => {} } },
            sendResponse: (ws: any, id: unknown, result?: unknown) =>
                ws.send(JSON.stringify({ id, type: 'result', success: true, result: result ?? null })),
        }),
    };
}

function makeWs(): { ws: any; sent: any[] } {
    const sent: any[] = [];
    const ws = { send: (data: string) => sent.push(JSON.parse(data)), readyState: 1 };
    return { ws, sent };
}

describe('modules/condition evaluator', function () {
    beforeEach(function () {
        setEntities({
            'input_boolean.pv': makeEntity('input_boolean.pv', 'on'),
            'sensor.power': makeEntity('sensor.power', '1200', { unit_of_measurement: 'W', mode: 'boost' }),
            'sensor.limit': makeEntity('sensor.limit', '1000'),
        });
    });

    it('evaluates the state condition the conditional card sends', function () {
        //this is what the frontend makes of "condition: state / entity / state" in a conditional card
        const condition = { condition: 'state', entity_id: 'input_boolean.pv', state: 'on' };
        expect(evaluateCondition(condition)).to.equal(true);
        expect(evaluateCondition({ ...condition, state: 'off' })).to.equal(false);
    });

    it('accepts a list of entities and a list of states', function () {
        const condition = {
            condition: 'state',
            entity_id: ['input_boolean.pv', 'sensor.power'],
            state: ['on', '1200'],
        };
        //match: all is the default, so both have to be one of the values
        expect(evaluateCondition(condition)).to.equal(true);
        expect(evaluateCondition({ ...condition, state: ['on'] })).to.equal(false);
        expect(evaluateCondition({ ...condition, state: ['on'], match: 'any' })).to.equal(true);
    });

    it('compares an attribute, and a number with the string of it', function () {
        expect(
            evaluateCondition({
                condition: 'state',
                entity_id: 'sensor.power',
                attribute: 'mode',
                state: 'boost',
            }),
        ).to.equal(true);
        setEntities({ 'sensor.temp': makeEntity('sensor.temp', 21.5) });
        expect(evaluateCondition({ condition: 'state', entity_id: 'sensor.temp', state: '21.5' })).to.equal(true);
    });

    it('is false for an entity we do not have', function () {
        expect(evaluateCondition({ condition: 'state', entity_id: 'light.nope', state: 'on' })).to.equal(false);
    });

    it('waits for `for` and asks to be called again', function () {
        const entity = makeEntity('input_boolean.pv', 'on');
        entity.last_changed = Date.now() / 1000 - 10;
        setEntities({ 'input_boolean.pv': entity });
        const delays: number[] = [];
        const condition = { condition: 'state', entity_id: 'input_boolean.pv', state: 'on', for: '00:01:00' };

        expect(evaluateCondition(condition, { schedule: d => delays.push(d) })).to.equal(false);
        expect(delays).to.have.lengthOf(1);
        expect(delays[0]).to.be.closeTo(50000, 1000);

        entity.last_changed = Date.now() / 1000 - 120;
        expect(evaluateCondition(condition)).to.equal(true);
    });

    it('evaluates numeric_state, also against another entity as the bound', function () {
        expect(evaluateCondition({ condition: 'numeric_state', entity_id: 'sensor.power', above: 1000 })).to.equal(
            true,
        );
        expect(evaluateCondition({ condition: 'numeric_state', entity_id: 'sensor.power', below: 1000 })).to.equal(
            false,
        );
        expect(
            evaluateCondition({ condition: 'numeric_state', entity_id: 'sensor.power', above: 'sensor.limit' }),
        ).to.equal(true);
        //a state that is no number can never be above anything
        expect(evaluateCondition({ condition: 'numeric_state', entity_id: 'input_boolean.pv', above: 0 })).to.equal(
            false,
        );
    });

    it('evaluates and, or and not the way Home Assistant does', function () {
        const on = { condition: 'state', entity_id: 'input_boolean.pv', state: 'on' };
        const off = { condition: 'state', entity_id: 'input_boolean.pv', state: 'off' };
        expect(evaluateCondition({ condition: 'and', conditions: [on, off] })).to.equal(false);
        expect(evaluateCondition({ condition: 'or', conditions: [on, off] })).to.equal(true);
        //core's not is true when none of its conditions is true
        expect(evaluateCondition({ condition: 'not', conditions: [off] })).to.equal(true);
        expect(evaluateCondition({ condition: 'not', conditions: [on, off] })).to.equal(false);
        //a disabled child is skipped, so the and is empty and true
        expect(evaluateCondition({ condition: 'and', conditions: [{ ...off, enabled: false }] })).to.equal(true);
    });

    it('evaluates a template condition', function () {
        expect(
            evaluateCondition({ condition: 'template', value_template: '{{ is_state("input_boolean.pv", "on") }}' }),
        ).to.equal(true);
        expect(
            evaluateCondition({ condition: 'template', value_template: '{{ states("sensor.power") | int > 2000 }}' }),
        ).to.equal(false);
    });

    it('refuses a condition type we cannot evaluate instead of guessing', function () {
        expect(() => evaluateCondition({ condition: 'zone', entity_id: 'person.me' })).to.throw(
            UnsupportedConditionError,
        );
        //the browser evaluates these itself, so one arriving here is a frontend change we missed
        expect(() => evaluateCondition({ condition: 'screen', media_query: '(max-width: 100px)' })).to.throw(/browser/);
    });

    it('collects the entities a condition reads, templates included', function () {
        const ids = collectEntityIds({
            condition: 'or',
            conditions: [
                { condition: 'state', entity_id: ['input_boolean.pv'], state: 'on' },
                { condition: 'numeric_state', entity_id: 'sensor.power', above: 'sensor.limit' },
                { condition: 'template', value_template: '{{ is_state("sensor.limit", "x") }}' },
            ],
        });
        expect(ids.sort()).to.deep.equal(['input_boolean.pv', 'sensor.limit', 'sensor.power']);
    });
});

describe('modules/condition subscriptions', function () {
    beforeEach(function () {
        setEntities({ 'input_boolean.pv': makeEntity('input_boolean.pv', 'on') });
    });

    it('answers subscribe_condition with the result and pushes every change', function () {
        const { mod } = makeModule();
        const { ws, sent } = makeWs();
        const handled = mod.processMessage(ws, {
            type: 'subscribe_condition',
            id: 78,
            condition: { condition: 'state', entity_id: 'input_boolean.pv', state: 'on' },
        });

        expect(handled).to.equal(true);
        expect(sent[0]).to.deep.include({ id: 78, type: 'result', success: true });
        expect(sent[1]).to.deep.equal({ id: 78, type: 'event', event: { result: true } });

        //the entity turns off -> the card has to be told
        const entity = entityData.entityId2Entity['input_boolean.pv'];
        entity.state = 'off';
        mod.onStateChange(entity.context.STATE.getId, { val: false }, { clients: [ws] });
        expect(sent[2]).to.deep.equal({ id: 78, type: 'event', event: { result: false } });

        //an unrelated state changes nothing
        mod.onStateChange('iob.0.other', { val: 1 }, { clients: [ws] });
        expect(sent).to.have.lengthOf(3);
    });

    it('sends nothing more after unsubscribe_events removed the subscription', function () {
        const { mod } = makeModule();
        const { ws, sent } = makeWs();
        mod.processMessage(ws, {
            type: 'subscribe_condition',
            id: 5,
            condition: { condition: 'state', entity_id: 'input_boolean.pv', state: 'on' },
        });
        mod.removeSubscription(ws, 5);

        const entity = entityData.entityId2Entity['input_boolean.pv'];
        entity.state = 'off';
        mod.onStateChange(entity.context.STATE.getId, { val: false }, { clients: [ws] });
        expect(sent).to.have.lengthOf(2);
    });

    it('fails the subscription for an unsupported condition, with a message', function () {
        const { mod } = makeModule();
        const { ws, sent } = makeWs();
        mod.processMessage(ws, {
            type: 'subscribe_condition',
            id: 9,
            condition: { condition: 'sun', after: 'sunset' },
        });

        expect(sent).to.have.lengthOf(1);
        expect(sent[0]).to.deep.include({ id: 9, type: 'result', success: false });
        expect(sent[0].error.code).to.equal('not_supported');
        expect(ws.__conditions || []).to.have.lengthOf(0);
    });

    it('answers test_condition once', function () {
        const { mod } = makeModule();
        const { ws, sent } = makeWs();
        const handled = mod.processMessage(ws, {
            type: 'test_condition',
            id: 3,
            condition: { condition: 'state', entity_id: 'input_boolean.pv', state: 'on' },
        });

        expect(handled).to.equal(true);
        expect(sent[0].result).to.deep.equal({ result: true });
    });

    it('leaves messages of other modules alone', function () {
        const { mod } = makeModule();
        const { ws, sent } = makeWs();
        expect(mod.processMessage(ws, { type: 'render_template', id: 1, template: 'x' })).to.equal(false);
        expect(sent).to.have.lengthOf(0);
    });
});
