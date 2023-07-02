const WebSocket = require('ws').WebSocket;

class ConversationModule {
    constructor(options) {
        this.adapter = options.adapter;
        this._sendResponse = options.sendResponse;
        this.lang = options.lang;
        this.words = options.words;
        this._timeout = 30000;
        this.conversations = {};
    }

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
            id: this.getVoiceAssistantId()
        };
    }

    getVoiceAssistantId() {
        return 'iobroker';
    }

    makeEvent(eventType, data, id) {
        const t = {
            id: id,
            type: 'event',
            event: {
                type: eventType,
                data: data,
                timestamp: new Date().toISOString()
            }
        };
        return t;
    }

    sendSpeechResponse(text, ws, id, conversationId) {
        ws && ws.send(JSON.stringify(
            [
                this.makeEvent('intent-end', {
                    intent_output: {
                        response: {
                            speech: {
                                plain: {
                                    speech: text,
                                    extra_data: null
                                }
                            },
                            card: {},
                            language: this.lang
                        }
                    },
                    conversation_id: conversationId
                }, id),
                this.makeEvent('run-end', null, id)
            ]
        ));
    }

    async processMessage(ws, message) {
        if (message.type === 'assist_pipeline/pipeline/get') {
            this._sendResponse(ws, message.id, this.getVoiceAssistant());
        } else
        if (message.type === 'assist_pipeline/pipeline/list') {
            this._sendResponse(ws, message.id, {
                pipelines: [this.getVoiceAssistant()],
                preferred_pipeline: this.getVoiceAssistantId()
            });
        } else
        if (message.type === 'conversation/agent/info') {
            // BF: I have no idea what is that
            this._sendResponse(ws, message.id, {onboarding: null, attribution: null});
        } else
        if (message.type === 'assist_pipeline/run') {
            ws._subscribes.conversations = ws._subscribes.conversations || [];
            ws._subscribes.conversations.push(message.id);
            // request is like {"start_stage":"intent","input":{"text":"Test"},"end_stage":"intent","conversation_id":null,"type":"assist_pipeline/run","id":69}
            const conversationId = message.conversation_id || Date.now();
            //expects success result directly.
            this._sendResponse(ws, message.id);

            //now must notify that intent is started:
            // [{"id":52,"type":"event","event":{"type":"run-start","data":{"pipeline":"01h3vxxqe5s5b586jj7vfh10sx","language":"en","runner_data":{"stt_binary_handler_id":null,"timeout":30}},"timestamp":"2023-06-29T09:50:03.024544+00:00"}},{"id":52,"type":"event","event":{"type":"intent-start","data":{"engine":"homeassistant","language":"en","intent_input":"Wie ist das Wetter?"},"timestamp":"2023-06-29T09:50:03.024605+00:00"}}]
            const startMsgs = [
                this.makeEvent('run-start', {
                    pipeline: this.getVoiceAssistantId(),
                    language: this.lang,
                    runner_data: {
                        stt_binary_handler_id: null,
                        timeout: this._timeout / 1000
                    }
                }, message.id),
                this.makeEvent('intent-start', {
                    engine: this.getVoiceAssistant().conversation_engine,
                    language: this.lang,
                    intent_input: message.input ? message.input.text || '' : ''
                }, message.id)
            ];
            ws.send(JSON.stringify(startMsgs));

            // answer must be
            //[{"id":52,"type":"event","event":{"type":"intent-end","data":{"intent_output":{"response":{"speech":{"plain":{"speech":"Sorry, I couldn't understand that","extra_data":null}},"card":{},"language":"en","response_type":"error","data":{"code":"no_intent_match"}},"conversation_id":null}},"timestamp":"2023-06-29T09:50:03.062833+00:00"}},{"id":52,"type":"event","event":{"type":"run-end","data":null,"timestamp":"2023-06-29T09:50:03.062888+00:00"}}]
            this.conversations[conversationId] = {
                id: message.id,
                conversationId,
                timer: setTimeout((messageId) => {
                    delete this.conversations[conversationId];
                    this.sendSpeechResponse(this.words.no_one_hears_you[this.lang] || this.words.no_one_hears_you.en, ws, messageId);
                }, this._timeout, message.id)
            };

            this.adapter.setState('conversation', message.text || message.input ? message.input.text || '' : '');
        }
    }

    onStateChange(id, state, websocketServer) {
        if (state) {
            if (id === this.adapter.namespace + '.conversation') {
                if (state.ack) {
                    // send answer to conversation dialog
                    for (const conversation of Object.values(this.conversations)) {
                        let active = false;
                        if (websocketServer) {
                            for (const client of websocketServer.clients) {
                                if (client._subscribes.conversations && client.readyState === WebSocket.OPEN) {
                                    if (client._subscribes.conversations.includes(conversation.id)) {
                                        active = true;
                                        //found a client with active subscription -> send answer.
                                        conversation.timer && clearTimeout(conversation.timer);
                                        this.sendSpeechResponse(state.val, client, conversation.id, conversation.conversationId);
                                    }
                                }
                            }
                        }

                        //clean up not found conversations.
                        if (!active) {
                            delete this.conversations[conversation.conversationId];
                        }
                    }
                }
            }
        }
    }
}

module.exports = ConversationModule;
