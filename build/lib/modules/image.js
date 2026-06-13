"use strict";
const axios = require("axios");
const mime = require("mime");
class ImageModule {
  adapter;
  entityData;
  getUserIDFromName;
  resolveUser;
  constructor(options) {
    this.adapter = options.adapter;
    this.entityData = options.entityData;
    this.getUserIDFromName = options.getUserIDFromName;
    this.resolveUser = options.resolveUser;
  }
  /**
   * Express handler for the camera proxy routes. Resolves the image and writes it to the response.
   *
   * @param req - incoming request
   * @param res - response to send the image with
   */
  async replyWithImage(req, res) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    this.adapter.log.debug(
      `Get image for ${req.url} and entity ${(_a = req.params) == null ? void 0 : _a.entity_id} with token=${(_b = req.query) == null ? void 0 : _b.token} and signed=${(_c = req.query) == null ? void 0 : _c.signed}`
    );
    try {
      const data = await this.getImage(
        (_d = req.params) == null ? void 0 : _d.entity_id,
        ((_e = req.query) == null ? void 0 : _e.token) || "empty",
        ((_f = req.params) == null ? void 0 : _f.entity_id) ? (_g = req.query) == null ? void 0 : _g.signed : (_h = req.query) == null ? void 0 : _h.token,
        req.url,
        req._user
      );
      res.setHeader("content-type", data.content_type);
      let content = data.content;
      if (!data.content_type.includes("svg")) {
        content = Buffer.from(data.content, "base64");
      }
      res.send(content);
    } catch (err) {
      this.adapter.log.warn(`Error in _getImage: ${err} - ${err.stack}`);
      res.status(404).json({ error: String(err) });
    }
  }
  /**
   * Read an image referenced by an entity (or a direct adapter file url) and return it base64.
   *
   * @param entity_id - id of the entity
   * @param token - access token for the entity itself
   * @param access_token - access token to check if the user is logged in
   * @param url - optional url to the image, if no entity is used
   * @param reqUser - user that requested the image
   * @returns image as base64 string with content type
   */
  async getImage(entity_id, token, access_token, url, reqUser) {
    const entity = this.entityData.entityId2Entity[entity_id];
    const userName = this.resolveUser({
      entityId: entity_id,
      token,
      accessToken: access_token,
      url,
      reqUser,
      entity
    });
    let id;
    if (entity == null ? void 0 : entity.context.STATE.getId) {
      id = entity.context.STATE.getId;
    } else if (entity == null ? void 0 : entity.context.ATTRIBUTES) {
      const attr = entity.context.ATTRIBUTES.find((a) => a.attribute === "url");
      if (attr) {
        id = attr.getId;
      }
    }
    if (id) {
      const user = this.getUserIDFromName(userName);
      const state = await this.adapter.getForeignStateAsync(id, { user });
      if (state && state.val && typeof state.val === "string") {
        const val = state.val.split("?")[0] || "";
        if (val.startsWith("/adapter/")) {
          url = state.val;
        } else if (state.val.startsWith("data")) {
          const dataUrl = state.val;
          const mimeType = dataUrl.substring(dataUrl.indexOf(":") + 1, dataUrl.indexOf(";"));
          const encoding = dataUrl.substring(dataUrl.indexOf(";") + 1, dataUrl.indexOf(","));
          if (encoding.localeCompare("base64", void 0, { sensitivity: "base" }) !== 0) {
            this.adapter.log.warn(`Wrong encoding: ${encoding}`);
            throw new Error(`Wrong encoding: ${encoding}`);
          }
          return { content_type: mimeType || "image/jpeg", content: dataUrl.split(",")[1] };
        } else {
          const resp = await axios(state.val, { responseType: "arraybuffer" });
          return {
            content_type: (mime.getType || mime.lookup).call(mime, val) || "image/jpeg",
            content: Buffer.from(resp.data, "binary").toString("base64")
          };
        }
      } else {
        throw new Error(`State ${id} does not contain url to image`);
      }
    }
    if (url) {
      let urlStr = url.replace(/^\/adapter\/([a-zA-Z0-9-_]+)(.admin)?\//, "/$1.admin/");
      const parts = urlStr.split("/");
      parts.shift();
      const fileId = parts.shift();
      urlStr = parts.join("/");
      const pos = urlStr.indexOf("?");
      if (pos !== -1) {
        urlStr = urlStr.substring(0, pos);
      }
      let image;
      try {
        image = await this.adapter.readFileAsync(fileId, urlStr);
      } catch (err) {
        throw new Error(`Cannot download image: ${err}`);
      }
      if (image) {
        if (image.file === null || image.file === void 0) {
          throw new Error("File empty or not found");
        }
        const mimeType = image.mimeType || (mime.getType || mime.lookup).call(mime, urlStr) || "image/jpeg";
        return { content_type: mimeType, content: image.file.toString("base64") };
      }
    }
    throw new Error(`No url attribute found for ${entity_id} or no url supplied ${url}`);
  }
}
module.exports = ImageModule;
//# sourceMappingURL=image.js.map
