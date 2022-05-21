const expect = require("chai").expect;

const utils = require("./utils");

const entityData = require("./../dataSingleton");
entityData.adapter.namespace = "lovelace.1";

describe("converters/friendly_name", function () {
  beforeEach(function () {
    entityData.lang = "en";
  });

  describe("friendly (display) name", function () {
    it("from ioBroker object ID", function () {
      const entityType = "does-not-matter";

      const obj = {
        _id: "ioBroker object ID",
      };

      const entity = utils.processCommon(null, null, null, obj, entityType);

      expect(entity.attributes.friendly_name).to.equal(obj._id);
    });

    it("from room and function", function () {
      const entityType = "does-not-matter";

      const obj = {
        _id: "ignored",
      };

      const entity = utils.processCommon(
        null,
        "room",
        "function",
        obj,
        entityType
      );

      expect(entity.attributes.friendly_name).to.equal("room function");
    });

    it("from common.name", function () {
      const entityType = "does-not-matter";

      const obj = {
        common: {
          name: "a common name",
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

      expect(entity.attributes.friendly_name).to.equal(obj.common.name);
    });

    it("from common.name in English fallback language", function () {
      const entityType = "does-not-matter";

      const obj = {
        common: {
          name: {
            en: "English",
            de: "German",
          },
        },
        _id: "ignored",
      };

      entityData.lang = undefined;

      const entity = utils.processCommon(
        null,
        "ignored",
        "ignored",
        obj,
        entityType
      );

      expect(entity.attributes.friendly_name).to.equal(obj.common.name.en);
    });

    it("from common.name in instance-specific language", function () {
      const entityType = "does-not-matter";

      const obj = {
        common: {
          name: {
            en: "English",
            de: "German",
          },
        },
        _id: "ignored",
      };

      entityData.lang = "de";

      const entity = utils.processCommon(
        null,
        "ignored",
        "ignored",
        obj,
        entityType
      );

      expect(entity.attributes.friendly_name).to.equal(obj.common.name.de);
    });

    it("from common.smartName", function () {
      const entityType = "does-not-matter";

      const obj = {
        common: {
          name: "ignored",
          smartName: "a smart name",
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

      expect(entity.attributes.friendly_name).to.equal(obj.common.smartName);
    });

    it("from common.smartName in fallback language", function () {
      const entityType = "does-not-matter";

      const obj = {
        common: {
          name: "ignored",
          smartName: {
            en: "English",
            de: "German",
          },
        },
        _id: "ignored",
      };

      entityData.lang = undefined;

      const entity = utils.processCommon(
        null,
        "ignored",
        "ignored",
        obj,
        entityType
      );

      expect(entity.attributes.friendly_name).to.equal(obj.common.smartName.en);
    });

    it("from common.smartName in instance-specific language", function () {
      const entityType = "does-not-matter";

      const obj = {
        common: {
          name: "ignored",
          smartName: {
            en: "English",
            de: "German",
          },
        },
        _id: "ignored",
      };

      entityData.lang = "de";

      const entity = utils.processCommon(
        null,
        "ignored",
        "ignored",
        obj,
        entityType
      );

      expect(entity.attributes.friendly_name).to.equal(obj.common.smartName.de);
    });

    it("ignores name of manually created entity", function () {
      const entityType = "does-not-matter";

      const obj = {
        common: {
          name: "ignored",
          smartName: "should be used",
          custom: {
            "lovelace.1": {
              name: "should be ignored",
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

      expect(entity.attributes.friendly_name).to.equal(obj.common.smartName);
    });

    it("from name argument", function () {
      const entityType = "does-not-matter";
      const predefinedName = "predefined name";

      const obj = {
        common: {
          name: "ignored",
          smartName: "ignored",
        },
        _id: "ignored",
      };

      const entity = utils.processCommon(
        predefinedName,
        "ignored",
        "ignored",
        obj,
        entityType
      );

      expect(entity.attributes.friendly_name).to.equal(predefinedName);
    });
  });
});
