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
            case 'config/category_registry/list':
                // Categories (per scope) for entities/automations. We have none -> bare array.
                this.sendResponse(ws, message.id, []);
                return true;
            case 'homeassistant/expose_entity/list':
                // Voice-assistant expose settings (Alexa/Google/conversation). None exposed.
                this.sendResponse(ws, message.id, { exposed_entities: {} });
                return true;
            case 'integration/descriptions':
                // Descriptions of integrations available to add. We are not Home Assistant -> none.
                this.sendResponse(ws, message.id, {});
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
            case 'http/config': {
                // The frontend asks for the http settings right after connecting (as an administrator)
                // to see whether a pending configuration has to be reviewed, and shows them on the
                // network page. We have no such settings - the port and SSL belong to the instance
                // configuration - so the answer says "nothing pending, nothing to review".
                const http = {
                    use_x_forwarded_for: false,
                    trusted_proxies: [] as string[],
                    use_x_frame_options: true,
                    ip_ban_enabled: false,
                    login_attempts_threshold: -1,
                };
                this.sendResponse(ws, message.id, {
                    stable: http,
                    pending: null,
                    active_config_type: 'storage',
                    default: http,
                });
                return true;
            }
            case 'manifest/list':
                this.sendResponse(ws, message.id, []);
                return true;
            default:
                return false;
        }
    }
}

export = CompatModule;
