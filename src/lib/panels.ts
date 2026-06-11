/** Fixed panels for frontend. Will show up in sidebar. */
const panels = {
    lovelace: {
        component_name: 'lovelace',
        icon: 'mdi:view-dashboard',
        title: 'states',
        config: { mode: 'storage' },
        url_path: 'lovelace',
        require_admin: false,
        default_visible: true,
        show_in_sidebar: true,
    },
    // Built-in Home Assistant panels (default values from HA). The frontend localizes the titles.
    energy: {
        component_name: 'energy',
        icon: 'mdi:lightning-bolt',
        title: 'energy',
        config: null,
        url_path: 'energy',
        require_admin: false,
        default_visible: true,
        show_in_sidebar: true,
    },
    // Hidden by default, but the user can reveal them via the frontend's "Edit Sidebar":
    //   show_in_sidebar:true  -> the sidebar drops show_in_sidebar:false panels BEFORE the hide/show
    //                            logic, so this must be true or the panel can never be revealed.
    //   default_visible:false -> not shown until the user adds it (then it lands in their panel order,
    //                            persisted per browser in user data). Matches Home Assistant.
    logbook: {
        component_name: 'logbook',
        icon: 'mdi:format-list-bulleted-type',
        title: 'logbook',
        config: null,
        url_path: 'logbook',
        require_admin: false,
        default_visible: false,
        show_in_sidebar: true,
    },
    history: {
        component_name: 'history',
        icon: 'mdi:chart-box',
        title: 'history',
        config: null,
        url_path: 'history',
        require_admin: false,
        default_visible: false,
        show_in_sidebar: true,
    },
    config: {
        component_name: 'config',
        icon: 'hass:settings',
        title: 'config',
        config: null,
        url_path: 'config',
        require_admin: true,
        default_visible: true,
        show_in_sidebar: true,
    },
    profile: {
        component_name: 'profile',
        icon: null,
        title: null,
        config: null,
        url_path: 'profile',
        require_admin: false,
        default_visible: false,
        show_in_sidebar: false,
    },
    'browser-mod': {
        component_name: 'custom',
        icon: 'mdi:server',
        title: 'Browser Mod',
        config: {
            _panel_custom: {
                name: 'browser-mod-panel',
                js_url: '/cards/_static_browser_mod_panel.js',
            },
        },
        url_path: 'browser-mod',
        require_admin: false,
        config_panel_domain: null,
        default_visible: true,
        show_in_sidebar: true,
    },
};

export default panels;
