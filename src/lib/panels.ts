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
