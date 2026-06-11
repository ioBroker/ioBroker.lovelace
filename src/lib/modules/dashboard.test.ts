import { expect } from 'chai';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const DashboardModule = require('../modules/dashboard');

function makeAdapter(): ioBroker.Adapter {
    return {
        log: { debug: () => {} },
        getObjectAsync: () => Promise.resolve({ native: { dashboards: [], dashboardConfigs: {} } }),
        setObject: async () => {},
    } as unknown as ioBroker.Adapter;
}

function makeDashboard(overrides: Record<string, unknown> = {}): any {
    return new DashboardModule({
        adapter: makeAdapter(),
        sendResponse: () => {},
        sendUpdate: () => {},
        ...overrides,
    });
}

describe('modules/dashboard', function () {
    describe('getConfig', function () {
        it('returns { views: [] } for unknown url_path', function () {
            const dashboard = makeDashboard();
            expect(dashboard.getConfig('unknown')).to.deep.equal({ views: [] });
        });

        it('returns stored config for known url_path', function () {
            const dashboard = makeDashboard();
            const config = { views: [{ title: 'Home' }] };
            dashboard._dashboardConfigs.lovelace = config;
            expect(dashboard.getConfig('lovelace')).to.deep.equal(config);
        });
    });

    describe('findDashboardId', function () {
        it('returns existing id when dashboard already has one', function () {
            const dashboard = makeDashboard();
            expect(dashboard.findDashboardId({ id: 'my_id', title: 'ignored' })).to.equal('my_id');
        });

        it('generates id from title', function () {
            const dashboard = makeDashboard();
            const id = dashboard.findDashboardId({ title: 'Living Room' });
            expect(id).to.equal('dashboard_living_room');
        });

        it('replaces special characters and collapses consecutive underscores', function () {
            const dashboard = makeDashboard();
            const id = dashboard.findDashboardId({ title: 'My Dashboard #1!' });
            expect(id).to.equal('dashboard_my_dashboard_1_');
        });

        it('collapses consecutive underscores from double-space title', function () {
            const dashboard = makeDashboard();
            const id = dashboard.findDashboardId({ title: 'A  B' });
            expect(id).to.equal('dashboard_a_b');
        });

        it('appends counter to resolve collision with existing dashboard', function () {
            const dashboard = makeDashboard();
            dashboard._dashboards = [{ id: 'dashboard_home' }];
            const id = dashboard.findDashboardId({ title: 'Home' });
            expect(id).to.equal('dashboard_home_1');
        });

        it('increments counter until unique id is found', function () {
            const dashboard = makeDashboard();
            dashboard._dashboards = [{ id: 'dashboard_home' }, { id: 'dashboard_home_1' }];
            const id = dashboard.findDashboardId({ title: 'Home' });
            expect(id).to.equal('dashboard_home_1_2');
        });
    });

    describe('addDashboardsToPanels', function () {
        it('adds nothing to panels when no dashboards exist', function () {
            const dashboard = makeDashboard();
            const panels: Record<string, unknown> = {};
            dashboard.addDashboardsToPanels(panels);
            expect(Object.keys(panels)).to.have.lengthOf(0);
        });

        it('adds each dashboard as a panel keyed by url_path', function () {
            const dashboard = makeDashboard();
            dashboard._dashboards = [
                {
                    url_path: 'lovelace',
                    title: 'Home',
                    icon: 'mdi:home',
                    show_in_sidebar: true,
                    id: 'dashboard_home',
                    mode: 'yaml',
                    require_admin: false,
                },
            ];
            const panels: Record<string, Record<string, unknown>> = {};
            dashboard.addDashboardsToPanels(panels);
            expect(panels).to.have.property('lovelace');
            expect(panels.lovelace.component_name).to.equal('lovelace');
            expect(panels.lovelace.url_path).to.equal('lovelace');
            expect(panels.lovelace.title).to.equal('Home');
            expect(panels.lovelace.icon).to.equal('mdi:home');
            expect(panels.lovelace.id).to.equal('dashboard_home');
            expect((panels.lovelace.config as Record<string, unknown>).mode).to.equal('yaml');
        });

        it('sets title and icon to null when show_in_sidebar is false', function () {
            const dashboard = makeDashboard();
            dashboard._dashboards = [
                {
                    url_path: 'hidden',
                    title: 'Hidden',
                    icon: 'mdi:eye-off',
                    show_in_sidebar: false,
                    id: 'x',
                    mode: 'storage',
                    require_admin: false,
                },
            ];
            const panels: Record<string, Record<string, unknown>> = {};
            dashboard.addDashboardsToPanels(panels);
            expect(panels.hidden.title).to.be.null;
            expect(panels.hidden.icon).to.be.null;
        });

        it('adds multiple dashboards as separate panels', function () {
            const dashboard = makeDashboard();
            dashboard._dashboards = [
                {
                    url_path: 'lovelace',
                    title: 'Home',
                    show_in_sidebar: true,
                    id: 'a',
                    mode: 'yaml',
                    require_admin: false,
                },
                {
                    url_path: 'lovelace-2',
                    title: 'Second',
                    show_in_sidebar: true,
                    id: 'b',
                    mode: 'storage',
                    require_admin: true,
                },
            ];
            const panels: Record<string, Record<string, unknown>> = {};
            dashboard.addDashboardsToPanels(panels);
            expect(Object.keys(panels)).to.have.lengthOf(2);
            expect(panels['lovelace-2'].require_admin).to.be.true;
        });
    });

    describe('frontend/update_panel + applyPanelOverrides', function () {
        it('stores a panel override and applies title/icon/require_admin to the panel', async function () {
            const dashboard = makeDashboard();
            const handled = await dashboard.processMessage(
                {},
                {
                    type: 'frontend/update_panel',
                    url_path: 'lovelace',
                    title: 'My Home',
                    icon: 'mdi:home-heart',
                    require_admin: true,
                    id: 1,
                },
            );
            expect(handled).to.equal(true);

            const panels: Record<string, Record<string, unknown>> = {
                lovelace: { component_name: 'lovelace', title: 'states', icon: 'mdi:view-dashboard' },
            };
            dashboard.applyPanelOverrides(panels);
            expect(panels.lovelace.title).to.equal('My Home');
            expect(panels.lovelace.icon).to.equal('mdi:home-heart');
            expect(panels.lovelace.require_admin).to.equal(true);
        });

        it('hides the panel via show_in_sidebar:false while keeping title/icon', async function () {
            const dashboard = makeDashboard();
            await dashboard.processMessage(
                {},
                { type: 'frontend/update_panel', url_path: 'lovelace', show_in_sidebar: false, id: 1 },
            );
            const panels: Record<string, Record<string, unknown>> = {
                lovelace: { title: 'states', icon: 'mdi:view-dashboard' },
            };
            dashboard.applyPanelOverrides(panels);
            expect(panels.lovelace.show_in_sidebar).to.equal(false);
            // title/icon must survive so the dashboards list still shows name + icon.
            expect(panels.lovelace.title).to.equal('states');
            expect(panels.lovelace.icon).to.equal('mdi:view-dashboard');
        });

        it('ignores overrides for panels that do not exist', function () {
            const dashboard = makeDashboard();
            dashboard._panelOverrides = { nonexistent: { title: 'x' } };
            const panels: Record<string, Record<string, unknown>> = { lovelace: { title: 'states' } };
            dashboard.applyPanelOverrides(panels);
            expect(panels.lovelace.title).to.equal('states');
        });
    });

    describe('dashboards list', function () {
        function captureModule(): { dashboard: any; responses: any[] } {
            const responses: any[] = [];
            const dashboard = makeDashboard({
                sendResponse: (_ws: unknown, _id: unknown, result: unknown) => responses.push(result),
            });
            return { dashboard, responses };
        }

        it('returns only user dashboards, not the main lovelace board', async function () {
            const { dashboard, responses } = captureModule();
            dashboard._dashboards = [{ id: 'dashboard_x', url_path: 'x', title: 'X' }];
            await dashboard.processMessage({}, { type: 'lovelace/dashboards/list', id: 1 });
            const list = responses[0];
            expect(list).to.have.lengthOf(1);
            expect(list[0].id).to.equal('dashboard_x');
            expect(list.some((d: any) => d.url_path === 'lovelace')).to.equal(false);
        });

        it('editing the main panel goes through frontend/update_panel as an override', async function () {
            const { dashboard } = captureModule();
            await dashboard.processMessage(
                {},
                { type: 'frontend/update_panel', url_path: 'lovelace', title: 'Casa', id: 1 },
            );
            expect(dashboard._panelOverrides.lovelace.title).to.equal('Casa');
            // It is NOT turned into a stored dashboard.
            expect(dashboard._dashboards).to.have.lengthOf(0);
        });
    });
});
