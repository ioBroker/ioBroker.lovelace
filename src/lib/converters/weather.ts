import { Types } from '@iobroker/type-detector';
import Converter, { type ConverterParameters, type ioBrokerEntity } from './converter';
import { WeatherEntity } from '../entities/weatherEntity';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const adapterData: { services: Record<string, unknown> } = require('../../../lib/dataSingleton');

/** Converter for weather forecast device types. */
export class WeatherConverter extends Converter {
    /** @inheritdoc */
    static convertEntities(params: ConverterParameters): ioBrokerEntity[] {
        return [new WeatherEntity(params)];
    }
}

Converter.converters[Types.weatherForecast] = WeatherConverter;

// Weather services are registered for completeness but not actually handled — removed immediately.
adapterData.services.weather = {
    get_forecast: {
        name: 'Get forecast',
        description: 'Get weather forecast.',
        fields: {
            type: {
                required: true,
                selector: { select: { options: ['daily', 'hourly', 'twice_daily'], translation_key: 'forecast_type' } },
                name: 'Forecast type',
                description: 'Forecast type: daily, hourly or twice daily.',
            },
        },
        target: { entity: [{ domain: ['weather'], supported_features: [1, 2, 4] }] },
        response: { optional: false },
    },
    get_forecasts: {
        name: 'Get forecasts',
        description: 'Get weather forecasts.',
        fields: {
            type: {
                required: true,
                selector: { select: { options: ['daily', 'hourly', 'twice_daily'], translation_key: 'forecast_type' } },
                name: 'Forecast type',
                description: 'Forecast type: daily, hourly or twice daily.',
            },
        },
        target: { entity: [{ domain: ['weather'], supported_features: [1, 2, 4] }] },
        response: { optional: false },
    },
};
delete adapterData.services.weather;
