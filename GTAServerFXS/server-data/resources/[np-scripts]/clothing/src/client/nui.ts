// Client NUI Communication for clothing
export function sendNuiMessage(action: string, data: any = {}) {
  SendNUIMessage({ action, data });
}

export function registerNuiCallbacks() {
  // NUI callbacks registered here
}
