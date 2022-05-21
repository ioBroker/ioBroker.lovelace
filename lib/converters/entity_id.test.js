const expect = require("chai").expect;

const utils = require("./utils");

const entityData = require("./../dataSingleton");
entityData.adapter.namespace = "lovelace.1";

describe("converters/entity_id", function () {
  beforeEach(function () {
    entityData.lang = "en";
  });

  describe("entity ID", function () {
    it("from ioBroker object ID", function () {
      const entityType = "does-not-matter";

      const obj = {
        _id: "ioBroker object ID",
      };

      const entity = utils.processCommon(null, null, null, obj, entityType);

      expect(entity.entity_id).to.equal(
        `${entityType}.${obj._id.replace(/\s/g, "_")}`
      );
    });

    it("from common.name", function () {
      const entityType = "does-not-matter";

      const obj = {
        common: {
          name: "a common name",
        },
        _id: "ignored",
      };

      const entity = utils.processCommon(null, null, null, obj, entityType);

      expect(entity.entity_id).to.equal(
        `${entityType}.${obj.common.name.replace(/\s/g, "_")}`
      );
    });

    it("from English common.name", function () {
      const entityType = "does-not-matter";

      const obj = {
        common: {
          name: {
            en: "a common name",
            de: "ignored",
          },
        },
        _id: "ignored",
      };

      entityData.lang = "de";

      const entity = utils.processCommon(null, null, null, obj, entityType);

      expect(entity.entity_id).to.equal(
        `${entityType}.${obj.common.name.en.replace(/\s/g, "_")}`
      );
    });

    it("from instance-specific name", function () {
      const entityType = "does-not-matter";

      const obj = {
        common: {
          name: "ignored",
          custom: {
            [entityData.adapter.namespace]: {
              name: "instance-specific name",
            },
          },
        },
        _id: "ignored",
      };

      const entity = utils.processCommon(
        null,
        "ignored",
        "ignored",
        obj,
        entityType
      );

      expect(entity.entity_id).to.equal(
        `${entityType}.${obj.common.custom["lovelace.1"].name.replace(
          /\W/g,
          "_"
        )}`
      );
    });

    xit("from predefined entity ID argument", function () {
      const entityType = "does-not-matter";
      const predefinedEntityId = "predefined id";

      const obj = {
        common: {
          // TODO
          name: "used as the 'idPart' but why when predefinedEntityId is given?",
        },
        _id: "ignored",
      };

      const entity = utils.processCommon(
        null,
        null,
        null,
        obj,
        entityType,
        predefinedEntityId
      );

      expect(entity.entity_id).to.equal(`${entityType}.${obj.common.name}`);
    });

    it("from predefined entity ID argument with dots", function () {
      const entityType = "does-not-matter";
      const predefinedEntityId = "entity-type.predefined id";

      const obj = {
        common: {
          name: "ignored",
        },
        _id: "ignored",
      };

      const entity = utils.processCommon(
        null,
        null,
        null,
        obj,
        entityType,
        predefinedEntityId
      );

      expect(entity.entity_id).to.equal(predefinedEntityId.replace(/\s/g, "_"));
    });

    it("from predefined entity ID argument with illegal characters", function () {
      const entityType = "does-not-matter";
      const predefinedEntityId =
        "entity-type.predefined id # is an illegal char";
      const expectedPredefinedEntityId =
        "entity-type.predefined_id_is_an_illegal_char";

      const obj = {
        common: {
          name: "ignored",
        },
        _id: "ignored",
      };

      const entity = utils.processCommon(
        null,
        null,
        null,
        obj,
        entityType,
        predefinedEntityId
      );

      expect(entity.entity_id).to.equal(expectedPredefinedEntityId);
    });
  });
});
