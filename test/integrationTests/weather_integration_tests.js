const tools  = require('./testTools');
const expect = require('chai').expect;

async function testUpdates(harness, states, entity) {
    for (const state of states) {
        await tools.validateStateChange(harness, entity.entity_id,
            async () => await harness.states.setStateAsync(state.iobId, state.updatedValue),
            entity => {
                if (state.attribute === 'state') {
                    expect(entity).to.have.property('state', state.updatedValue);
                } else {
                    expect(entity).to.have.nested.property('attributes.' + state.attribute, state.updatedValue);
                }
            });
    }
}

exports.runTests = function (getHarness) {
    it('should create weather entity for accuweather and update correctly', async () => {
        const harness = getHarness();
        const objects = require('../testData/weather_accuweather.json');
        const deviceId = 'accuweather.0.Summary';

        const states = [{
            attribute: 'state',
            iobId: deviceId + '.WeatherIconURL',
            initialValue: 'iconURL',
            updatedValue: 'iconURLUpdated'
        }, {
            attribute: 'temperature',
            iobId: deviceId + '.Temperature',
            initialValue: 25,
            updatedValue: 30
        }, {
            attribute: 'pressure',
            iobId: deviceId + '.Pressure',
            initialValue: 10,
            updatedValue: 11
        }, {
            attribute: 'humidity',
            iobId: deviceId + '.RelativeHumidity',
            initialValue: 30,
            updatedValue: 40
        }, {
            attribute: 'wind_speed',
            iobId: deviceId + '.WindSpeed',
            initialValue: 5,
            updatedValue: 8
        }, {
            attribute: 'wind_bearing',
            iobId: deviceId + '.WindDirection',
            initialValue: 90,
            updatedValue: 180
        }, {
            attribute: 'forecast.0.condition',
            iobId: deviceId + '.WeatherIconURL_d2',
            initialValue: 'iconURL1',
            updatedValue: 'iconURL1Updated'
        }, {
            attribute: 'forecast.0.temperature',
            iobId: deviceId + '.TempMax_d2',
            initialValue: 10,
            updatedValue: 11
        }, {
            attribute: 'forecast.0.templow',
            iobId: deviceId + '.TempMin_d2',
            initialValue: 8,
            updatedValue: 9
        }, {
            attribute: 'forecast.0.precipitation_probability',
            iobId: deviceId + '.PrecipitationProbability_d2',
            initialValue: 50,
            updatedValue: 60
        }, {
            attribute: 'forecast.0.precipitation',
            iobId: deviceId + '.TotalLiquidVolume_d2',
            initialValue: 500,
            updatedValue: 600
        }, {
            attribute: 'forecast.0.datetime',
            iobId: deviceId + '.DateTime_d2',
            initialValue: 'Do',
            updatedValue: 'Fr'
        }, {
            attribute: 'forecast.1.condition',
            iobId: deviceId + '.WeatherIconURL_d3',
            initialValue: 'iconURL2',
            updatedValue: 'iconURL2Updated'
        }, {
            attribute: 'forecast.1.temperature',
            iobId: deviceId + '.TempMax_d3',
            initialValue: 12,
            updatedValue: 13
        }, {
            attribute: 'forecast.1.templow',
            iobId: deviceId + '.TempMin_d3',
            initialValue: 7,
            updatedValue: 8
        }, {
            attribute: 'forecast.1.precipitation_probability',
            iobId: deviceId + '.PrecipitationProbability_d3',
            initialValue: 51,
            updatedValue: 61
        }, {
            attribute: 'forecast.1.precipitation',
            iobId: deviceId + '.TotalLiquidVolume_d3',
            initialValue: 501,
            updatedValue: 601
        }, {
            attribute: 'forecast.1.datetime',
            iobId: deviceId + '.DateTime_d3',
            initialValue: 'Fr',
            updatedValue: 'Sa'
        }, {
            attribute: 'forecast.2.condition',
            iobId: deviceId + '.WeatherIconURL_d4',
            initialValue: 'iconURL3',
            updatedValue: 'iconURL3Updated'
        }, {
            attribute: 'forecast.2.temperature',
            iobId: deviceId + '.TempMax_d4',
            initialValue: 14,
            updatedValue: 15
        }, {
            attribute: 'forecast.2.templow',
            iobId: deviceId + '.TempMin_d4',
            initialValue: 4,
            updatedValue: 5
        }, {
            attribute: 'forecast.2.precipitation_probability',
            iobId: deviceId + '.PrecipitationProbability_d4',
            initialValue: 52,
            updatedValue: 62
        }, {
            attribute: 'forecast.2.precipitation',
            iobId: deviceId + '.TotalLiquidVolume_d4',
            initialValue: 502,
            updatedValue: 602
        }, {
            attribute: 'forecast.2.datetime',
            iobId: deviceId + '.DateTime_d4',
            initialValue: 'Sa',
            updatedValue: 'So'
        }, {
            attribute: 'forecast.3.condition',
            iobId: deviceId + '.WeatherIconURL_d5',
            initialValue: 'iconURL4',
            updatedValue: 'iconURL4Updated'
        }, {
            attribute: 'forecast.3.temperature',
            iobId: deviceId + '.TempMax_d5',
            initialValue: 20,
            updatedValue: 21
        }, {
            attribute: 'forecast.3.templow',
            iobId: deviceId + '.TempMin_d5',
            initialValue: 10,
            updatedValue: 12
        }, {
            attribute: 'forecast.3.precipitation_probability',
            iobId: deviceId + '.PrecipitationProbability_d5',
            initialValue: 53,
            updatedValue: 63
        }, {
            attribute: 'forecast.3.precipitation',
            iobId: deviceId + '.TotalLiquidVolume_d5',
            initialValue: 503,
            updatedValue: 603
        }, {
            attribute: 'forecast.3.datetime',
            iobId: deviceId + '.DateTime_d5',
            initialValue: 'So',
            updatedValue: 'Mo'
        }];
        const entities = await tools.startAndGetEntities(harness, objects, [deviceId], states.map(s => { return {id: s.iobId, val: s.initialValue}; }));
        expect(entities.length).to.be.at.least(1 + tools.getNumConstEntities());
        const entity = entities.find(e => e.context.id === deviceId && e.entity_id.startsWith('weather.'));
        expect(entity).to.be.ok;

        expect(entity).to.have.property('state', 'iconURL');
        for (const state of states) {
            if (state.attribute !== 'state') {
                expect(entity).to.have.nested.property('attributes.' + state.attribute, state.initialValue);
            }
        }
        await testUpdates(harness, states, entity);
    });

    it('should create weather entity for daswetter with right data on right days and update correctly', async () => {
        const harness = getHarness();
        const objects = require('../testData/weather_daswetter.json');
        const deviceId = 'daswetter.0.NextDays.Location_1';

        const states = [{
            attribute: 'state',
            iobId: deviceId + '.Day_1.iconURL',
            initialValue: 'iconURL',
            updatedValue: 'iconURLUpdated'
        }, {
            attribute: 'temperature',
            iobId: deviceId + '.Day_1.Maximale_Temperatur_value',
            initialValue: 25,
            updatedValue: 30
        }, {
            attribute: 'forecast.0.condition',
            iobId: deviceId + '.Day_2.iconURL',
            initialValue: 'iconURL1',
            updatedValue: 'iconURL1Updated'
        }, {
            attribute: 'forecast.0.temperature',
            iobId: deviceId + '.Day_2.Maximale_Temperatur_value',
            initialValue: 10,
            updatedValue: 11
        }, {
            attribute: 'forecast.0.templow',
            iobId: deviceId + '.Day_2.Minimale_Temperatur_value',
            initialValue: 8,
            updatedValue: 9
        }, {
            attribute: 'forecast.1.condition',
            iobId: deviceId + '.Day_3.iconURL',
            initialValue: 'iconURL2',
            updatedValue: 'iconURL2Updated'
        }, {
            attribute: 'forecast.1.temperature',
            iobId: deviceId + '.Day_3.Maximale_Temperatur_value',
            initialValue: 12,
            updatedValue: 13
        }, {
            attribute: 'forecast.1.templow',
            iobId: deviceId + '.Day_3.Minimale_Temperatur_value',
            initialValue: 7,
            updatedValue: 8
        }, {
            attribute: 'forecast.2.condition',
            iobId: deviceId + '.Day_4.iconURL',
            initialValue: 'iconURL3',
            updatedValue: 'iconURL3Updated'
        }, {
            attribute: 'forecast.2.temperature',
            iobId: deviceId + '.Day_4.Maximale_Temperatur_value',
            initialValue: 14,
            updatedValue: 15
        }, {
            attribute: 'forecast.2.templow',
            iobId: deviceId + '.Day_4.Minimale_Temperatur_value',
            initialValue: 4,
            updatedValue: 5
        }, {
            attribute: 'forecast.3.condition',
            iobId: deviceId + '.Day_5.iconURL',
            initialValue: 'iconURL4',
            updatedValue: 'iconURL4Updated'
        }, {
            attribute: 'forecast.3.temperature',
            iobId: deviceId + '.Day_5.Maximale_Temperatur_value',
            initialValue: 20,
            updatedValue: 21
        }, {
            attribute: 'forecast.3.templow',
            iobId: deviceId + '.Day_5.Minimale_Temperatur_value',
            initialValue: 10,
            updatedValue: 12
        }, {
            attribute: 'forecast.4.condition',
            iobId: deviceId + '.Day_6.iconURL',
            initialValue: 'iconURL5',
            updatedValue: 'iconURL5Updated'
        }, {
            attribute: 'forecast.4.temperature',
            iobId: deviceId + '.Day_6.Maximale_Temperatur_value',
            initialValue: 30,
            updatedValue: 31
        }, {
            attribute: 'forecast.4.templow',
            iobId: deviceId + '.Day_6.Minimale_Temperatur_value',
            initialValue: 13,
            updatedValue: 14
        }, {
            attribute: 'forecast.5.condition',
            iobId: deviceId + '.Day_7.iconURL',
            initialValue: 'iconURL6',
            updatedValue: 'iconURL6Updated'
        }, {
            attribute: 'forecast.5.temperature',
            iobId: deviceId + '.Day_7.Maximale_Temperatur_value',
            initialValue: 25,
            updatedValue: 28
        }, {
            attribute: 'forecast.5.templow',
            iobId: deviceId + '.Day_7.Minimale_Temperatur_value',
            initialValue: 15,
            updatedValue: 17
        }];
        const entities = await tools.startAndGetEntities(harness, objects, [deviceId], states.map(s => { return {id: s.iobId, val: s.initialValue}; }));
        expect(entities.length).to.be.at.least(1 + tools.getNumConstEntities());
        const entity = entities.find(e => e.context.id === deviceId && e.entity_id.startsWith('weather.'));
        expect(entity).to.be.ok;

        expect(entity).to.have.property('state', 'iconURL');
        for (const state of states) {
            if (state.attribute !== 'state') {
                expect(entity).to.have.nested.property('attributes.' + state.attribute, state.initialValue);
            }
        }

        for (let day = 0; day < 6; day += 1) {
            const forecast = entity.attributes.forecast[day];
            expect(forecast).to.have.property('datetime');
            const date = new Date(forecast.datetime);
            expect(date).to.be.ok;
            const now = new Date();
            expect(date.getDate()).to.equal(now.getDate() + day + 1);
        }

        await testUpdates(harness, states, entity);

        const newTS = Date.now() - (10 * 24 * 60 * 60 * 1000);
        await tools.validateStateChange(harness, entity.entity_id,
            async () => await harness.states.setStateAsync(deviceId + '.Day_7.iconURL', {val: 'icon6URLNeu', ts: newTS, ack: true}),
            entity => {
                const date = new Date(entity.attributes.forecast[5].datetime);
                const controlDate = new Date(newTS);
                expect(date.getDate()).to.equal(controlDate.getDate() +6);
            });
    });

    it('should create weather entity for weatherunderground', async () => {
        const harness = getHarness();
        const objects = require('../testData/weather_weatherunderground.json');
        const deviceId = 'weatherunderground.0.forecast';

        const states = [{
            attribute: 'state',
            iobId: deviceId + '.0d.iconURL',
            initialValue: 'iconURL',
            updatedValue: 'iconURLUpdated'
        }, {
            attribute: 'temperature',
            iobId: deviceId + '.current.temp',
            initialValue: 25,
            updatedValue: 30
        }, {
            attribute: 'pressure',
            iobId: deviceId + '.current.pressure',
            initialValue: 10,
            updatedValue: 11
        }, {
            attribute: 'humidity',
            iobId: deviceId + '.0d.humidity',
            initialValue: 30,
            updatedValue: 40
        }, {
            attribute: 'wind_speed',
            iobId: deviceId + '.0d.windSpeed',
            initialValue: 5,
            updatedValue: 8
        }, {
            attribute: 'wind_bearing',
            iobId: deviceId + '.0d.windDegrees',
            initialValue: 90,
            updatedValue: 180
        }, {
            attribute: 'forecast.0.condition',
            iobId: deviceId + '.1d.iconURL',
            initialValue: 'iconURL1',
            updatedValue: 'iconURL1Updated'
        }, {
            attribute: 'forecast.0.temperature',
            iobId: deviceId + '.1d.tempMax',
            initialValue: 10,
            updatedValue: 11
        }, {
            attribute: 'forecast.0.templow',
            iobId: deviceId + '.1d.tempMin',
            initialValue: 8,
            updatedValue: 9
        }, {
            attribute: 'forecast.0.precipitation_probability',
            iobId: deviceId + '.1d.precipitationChance',
            initialValue: 50,
            updatedValue: 60
        }, {
            attribute: 'forecast.0.datetime',
            iobId: deviceId + '.1d.date',
            initialValue: 'Do',
            updatedValue: 'Fr'
        }, {
            attribute: 'forecast.0.humidity',
            iobId: deviceId + '.1d.humidity',
            initialValue: 34,
            updatedValue: 45
        }, {
            attribute: 'forecast.1.condition',
            iobId: deviceId + '.2d.iconURL',
            initialValue: 'iconURL2',
            updatedValue: 'iconURL2Updated'
        }, {
            attribute: 'forecast.1.temperature',
            iobId: deviceId + '.2d.tempMax',
            initialValue: 12,
            updatedValue: 13
        }, {
            attribute: 'forecast.1.templow',
            iobId: deviceId + '.2d.tempMin',
            initialValue: 7,
            updatedValue: 8
        }, {
            attribute: 'forecast.1.precipitation_probability',
            iobId: deviceId + '.2d.precipitationChance',
            initialValue: 51,
            updatedValue: 61
        }, {
            attribute: 'forecast.1.datetime',
            iobId: deviceId + '.2d.date',
            initialValue: 'Fr',
            updatedValue: 'Sa'
        }, {
            attribute: 'forecast.1.humidity',
            iobId: deviceId + '.2d.humidity',
            initialValue: 51,
            updatedValue: 60
        }, {
            attribute: 'forecast.2.condition',
            iobId: deviceId + '.3d.iconURL',
            initialValue: 'iconURL3',
            updatedValue: 'iconURL3Updated'
        }, {
            attribute: 'forecast.2.temperature',
            iobId: deviceId + '.3d.tempMax',
            initialValue: 14,
            updatedValue: 15
        }, {
            attribute: 'forecast.2.templow',
            iobId: deviceId + '.3d.tempMin',
            initialValue: 4,
            updatedValue: 5
        }, {
            attribute: 'forecast.2.precipitation_probability',
            iobId: deviceId + '.3d.precipitationChance',
            initialValue: 52,
            updatedValue: 62
        }, {
            attribute: 'forecast.2.datetime',
            iobId: deviceId + '.3d.date',
            initialValue: 'Sa',
            updatedValue: 'So'
        }, {
            attribute: 'forecast.2.humidity',
            iobId: deviceId + '.3d.humidity',
            initialValue: 32,
            updatedValue: 41
        }];
        const entities = await tools.startAndGetEntities(harness, objects, [deviceId], states.map(s => { return {id: s.iobId, val: s.initialValue}; }));
        expect(entities.length).to.be.at.least(1 + tools.getNumConstEntities());
        const entity = entities.find(e => e.context.id === deviceId && e.entity_id.startsWith('weather.'));
        expect(entity).to.be.ok;

        expect(entity).to.have.property('state', 'iconURL');
        for (const state of states) {
            if (state.attribute !== 'state') {
                expect(entity).to.have.nested.property('attributes.' + state.attribute, state.initialValue);
            }
        }
        await testUpdates(harness, states, entity);
    });
};
