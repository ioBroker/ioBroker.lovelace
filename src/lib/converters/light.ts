import { Types } from '@iobroker/type-detector';
import Converter, {
    type ConverterParameters,
    type ioBrokerEntity,
    type EntityAttribute,
    type EntityCommand,
    type ServiceCallData,
} from './converter';
import { processCommon, addID2entity, fillEntityFromStates } from '../entities/utils';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const adapterData = require('../../../lib/dataSingleton') as {
    adapter: ioBroker.Adapter;
    log: ioBroker.Logger;
    services: Record<string, unknown>;
};

// HA color mode strings
const ONOFF = 'onoff';
const BRIGHTNESS = 'brightness';
const COLOR_TEMP = 'color_temp';
const HS = 'hs';
const RGB = 'rgb';
const RGBW = 'rgbw';

const SUPPORT_EFFECT = 4;

/** Attribute names that must be nulled when the light turns off (and stored for restore on turn-on). */
const attributesToNullOnOff = [
    'color_mode',
    'brightness',
    'color_temp',
    'color_temp_kelvin',
    'hs_color',
    'rgb_color',
    'rgbw_color',
    'xy_color',
    'effect',
] as const;

/**
 * Store attributes on switch-off and restore them on switch-on.
 *
 * @param entity - the light entity to clear or restore
 */
function clearOrRestoreAttributes(entity: ioBrokerEntity): void {
    const stored = entity.context.STATE!.storedValues!;
    if (entity.state === 'on') {
        for (const attr of attributesToNullOnOff) {
            if (entity.attributes[attr] === null || entity.attributes[attr] === undefined) {
                const val = stored[attr];
                if (val !== undefined && val !== null) {
                    if (Array.isArray(val)) {
                        const filtered = (val as unknown[]).filter(v => v !== null && v !== undefined);
                        if (filtered.length > 0) {
                            entity.attributes[attr] = filtered;
                        }
                    } else {
                        entity.attributes[attr] = val;
                    }
                }
            }
        }
        adapterData.log.debug(`Restored old values from previous switch off: ${JSON.stringify(entity.attributes)}`);
    } else {
        for (const attr of attributesToNullOnOff) {
            if (entity.attributes[attr] !== undefined) {
                stored[attr] = entity.attributes[attr];
                entity.attributes[attr] = null;
            }
        }
        adapterData.log.debug(
            `Stored old values for next switch on: ${JSON.stringify(entity.context.STATE!.storedValues)}`,
        );
    }
}

/**
 * Add on/off state support to an advanced light entity.
 * Returns true when a state (SET) id was found.
 *
 * @param states - state id map
 * @param objects - objects cache
 * @param entity - entity to augment
 */
function lightAddState(
    states: Record<string, string | undefined>,
    objects: Record<string, ioBroker.Object>,
    entity: ioBrokerEntity,
): boolean {
    const getState = states.stateRead;

    entity.context.STATE!.storedValues = {};
    entity.context.STATE!.getParser = (ent, _attrName, state): void => {
        const s = state ?? ({ val: null } as ioBroker.State);
        const oldState = ent.state;
        ent.state = s.val ? 'on' : 'off';
        if (oldState !== ent.state) {
            clearOrRestoreAttributes(ent);
        }
    };

    // Don't use zigbee 'available' as getId
    if (
        getState &&
        getState.startsWith('zigbee.') &&
        (getState.endsWith('.available') || getState.endsWith('.device_query'))
    ) {
        entity.context.STATE!.getId = states.state ?? null;
    }

    if (states.state) {
        const stateObj = objects[states.state];
        entity.context.STATE!.isBoolean =
            stateObj?.common !== undefined &&
            (stateObj.common as Record<string, unknown>).type === 'boolean';
        (entity.attributes.supported_color_modes as string[]).push(ONOFF);
        return true;
    }
    return false;
}

/**
 * Add color-temperature attribute to an advanced light entity.
 *
 * @param states - state id map
 * @param objects - objects cache
 * @param entity - entity to augment
 */
function lightAddColorTemperature(
    states: Record<string, string | undefined>,
    objects: Record<string, ioBroker.Object>,
    entity: ioBrokerEntity,
): void {
    const iobMaxValueKelvin = 7000;
    const iobMinValueKelvin = 1000;

    if (!states.color_temp) return;

    const attribute = entity.context.ATTRIBUTES!.find(a => a.attribute === 'color_temp');
    if (!attribute) return;

    const tempObj = objects[states.color_temp];
    const tempCommon = (tempObj?.common ?? {}) as Record<string, unknown>;
    attribute.convert_to_mired = tempCommon.unit === 'mired';

    attribute.getParser = (ent, attr, state): void => {
        let targetAttributes: Record<string, unknown> = ent.attributes;
        if (ent.state !== 'on') {
            targetAttributes = ent.context.STATE!.storedValues!;
        }
        if (!state || !state.val) {
            targetAttributes.color_temp = iobMinValueKelvin;
            return;
        }
        let targetCt = state.val as number;
        if (targetCt < 1000 && !attr.convert_to_mired) {
            attr.convert_to_mired = true;
        }
        if (targetCt > 1000 && attr.convert_to_mired) {
            attr.convert_to_mired = false;
        }
        if (attr.convert_to_mired) {
            targetCt = 1e6 / targetCt;
        }
        targetAttributes.color_temp_kelvin = targetCt;
        targetAttributes.color_temp = 1e6 / targetCt;
        targetAttributes.color_mode = COLOR_TEMP;
    };

    entity.attributes.max_color_temp_kelvin =
        (tempCommon.max as number | undefined) ?? iobMaxValueKelvin;
    entity.attributes.min_color_temp_kelvin =
        (tempCommon.min as number | undefined) ?? iobMinValueKelvin;

    if (attribute.convert_to_mired || (entity.attributes.max_color_temp_kelvin as number) < 1000) {
        attribute.convert_to_mired = true;
        entity.attributes.max_color_temp_kelvin =
            tempCommon.min ? 1e6 / (tempCommon.min as number) : iobMaxValueKelvin;
        entity.attributes.min_color_temp_kelvin =
            tempCommon.max ? 1e6 / (tempCommon.max as number) : iobMinValueKelvin;
    }

    if (!entity.attributes.max_color_temp_kelvin || isNaN(entity.attributes.max_color_temp_kelvin as number)) {
        entity.attributes.max_color_temp_kelvin = iobMaxValueKelvin;
    }
    if (!entity.attributes.min_color_temp_kelvin || isNaN(entity.attributes.min_color_temp_kelvin as number)) {
        entity.attributes.min_color_temp_kelvin = iobMinValueKelvin;
    }
    adapterData.log.debug(`${entity.entity_id} ct needs mired conversion: ${attribute.convert_to_mired}`);

    if ((entity.attributes.min_color_temp_kelvin as number) > (entity.attributes.max_color_temp_kelvin as number)) {
        const max = entity.attributes.min_color_temp_kelvin;
        entity.attributes.min_color_temp_kelvin = entity.attributes.max_color_temp_kelvin;
        entity.attributes.max_color_temp_kelvin = max;
    }

    if (attribute.convert_to_mired) {
        entity.attributes.max_mireds =
            (tempCommon.max as number | undefined) ??
            1e6 / (entity.attributes.min_color_temp_kelvin as number);
        entity.attributes.min_mireds =
            (tempCommon.min as number | undefined) ??
            1e6 / (entity.attributes.max_color_temp_kelvin as number);
    } else {
        entity.attributes.max_mireds = 1e6 / (entity.attributes.min_color_temp_kelvin as number);
        entity.attributes.min_mireds = 1e6 / (entity.attributes.max_color_temp_kelvin as number);
    }
    (entity.attributes.supported_color_modes as string[]).push(COLOR_TEMP);
}

/**
 * Add brightness attribute to an advanced light entity.
 *
 * @param states - state id map
 * @param objects - objects cache
 * @param entity - entity to augment
 */
function lightAddBrightness(
    states: Record<string, string | undefined>,
    objects: Record<string, ioBroker.Object>,
    entity: ioBrokerEntity,
): void {
    // If the SET state is numeric, treat it as brightness
    if (
        !states.brightness &&
        states.state &&
        objects[states.state]?.common !== undefined &&
        (objects[states.state].common as Record<string, unknown>).type === 'number'
    ) {
        states.brightness = states.state;
        if (!states.brightnessRead) {
            states.brightnessRead = states.stateRead;
        }
    }

    if (!states.brightness) return;

    const attribute = entity.context.ATTRIBUTES!.find(a => a.attribute === 'brightness');
    if (!attribute) return;

    const readId = states.brightnessRead ?? states.brightness;
    const readCommon = (objects[readId]?.common ?? {}) as Record<string, unknown>;
    attribute.min = (readCommon.min as number | undefined) ?? 0;
    attribute.max = (readCommon.max as number | undefined) ?? 100;
    attribute.setId = states.brightness;
    attribute.getId = readId;

    attribute.getParser = (ent, attr, state): void => {
        let targetAttributes: Record<string, unknown> = ent.attributes;
        if (ent.state !== 'on') {
            targetAttributes = ent.context.STATE!.storedValues!;
        }
        let val = state?.val as number | null | undefined;
        if (val === undefined || val === null) {
            val = attr.max ?? 255;
        }
        targetAttributes.brightness = ((val - (attr.min ?? 0)) / ((attr.max ?? 255) - (attr.min ?? 0))) * 255;
        if (!targetAttributes.color_mode || targetAttributes.color_mode === ONOFF) {
            targetAttributes.color_mode = BRIGHTNESS;
        }

        if (states.state === states.brightness) {
            const oldState = ent.state;
            ent.state = (targetAttributes.brightness as number) > 0 ? 'on' : 'off';
            if (oldState !== ent.state) {
                clearOrRestoreAttributes(ent);
            }
            if (ent.attributes.color_mode === ONOFF) {
                ent.attributes.color_mode = BRIGHTNESS;
            }
        }
    };

    (entity.attributes.supported_color_modes as string[]).push(BRIGHTNESS);

    if (states.state === states.brightness) {
        clearOrRestoreAttributes(entity);
    }
}

/**
 * Add hue and saturation attributes to an advanced light entity.
 *
 * @param states - state id map
 * @param objects - objects cache
 * @param entity - entity to augment
 */
function lightAddHueAndSat(
    states: Record<string, string | undefined>,
    objects: Record<string, ioBroker.Object>,
    entity: ioBrokerEntity,
): void {
    if (states.hue) {
        const hue_attr = entity.context.ATTRIBUTES!.find(a => a.attribute === 'hue');
        if (hue_attr) {
            hue_attr.max = (objects[states.hue]?.common as Record<string, unknown>)?.max as number ?? 360;
            hue_attr.getParser = (ent, attr, state): void => {
                let targetAttributes: Record<string, unknown> = ent.attributes;
                if (ent.state !== 'on') targetAttributes = ent.context.STATE!.storedValues!;
                let val = state?.val as number | null | undefined;
                if (val === undefined || val === null) val = 0;
                if (!targetAttributes.hs_color) targetAttributes.hs_color = [0, 100];
                (targetAttributes.hs_color as number[])[0] = (val / (attr.max ?? 360)) * 360;
                targetAttributes.color_mode = HS;
            };
            (entity.attributes.supported_color_modes as string[]).push(HS);
            entity.attributes.hs_color = [null, null];
            entity.context.STATE!.storedValues!.hs_color = [0, 100];
        }
    }

    if (states.saturation) {
        const sat_attr = entity.context.ATTRIBUTES!.find(a => a.attribute === 'saturation');
        if (sat_attr) {
            sat_attr.max =
                (objects[states.saturation]?.common as Record<string, unknown>)?.max as number ?? 100;
            if (!states.rgb_color && !states.red) {
                if (!states.hue) {
                    adapterData.log.warn(
                        `Saturation present but no hue id found for ${states.saturation}. Hue won't work.`,
                    );
                    return;
                }
                sat_attr.getParser = (ent, attr, state): void => {
                    let targetAttributes: Record<string, unknown> = ent.attributes;
                    if (ent.state !== 'on') targetAttributes = ent.context.STATE!.storedValues!;
                    let val = state?.val as number | null | undefined;
                    if (val === undefined || val === null) val = attr.max ?? 100;
                    if (!targetAttributes.hs_color) targetAttributes.hs_color = [0, 100];
                    (targetAttributes.hs_color as number[])[1] = (val / (attr.max ?? 100)) * 100;
                    targetAttributes.color_mode = HS;
                };
            } else {
                sat_attr.getParser = (): void => {};
            }
        }
    } else if (states.hue) {
        adapterData.log.warn(`Hue present but no saturation id found for ${states.hue}. Saturation won't work.`);
    }
}

/**
 * Add a single-state RGB attribute (hex string or "r,g,b") to an advanced light entity.
 *
 * @param states - state id map
 * @param objects - objects cache (unused; rgb state is read live for format detection)
 * @param entity - entity to augment
 */
async function lightAddRGBSingle(
    states: Record<string, string | undefined>,
    _objects: Record<string, ioBroker.Object>,
    entity: ioBrokerEntity,
): Promise<void> {
    if (!states.rgb_color) return;

    const attribute = entity.context.ATTRIBUTES!.find(a => a.attribute === 'rgb_color');
    if (!attribute) return;

    attribute.is_rgb_array = false;
    attribute.is_rgb_string = true;
    attribute.getParser = (ent, _attr, state): void => {
        let targetAttributes: Record<string, unknown> = ent.attributes;
        if (ent.state !== 'on') targetAttributes = ent.context.STATE!.storedValues!;
        let str = state?.val as string | null | undefined;
        if (str === undefined || str === null) str = '#FFFFFF';
        if (str[0] === '#') str = str.substring(1);
        let r: number, g: number, b: number;
        if (/([0-9]){1,3},([0-9]){1,3},([0-9]){1,3}/.test(str)) {
            [r, g, b] = str.split(',').map(v => parseInt(v, 10));
        } else {
            if (!/^[\da-fA-F]{6}/.test(str)) {
                adapterData.log.error(`Malformed rgb string ${str} expecting six hex digits.`);
                return;
            }
            r = parseInt(str.substring(0, 2), 16);
            g = parseInt(str.substring(2, 4), 16);
            b = parseInt(str.substring(4, 6), 16);
        }
        targetAttributes.rgb_color = [r, g, b];
        targetAttributes.color_mode = RGB;
        if (states.white) {
            targetAttributes.color_mode = RGBW;
            if (!targetAttributes.rgbw_color) targetAttributes.rgbw_color = [r, g, b, 0];
            (targetAttributes.rgbw_color as number[])[0] = r;
            (targetAttributes.rgbw_color as number[])[1] = g;
            (targetAttributes.rgbw_color as number[])[2] = b;
        }
    };

    const rgbState = await adapterData.adapter.getForeignStateAsync(states.rgb_color);
    if (rgbState?.val) {
        attribute.is_rgb_array = /([0-9]){1,3},([0-9]){1,3},([0-9]){1,3}/.test(String(rgbState.val));
    }

    entity.attributes.rgb_color = [null, null, null];
    entity.context.STATE!.storedValues!.rgb_color = [255, 255, 255];
    (entity.attributes.supported_color_modes as string[]).push(RGB);
}

/**
 * Add separate red/green/blue state attributes to an advanced light entity.
 *
 * @param states - state id map
 * @param objects - objects cache
 * @param entity - entity to augment
 */
function lightAddRGB(
    states: Record<string, string | undefined>,
    objects: Record<string, ioBroker.Object>,
    entity: ioBrokerEntity,
): void {
    if (!states.red || !states.green || !states.blue) return;

    const red_attr = entity.context.ATTRIBUTES!.find(a => a.attribute === 'red');
    const green_attr = entity.context.ATTRIBUTES!.find(a => a.attribute === 'green');
    const blue_attr = entity.context.ATTRIBUTES!.find(a => a.attribute === 'blue');
    if (!red_attr || !green_attr || !blue_attr) return;

    const rgbGetParser = (index: number, ent: ioBrokerEntity, attr: EntityAttribute, state: ioBroker.State): void => {
        let targetAttributes: Record<string, unknown> = ent.attributes;
        if (ent.state !== 'on') targetAttributes = ent.context.STATE!.storedValues!;
        if (!targetAttributes.rgb_color) targetAttributes.rgb_color = [255, 255, 255];
        let val = state?.val as number | null | undefined;
        if (val === undefined || val === null) val = attr.max ?? 255;
        const scaled = (val / (attr.max ?? 255)) * 255;
        (targetAttributes.rgb_color as number[])[index] = scaled;
        if (targetAttributes.rgbw_color) {
            (targetAttributes.rgbw_color as number[])[index] = scaled;
        }
        targetAttributes.color_mode = states.white ? RGBW : RGB;
    };

    red_attr.getParser = (ent, attr, state) => rgbGetParser(0, ent, attr, state);
    green_attr.getParser = (ent, attr, state) => rgbGetParser(1, ent, attr, state);
    blue_attr.getParser = (ent, attr, state) => rgbGetParser(2, ent, attr, state);

    red_attr.max = (objects[states.red]?.common as Record<string, unknown>)?.max as number ?? 100;
    green_attr.max = (objects[states.green]?.common as Record<string, unknown>)?.max as number ?? 100;
    blue_attr.max = (objects[states.blue]?.common as Record<string, unknown>)?.max as number ?? 100;

    (entity.attributes.supported_color_modes as string[]).push(RGB);
    entity.attributes.rgb_color = [null, null, null];
    entity.context.STATE!.storedValues!.rgb_color = [255, 255, 255];
    if (states.white) {
        entity.attributes.rgbw_color = [null, null, null, null];
        entity.context.STATE!.storedValues!.rgbw_color = [255, 255, 255, 255];
    }
}

/**
 * Converts a number to a two-digit uppercase hex string.
 *
 * @param num - value 0–255
 */
function numToHex(num: number): string {
    const clamped = Math.min(Math.max(Math.round(num), 0), 255);
    return Number(clamped).toString(16).toUpperCase().padStart(2, '0');
}

/**
 * Write HA service_data color/brightness values to the matching ioBroker states.
 *
 * @param data - HA service call data
 * @param entity - current entity
 * @param user - ioBroker user
 */
async function setLightAdvancedAttributesToIOBStates(
    data: ServiceCallData,
    entity: ioBrokerEntity,
    user: string,
): Promise<void> {
    const sd = data.service_data as Record<string, unknown>;

    if (sd.color_temp) {
        let ct = 1e6 / (sd.color_temp as number);
        entity.attributes.color_temp_kelvin = ct;
        entity.attributes.color_temp = sd.color_temp;
        const attr = entity.context.ATTRIBUTES!.find(a => a.attribute === 'color_temp')!;
        if (attr.convert_to_mired) ct = sd.color_temp as number;
        entity.attributes.color_mode = COLOR_TEMP;
        await adapterData.adapter.setForeignStateAsync(attr.getId!, ct, false, { user });
    }
    if (sd.color_temp_kelvin) {
        let ct = sd.color_temp_kelvin as number;
        entity.attributes.color_temp_kelvin = ct;
        const attr = entity.context.ATTRIBUTES!.find(a => a.attribute === 'color_temp')!;
        if (attr.convert_to_mired) ct = 1e6 / ct;
        entity.attributes.color_mode = COLOR_TEMP;
        await adapterData.adapter.setForeignStateAsync(attr.getId!, ct, false, { user });
    }

    if ((sd.brightness as number) >= 0 && !sd.brightness_pct) {
        sd.brightness_pct = ((sd.brightness as number) / 255) * 100;
    }
    if ((sd.brightness_pct as number) >= 0) {
        const attr = entity.context.ATTRIBUTES!.find(a => a.attribute === 'brightness')!;
        entity.attributes.brightness = ((sd.brightness_pct as number) / 100) * 255;
        if (!entity.attributes.color_mode || entity.attributes.color_mode === ONOFF) {
            entity.attributes.color_mode = BRIGHTNESS;
        }
        await adapterData.adapter.setForeignState(
            attr.setId!,
            ((sd.brightness_pct as number) / 100) * ((attr.max ?? 100) - (attr.min ?? 0)) + (attr.min ?? 0),
            false,
            { user },
        );
    }

    if (sd.hs_color) {
        const attr = entity.context.ATTRIBUTES!.find(a => a.attribute === 'hue');
        const attr_Sat = entity.context.ATTRIBUTES!.find(a => a.attribute === 'saturation');
        entity.attributes.hs_color = sd.hs_color;
        const [h, s] = sd.hs_color as [number, number];
        if (attr) {
            await adapterData.adapter.setForeignStateAsync(attr.getId!, (h / 360) * (attr.max ?? 360), false, { user });
        } else {
            adapterData.log.warn(`No hue for ${entity.entity_id}, can only set saturation.`);
        }
        if (attr_Sat) {
            await adapterData.adapter.setForeignStateAsync(attr_Sat.getId!, (s / 100) * (attr_Sat.max ?? 100), false, { user });
        } else {
            adapterData.log.warn(`No saturation for ${entity.entity_id}, can only set hue.`);
        }
        entity.attributes.color_mode = HS;
    }

    if (sd.rgbw_color) {
        const attr = entity.context.ATTRIBUTES!.find(a => a.attribute === 'white')!;
        await adapterData.adapter.setForeignStateAsync(
            attr.getId!,
            ((sd.rgbw_color as number[])[3] / 255) * (attr.max ?? 255),
            false,
            { user },
        );
        sd.rgb_color = sd.rgbw_color; // also set color
        entity.attributes.color_mode = RGBW;
    }

    if (sd.rgb_color) {
        const [r, g, b] = sd.rgb_color as [number, number, number];
        const rgb_color_attr = entity.context.ATTRIBUTES!.find(a => a.attribute === 'rgb_color');
        if (rgb_color_attr) {
            if (!rgb_color_attr.is_rgb_array) {
                const rgbString = `#${numToHex(r)}${numToHex(g)}${numToHex(b)}`;
                await adapterData.adapter.setForeignStateAsync(rgb_color_attr.getId!, rgbString, false, { user });
            } else {
                await adapterData.adapter.setForeignStateAsync(rgb_color_attr.getId!, `${r},${g},${b}`, false, { user });
            }
        } else {
            const red_attr = entity.context.ATTRIBUTES!.find(a => a.attribute === 'red')!;
            const green_attr = entity.context.ATTRIBUTES!.find(a => a.attribute === 'green')!;
            const blue_attr = entity.context.ATTRIBUTES!.find(a => a.attribute === 'blue')!;
            await Promise.all([
                adapterData.adapter.setForeignStateAsync(red_attr.getId!, (r / 255) * (red_attr.max ?? 255), false, { user }),
                adapterData.adapter.setForeignStateAsync(green_attr.getId!, (g / 255) * (green_attr.max ?? 255), false, { user }),
                adapterData.adapter.setForeignStateAsync(blue_attr.getId!, (b / 255) * (blue_attr.max ?? 255), false, { user }),
            ]);
        }
        entity.attributes.color_mode = !sd.rgbw_color ? RGB : RGBW;
    }

    if (sd.effect) {
        const effect_attr = entity.context.ATTRIBUTES!.find(a => a.attribute === 'effect')!;
        let val: ioBroker.StateValue = effect_attr.states?.[sd.effect as string | number] as ioBroker.StateValue;
        if (val === undefined) val = sd.effect as ioBroker.StateValue;
        await adapterData.adapter.setForeignStateAsync(effect_attr.getId!, val, false, { user });
    }
}

/**
 * Handle a turn_on command for a light entity.
 *
 * @param entity - the light entity
 * @param command - the matched command
 * @param data - service call data
 * @param user - ioBroker user
 */
async function handleTurnOnCmd(
    entity: ioBrokerEntity,
    command: EntityCommand,
    data: ServiceCallData,
    user: string,
): Promise<void> {
    if (entity.context.STATE!.setId && entity.context.STATE!.getId) {
        const state = await adapterData.adapter.getForeignStateAsync(entity.context.STATE!.getId);
        if (!state || !state.val) {
            await adapterData.adapter.setForeignStateAsync(entity.context.STATE!.setId, command.on!, false, { user });
        }
    }
    if (!entity.attributes.color_mode) {
        entity.attributes.color_mode = ONOFF;
    }
    await setLightAdvancedAttributesToIOBStates(data, entity, user);
}

/**
 * Map type-detector state names to functional role keys for advanced lights.
 *
 * @param control - type-detector control object
 */
function convertControlToStates(control: { type: string; states: Array<{ id?: string | null; name?: string }> }): Record<string, string | undefined> {
    function findState(name: string): string | undefined {
        const s = control.states.find(st => st.id && st.name === name);
        return s?.id ?? undefined;
    }

    const states: Record<string, string | undefined> = {};
    switch (control.type) {
        case Types.rgb:
        case Types.rgbSingle:
        case Types.hue:
        case Types.ct:
            states.state = findState('ON');
            states.stateRead = findState('ON_ACTUAL');
            states.brightness = findState('DIMMER') ?? findState('BRIGHTNESS');
            states.effect = findState('EFFECT');
            break;
        case Types.dimmer:
            states.state = findState('ON_SET') ?? findState('SET');
            states.stateRead = findState('ON_ACTUAL') ?? findState('ACTUAL');
            states.brightness = findState('SET');
            states.brightnessRead = findState('ACTUAL');
            states.effect = findState('EFFECT');
            break;
        case Types.light:
            states.state = findState('SET');
            states.stateRead = findState('ACTUAL');
            states.effect = findState('EFFECT');
            break;
    }
    states.color_temp = findState('TEMPERATURE');
    states.hue = findState('HUE');
    states.saturation = findState('SATURATION');
    states.rgb_color = findState('RGB');
    states.red = findState('RED');
    states.green = findState('GREEN');
    states.blue = findState('BLUE');
    states.white = findState('WHITE');
    return states;
}

/**
 * Fill a bare entity with all that an advanced light entity can do.
 *
 * @param states - state id map (from convertControlToStates or manual)
 * @param objects - objects cache
 * @param entity - bare entity to fill
 * @returns array containing the augmented entity, or empty if no state id found
 */
async function fillLightEntityFromStates(
    states: Record<string, string | undefined>,
    objects: Record<string, ioBroker.Object>,
    entity: ioBrokerEntity,
): Promise<ioBrokerEntity[]> {
    fillEntityFromStates(states as Record<string, string>, entity, objects);
    entity.attributes.supported_color_modes = [];
    entity.attributes.color_mode = ONOFF;
    entity.context.COMMANDS = entity.context.COMMANDS ?? [];
    entity.context.STATE!.storedValues = {};

    // White channel (RGBW)
    if (states.white) {
        const white_attr = entity.context.ATTRIBUTES!.find(a => a.attribute === 'white');
        if (white_attr) {
            white_attr.max =
                (objects[white_attr.getId!]?.common as Record<string, unknown>)?.max as number ?? 100;
            entity.attributes.rgbw_color = [
                entity.attributes.red,
                entity.attributes.green,
                entity.attributes.blue,
                entity.attributes.white,
            ];
            if (states.red || states.rgb_color) {
                (entity.attributes.supported_color_modes as string[]).push(RGBW);
                white_attr.getParser = (ent, attr, state): void => {
                    let val = state?.val as number | null | undefined;
                    if (val === undefined || val === null) val = attr.max ?? 255;
                    let targetAttributes: Record<string, unknown> = ent.attributes;
                    if (ent.state !== 'on') targetAttributes = ent.context.STATE!.storedValues!;
                    if (!targetAttributes.rgbw_color) {
                        const rgb = targetAttributes.rgb_color as number[] | undefined;
                        targetAttributes.rgbw_color = [rgb?.[0] ?? 255, rgb?.[1] ?? 255, rgb?.[2] ?? 255];
                    }
                    (targetAttributes.rgbw_color as number[])[3] = (val / (attr.max ?? 255)) * 255;
                    targetAttributes.color_mode = RGBW;
                };
            }
        }
    }

    lightAddState(states, objects, entity);
    lightAddColorTemperature(states, objects, entity);
    lightAddBrightness(states, objects, entity);
    lightAddHueAndSat(states, objects, entity);
    await lightAddRGBSingle(states, objects, entity);
    lightAddRGB(states, objects, entity);

    // Effect
    if (states.effect) {
        // Note: JS used a.attributes (typo), kept as a.attribute here (corrected)
        const effect_attr = entity.context.ATTRIBUTES!.find(a => a.attribute === 'effect');
        if (effect_attr) {
            const effectCommon = (objects[effect_attr.getId!]?.common ?? {}) as Record<string, unknown>;
            effect_attr.states = (effectCommon.states as Record<string | number, unknown> | undefined) ?? {
                0: 'Please',
                1: 'Fill',
                2: 'States',
            };
            entity.attributes.effect_list = Object.values(effect_attr.states);
            effect_attr.getParser = (ent, attr, state): void => {
                const s = state ?? ({ val: 0 } as ioBroker.State);
                let targetAttributes: Record<string, unknown> = ent.attributes;
                if (ent.state !== 'on') targetAttributes = ent.context.STATE!.storedValues!;
                targetAttributes.effect = attr.states?.[s.val as string | number];
            };
        }
        entity.attributes.supported_features = ((entity.attributes.supported_features as number) ?? 0) | SUPPORT_EFFECT;
    }

    // turn_on command
    entity.context.COMMANDS.push({
        service: 'turn_on',
        on: true,
        setId: entity.context.STATE!.setId,
        parseCommand: handleTurnOnCmd,
    });

    // For non-boolean states, the 'on' value is the max, and we add a turn_off command
    if (!entity.context.STATE!.isBoolean) {
        const stateObj = objects[states.state ?? ''];
        const stateCommon = (stateObj?.common ?? {}) as Record<string, unknown>;
        entity.context.COMMANDS[entity.context.COMMANDS.length - 1].on =
            (stateCommon.max as number | undefined) ?? 100;
        const offVal = (stateCommon.min as number | undefined) ?? 0;
        entity.context.COMMANDS.push({
            service: 'turn_off',
            off: offVal,
            setId: entity.context.STATE!.setId,
            parseCommand: (_ent, command, _data, user): Promise<unknown> => {
                return adapterData.adapter.setForeignStateAsync(command.setId!, command.off as ioBroker.StateValue, false, { user });
            },
        });
        entity.context.STATE!.getParser = (ent, _attrName, state): void => {
            const s = state ?? ({ val: null } as ioBroker.State);
            const oldState = ent.state;
            ent.state = (s.val as number) > offVal ? 'on' : 'off';
            if (!ent.attributes.color_mode) {
                ent.attributes.color_mode = ONOFF;
            }
            if (oldState !== ent.state) {
                clearOrRestoreAttributes(ent);
            }
        };
    }

    clearOrRestoreAttributes(entity);
    return [entity];
}

/** Converter for all light device types (simple and advanced). */
export class LightConverter extends Converter {
    /** @inheritdoc */
    static async convertEntities(params: ConverterParameters): Promise<ioBrokerEntity[]> {
        const { controls, objects, forcedEntityId, friendlyName, room, func } = params;

        if (controls.type === Types.light) {
            // Simple on/off light
            const entity = processCommon(friendlyName, room, func, objects[params.id], 'light', forcedEntityId);
            let state = controls.states.find(s => s.id && s.name === 'SET');
            entity.context.STATE = { setId: null, getId: null };
            if (state?.id) {
                entity.context.STATE.setId = state.id;
                entity.context.STATE.getId = state.id;
                addID2entity(state.id, entity);
                entity.attributes.color_mode = ONOFF;
                entity.attributes.supported_color_modes = [ONOFF];
            }
            state = controls.states.find(s => s.id && (s.name === 'ON_ACTUAL' || s.name === 'ACTUAL'));
            if (state?.id) {
                entity.context.STATE.getId = state.id;
                addID2entity(state.id, entity);
            }
            return [entity];
        }

        // Advanced lights (dimmer, ct, hue, rgb, rgbSingle)
        const states = convertControlToStates(controls);
        if (states.state) {
            const entity = processCommon(friendlyName, func, room, objects[params.id], 'light', forcedEntityId);
            return fillLightEntityFromStates(states, objects, entity);
        }
        adapterData.log.debug(
            `Could not add ${params.id} of type ${controls.type} -> no on/off control found.`,
        );
        return [];
    }
}

Converter.converters[Types.light] = LightConverter;
Converter.converters[Types.dimmer] = LightConverter;
Converter.converters[Types.ct] = LightConverter;
Converter.converters[Types.hue] = LightConverter;
Converter.converters[Types.rgb] = LightConverter;
Converter.converters[Types.rgbSingle] = LightConverter;

/**
 * Create a manual light entity.
 *
 * @param id - ioBroker state id (the main object)
 * @param obj - ioBroker object
 * @param entity - already created entity
 * @param objects - ioBroker objects cache
 * @param custom - custom settings from the ioBroker object
 * @returns array containing the augmented entity
 */
export async function processManualEntity(
    id: string,
    obj: ioBroker.Object,
    entity: ioBrokerEntity,
    objects: Record<string, ioBroker.Object>,
    custom: Record<string, unknown>,
): Promise<ioBrokerEntity[]> {
    const states: Record<string, string | undefined> = (custom.states as Record<string, string> | undefined) ?? {
        state: id,
    };
    const objCommon = (obj?.common ?? {}) as Record<string, unknown>;
    if (obj && objCommon.type === 'number') {
        states.brightness = id;
    }
    return fillLightEntityFromStates(states, objects, entity);
}

adapterData.services.light = {
    turn_on: {
        name: 'Turn on',
        description:
            'Turn on one or more lights and adjust properties of the light, even when they are turned on already.',
        fields: {
            transition: {
                filter: { supported_features: [32] },
                selector: { number: { min: 0, max: 300, unit_of_measurement: 'seconds' } },
                name: 'Transition',
                description: 'Duration it takes to get to next state.',
            },
            rgb_color: {
                filter: { attribute: { supported_color_modes: ['hs', 'xy', 'rgb', 'rgbw', 'rgbww'] } },
                selector: { color_rgb: null },
                name: 'Color',
                description:
                    'The color in RGB format. A list of three integers between 0 and 255 representing the values of red, green, and blue.',
            },
            rgbw_color: {
                filter: { attribute: { supported_color_modes: ['hs', 'xy', 'rgb', 'rgbw', 'rgbww'] } },
                advanced: true,
                example: '[255, 100, 100, 50]',
                selector: { object: null },
                name: 'RGBW-color',
                description:
                    'The color in RGBW format. A list of four integers between 0 and 255 representing the values of red, green, blue, and white.',
            },
            hs_color: {
                filter: { attribute: { supported_color_modes: ['hs', 'xy', 'rgb', 'rgbw', 'rgbww'] } },
                advanced: true,
                example: '[300, 70]',
                selector: { object: null },
                name: 'Hue/Sat color',
                description: 'Color in hue/sat format. A list of two integers. Hue is 0-360 and Sat is 0-100.',
            },
            color_temp: {
                filter: { attribute: { supported_color_modes: ['color_temp', 'hs', 'xy', 'rgb', 'rgbw', 'rgbww'] } },
                selector: { color_temp: { unit: 'mired', min: 153, max: 500 } },
                name: 'Color temperature',
                description: 'Color temperature in mireds.',
            },
            color_temp_kelvin: {
                filter: { attribute: { supported_color_modes: ['color_temp', 'hs', 'xy', 'rgb', 'rgbw', 'rgbww'] } },
                selector: { color_temp: { unit: 'kelvin', min: 2000, max: 6500 } },
                name: 'Color temperature',
                description: 'Color temperature in Kelvin.',
            },
            brightness: {
                filter: {
                    attribute: {
                        supported_color_modes: ['brightness', 'color_temp', 'hs', 'xy', 'rgb', 'rgbw', 'rgbww'],
                    },
                },
                selector: { number: { min: 0, max: 255 } },
                name: 'Brightness value',
                description: 'Number indicating brightness, where 0 turns the light off, 1 is the minimum brightness, and 255 is the maximum brightness.',
            },
            brightness_pct: {
                filter: {
                    attribute: {
                        supported_color_modes: ['brightness', 'color_temp', 'hs', 'xy', 'rgb', 'rgbw', 'rgbww'],
                    },
                },
                selector: { number: { min: 0, max: 100, unit_of_measurement: '%' } },
                name: 'Brightness',
                description: 'Number indicating percentage of full brightness, where 0 turns the light off, 1 is the minimum brightness, and 100 is the maximum brightness.',
            },
            effect: {
                selector: { text: null },
                name: 'Effect',
                description: 'Light effect.',
            },
        },
        target: { entity: [{ domain: ['light'] }] },
    },
    turn_off: {
        name: 'Turn off',
        description: 'Turn off one or more lights.',
        fields: {
            transition: {
                filter: { supported_features: [32] },
                selector: { number: { min: 0, max: 300, unit_of_measurement: 'seconds' } },
                name: 'Transition',
                description: 'Duration it takes to get to next state.',
            },
        },
        target: { entity: [{ domain: ['light'] }] },
    },
    toggle: {
        name: 'Toggle',
        description: 'Toggles one or more lights, from on to off, or, off to on.',
        fields: {
            transition: {
                filter: { supported_features: [32] },
                selector: { number: { min: 0, max: 300, unit_of_measurement: 'seconds' } },
                name: 'Transition',
                description: 'Duration it takes to get to next state.',
            },
        },
        target: { entity: [{ domain: ['light'] }] },
    },
};
