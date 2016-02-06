var config = require('config');
var db = require('mongoose');
var app = require('./app');
var log = require('winston').logger;

// Mongo connection setup
db.connect(config);

// Start Express
var server = app.listen(app.get('port'), function() {
    log.info('Express server listening on port ' + server.address().port);
});
