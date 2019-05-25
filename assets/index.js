function hideButtons() {
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

hideButtons();
setInterval(hideButtons, 2000);
