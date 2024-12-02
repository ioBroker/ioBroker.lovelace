/* global window, document */

function getToolbar() {
    try {
        const appToolbar = document
            .querySelector('home-assistant')
            .shadowRoot.querySelector('home-assistant-main')
            .shadowRoot //.querySelector('app-drawer-layout')
            .querySelector('partial-panel-resolver')
            .querySelector('ha-panel-lovelace')
            .shadowRoot.querySelector('hui-root')
            .shadowRoot //.querySelector('ha-app-layout')
            //.querySelector('app-header')
            .querySelector('app-toolbar');

        return appToolbar;
    } catch (e) {
        console.log(e);
        return null;
    }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function hideButtons() {
    try {
        const appToolbar = getToolbar();
        appToolbar.querySelector('ha-menu-button').style.display = 'none';
        try {
            appToolbar.querySelector('paper-listbox').querySelectorAll('paper-item')[2].style.display = 'none';
        } catch (e) {
            console.log(e);
        }
        //.querySelector('paper-icon-button').style.display = 'none';
    } catch (e) {
        console.log(e);
        setTimeout(hideButtons, 200);
    }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function hideHeader() {
    if (window.location.search.indexOf('edit=') === -1 && window.location.search.indexOf('toolbar') === -1) {
        setTimeout(function () {
            try {
                getToolbar().style.display = 'none';
                window.dispatchEvent(new Event('resize'));
            } catch (e) {
                console.log(e);
                setTimeout(hideHeader, 200);
            }
        }, 200);
    }
}

//hideButtons();
//setInterval(hideButtons, 2000);
