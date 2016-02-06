var ExampleModel = require('../models/ExampleModel');
var testUtils = require('./testUtils');
var app = require('../app.js');
var request = require('supertest')(app);

describe('ExampleAPI', function () {

    before(testUtils.reconnect);

    describe('#get /example', function () {
        it('should get a list of things', function (done) {
            request
                .get('/example')
                .expect(200, done);
        });
    });

    describe('#post /example', function () {
        it('should create a new thing', function (done) {
            request
                .post('/example')
                .send({
                    username: 'higgsy',
                    email: 'higgens@aliens.net'
                })
                .expect(200, done);

        });
    });

    after(testUtils.disconnect);

});
