/*
 * iob-web-component-card - shows ioBroker web components (vis-2 / AURA widgets of adapters) in Lovelace
 *
 * type: custom:iob-web-component-card
 * adapter: home-guard              # adapter that brings the component
 * component: home-guard-panel      # file name in admin/webcomponents/ without .json
 * height: auto                     # optional: auto (default) = as high as the content, or px
 * card: true                       # optional: false = without the card frame
 * settings:                        # the settings of the component, as in vis-2/AURA
 *   instance: home-guard.0
 *
 * The component gets a connection to ioBroker, its settings and the colors of the HA theme. The connection is the one
 * Lovelace has anyway: the `iobroker/*` messages of the lovelace adapter, with the rights of the logged-in user.
 */
(() => {
    const VERSION = '1.0.0';
    const modules = new Map(); // adapter/component -> Promise<manifest>

    const lang = () => (document.documentElement.lang || navigator.language || 'en').slice(0, 2);
    const tr = (t, l = lang()) =>
        t == null ? '' : typeof t === 'object' ? t[l] || t.en || Object.values(t)[0] || '' : String(t);

    /**
     * The connection Lovelace has anyway: the lovelace adapter answers `iobroker/*` with the rights of the logged-in
     * user. It is the `socket` the components get (WebComponentSocket of @iobroker/web-components)
     */
    class HassSocket {
        constructor(conn, info) {
            this.conn = conn;
            this.key = 'lovelace';
            this.esmBase = `${location.origin}/lib/esm/`;
            this.systemLang = info?.systemLang || lang();
            this.stateCbs = new Map();
            this.unsubs = new Map();
        }
        call(type, data) {
            return this.conn.sendMessagePromise({ type: `iobroker/${type}`, ...data });
        }
        getState(id) {
            return this.call('get_state', { state_id: id });
        }
        async setState(id, val, ack) {
            const state = val !== null && typeof val === 'object' && 'val' in val ? val : { val, ack: !!ack };
            await this.call('set_state', { state_id: id, state });
        }
        async subscribeState(id, cb) {
            const ids = Array.isArray(id) ? id : [id];
            for (const i of ids) {
                if (!this.stateCbs.has(i)) {
                    this.stateCbs.set(i, new Set());
                    this.unsubs.set(
                        i,
                        this.conn.subscribeMessage(ev => this.stateCbs.get(ev.id)?.forEach(c => c(ev.id, ev.state)), {
                            type: 'iobroker/subscribe_states',
                            state_ids: [i],
                        }),
                    );
                }
                this.stateCbs.get(i).add(cb);
            }
            // like the other hosts: the current values right away
            for (const i of ids) {
                this.getState(i).then(
                    st => cb(i, st),
                    () => {},
                );
            }
        }
        unsubscribeState(id, cb) {
            for (const i of Array.isArray(id) ? id : [id]) {
                const set = this.stateCbs.get(i);
                if (!set) {
                    continue;
                }
                cb ? set.delete(cb) : set.clear();
                if (!set.size) {
                    this.stateCbs.delete(i);
                    this.unsubs.get(i)?.then(
                        u => u(),
                        () => {},
                    );
                    this.unsubs.delete(i);
                }
            }
        }
        getObject(id) {
            return this.call('get_object', { object_id: id });
        }
        // object changes are not forwarded (yet): components get the object once
        async subscribeObject() {}
        async unsubscribeObject() {}
        getHistory(id, options) {
            return this.call('get_history', { state_id: id, options });
        }
        getObjectViewSystem(type, start = '', end = '\u9999') {
            return this.call('get_object_view', { object_type: type, start, end });
        }
        sendTo(instance, command, data) {
            return this.call('send_to', { instance, command, message: data ?? null });
        }
        async readFile(adapter, file) {
            const r = await this.call('read_file', { adapter, file });
            return r?.data ?? (r?.base64 ? atob(r.base64) : '');
        }
    }

    const findHass = () => document.querySelector('home-assistant')?.hass;
    let native; // Promise<HassSocket | null> per connection object
    let nativeConn;
    /**
     * the Lovelace connection, if the lovelace adapter knows iobroker/
     *
     * @param hass
     */
    function nativeSocket(hass) {
        const conn = (hass || findHass())?.connection;
        if (!conn) {
            return Promise.resolve(null);
        }
        if (conn !== nativeConn) {
            nativeConn = conn;
            native = Promise.race([
                conn.sendMessagePromise({ type: 'iobroker/info' }),
                new Promise((_r, rej) => setTimeout(() => rej(new Error('timeout')), 4000)),
            ]).then(
                info => new HassSocket(conn, info),
                () => null,
            );
        }
        return native;
    }
    /**
     * the connection of Lovelace, as soon as there is one
     *
     * @param hass
     */
    async function connect(hass) {
        const socket = await nativeSocket(hass);
        if (!socket) {
            throw new Error('the lovelace adapter does not answer iobroker/* - please update it');
        }
        return socket;
    }

    /**
     * Imports of a module loaded as Blob have no base URL: React (`../../../lib/esm/react-19.js`) goes to the copy
     * served by the lovelace adapter, other relative imports to the folder of the module
     *
     * @param code
     * @param moduleBase
     * @param esmBase
     */
    function rewriteImports(code, moduleBase, esmBase) {
        const target = spec => {
            const react = spec.match(/(?:^|\/)lib\/esm\/(react-1[89])\.js$/);
            if (react) {
                return `${esmBase}${react[1]}.js`;
            }
            if (/^(\.{1,2}\/|\/)/.test(spec)) {
                return new URL(spec, moduleBase).href;
            }
            return spec;
        };
        return code
            .replace(/(\bfrom\s*)(["'])([^"']+)\2/g, (_m, a, q, s) => `${a}${q}${target(s)}${q}`)
            .replace(/(\bimport\s*\(\s*)(["'])([^"']+)\2/g, (_m, a, q, s) => `${a}${q}${target(s)}${q}`)
            .replace(/(\bimport\s*)(["'])([^"']+)\2/g, (_m, a, q, s) => `${a}${q}${target(s)}${q}`);
    }

    /**
     * reads manifest and module of a component via the socket and registers the element
     *
     * @param socket
     * @param adapter
     * @param component
     */
    async function loadComponent(socket, adapter, component) {
        const key = `${adapter}/${component}`;
        if (!modules.has(key)) {
            modules.set(
                key,
                (async () => {
                    const manifest = JSON.parse(
                        await socket.readFile(`${adapter}.admin`, `webcomponents/${component}.json`),
                    );
                    if (!customElements.get(manifest.tag)) {
                        const file = `webcomponents/${manifest.module || `${component}.js`}`;
                        const code = rewriteImports(
                            await socket.readFile(`${adapter}.admin`, file),
                            `${location.origin}/adapter/${adapter}/${file.replace(/[^/]*$/, '')}`,
                            socket.esmBase,
                        );
                        const url = URL.createObjectURL(new Blob([code], { type: 'text/javascript' }));
                        try {
                            await import(/* webpackIgnore: true */ url);
                        } finally {
                            URL.revokeObjectURL(url);
                        }
                    }
                    return manifest;
                })(),
            );
        }
        try {
            return await modules.get(key);
        } catch (e) {
            modules.delete(key); // try again next time
            throw e;
        }
    }

    const discovered = new Map(); // connection -> Promise<list>
    /**
     * All web components of the installed adapters: the instances list their manifests in common.webComponents
     *
     * @param socket
     * @param key
     * @returns {Promise<{adapter: string, component: string, manifest: object}[]>}
     */
    function discover(socket, key) {
        if (!discovered.has(key)) {
            discovered.set(
                key,
                (async () => {
                    const inst = await socket.getObjectViewSystem(
                        'instance',
                        'system.adapter.',
                        'system.adapter.\u9999',
                    );
                    const files = new Map();
                    for (const o of Object.values(inst)) {
                        const list = Array.isArray(o?.common?.webComponents) ? o.common.webComponents : [];
                        const adapter = o?.common?.name;
                        for (const f of list) {
                            const file = typeof f === 'string' ? f : f?.manifest || f?.file;
                            if (
                                adapter &&
                                typeof file === 'string' &&
                                file.endsWith('.json') &&
                                !file.startsWith('..')
                            ) {
                                files.set(`${adapter}/${file}`, { adapter, file });
                            }
                        }
                    }
                    const out = [];
                    for (const { adapter, file } of files.values()) {
                        try {
                            const manifest = JSON.parse(await socket.readFile(`${adapter}.admin`, file));
                            const component = file
                                .split('/')
                                .pop()
                                .replace(/\.json$/, '');
                            if (file !== `webcomponents/${component}.json`) {
                                continue;
                            } // the card reads webcomponents/<name>
                            out.push({ adapter, component, manifest });
                        } catch {
                            /* manifest missing or broken: leave it out */
                        }
                    }
                    return out.sort((a, b) => tr(a.manifest.name).localeCompare(tr(b.manifest.name)));
                })(),
            );
        }
        return discovered.get(key);
    }

    /**
     * defaults of the settings in the manifest
     *
     * @param manifest
     */
    function defaults(manifest) {
        const out = {};
        const panels =
            manifest.settings?.type === 'tabs' ? Object.values(manifest.settings.items || {}) : [manifest.settings];
        for (const p of panels) {
            for (const [k, item] of Object.entries(p?.items || {})) {
                if (item && item.default !== undefined) {
                    out[k] = item.default;
                }
            }
        }
        return out;
    }

    /**
     * the colors of the HA theme as WebComponentTheme
     *
     * @param el
     * @param dark
     */
    function themeOf(el, dark) {
        const css = getComputedStyle(el);
        const v = (name, fb) => css.getPropertyValue(name).trim() || fb;
        return {
            type: dark ? 'dark' : 'light',
            primary: v('--primary-color', '#03a9f4'),
            primaryContrast: v('--text-primary-color', '#ffffff'),
            secondary: v('--accent-color', '#ff9800'),
            secondaryContrast: v('--text-accent-color', '#ffffff'),
            background: v('--primary-background-color', dark ? '#111111' : '#fafafa'),
            paper: v('--ha-card-background', v('--card-background-color', dark ? '#1c1c1c' : '#ffffff')),
            text: v('--primary-text-color', dark ? '#e1e1e1' : '#212121'),
            textSecondary: v('--secondary-text-color', dark ? '#9b9b9b' : '#727272'),
            divider: v('--divider-color', dark ? 'rgba(225,225,225,.12)' : 'rgba(0,0,0,.12)'),
            error: v('--error-color', '#db4437'),
            warning: v('--warning-color', '#ffa600'),
            info: v('--info-color', '#039be5'),
            success: v('--success-color', '#43a047'),
            fontFamily: v('--primary-font-family', v('--paper-font-body1_-_font-family', 'Roboto, sans-serif')),
            fontSize: 14,
            borderRadius: parseInt(v('--ha-card-border-radius', '12px'), 10) / 2 || 6,
        };
    }

    class IobWebComponentCard extends HTMLElement {
        setConfig(config) {
            if (!config || !config.adapter || !config.component) {
                throw new Error(
                    'adapter and component are required, e.g. adapter: home-guard, component: home-guard-panel',
                );
            }
            const changed = JSON.stringify(config) !== JSON.stringify(this._config);
            this._config = config;
            if (changed && this.isConnected) {
                this._render();
            }
        }
        set hass(hass) {
            this._hass = hass;
            this._hassWait?.();
            const dark = !!hass?.themes?.darkMode;
            if (dark !== this._dark) {
                this._dark = dark;
                if (this._el) {
                    this._el.theme = themeOf(this, dark);
                }
            }
        }
        connectedCallback() {
            if (this._config && !this._el) {
                this._render();
            } else if (this._el) {
                this._autoSize(this._size);
            }
        }
        getCardSize() {
            return Math.max(1, Math.round((this._height || 300) / 50));
        }
        getLayoutOptions() {
            return {
                grid_columns: 4,
                grid_min_columns: 2,
                grid_rows: Math.max(2, Math.round((this._height || 300) / 56)),
            };
        }
        static getStubConfig() {
            return { adapter: 'home-guard', component: 'home-guard-panel', settings: {} };
        }
        static getConfigElement() {
            return document.createElement('iob-web-component-card-editor');
        }

        /**
         * Height from the content. Many components scale to the box they get, so there is no fixed content height:
         * the start is the aspect of the size in the manifest at the width of the card (the component looks as
         * designed), and if the content reaches further (opened sections, more rows) the card grows to it - and
         * shrinks back when it gets less again.
         *
         * @param size
         */
        _autoSize(size) {
            this._sizeObs?.disconnect();
            this._mutObs?.disconnect();
            this._size = size;
            const el = this._el;
            if (!size || !el) {
                return;
            }
            let busy = false;
            const extent = node => {
                // how far the content of node reaches, also when it is hidden in a scroll area
                const box = node.getBoundingClientRect();
                const st = getComputedStyle(node);
                let bottom = 0;
                for (const c of node.children) {
                    const cs = getComputedStyle(c);
                    if (
                        c.tagName === 'STYLE' ||
                        cs.display === 'none' ||
                        cs.position === 'fixed' ||
                        cs.position === 'absolute'
                    ) {
                        continue;
                    }
                    bottom = Math.max(bottom, c.getBoundingClientRect().bottom + (parseFloat(cs.marginBottom) || 0));
                }
                let h = bottom
                    ? bottom -
                      box.top +
                      node.scrollTop +
                      (parseFloat(st.paddingBottom) || 0) +
                      (parseFloat(st.borderBottomWidth) || 0)
                    : 0;
                // scroll areas further inside: what they hide
                const inner = [...node.querySelectorAll('*')].filter(d =>
                    /(auto|scroll)/.test(getComputedStyle(d).overflowY),
                );
                for (const s of inner) {
                    if (!inner.some(o => o !== s && o.contains(s))) {
                        h += Math.max(0, s.scrollHeight - s.clientHeight);
                    }
                }
                return h;
            };
            const measure = () => {
                if (busy || !el.isConnected || !el.clientWidth) {
                    return;
                }
                busy = true;
                const base = Math.round((el.clientWidth * size.height) / (size.width || el.clientWidth));
                let content = 0;
                for (const c of (el.shadowRoot || el).children) {
                    const cs = getComputedStyle(c);
                    if (c.tagName === 'STYLE' || c.tagName === 'LINK' || cs.display === 'none') {
                        continue;
                    }
                    content = Math.max(
                        content,
                        extent(c) + (parseFloat(cs.marginTop) || 0) + (parseFloat(cs.marginBottom) || 0),
                    );
                }
                const next = Math.max(base, Math.ceil(content));
                if (Math.abs(next - el.offsetHeight) > 2) {
                    el.style.height = `${next}px`;
                    this._height = next;
                    this.dispatchEvent(new Event('iron-resize', { bubbles: true, composed: true }));
                }
                requestAnimationFrame(() => (busy = false));
            };
            const later = () => requestAnimationFrame(() => requestAnimationFrame(measure));
            this._sizeObs = new ResizeObserver(later);
            this._sizeObs.observe(this);
            this._mutObs = new MutationObserver(later);
            // without a shadow root the element itself is watched - then not its attributes (our own height)
            this._mutObs.observe(el.shadowRoot || el, {
                childList: true,
                subtree: true,
                attributes: !!el.shadowRoot,
                characterData: true,
            });
            // web components render asynchronously: measure a few times at the start
            [50, 300, 1000, 2500].forEach(ms => setTimeout(later, ms));
        }

        disconnectedCallback() {
            this._sizeObs?.disconnect();
            this._mutObs?.disconnect();
        }

        async _render() {
            const cfg = this._config;
            const run = (this._run = (this._run || 0) + 1);
            if (!this._hass) {
                // Lovelace sets hass right after the config: its connection is the one to use
                await new Promise(r => {
                    this._hassWait = r;
                    setTimeout(r, 1500);
                });
            }
            if (run !== this._run) {
                return;
            }
            this.innerHTML = '';
            const frame = document.createElement(cfg.card === false ? 'div' : 'ha-card');
            frame.style.cssText = 'overflow:hidden;padding:0;display:block';
            this.appendChild(frame);
            const msg = text => {
                frame.innerHTML = `<div style="padding:16px;color:var(--secondary-text-color)">${text}</div>`;
            };
            msg('…');
            try {
                const socket = await connect(this._hass);
                const manifest = await loadComponent(socket, cfg.adapter, cfg.component);
                registerPickerEntries(socket);
                if (run !== this._run) {
                    return;
                }
                socket.systemLang =
                    cfg.language || (this.ownerDocument.documentElement.lang || socket.systemLang).slice(0, 2);
                const el = document.createElement(manifest.tag);
                const fixed = Number(cfg.height);
                this._height = fixed || manifest.size?.height || 300;
                el.style.cssText = `display:block;width:100%;height:${this._height}px`;
                el.theme = themeOf(this, this._dark);
                el.editMode = false;
                el.settings = { ...defaults(manifest), ...(cfg.settings || {}) };
                el.socket = socket;
                frame.innerHTML = '';
                frame.appendChild(el);
                this._el = el;
                this._autoSize(fixed ? null : manifest.size || { width: 360, height: 300 });
            } catch (e) {
                if (run === this._run) {
                    msg(`⚠️ ${esc(cfg.adapter)}/${esc(cfg.component)}: ${esc(e.message)}`);
                }
            }
        }
    }

    /**
     * JS expression of JSON-Config (hidden, disabled) over the values of the settings
     *
     * @param expr
     * @param data
     */
    function evalExpr(expr, data) {
        if (!expr) {
            return false;
        }
        try {
            return !!new Function('data', `return (${expr});`)(data);
        } catch {
            return false;
        }
    }
    /**
     * `${data.x}` patterns of JSON-Config
     *
     * @param pattern
     * @param data
     */
    const fill = (pattern, data) =>
        String(pattern).replace(/\$\{data\.([\w.]+)\}/g, (_m, k) => (data[k] ?? '').toString());
    const esc = s =>
        String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

    /**
     * Editor of the card in Lovelace: the component (chosen in the card picker), height,
     * and the settings of the component from its manifest - like vis-2 and AURA show them
     */
    class IobWebComponentCardEditor extends HTMLElement {
        setConfig(config) {
            this._config = { ...config };
            this._update();
        }
        set hass(hass) {
            this._hass = hass;
            this.querySelectorAll('ha-form').forEach(f => (f.hass = hass));
        }
        _fire() {
            const config = { ...this._config };
            if (!config.settings || !Object.keys(config.settings).length) {
                delete config.settings;
            }
            this.dispatchEvent(
                new CustomEvent('config-changed', { detail: { config }, bubbles: true, composed: true }),
            );
        }
        _set(patch) {
            this._config = { ...this._config, ...patch };
            this._fire();
            this._update();
        }

        async _update() {
            const run = (this._run = (this._run || 0) + 1);
            const cfg = this._config || {};
            let socket;
            let list = [];
            let error = '';
            try {
                socket = await connect(this._hass);
                list = await Promise.race([
                    discover(socket, socket.key),
                    new Promise((_r, rej) => setTimeout(() => rej(new Error('no answer')), 8000)),
                ]);
            } catch (e) {
                error = e.message;
                discovered.delete('lovelace');
            }
            if (run !== this._run) {
                return;
            }
            const current = list.find(c => c.adapter === cfg.adapter && c.component === cfg.component);
            const values = { ...(current ? defaults(current.manifest) : {}), ...(cfg.settings || {}) };
            const l = this._hass?.language?.slice(0, 2) || lang();
            const de = l === 'de';

            this.innerHTML = `
				<style>
					.iwc { display:flex; flex-direction:column; gap:12px; }
					.iwc .row { display:flex; gap:12px; align-items:center; flex-wrap:wrap; }
					.iwc .row > * { flex:1 1 200px; }
					.iwc h4 { margin:12px 0 0; font-weight:500; }
					.iwc .note { color:var(--secondary-text-color); font-size:0.9em; }
					.iwc .err { color:var(--error-color); }
					.iwc select, .iwc input[type=text], .iwc input[type=number] { width:100%; box-sizing:border-box; padding:10px; border-radius:4px;
						border:1px solid var(--divider-color); background:var(--card-background-color); color:var(--primary-text-color); font:inherit; }
					.iwc label { display:block; font-size:0.85em; color:var(--secondary-text-color); margin-bottom:4px; }
				</style>
				<div class="iwc">
					${error ? `<div class="err">⚠️ ${esc(error)}</div>` : ''}
					${
                        current
                            ? `<div class="row"><div><h3 style="margin:4px 0 0">${esc(tr(current.manifest.name, l))}</h3>
								<div class="note">${esc(current.adapter)}</div></div>
								<div><label>${de ? 'Höhe (leer = automatisch)' : 'Height (empty = automatic)'}</label>
								<input type="number" data-k="height" min="50" step="10" value="${esc(cfg.height ?? '')}" placeholder="auto"></div></div>`
                            : `<div class="row"><div><label>${de ? 'Web-Komponente' : 'Web component'}</label>
								<select data-k="component">
									<option value="">${cfg.component ? esc(`${cfg.adapter}/${cfg.component} – ${de ? 'nicht gefunden' : 'not found'}`) : '–'}</option>
									${list.map(c => `<option value="${esc(`${c.adapter}/${c.component}`)}">${esc(tr(c.manifest.name, l))} (${esc(c.adapter)})</option>`).join('')}
								</select></div></div>`
                    }
					${current?.manifest.description ? `<div class="note">${esc(tr(current.manifest.description, l))}</div>` : ''}
					<div class="settings"></div>
				</div>`;
            this.querySelector('[data-k=component]')?.addEventListener('change', e => {
                const [adapter, component] = e.target.value.split('/');
                if (adapter && component) {
                    this._set({ adapter, component, settings: {} });
                }
            });
            this.querySelector('[data-k=height]')?.addEventListener('change', e => {
                const n = Number(e.target.value);
                const c = { ...this._config };
                if (n > 0) {
                    c.height = n;
                } else {
                    delete c.height;
                }
                this._config = c;
                this._fire();
            });
            if (current && socket) {
                await this._renderSettings(current, socket, values, l, run);
            }
        }

        /**
         * the settings of the manifest: header, text and divider as text, the fields as ha-form
         *
         * @param current
         * @param socket
         * @param values
         * @param l
         * @param run
         */
        async _renderSettings(current, socket, values, l, run) {
            const host = this.querySelector('.settings');
            const s = current.manifest.settings || {};
            const panels =
                s.type === 'tabs'
                    ? Object.values(s.items || {}).map(p => ({ title: p.label, items: p.items }))
                    : [{ items: s.items }];
            const data = values;
            const instances = Object.keys(
                await socket.getObjectViewSystem('instance', 'system.adapter.', 'system.adapter.香'),
            ).map(id => id.replace('system.adapter.', ''));
            if (run !== this._run) {
                return;
            }
            let group = [];
            const flush = () => {
                if (!group.length) {
                    return;
                }
                const form = document.createElement('ha-form');
                form.hass = this._hass;
                form.schema = group;
                form.data = Object.fromEntries(
                    group.map(g => [
                        g.name,
                        data[g.name] == null ? undefined : g.selector.select ? String(data[g.name]) : data[g.name],
                    ]),
                );
                form.computeLabel = sc => sc.label;
                form.computeHelper = sc => sc.helper;
                form.addEventListener('value-changed', e => {
                    const settings = { ...(this._config.settings || {}) };
                    for (const [k, v] of Object.entries(e.detail.value || {})) {
                        if (v === undefined || v === '') {
                            delete settings[k];
                        } else {
                            settings[k] = v;
                        }
                    }
                    this._set({ settings });
                });
                host.appendChild(form);
                group = [];
            };
            for (const panel of panels) {
                if (panel.title) {
                    flush();
                    host.insertAdjacentHTML('beforeend', `<h4>${esc(tr(panel.title, l))}</h4>`);
                }
                for (const [name, item] of Object.entries(panel.items || {})) {
                    if (!item || evalExpr(item.hidden, data)) {
                        continue;
                    }
                    const label = tr(item.label, l) || name;
                    const helper = tr(item.help, l) || undefined;
                    const disabled = evalExpr(item.disabled, data);
                    if (item.type === 'header') {
                        flush();
                        host.insertAdjacentHTML('beforeend', `<h4>${esc(tr(item.text, l))}</h4>`);
                        continue;
                    }
                    if (item.type === 'staticText') {
                        flush();
                        host.insertAdjacentHTML('beforeend', `<div class="note">${esc(tr(item.text, l))}</div>`);
                        continue;
                    }
                    if (item.type === 'divider') {
                        flush();
                        host.insertAdjacentHTML(
                            'beforeend',
                            '<hr style="border:none;border-top:1px solid var(--divider-color)">',
                        );
                        continue;
                    }
                    let selector;
                    switch (item.type) {
                        case 'password':
                            selector = { text: { type: 'password' } };
                            break;
                        case 'number':
                        case 'slider':
                            selector = {
                                number: {
                                    min: item.min,
                                    max: item.max,
                                    step: item.step ?? 1,
                                    mode: item.type === 'slider' ? 'slider' : 'box',
                                },
                            };
                            break;
                        case 'checkbox':
                            selector = { boolean: {} };
                            break;
                        case 'color':
                            selector = { text: { type: 'color' } };
                            break;
                        case 'select':
                            selector = {
                                select: {
                                    mode: 'dropdown',
                                    options: (item.options || []).map(o => ({
                                        value: String(o.value),
                                        label: tr(o.label, l),
                                    })),
                                },
                            };
                            break;
                        case 'instance': {
                            const own = instances.filter(
                                i => i.replace(/\.\d+$/, '') === (item.adapter || current.adapter),
                            );
                            selector = {
                                select: { mode: 'dropdown', options: own.map(i => ({ value: i, label: i })) },
                            };
                            break;
                        }
                        case 'selectSendTo':
                        case 'autocompleteSendTo': {
                            let options = (item.options || []).map(o => ({
                                value: String(o.value),
                                label: tr(o.label, l),
                            }));
                            try {
                                const inst = item.instance ? fill(item.instance, data) : `${current.adapter}.0`;
                                let msg = item.data ?? null;
                                if (item.jsonData) {
                                    msg = JSON.parse(fill(item.jsonData, data));
                                }
                                const res = await Promise.race([
                                    socket.sendTo(inst, item.command || 'send', msg),
                                    new Promise(r => setTimeout(() => r([]), 6000)),
                                ]);
                                if (Array.isArray(res)) {
                                    options = options.concat(
                                        res.map(o =>
                                            typeof o === 'object' && o
                                                ? { value: String(o.value), label: tr(o.label, l) || String(o.value) }
                                                : { value: String(o), label: String(o) },
                                        ),
                                    );
                                }
                            } catch {
                                /* adapter does not answer: free input below */
                            }
                            selector = {
                                select: {
                                    mode: 'dropdown',
                                    options,
                                    custom_value: item.type === 'autocompleteSendTo' || !options.length,
                                },
                            };
                            break;
                        }
                        case 'objectId': {
                            if (item.root) {
                                const types = Array.isArray(item.types) ? item.types : [item.types || 'state'];
                                const opts = [];
                                for (const ty of types) {
                                    const objs = await socket.getObjectViewSystem(
                                        ty,
                                        `${item.root}.`,
                                        `${item.root}.香`,
                                    );
                                    for (const [id, o] of Object.entries(objs)) {
                                        opts.push({
                                            value: id,
                                            label: `${tr(o?.common?.name, l) || id.split('.').pop()} (${id})`,
                                        });
                                    }
                                }
                                selector = {
                                    select: { mode: 'dropdown', custom_value: true, options: opts.slice(0, 500) },
                                };
                            } else {
                                selector = { text: {} };
                            }
                            break;
                        }
                        default:
                            selector = { text: item.minRows > 1 ? { multiline: true } : {} };
                    }
                    if (run !== this._run) {
                        return;
                    }
                    group.push({ name, label, helper, selector, disabled });
                }
            }
            flush();
        }
    }

    if (!customElements.get('iob-web-component-card-editor')) {
        customElements.define('iob-web-component-card-editor', IobWebComponentCardEditor);
    }

    /**
     * One entry per web component in the card picker of Lovelace ("ioBroker: Home Guard panel"): found at the web
     * adapter used last in this browser. The entry only fills in the config - the saved card is always
     * custom:iob-web-component-card, so it works also when this list is not there (yet)
     */
    const pickerDone = new Set();
    async function registerPickerEntries(socket) {
        if (!socket || pickerDone.has(socket.key)) {
            return;
        }
        pickerDone.add(socket.key);
        try {
            const list = await Promise.race([
                discover(socket, socket.key),
                new Promise((_r, rej) => setTimeout(() => rej(new Error('timeout')), 10000)),
            ]);
            for (const c of list) {
                const tag = `iob-wc-${c.adapter}-${c.component}`.toLowerCase().replace(/[^a-z0-9-]/g, '-');
                if (customElements.get(tag)) {
                    continue;
                }
                customElements.define(
                    tag,
                    class extends IobWebComponentCard {
                        static getStubConfig() {
                            return {
                                type: 'custom:iob-web-component-card',
                                adapter: c.adapter,
                                component: c.component,
                                settings: {},
                            };
                        }
                    },
                );
                window.customCards.push({
                    type: tag,
                    name: `ioBroker: ${tr(c.manifest.name)}`,
                    description: tr(c.manifest.description),
                    preview: true,
                });
            }
        } catch (e) {
            discovered.delete(socket.key);
            pickerDone.delete(socket.key);
            console.info(`iob-web-component-card: no web components found via ${socket.key} (${e.message})`);
        }
    }

    /** at load: as soon as Lovelace is connected, offer the components in the card picker */
    async function registerAtLoad() {
        for (let i = 0; i < 60 && !findHass()?.connection; i++) {
            await new Promise(r => setTimeout(r, 1000));
        }
        try {
            registerPickerEntries(await connect(findHass()));
        } catch (e) {
            console.info(`iob-web-component-card: ${e.message}`);
        }
    }

    if (!customElements.get('iob-web-component-card')) {
        customElements.define('iob-web-component-card', IobWebComponentCard);
        // the picker shows one entry per component (registerPickerEntries), not this generic card
        window.customCards = window.customCards || [];
        console.info(`%c iob-web-component-card ${VERSION} `, 'background:#3399cc;color:#fff');
        registerAtLoad();
    }
})();
