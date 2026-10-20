import { expect } from 'chai';
import { processManualEntity } from './input_datetime';
import type { ioBrokerEntity } from './converter';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const entityData = require('../../../lib/dataSingleton');

const STATE_ID = 'dwd.0.warning.begin';

interface LogEntry {
    level: string;
    text: string;
}

function makeEntity(): ioBrokerEntity {
    return {
        entity_id: 'input_datetime.warning_begin',
        state: '',
        attributes: {},
        context: { STATE: { getId: STATE_ID, setId: STATE_ID } },
        addID2entity: (): void => {},
    } as unknown as ioBrokerEntity;
}

function makeObjects(type: string): Record<string, ioBroker.Object> {
    return {
        [STATE_ID]: { _id: STATE_ID, type: 'state', common: { name: 'begin', type, role: 'value.time' }, native: {} },
    } as unknown as Record<string, ioBroker.Object>;
}

function build(type = 'number', custom: Record<string, unknown> = {}): ioBrokerEntity {
    const objects = makeObjects(type);
    return processManualEntity(STATE_ID, objects[STATE_ID], makeEntity(), objects, {
        attr_has_date: true,
        attr_has_time: true,
        ...custom,
    })[0];
}

function readState(entity: ioBrokerEntity, val: ioBroker.StateValue): void {
    entity.context.STATE.getParser!(entity, 'state', { val } as ioBroker.State);
}

describe('converters/input_datetime', function () {
    let log: LogEntry[];
    let written: { id: string; val: ioBroker.StateValue }[];

    beforeEach(function () {
        log = [];
        written = [];
        entityData.log = {
            debug: (text: string) => log.push({ level: 'debug', text }),
            warn: (text: string) => log.push({ level: 'warn', text }),
            error: (text: string) => log.push({ level: 'error', text }),
        };
        entityData.adapter.setForeignStateAsync = (id: string, val: ioBroker.StateValue): Promise<void> => {
            written.push({ id, val });
            return Promise.resolve();
        };
    });

    it('reports an unset state as unknown and does not warn about it', function () {
        //dwd writes null while there is no weather warning - that is normal, not an error (#768)
        const entity = build();
        readState(entity, null);

        expect(entity.state).to.equal('unknown');
        //no date attributes either, like an input_datetime without a value in Home Assistant
        expect(entity.attributes).to.not.have.property('year');
        expect(entity.attributes).to.not.have.property('hour');
        expect(log.filter(l => l.level === 'warn')).to.have.lengthOf(0);
        expect(log.filter(l => l.level === 'debug')).to.have.lengthOf(1);
    });

    it('reports a number that is no date and a string that holds none as unknown', function () {
        const fromNumber = build();
        readState(fromNumber, -1);
        expect(fromNumber.state).to.equal('unknown');

        const fromString = build('string');
        readState(fromString, 'none');
        expect(fromString.state).to.equal('unknown');
        expect(log.filter(l => l.level === 'warn')).to.have.lengthOf(0);
    });

    it('still reads a real timestamp', function () {
        const entity = build();
        const date = new Date(2026, 9, 20, 7, 5, 0);
        readState(entity, date.getTime());

        expect(entity.attributes.year).to.equal(2026);
        expect(entity.attributes.month).to.equal(10);
        expect(entity.attributes.day).to.equal(20);
        expect(entity.state).to.equal('2026-10-20 07:05:00');
    });

    it('writes null when there is no date to put the entered time on', async function () {
        //the frontend sends the state as the date, so it sends "unknown" for an unset entity, and
        //null is what unknown is on the ioBroker side - written, not deleted, so ts/from are set
        const entity = build();
        readState(entity, null);
        const command = entity.context.COMMANDS.find(c => c.service === 'set_datetime')!;
        await command.parseCommand!(entity, command, { service_data: { time: '07:30:00' } } as any, undefined as any);

        expect(written).to.deep.equal([{ id: STATE_ID, val: null }]);
        expect(entity.state).to.equal('unknown');
        expect(entity.attributes).to.not.have.property('year');
    });

    it('writes the timestamp when the frontend sends a date along', async function () {
        const entity = build();
        readState(entity, null);
        const command = entity.context.COMMANDS.find(c => c.service === 'set_datetime')!;
        await command.parseCommand!(
            entity,
            command,
            { service_data: { date: '2026-10-21', time: '07:30:00' } } as any,
            undefined as any,
        );

        expect(written).to.have.lengthOf(1);
        expect(written[0].val).to.equal(new Date(2026, 9, 21, 7, 30, 0).getTime());
        expect(entity.state).to.equal('2026-10-21 07:30:00');
    });
});
