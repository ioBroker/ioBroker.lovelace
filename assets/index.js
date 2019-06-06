function getToolbar() {
    try {
        var appToolbar = document.querySelector('home-assistant').shadowRoot
            .querySelector('home-assistant-main').shadowRoot
            //.querySelector('app-drawer-layout')
            .querySelector('partial-panel-resolver')
            .querySelector('ha-panel-lovelace').shadowRoot
            .querySelector('hui-root').shadowRoot
            //.querySelector('ha-app-layout')
            //.querySelector('app-header')
            .querySelector('app-toolbar');

        return appToolbar;
    } catch (e) {
        return null;
    }
}

function hideButtons() {
    try {
        var appToolbar = getToolbar();
        appToolbar.querySelector('ha-menu-button').style.display = 'none';
        try {
            appToolbar.querySelector('paper-listbox').querySelectorAll('paper-item')[2].style.display = 'none';
        } catch (e) {

        }
        //.querySelector('paper-icon-button').style.display = 'none';
    } catch (e) {
        setTimeout(hideButtons, 200);
    }
}

function hideHeader() {
    if (window.location.search.indexOf('edit=') === -1 && window.location.search.indexOf('toolbar') === -1) {
        setTimeout(function () {
            try {
                getToolbar().style.display = 'none';
                window.dispatchEvent(new Event('resize'));
            } catch (e) {
                setTimeout(hideHeader, 200);
            }
        }, 200);
    }
}

//hideButtons();
//setInterval(hideButtons, 2000);
