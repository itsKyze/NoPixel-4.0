// np-lib: cl_ui.js
const registered = [];

function RegisterUICallback(name, cb) {
    AddEventHandler(`_npx_uiReq:${name}`, cb);

    try {
        if (GetResourceState('np-ui') === 'started' && exports['np-ui'] && exports['np-ui'].RegisterUIEvent) {
            exports['np-ui'].RegisterUIEvent(name);
        }
    } catch (e) {}

    registered.push(name);
}

function SendUIMessage(data) {
    try {
        if (exports['np-ui'] && exports['np-ui'].SendUIMessage) {
            exports['np-ui'].SendUIMessage(data);
        }
    } catch (e) {}
}

function SetUIFocus(hasFocus, hasCursor) {
    try {
        if (exports['np-ui'] && exports['np-ui'].SetUIFocus) {
            exports['np-ui'].SetUIFocus(hasFocus, hasCursor);
        }
    } catch (e) {}
}

function GetUIFocus() {
    try {
        if (exports['np-ui'] && exports['np-ui'].GetUIFocus) {
            return exports['np-ui'].GetUIFocus();
        }
    } catch (e) {}
    return false;
}

AddEventHandler('_npx_uiReady', () => {
    try {
        if (exports['np-ui'] && exports['np-ui'].RegisterUIEvent) {
            registered.forEach((eventName) => exports['np-ui'].RegisterUIEvent(eventName));
        }
    } catch (e) {}
});
