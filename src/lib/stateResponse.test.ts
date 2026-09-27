import { expect } from 'chai';
import { stateToResponse } from './stateResponse';

describe('lib/stateResponse', function () {
    it('decodes a base64 data url into the image it holds', function () {
        const png = Buffer.from('fake png');
        const response = stateToResponse(`data:image/png;base64,${png.toString('base64')}`);
        expect(response.contentType).to.equal('image/png');
        expect((response.body as Buffer).equals(png)).to.equal(true);
    });

    it('decodes a data url without base64', function () {
        const response = stateToResponse('data:text/html,%3Cb%3Ehi%3C%2Fb%3E');
        expect(response.contentType).to.equal('text/html');
        expect(response.body.toString()).to.equal('<b>hi</b>');
    });

    it('serves plain values as text and objects as json', function () {
        expect(stateToResponse('hello')).to.deep.equal({ contentType: 'text/plain', body: 'hello' });
        expect(stateToResponse(42)).to.deep.equal({ contentType: 'text/plain', body: '42' });
        expect(stateToResponse(true)).to.deep.equal({ contentType: 'text/plain', body: 'true' });
        expect(stateToResponse({ a: 1 } as unknown as ioBroker.StateValue)).to.deep.equal({
            contentType: 'application/json',
            body: '{"a":1}',
        });
    });

    it('has an empty body for a state without a value', function () {
        expect(stateToResponse(null)).to.deep.equal({ contentType: 'text/plain', body: '' });
        expect(stateToResponse(undefined)).to.deep.equal({ contentType: 'text/plain', body: '' });
    });
});
