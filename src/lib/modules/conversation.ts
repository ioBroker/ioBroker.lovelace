const WS_OPEN = 1; // WebSocket.OPEN

type SendResponseFn = (ws: unknown, id: unknown, result?: unknown) => void;

interface ConversationSubscription {
    id: number;
    conversationId: number | string;
    timer: ReturnType<typeof setTimeout>;
}

interface WsClient {
    send(data: string): void;
    readyState: number;
    _subscribes: Record<string, ConversationSubscription[]>;
    __auth?: { username?: string };
}

interface WsServer {
    clients: Set<WsClient>;
}

/**
 * Handle conversation, i.e., requests to a voice assistant by the frontend.
 */
class ConversationModule {
    private adapter: ioBroker.Adapter;
    private readonly _sendResponse: SendResponseFn;
    private readonly lang: string;
    private words: Record<string, Record<string, string>>;
    private readonly _timeout: number;

    /**
     * Constructor.
     *
     * @param options - Options with adapter, sendResponse, lang, words
     * @param options.adapter adapter instance to use for state changes
     * @param options.sendResponse sendResponse method to talk to clients
     * @param options.lang language setting
     * @param options.words translation data
     */
    constructor(options: {
        adapter: ioBroker.Adapter;
        sendResponse: SendResponseFn;
        lang: string;
        words: Record<string, Record<string, string>>;
    }) {
        this.adapter = options.adapter;
        this._sendResponse = options.sendResponse;
        this.lang = options.lang;
        this.words = options.words;
        this._timeout = 30000;
    }

    /**
     * Get the voice assistant object.
     */
    getVoiceAssistant(): Record<string, unknown> {
        return {
            conversation_engine: 'iobroker',
            conversation_language: this.lang,
            name: 'ioBroker',
            stt_engine: null,
            stt_language: null,
            tts_engine: null,
            tts_language: this.lang,
            tts_voice: null,
            id: this.getVoiceAssistantId(),
        };
    }

    /**
     * Get the voice assistant id.
     */
    getVoiceAssistantId(): string {
        return 'iobroker';
    }

    /**
     * Create an event object.
     *
     * @param eventType type of event
     * @param data data to send in event
     * @param id id of subscription
     */
    makeEvent(eventType: string, data: unknown, id: number): Record<string, unknown> {
        return {
            id,
            type: 'event',
            event: {
                type: eventType,
                data,
                timestamp: new Date().toISOString(),
            },
        };
    }

    /**
     * Send a speech response.
     *
     * @param text text to respond with
     * @param ws websocket connection to client
     * @param id id of message that requested a response
     * @param conversationId conversation id to send respond to
     */
    sendSpeechResponse(text: unknown, ws: WsClient, id: number, conversationId?: number | string): void {
        ws &&
            ws.send(
                JSON.stringify([
                    this.makeEvent(
                        'intent-end',
                        {
                            intent_output: {
                                response: {
                                    speech: {
                                        plain: {
                                            speech: text,
                                            extra_data: null,
                                        },
                                    },
                                    card: {},
                                    language: this.lang,
                                },
                            },
                            conversation_id: conversationId,
                        },
                        id,
                    ),
                    this.makeEvent('run-end', null, id),
                ]),
            );
    }

    /**
     * Process a message.
     *
     * @param ws websocket connection to client
     * @param message message received
     */
    async processMessage(ws: WsClient, message: Record<string, unknown>): Promise<boolean> {
        if (message.type === 'assist_pipeline/pipeline/get') {
            this._sendResponse(ws, message.id, this.getVoiceAssistant());
            return true;
        } else if (message.type === 'assist_pipeline/pipeline/list') {
            this._sendResponse(ws, message.id, {
                pipelines: [this.getVoiceAssistant()],
                preferred_pipeline: this.getVoiceAssistantId(),
            });
            return true;
        } else if (message.type === 'conversation/agent/info') {
            this._sendResponse(ws, message.id, { onboarding: null, attribution: null });
            return true;
        } else if (message.type === 'assist_pipeline/run') {
            ws._subscribes.conversations = ws._subscribes.conversations || [];
            const conversationId = (message.conversation_id as number | string) || Date.now();
            this._sendResponse(ws, message.id);

            const startMsgs = [
                this.makeEvent(
                    'run-start',
                    {
                        pipeline: this.getVoiceAssistantId(),
                        language: this.lang,
                        runner_data: {
                            stt_binary_handler_id: null,
                            timeout: this._timeout / 1000,
                        },
                    },
                    message.id as number,
                ),
                this.makeEvent(
                    'intent-start',
                    {
                        engine: this.getVoiceAssistant().conversation_engine,
                        language: this.lang,
                        intent_input: message.input ? (message.input as Record<string, string>).text || '' : '',
                    },
                    message.id as number,
                ),
            ];
            ws.send(JSON.stringify(startMsgs));

            ws._subscribes.conversations.push({
                id: Number(message.id),
                conversationId,
                timer: setTimeout(
                    (messageId: number) => {
                        this.sendSpeechResponse(
                            this.words.no_one_hears_you[this.lang] || this.words.no_one_hears_you.en,
                            ws,
                            messageId,
                        );
                    },
                    this._timeout,
                    Number(message.id),
                ),
            });

            await this.adapter.setState(
                'conversation',
                (message.text as string) || (message.input ? (message.input as Record<string, string>).text || '' : ''),
            );
            return true;
        }
        return false;
    }

    /**
     * Handle ioBroker state change.
     *
     * @param id id of object whose state changed
     * @param state state that changed
     * @param websocketServer websocket server to talk to all clients
     */
    onStateChange(id: string, state: ioBroker.State | null | undefined, websocketServer: WsServer): void {
        if (state) {
            if (id === `${this.adapter.namespace}.conversation`) {
                if (state.ack) {
                    if (websocketServer) {
                        for (const client of websocketServer.clients) {
                            if (client._subscribes.conversations && client.readyState === WS_OPEN) {
                                for (const conversation of client._subscribes.conversations) {
                                    conversation.timer && clearTimeout(conversation.timer);
                                    this.sendSpeechResponse(
                                        state.val,
                                        client,
                                        conversation.id,
                                        conversation.conversationId,
                                    );
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    /**
     * Augment services object with supported service calls from this module.
     *
     * @param services to report to frontend
     */
    augmentServices(services: Record<string, unknown>): void {
        services.conversation = {
            process: {
                name: 'Process',
                description: 'Launches a conversation from a transcribed text.',
                fields: {
                    text: {
                        example: 'Turn all lights on',
                        required: true,
                        selector: { text: null },
                        name: 'Text',
                        description: 'Transcribed text input.',
                    },
                    language: {
                        example: 'NL',
                        selector: { text: null },
                        name: 'Language',
                        description: 'Language of text. Defaults to server language.',
                    },
                    agent_id: {
                        example: 'homeassistant',
                        selector: { conversation_agent: null },
                        name: 'Agent',
                        description:
                            'Conversation agent to process your request. The conversation agent is the brains of your assistant. It processes the incoming text commands.',
                    },
                },
                response: { optional: true },
            },
            reload: {
                name: 'Reload',
                description: 'Reloads the intent configuration.',
                fields: {
                    language: {
                        example: 'NL',
                        selector: { text: null },
                        name: 'Language',
                        description: 'Language to clear cached intents for. Defaults to server language.',
                    },
                    agent_id: {
                        example: 'homeassistant',
                        selector: { conversation_agent: null },
                        name: 'Agent',
                        description: 'Conversation agent to reload.',
                    },
                },
            },
        };
        delete services.conversation;
    }
}

module.exports = ConversationModule;
