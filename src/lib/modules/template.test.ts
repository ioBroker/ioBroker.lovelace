import { expect } from 'chai';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const TemplateModule = require('../modules/template');

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
