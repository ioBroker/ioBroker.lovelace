/* global it before */
const tools = require('./testTools');
const expect = require('chai').expect;

exports.runTests = function (suite) {
    suite('calendar', getHarness => {
        let harness;

        const jsonFiles = ['../testData/calendar_manual.json'];
        const idsWithEnums = [];
        const initialStates = [];
        before(async () => {
            tools.clearClient();
            harness = getHarness();
            const objects = await tools.loadMultipleObjects(jsonFiles);
            await tools.startAndGetEntities(harness, objects, idsWithEnums, initialStates);
        });

        it('serves the events of a calendar in the shape of the REST api (#756)', async () => {
            const events = [
                { _date: '2026-10-07T07:45:00.000Z', _end: '2026-10-07T08:30:00.000Z', event: 'Mathe' },
                { _date: '2026-10-08T00:00:00.000Z', _end: '2026-10-09T00:00:00.000Z', event: 'Urlaub', _allDay: true },
            ];
            await harness.states.setStateAsync('adapter.0.calendar.events', JSON.stringify(events), true);
            await tools.delay(1000);

            const entities = await tools.sendToAsync(harness, 'lovelace.0', 'browse');
            const entity = entities.find(e => e.entity_id.startsWith('calendar.'));
            expect(entity, 'no calendar entity created').to.be.ok;

            const url =
                `http://localhost:${tools.lovelacePort}/api/calendars/${entity.entity_id}` +
                '?start=2026-10-06T00:00:00.000Z&end=2026-10-10T00:00:00.000Z';
            const response = await fetch(url);
            expect(response.status).to.equal(200);
            const body = await response.json();

            // Cards read event.start.dateTime / event.start.date - plain strings left them empty.
            expect(body).to.have.lengthOf(2);
            expect(body[0].start).to.deep.equal({ dateTime: '2026-10-07T07:45:00.000Z' });
            expect(body[0].end).to.deep.equal({ dateTime: '2026-10-07T08:30:00.000Z' });
            expect(body[0].summary).to.equal('Mathe');
            // A whole day is named with "date", without a time.
            expect(body[1].start).to.deep.equal({ date: '2026-10-08' });
            expect(body[1].end).to.deep.equal({ date: '2026-10-09' });
        });
    });
};
