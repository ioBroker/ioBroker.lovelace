import { BaseEntity } from './baseEntity';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const entityData: { log: ioBroker.Logger } = require('../../../lib/dataSingleton');

const SUPPORTED_FEATURES = 1 | 2 | 4 | 8; // CREATE_TODO_ITEM | DELETE_TODO_ITEM | UPDATE_TODO_ITEM | MOVE_TODO_ITEM

/**
 * Entity for the Home Assistant `todo` domain (to-do lists / shopping lists).
 *
 * State is the number of incomplete items as a string.
 * `context.STATE.getParser` parses the JSON array stored in the ioBroker state.
 */
export class TodoEntity extends BaseEntity {
    constructor(name: string | null | undefined, obj: ioBroker.Object | null | undefined, entityId: string) {
        super(name, null, null, obj ?? undefined, 'todo', entityId);
        TodoEntity.augment(this);
    }

    /**
     * Apply todo-domain setup to a pre-created BaseEntity.
     * Used by server.ts when a user manually configures an entity with entity type `todo`.
     *
     * @param entity - entity to configure in-place
     */
    static augment(entity: BaseEntity): void {
        entity.attributes.icon = 'mdi:cart';
        entity.attributes.supported_features = SUPPORTED_FEATURES;
        entity.context.STATE = {
            attribute: 'state',
            getId: entity.context.id || null,
            setId: entity.context.id || null,
            getParser: (ent, _attr, state): void => {
                if (state?.val) {
                    try {
                        const items = JSON.parse(state.val as string) as unknown[];
                        ent.state = String(items.length);
                    } catch (e) {
                        entityData.log.warn(
                            `Cannot parse todo items of ${ent.context.id}: ${String(state.val)}, ${String(e)}`,
                        );
                        ent.state = 'unknown';
                    }
                } else {
                    ent.state = '0';
                }
            },
            historyParser: (_id, state): string => {
                try {
                    const items = JSON.parse(state.val as string) as unknown[];
                    return String(items.length);
                } catch (e) {
                    entityData.log.warn(
                        `Cannot parse todo items of ${entity.context.id}: ${String(state.val)}, ${String(e)}`,
                    );
                    return 'unknown';
                }
            },
        };
    }
}
