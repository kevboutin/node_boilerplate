// ensure the NODE_ENV is set to 'test'
// this is helpful when you would like to change behavior when testing
process.env.NODE_ENV = 'test';

var mongoose = require('mongoose');
var config = require('config');

exports.reconnect = function (done) {
    if (mongoose.connection.readyState === 0) {
        mongoose.connect(config);
    }

    return done();
};

exports.clear = function (done) {
    for (var i in mongoose.connection.collections) {
        mongoose.connection.collections[i].remove(function () {});
    }

    return done();
};

exports.disconnect = function (done) {
    mongoose.disconnect();
    return done();
};
