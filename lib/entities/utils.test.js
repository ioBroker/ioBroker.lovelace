/* global describe, it, beforeEach */
const expect = require('chai').expect;

const utils = require('./utils');

const entityData = require('./../dataSingleton');
entityData.adapter.namespace = 'lovelace.1';

function expectEntity(entity, entity_id, id, name, type) {
    expect(entity).to.have.property('entity_id', entity_id);
    expect(entity).to.have.property('attributes');
    expect(entity).to.have.nested.property('attributes.friendly_name', name);
    expect(entity).to.have.property('context');
    expect(entity).to.have.nested.property('context.id', id);
    expect(entity).to.have.nested.property('context.type', type);
    expect(entity).to.have.nested.property('context.ids');
    expect(entity.context.ids).to.have.members([id]);
}

describe('converters/utils', function () {
    describe('processCommon', function () {
        beforeEach(function () {
            entityData.lang = 'en';
        });

        describe('entity ID', function () {
            it('from ioBroker object ID', function () {
                const entityType = 'does-not-matter';

                const obj = {
                    _id: 'ioBroker.object.ID',
                };

                const entity = utils.processCommon(null, null, null, obj, entityType);

                expect(entity.entity_id).to.equal(`${entityType}.${obj._id.replace(/[^a-z\d]/gi, '_')}`);
            });

            it('from common.name', function () {
                const entityType = 'does-not-matter';

                const obj = {
                    common: {
                        name: 'a common name',
                    },
                    _id: 'ignored',
                };

                const entity = utils.processCommon(null, null, null, obj, entityType);

                expect(entity.entity_id).to.equal(`${entityType}.${obj.common.name.replace(/[^a-z\d]/gi, '_')}`);
            });

            it('from English common.name', function () {
                const entityType = 'does-not-matter';

                const obj = {
                    common: {
                        name: {
                            en: 'a common name',
                            de: 'ignored',
                        },
                    },
                    _id: 'ignored',
                };

                entityData.lang = 'de';

                const entity = utils.processCommon(null, null, null, obj, entityType);

                expect(entity.entity_id).to.equal(`${entityType}.${obj.common.name.en.replace(/[^a-z\d]/gi, '_')}`);
            });

            it('from non english common.name if only one language is present', function () {
                //this is necessary for devices created by device adapter.
                const entityType = 'does-not-matter';

                const obj = {
                    common: {
                        name: {
                            ru: 'a common name',
                        },
                    },
                    _id: 'ignored',
                };

                entityData.lang = 'de';

                const entity = utils.processCommon(null, null, null, obj, entityType);

                expect(entity.entity_id).to.equal(`${entityType}.${obj.common.name.ru.replace(/[^a-z\d]/gi, '_')}`);
            });

            it('from instance-specific name', function () {
                const entityType = 'does-not-matter';

                const obj = {
                    common: {
                        name: 'use_name_in_process_common',
                        custom: {
                            [entityData.adapter.namespace]: {
                                name: 'ignored, only used for manual entities',
                            },
                        },
                    },
                    _id: 'ignored',
                };

                const entity = utils.processCommon(null, 'ignored', 'ignored', obj, entityType);

                expect(entity.entity_id).to.equal(`${entityType}.${obj.common.name.replace(/[^a-z\d]/gi, '_')}`);
            });

            it('ignores predefined entity IDs that do not contain a dot', function () {
                const entityType = 'does-not-matter';
                const predefinedEntityId = 'predefined id is ignored because there is no dot';

                const obj = {
                    common: {
                        name: 'this is used instead',
                    },
                    _id: 'ignored',
                };

                const entity = utils.processCommon(null, null, null, obj, entityType, predefinedEntityId);

                expect(entity.entity_id).to.equal(`${entityType}.${obj.common.name.replace(/[^a-z\d]/gi, '_')}`);
            });

            it('from predefined entity ID argument with dots', function () {
                const entityType = 'does-not-matter';
                const predefinedEntityId = 'entity-type.predefined id';

                const obj = {
                    common: {
                        name: 'ignored',
                    },
                    _id: 'ignored',
                };

                const entity = utils.processCommon(null, null, null, obj, entityType, predefinedEntityId);

                expect(entity.entity_id).to.equal(predefinedEntityId.replace(/\s/g, '_'));
            });

            it('from predefined entity ID argument with illegal characters', function () {
                const entityType = 'does-not-matter';
                const predefinedEntityId = 'entity-type.predefined id # is an illegal char';
                const expectedPredefinedEntityId = 'entity-type.predefined_id_is_an_illegal_char';

                const obj = {
                    common: {
                        name: 'ignored',
                    },
                    _id: 'ignored',
                };

                const entity = utils.processCommon(null, null, null, obj, entityType, predefinedEntityId);

                expect(entity.entity_id).to.equal(expectedPredefinedEntityId);
            });

            it('ignores common.smartName', function () {
                const entityType = 'does-not-matter';

                const obj = {
                    common: {
                        name: 'a common name',
                        smartName: 'ignored',
                    },
                    _id: 'ignored',
                };

                const entity = utils.processCommon(null, null, null, obj, entityType);

                expect(entity.entity_id).to.equal(`${entityType}.${obj.common.name.replace(/[^a-z\d]/gi, '_')}`);
            });
        });

        describe('friendly (display) name', function () {
            it('from ioBroker object ID', function () {
                const entityType = 'does-not-matter';

                const obj = {
                    _id: 'ioBroker object ID',
                };

                const entity = utils.processCommon(null, null, null, obj, entityType);

                expect(entity.attributes.friendly_name).to.equal(obj._id);
            });

            it('from room and function', function () {
                const entityType = 'does-not-matter';

                const obj = {
                    _id: 'ignored',
                };

                const entity = utils.processCommon(null, 'room', 'function', obj, entityType);

                expect(entity.attributes.friendly_name).to.equal('room function');
            });

            it('from common.name', function () {
                const entityType = 'does-not-matter';

                const obj = {
                    common: {
                        name: 'a common name',
                    },
                    _id: 'ignored',
                };

                const entity = utils.processCommon(null, 'ignored', 'ignored', obj, entityType);

                expect(entity.attributes.friendly_name).to.equal(obj.common.name);
            });

            it('from common.name in English fallback language', function () {
                const entityType = 'does-not-matter';

                const obj = {
                    common: {
                        name: {
                            en: 'English',
                            de: 'German',
                        },
                    },
                    _id: 'ignored',
                };

                entityData.lang = undefined;

                const entity = utils.processCommon(null, 'ignored', 'ignored', obj, entityType);

                expect(entity.attributes.friendly_name).to.equal(obj.common.name.en);
            });

            it('from common.name in instance-specific language', function () {
                const entityType = 'does-not-matter';

                const obj = {
                    common: {
                        name: {
                            en: 'English',
                            de: 'German',
                        },
                    },
                    _id: 'ignored',
                };

                entityData.lang = 'de';

                const entity = utils.processCommon(null, 'ignored', 'ignored', obj, entityType);

                expect(entity.attributes.friendly_name).to.equal(obj.common.name.de);
            });

            it('from common.smartName', function () {
                const entityType = 'does-not-matter';

                const obj = {
                    common: {
                        name: 'ignored',
                        smartName: 'a smart name',
                    },
                    _id: 'ignored',
                };

                const entity = utils.processCommon(null, 'ignored', 'ignored', obj, entityType);

                expect(entity.attributes.friendly_name).to.equal(obj.common.smartName);
            });

            it('from common.smartName in fallback language', function () {
                const entityType = 'does-not-matter';

                const obj = {
                    common: {
                        name: 'ignored',
                        smartName: {
                            en: 'English',
                            de: 'German',
                        },
                    },
                    _id: 'ignored',
                };

                entityData.lang = undefined;

                const entity = utils.processCommon(null, 'ignored', 'ignored', obj, entityType);

                expect(entity.attributes.friendly_name).to.equal(obj.common.smartName.en);
            });

            it('from common.smartName in instance-specific language', function () {
                const entityType = 'does-not-matter';

                const obj = {
                    common: {
                        name: 'ignored',
                        smartName: {
                            en: 'English',
                            de: 'German',
                        },
                    },
                    _id: 'ignored',
                };

                entityData.lang = 'de';

                const entity = utils.processCommon(null, 'ignored', 'ignored', obj, entityType);

                expect(entity.attributes.friendly_name).to.equal(obj.common.smartName.de);
            });

            it('falls back to common.name if common.smartName is not available in fallback language', function () {
                const entityType = 'does-not-matter';

                const obj = {
                    common: {
                        name: 'a common name',
                        smartName: {
                            de: 'ignored',
                        },
                    },
                    _id: 'ignored',
                };

                entityData.lang = 'requested language that is not available';

                const entity = utils.processCommon(null, 'ignored', 'ignored', obj, entityType);

                expect(entity.attributes.friendly_name).to.equal(obj.common.name);
            });

            it('falls back to room and function if common.smartName and common.name are not available in fallback language', function () {
                const entityType = 'does-not-matter';

                const obj = {
                    common: {
                        name: {
                            de: 'ignored',
                        },
                        smartName: {
                            de: 'ignored',
                        },
                    },
                    _id: 'ignored',
                };

                entityData.lang = 'requested language that is not available';

                const entity = utils.processCommon(null, 'room', 'function', obj, entityType);

                expect(entity.attributes.friendly_name).to.equal('room function');
            });

            it('falls back to ioBroker object id if common.smartName, common.name, room and function are not available in fallback language', function () {
                const entityType = 'does-not-matter';

                const obj = {
                    common: {
                        name: {
                            de: 'ignored',
                        },
                        smartName: {
                            de: 'ignored',
                        },
                    },
                    _id: 'ioBroker object ID',
                };

                entityData.lang = 'requested language that is not available';

                const entity = utils.processCommon(null, null, null, obj, entityType);

                expect(entity.attributes.friendly_name).to.equal(obj._id);
            });

            it('ignores name of manually created entity', function () {
                const entityType = 'does-not-matter';

                const obj = {
                    common: {
                        name: 'ignored',
                        smartName: 'should be used',
                        custom: {
                            [entityData.adapter.namespace]: {
                                name: 'should be ignored',
                            },
                        },
                    },
                    _id: 'ignored',
                };

                const entity = utils.processCommon(null, 'ignored', 'ignored', obj, entityType);

                expect(entity.attributes.friendly_name).to.equal(obj.common.smartName);
            });

            it('from name argument', function () {
                const entityType = 'does-not-matter';
                const predefinedName = 'predefined name';

                const obj = {
                    common: {
                        name: 'ignored',
                        smartName: 'ignored',
                    },
                    _id: 'ignored',
                };

                const entity = utils.processCommon(predefinedName, 'ignored', 'ignored', obj, entityType);

                expect(entity.attributes.friendly_name).to.equal(predefinedName);
            });
        });
    });

    it('processCommon -> id from common.name', function () {
        const id = 'test.0.socket';
        const entity_id = 'switch.Some_Socket';
        const obj = {
            type: 'device',
            common: {
                name: 'Some Socket',
            },
            native: {},
            _id: id,
        };
        const entity = utils.processCommon(null, null, null, obj, 'switch');
        expectEntity(entity, entity_id, id, obj.common.name, 'switch');
    });

    it('processCommon -> id from name argument', function () {
        const id = 'test.0.other_socket';
        const entity_id = 'switch.Some_other_Socket';
        const name = 'Some other Socket';
        const obj = {
            type: 'device',
            common: {
                name: 'Some other Socket',
            },
            native: {},
            _id: id,
        };
        const entity = utils.processCommon(name, null, null, obj, 'switch');
        expectEntity(entity, entity_id, id, name, 'switch');
    });

    it('processCommon -> id from room & func', function () {
        const id = 'test.0.light';
        const entity_id = 'light.test_0_light'; //id is derived from object id.
        const room = 'Room1';
        const func = 'Light';
        const obj = {
            type: 'device',
            common: {},
            native: {},
            _id: id,
        };
        const entity = utils.processCommon(null, room, func, obj, 'light');
        expectEntity(entity, entity_id, id, 'Room1 Light', 'light');
    });

    it('processCommon -> predefined id', function () {
        const id = 'test.0.airCondition';
        const entity_id = 'climate.Kitchen';
        const name = 'AirCon Kitchen Smart';
        const obj = {
            type: 'device',
            common: {
                name: name,
                smartName: name, //smartName test won't work. SmartName is extracted before and set as friendly name. Hm.
            },
            native: {},
            _id: id,
        };
        const entity = utils.processCommon(null, null, null, obj, 'climate', entity_id);
        expectEntity(entity, entity_id, id, name, 'climate');
    });

    it('processCommon -> predefined id with illegal characters', function () {
        const id = 'test.0.airCondition';
        const entity_id = 'climate.Kitchen.illegal#';
        const name = 'AirCon Kitchen Smart';
        const obj = {
            type: 'device',
            common: {
                name: name,
            },
            native: {},
            _id: id,
        };
        const entity = utils.processCommon(null, null, null, obj, 'climate', entity_id);
        expectEntity(entity, 'climate.Kitchen_illegal_', id, name, 'climate');
    });

    it('processCommon -> manual name', function () {
        const id = 'test.0.airCondition';
        const commonName = 'The device name';
        const entity_id = 'light.Kitchen';
        const name = 'Manual_defined_name';
        const obj = {
            type: 'device',
            common: {
                name: commonName,
                custom: {
                    'lovelace.1': {
                        name: name,
                    },
                },
            },
            native: {},
            _id: id,
        };

        // Have type overwritten by manually specified id.
        const entity = utils.processCommon(null, null, null, obj, 'climate', entity_id);

        expectEntity(entity, entity_id, id, commonName, 'light');
        expect(entity.attributes.unit_of_measurement, '%');
    });

    it('processCommon -> unit', function () {
        const id = 'test.0.airCondition.unit';
        const commonName = 'The device name';
        const entity_id = 'light.Kitchen_Unit';
        const name = 'Manual_defined_name';
        const obj = {
            type: 'device',
            common: {
                name: commonName,
                custom: {
                    'lovelace.1': {
                        name: name,
                    },
                },
                unit: '%',
            },
            native: {},
            _id: id,
        };

        // Have type overwritten by manually specified id.
        const entity = utils.processCommon(null, null, null, obj, 'climate', entity_id);

        expectEntity(entity, entity_id, id, commonName, 'light');
        expect(entity.attributes.unit_of_measurement, '%');
    });

    it('processCommon -> icon adapter', function () {
        const id = 'test.0.light.icon';
        const entity_id = 'light.test_0_light_icon'; //id is derived from object id.
        const room = 'Room1';
        const func = 'Light_Icon';
        const obj = {
            type: 'device',
            common: {
                icon: 'img/basiczbr3.png',
            },
            native: {},
            _id: id,
        };
        const entity = utils.processCommon(null, room, func, obj, 'light');
        expect(entity.attributes.entity_picture, '/adapter/test/0/img/basiczbr3.png');
        expectEntity(entity, entity_id, id, 'Room1 Light_Icon', 'light');
    });

    it('processCommon -> icon url', function () {
        const id = 'test.0.light.icon_url';
        const entity_id = 'light.test_0_light_icon_url'; //id is derived from object id.
        const room = 'Room1';
        const func = 'Light_Icon_url';
        const obj = {
            type: 'device',
            common: {
                icon: 'http://some.server/img/basiczbr3.png',
            },
            native: {},
            _id: id,
        };
        const entity = utils.processCommon(null, room, func, obj, 'light');
        expect(entity.attributes.entity_picture, obj.common.icon);
        expectEntity(entity, entity_id, id, 'Room1 Light_Icon_url', 'light');
    });
});
