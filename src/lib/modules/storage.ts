/** Prefix (folder) under which all internal storage objects live, e.g. `storage.entityRegistry`. */
export const STORAGE_PREFIX = 'storage.';

/**
 * Storage objects that were moved from the adapter root into the `storage` folder (breaking change
 * in v6.0.0). Keyed by the bare id (used both as old root id and new id under STORAGE_PREFIX).
 */
export const STORAGE_OBJECTS = ['entityRegistry', 'areaRegistry', 'energyPrefs', 'userData', 'dashboardStorage'];

/**
 * One-time migration: move legacy root storage objects (e.g. `entityRegistry`) into the `storage`
 * folder (`storage.entityRegistry`), preserving their `native` payload, then delete the old object.
 * Safe to run on every start - it does nothing once migrated.
 *
 * @param adapter - ioBroker adapter instance
 */
export async function migrateStorageObjects(adapter: ioBroker.Adapter): Promise<void> {
    for (const id of STORAGE_OBJECTS) {
        const newId = `${STORAGE_PREFIX}${id}`;
        let oldObj: ioBroker.Object | null | undefined;
        try {
            oldObj = await adapter.getObjectAsync(id);
        } catch {
            oldObj = null;
        }
        if (!oldObj) {
            continue; // nothing to migrate
        }
        const oldHasData = !!oldObj.native && Object.keys(oldObj.native).length > 0;
        try {
            const newObj = await adapter.getObjectAsync(newId);
            if (!newObj) {
                // New object not created yet (io-package objects may not be applied). Create it with
                // the old payload so deleting the legacy object below does not lose data.
                await adapter.setObjectAsync(newId, {
                    type: 'channel',
                    common: { name: `Storage for ${id}` },
                    native: oldObj.native || {},
                });
                adapter.log.info(`Migrated storage object ${id} -> ${newId} (created)`);
            } else if (oldHasData && !(newObj.native && Object.keys(newObj.native).length > 0)) {
                // Copy payload only when the new object has none yet, to avoid clobbering newer data.
                newObj.native = oldObj.native;
                await adapter.setObjectAsync(newId, newObj);
                adapter.log.info(`Migrated storage object ${id} -> ${newId}`);
            }
            await adapter.delObjectAsync(id);
            adapter.log.debug(`Removed legacy storage object ${id}`);
        } catch (e) {
            adapter.log.warn(`Could not migrate storage object ${id} -> ${newId}: ${String(e)}`);
        }
    }
}
