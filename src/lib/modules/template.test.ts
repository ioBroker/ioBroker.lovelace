import { expect } from 'chai';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const TemplateModule = require('../modules/template');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const entityData = require('../../../lib/dataSingleton');

function makeModule(opts: { subscribeThrows?: boolean } = {}): { mod: any; subscribed: string[] } {
    const subscribed: string[] = [];
    const mod = new TemplateModule({
        adapter: {
            log: { warn: () => {}, debug: () => {} },
            getForeignStateAsync: () => Promise.resolve({ val: 1 }),
        },
        sendResponse: () => {},
        subscribeState: (id: string) => {
            if (opts.subscribeThrows) {
                throw new Error(`The pattern "${id}" is not a valid ID pattern`);
            }
            subscribed.push(id);
        },
    });
    return { mod, subscribed };
}

function makeWs(): { ws: any; sent: any[] } {
    const sent: any[] = [];
    const ws = { send: (data: string) => sent.push(JSON.parse(data)), readyState: 1, __templates: [] as any[] };
    return { ws, sent };
}

describe('modules/template render_template', function () {
    it('does not crash on a Jinja template and never subscribes a bogus id', async function () {
        const { mod, subscribed } = makeModule();
        const { ws } = makeWs();

        const handled = mod.processMessage(ws, {
            type: 'render_template',
            id: 1,
            template: '{% if is_state("sun.sun", "above_horizon") -%}day{%- endif %}',
        });
        // let the async getForeignState/render settle
        await new Promise(r => setTimeout(r, 5));

        expect(handled).to.equal(true);
        // No id containing template/quote characters may be subscribed.
        expect(subscribed.every(id => !/[\s"'`%(){}<>[\]]/.test(id))).to.equal(true);
    });

    it('swallows a throwing subscribe (no unhandled rejection)', async function () {
        const { mod } = makeModule({ subscribeThrows: true });
        const { ws } = makeWs();
        // A plain-looking id passes the filter and reaches subscribeState, which throws here.
        expect(() =>
            mod.processMessage(ws, { type: 'render_template', id: 2, template: '{some.valid.id}' }),
        ).to.not.throw();
        await new Promise(r => setTimeout(r, 5));
    });

    it('renders with the variables a card sent, and subscribes the entity they name', async function () {
        //template-entity-row names the entity in `variables.config`, not in the template itself
        const lamp = {
            entity_id: 'light.lamp',
            state: 'on',
            attributes: { friendly_name: 'Lamp' },
            context: { STATE: { getId: 'hue.0.lamp.state' }, ATTRIBUTES: [] },
        };
        entityData.entityId2Entity = { 'light.lamp': lamp };
        entityData.entities = [lamp];

        const { mod, subscribed } = makeModule();
        const { ws, sent } = makeWs();
        mod.processMessage(ws, {
            type: 'render_template',
            id: 4,
            template: '{{ state_attr(config.entity, "friendly_name") }} is {{ states(config.entity) }}',
            variables: { user: 'achim', config: { entity: 'light.lamp' } },
        });
        await new Promise(r => setTimeout(r, 5));

        const event = sent.find(m => m.type === 'event');
        expect(event.event).to.have.property('result', 'Lamp is on');
        //without this the row would never update when the lamp is switched
        expect(subscribed).to.include('hue.0.lamp.state');
    });

    it('sends a native value, like Home Assistant does', async function () {
        const lamp = {
            entity_id: 'light.lamp',
            state: 'on',
            attributes: {},
            context: { STATE: { getId: 'hue.0.lamp.state' }, ATTRIBUTES: [] },
        };
        entityData.entityId2Entity = { 'light.lamp': lamp };
        entityData.entities = [lamp];

        const render = async (template: string, id: number): Promise<unknown> => {
            const { mod } = makeModule();
            const { ws, sent } = makeWs();
            mod.processMessage(ws, { type: 'render_template', id, template });
            await new Promise(r => setTimeout(r, 5));
            return sent.find(m => m.type === 'event').event.result;
        };

        //a card that checks the value itself must not get the truthy string 'false'
        expect(await render('{{ is_state("light.lamp", "off") }}', 10)).to.equal(false);
        expect(await render('{{ is_state("light.lamp", "on") }}', 11)).to.equal(true);
        expect(await render('{{ 21.5 }}', 12)).to.equal(21.5);
        //the JSON return format template-entity-row offers for tap_action
        expect(await render('{"action": "toggle", "n": {{ 1 + 1 }}}', 13)).to.deep.equal({
            action: 'toggle',
            n: 2,
        });
        //text stays text, also when it looks a bit like a number
        expect(await render('{{ "01" }}', 14)).to.equal('01');
        expect(await render('Lamp is {{ states("light.lamp") }}', 15)).to.equal('Lamp is on');
    });

    it('includes a listeners field so the templates dev tool does not crash', async function () {
        const { mod } = makeModule();
        const { ws, sent } = makeWs();
        mod.processMessage(ws, { type: 'render_template', id: 3, template: 'plain text' });
        await new Promise(r => setTimeout(r, 5));

        const event = sent.find(m => m.type === 'event');
        expect(event).to.not.equal(undefined);
        expect(event.event).to.have.property('listeners');
        expect(event.event.listeners).to.have.property('time', false);
    });
});
