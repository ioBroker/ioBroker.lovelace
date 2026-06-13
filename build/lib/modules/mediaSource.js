"use strict";
const IMAGE_FOLDER = "uploaded_images";
const CARDS_FOLDER = "cards";
const ROOT = "media-source://";
const SRC_IMAGES = "media-source://image_upload";
const SRC_CARDS = "media-source://lovelace_cards";
function mediaClassForFile(name) {
  var _a;
  const ext = ((_a = name.split(".").pop()) == null ? void 0 : _a.toLowerCase()) || "";
  if (["png", "jpg", "jpeg", "gif", "webp", "svg", "bmp", "ico", "avif"].includes(ext)) {
    const subtype = ext === "jpg" ? "jpeg" : ext === "svg" ? "svg+xml" : ext;
    return { media_class: "image", media_content_type: `image/${subtype}` };
  }
  if (["mp4", "webm", "ogv", "mov", "mkv"].includes(ext)) {
    return { media_class: "video", media_content_type: `video/${ext}` };
  }
  if (["mp3", "wav", "ogg", "flac", "m4a", "aac"].includes(ext)) {
    return { media_class: "music", media_content_type: `audio/${ext}` };
  }
  return { media_class: "document", media_content_type: "application/octet-stream" };
}
class MediaSourceModule {
  adapter;
  sendResponse;
  /**
   * @param options - options
   * @param options.adapter - ioBroker adapter instance (for file storage access)
   * @param options.sendResponse - function to send a response to a client
   */
  constructor(options) {
    this.adapter = options.adapter;
    this.sendResponse = options.sendResponse;
  }
  /**
   * Handle a media_source message.
   *
   * @param ws - websocket connection
   * @param message - the message
   * @returns true if handled
   */
  async processMessage(ws, message) {
    const type = message.type;
    if (type === "media_source/browse_media") {
      const id = message.media_content_id || ROOT;
      this.sendResponse(ws, message.id, await this._browse(id));
      return true;
    }
    if (type === "media_source/resolve_media") {
      this.sendResponse(ws, message.id, await this._resolve(message.media_content_id));
      return true;
    }
    if (type === "image/list") {
      this.sendResponse(ws, message.id, await this._listImages());
      return true;
    }
    if (type === "image/delete") {
      await this._deleteImage(message.image_id);
      this.sendResponse(ws, message.id, null);
      return true;
    }
    return false;
  }
  /**
   * List the metadata of all uploaded images (used by the frontend image manager).
   *
   * @returns array of { id, filesize, name, uploaded_at, content_type }
   */
  async _listImages() {
    const result = [];
    let files = [];
    try {
      files = await this.adapter.readDirAsync(this.adapter.namespace, IMAGE_FOLDER);
    } catch {
      return result;
    }
    for (const f of files) {
      if (f.isDir || !f.file.endsWith(".json")) {
        continue;
      }
      try {
        const meta = JSON.parse(
          (await this.adapter.readFileAsync(this.adapter.namespace, `${IMAGE_FOLDER}/${f.file}`)).file.toString()
        );
        result.push(meta);
      } catch {
      }
    }
    return result;
  }
  /**
   * Delete an uploaded image (binary + its .json sidecar). Errors are ignored so a missing file
   * does not fail the request.
   *
   * @param imageId - id of the uploaded image
   */
  async _deleteImage(imageId) {
    const id = String(imageId || "").replace(/[^a-zA-Z0-9-]/g, "");
    if (!id) {
      return;
    }
    for (const path of [`${IMAGE_FOLDER}/${id}`, `${IMAGE_FOLDER}/${id}.json`]) {
      try {
        await this.adapter.delFileAsync(this.adapter.namespace, path);
      } catch {
      }
    }
  }
  /**
   * Build a directory node for the browse tree.
   *
   * @param title - display title
   * @param mediaContentId - media-source id of the directory
   * @param childClass - media_class of the directory's children
   * @param children - optional already-resolved children
   * @returns the directory node
   */
  dir(title, mediaContentId, childClass, children) {
    return {
      title,
      media_class: "directory",
      media_content_type: "",
      media_content_id: mediaContentId,
      can_play: false,
      can_expand: true,
      children_media_class: childClass,
      thumbnail: null,
      children
    };
  }
  /**
   * Browse a media-source id and return its tree node (with children).
   *
   * @param mediaContentId - the media-source id to browse
   * @returns the browse tree node
   */
  async _browse(mediaContentId) {
    if (mediaContentId === ROOT) {
      return this.dir("ioBroker Lovelace", ROOT, "directory", [
        this.dir("Uploaded images", SRC_IMAGES, "image"),
        this.dir("Cards", SRC_CARDS, "image")
      ]);
    }
    if (mediaContentId === SRC_IMAGES) {
      return this.dir("Uploaded images", SRC_IMAGES, "image", await this._browseImages());
    }
    if (mediaContentId === SRC_CARDS) {
      return this.dir("Cards", SRC_CARDS, "image", await this._browseCards());
    }
    return this.dir(mediaContentId, mediaContentId, "directory", []);
  }
  /**
   * List uploaded images as media items (reads each `<id>.json` sidecar for name/content type).
   *
   * @returns the image media items
   */
  async _browseImages() {
    const children = [];
    let files = [];
    try {
      files = await this.adapter.readDirAsync(this.adapter.namespace, IMAGE_FOLDER);
    } catch {
      return children;
    }
    for (const f of files) {
      if (f.isDir || f.file.endsWith(".json")) {
        continue;
      }
      const id = f.file;
      let title = id;
      let contentType = "image/*";
      try {
        const meta = JSON.parse(
          (await this.adapter.readFileAsync(this.adapter.namespace, `${IMAGE_FOLDER}/${id}.json`)).file.toString()
        );
        title = meta.name || id;
        contentType = meta.content_type || contentType;
      } catch {
      }
      children.push({
        title,
        media_class: "image",
        media_content_type: contentType,
        media_content_id: `${SRC_IMAGES}/${id}`,
        can_play: true,
        can_expand: false,
        children_media_class: null,
        thumbnail: `/api/image/serve/${id}`
      });
    }
    return children;
  }
  /**
   * List the files in the `cards/` folder as media items (custom cards, fonts, images, …).
   *
   * @returns the card media items
   */
  async _browseCards() {
    const children = [];
    let files = [];
    try {
      files = await this.adapter.readDirAsync(this.adapter.namespace, `/${CARDS_FOLDER}/`);
    } catch {
      return children;
    }
    for (const f of files) {
      if (f.isDir) {
        continue;
      }
      const { media_class, media_content_type } = mediaClassForFile(f.file);
      children.push({
        title: f.file,
        media_class,
        media_content_type,
        media_content_id: `${SRC_CARDS}/${f.file}`,
        can_play: true,
        can_expand: false,
        children_media_class: null,
        thumbnail: media_class === "image" ? `/${CARDS_FOLDER}/${f.file}` : null
      });
    }
    return children;
  }
  /**
   * Resolve a media-source item id to a playable URL + mime type.
   *
   * @param mediaContentId - the media-source id to resolve
   * @returns the resolved url and mime type
   */
  async _resolve(mediaContentId) {
    if (mediaContentId == null ? void 0 : mediaContentId.startsWith(`${SRC_IMAGES}/`)) {
      const id = mediaContentId.substring(SRC_IMAGES.length + 1).replace(/[^a-zA-Z0-9-]/g, "");
      let mime = "image/*";
      try {
        const meta = JSON.parse(
          (await this.adapter.readFileAsync(this.adapter.namespace, `${IMAGE_FOLDER}/${id}.json`)).file.toString()
        );
        mime = meta.content_type || mime;
      } catch {
      }
      return { url: `/api/image/serve/${id}`, mime_type: mime };
    }
    if (mediaContentId == null ? void 0 : mediaContentId.startsWith(`${SRC_CARDS}/`)) {
      const file = mediaContentId.substring(SRC_CARDS.length + 1).replace(/\.\.+/g, "");
      return { url: `/${CARDS_FOLDER}/${file}`, mime_type: mediaClassForFile(file).media_content_type };
    }
    return { url: "", mime_type: "" };
  }
}
module.exports = MediaSourceModule;
//# sourceMappingURL=mediaSource.js.map
