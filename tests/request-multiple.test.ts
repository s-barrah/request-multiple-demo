import chai from 'chai';

import requestMultipleUrls from '../src/main/request-multiple';

const expect = chai.expect;

describe('Request Multiple URLs', () => {
    const mockData = [
        'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json',
        'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json',
        'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json'
    ];
    let response: {status: string; message: unknown}, statusCode: number;
    before( function (done) {
        // this.timeout(5000);

        requestMultipleUrls(mockData)
            .then((data) => {
                statusCode = 200;
                response = data;
                done();
            })
            .catch((error) => {
                statusCode = 500;
                response = error;
                done();
            });
    });

    it('should expect a 200 status code', function (){
        console.log('GET statusCode: ', statusCode);
        expect(statusCode).to.eql(200);
    });

    it('should expect a success status', function () {
        // @ts-ignore
        expect(response.status).to.eql('success');
    });
    it('should expect an array of data ', function () {
        // @ts-ignore
        expect(response.message.length > 0).to.eql(true);
    });

    it('should throw an error if array is empty', () => {
        expect(() => requestMultipleUrls([])).to.throw('Please enter a valid input');
    });

    it('should throw an error if array contains an invalid url', () => {
        expect(() => requestMultipleUrls(['this is a test'])).to.throw('Please enter a valid input');
    });

})
