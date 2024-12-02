const WebSocket = require('ws').WebSocket;

/**
 * Handle conversation, i.e., requests to a voice assistant by the frontend.
 */
class ConversationModule {
    /**
     * Constructor.
     *
     * @param options {object} Options with adapter, sendResponse, lang, words
     */
    constructor(options) {
        this.adapter = options.adapter;
        this._sendResponse = options.sendResponse;
        this.lang = options.lang;
        this.words = options.words;
        this._timeout = 30000;
    }

    /**
     * Get the voice assistant object.
     *
     * @returns {{tts_voice: null, tts_language, conversation_language, tts_engine: null, name: string, stt_language: null, conversation_engine: string, id: string, stt_engine: null}} voice assistant object
     */
    getVoiceAssistant() {
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
     *
     * @returns {string} - voice assistant id
     */
    getVoiceAssistantId() {
        return 'iobroker';
    }

    /**
     * Create an event object.
     *
     * @param eventType {string} - event type
     * @param data {object} - event data
     * @param id {number} - event id
     * @returns {{id, type: string, event: {data, type, timestamp: string}}} - event object
     */
    makeEvent(eventType, data, id) {
        return {
            id: id,
            type: 'event',
            event: {
                type: eventType,
                data: data,
                timestamp: new Date().toISOString(),
            },
        };
    }

    /**
     * Send a speech response.
     *
     * @param text {string} - text to send
     * @param ws {WebSocket} - websocket connection of the client to send the response to
     * @param id {number} - id of the request
     * @param conversationId {number} - conversation id
     */
    sendSpeechResponse(text, ws, id, conversationId) {
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
     * Handles:
     * - assist_pipeline/pipeline/get
     * - assist_pipeline/pipeline/list
     * - conversation/agent/info
     * - assist_pipeline/run
     *
     * @param ws - websocket connection of the client that send the message
     * @param message {object} - message object
     * @returns {Promise<boolean>} - true if the message was processed, false otherwise
     */
    async processMessage(ws, message) {
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
            // BF: I have no idea what is that
            this._sendResponse(ws, message.id, { onboarding: null, attribution: null });
            return true;
        } else if (message.type === 'assist_pipeline/run') {
            ws._subscribes.conversations = ws._subscribes.conversations || [];
            // request is like {"start_stage":"intent","input":{"text":"Test"},"end_stage":"intent","conversation_id":null,"type":"assist_pipeline/run","id":69}
            const conversationId = message.conversation_id || Date.now();
            //expects success result directly.
            this._sendResponse(ws, message.id);

            //now must notify that intent is started:
            // [{"id":52,"type":"event","event":{"type":"run-start","data":{"pipeline":"01h3vxxqe5s5b586jj7vfh10sx","language":"en","runner_data":{"stt_binary_handler_id":null,"timeout":30}},"timestamp":"2023-06-29T09:50:03.024544+00:00"}},{"id":52,"type":"event","event":{"type":"intent-start","data":{"engine":"homeassistant","language":"en","intent_input":"Wie ist das Wetter?"},"timestamp":"2023-06-29T09:50:03.024605+00:00"}}]
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
                    message.id,
                ),
                this.makeEvent(
                    'intent-start',
                    {
                        engine: this.getVoiceAssistant().conversation_engine,
                        language: this.lang,
                        intent_input: message.input ? message.input.text || '' : '',
                    },
                    message.id,
                ),
            ];
            ws.send(JSON.stringify(startMsgs));

            // the answer must be
            //[{"id":52,"type":"event","event":{"type":"intent-end","data":{"intent_output":{"response":{"speech":{"plain":{"speech":"Sorry, I couldn't understand that","extra_data":null}},"card":{},"language":"en","response_type":"error","data":{"code":"no_intent_match"}},"conversation_id":null}},"timestamp":"2023-06-29T09:50:03.062833+00:00"}},{"id":52,"type":"event","event":{"type":"run-end","data":null,"timestamp":"2023-06-29T09:50:03.062888+00:00"}}]
            ws._subscribes.conversations.push({
                id: Number(message.id),
                conversationId,
                timer: setTimeout(
                    messageId => {
                        this.sendSpeechResponse(
                            this.words.no_one_hears_you[this.lang] || this.words.no_one_hears_you.en,
                            ws,
                            messageId,
                        );
                    },
                    this._timeout,
                    message.id,
                ),
            });

            this.adapter.setState('conversation', message.text || message.input ? message.input.text || '' : '');
            return true;
        }
        //let the server know we processed the message:
        return false;
    }

    /**
     * Handle ioBroker state change
     *
     * @param id {string} id of the state object
     * @param state {ioBroker.State|null} state object of null if deleted
     * @param websocketServer {WebSocket.Server} websocket server used to send events to connected clients
     */
    onStateChange(id, state, websocketServer) {
        if (state) {
            if (id === `${this.adapter.namespace}.conversation`) {
                if (state.ack) {
                    // send answer to the conversation dialog
                    if (websocketServer) {
                        for (const client of websocketServer.clients) {
                            if (client._subscribes.conversations && client.readyState === WebSocket.OPEN) {
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
     * augment services object with supported service calls from this module.
     *
     * @param services {object} - services object to augment
     */
    augmentServices(services) {
        //TODO: not yet supported... do we need that? What does that?
        services.conversation = {
            process: {
                name: 'Process',
                description: 'Launches a conversation from a transcribed text.',
                fields: {
                    text: {
                        example: 'Turn all lights on',
                        required: true,
                        selector: {
                            text: null,
                        },
                        name: 'Text',
                        description: 'Transcribed text input.',
                    },
                    language: {
                        example: 'NL',
                        selector: {
                            text: null,
                        },
                        name: 'Language',
                        description: 'Language of text. Defaults to server language.',
                    },
                    agent_id: {
                        example: 'homeassistant',
                        selector: {
                            conversation_agent: null,
                        },
                        name: 'Agent',
                        description:
                            'Conversation agent to process your request. The conversation agent is the brains of your assistant. It processes the incoming text commands.',
                    },
                },
                response: {
                    optional: true,
                },
            },
            reload: {
                name: 'Reload',
                description: 'Reloads the intent configuration.',
                fields: {
                    language: {
                        example: 'NL',
                        selector: {
                            text: null,
                        },
                        name: 'Language',
                        description: 'Language to clear cached intents for. Defaults to server language.',
                    },
                    agent_id: {
                        example: 'homeassistant',
                        selector: {
                            conversation_agent: null,
                        },
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
