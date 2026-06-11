type SendResponseFn = (ws: unknown, id: unknown, result?: unknown) => void;

interface WsLike {
    send(data: string): void;
}

/**
 * Compatibility stubs for Home Assistant frontend screens we don't fully implement (repairs,
 * floors/labels, integrations / config entries). They return empty results so the corresponding
 * frontend pages load instead of hanging or erroring.
 */
class CompatModule {
    private sendResponse: SendResponseFn;

    constructor(options: { sendResponse: SendResponseFn }) {
        this.sendResponse = options.sendResponse;
    }

    /**
     * Handle a stub message.
     *
     * @param ws - websocket connection
     * @param message - the message
     * @returns true if handled
     */
    processMessage(ws: WsLike, message: Record<string, unknown>): boolean {
        switch (message.type) {
            case 'repairs/list_issues':
                this.sendResponse(ws, message.id, { issues: [] });
                return true;
            case 'config/floor_registry/list':
                this.sendResponse(ws, message.id, []);
                return true;
            case 'config/label_registry/list':
                this.sendResponse(ws, message.id, []);
                return true;
            case 'config_entries/subscribe':
                // {"type":"config_entries/subscribe","type_filter":["device","hub","service","hardware"],"id":77}
                // A subscription. The frontend's config-entries collection only resolves once it has
                // received the first `event` (an array of {type,entry} changes), so we must send an
                // initial snapshot - an empty array, we have no config entries - right after the ack.
                // Otherwise the "Devices & Services" page spins forever waiting for that first event.
                // (Send an `event`, NOT a second `result`: a second result on a subscription id makes
                //  the frontend treat the subscription as failed and resubscribe forever.)
                ws.send(
                    JSON.stringify([
                        { id: message.id, type: 'result', success: true, result: null },
                        { id: message.id, type: 'event', event: [] },
                    ]),
                );
                return true;
            case 'config_entries/flow/progress':
                this.sendResponse(ws, message.id, []);
                return true;
            case 'config_entries/get':
                // Devices & Services page asks for config entries (per domain). We have none.
                this.sendResponse(ws, message.id, []);
                return true;
            case 'config_entries/flow/subscribe':
                // Subscription for config flows in progress. We never have any.
                ws.send(
                    JSON.stringify([
                        { id: message.id, type: 'result', success: true, result: null },
                        { id: message.id, type: 'event', event: [] },
                    ]),
                );
                return true;
            case 'manifest/list':
                this.sendResponse(ws, message.id, []);
                return true;
            default:
                return false;
        }
    }
}

export = CompatModule;
