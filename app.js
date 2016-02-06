var express = require('express');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var cors = require('cors');
var errorHandler = require('errorhandler');
var config = require('config');
var path = require('path');
var app = express();
var expressLogger = require('winston').expressLogger;

// get config at start time so that the app blows up as soon as possible
var httpPort = config.get('port');

// =============================================================================
// Express CONFIGURATION
// =============================================================================

app.set('port', httpPort);
app.use(bodyParser.json());
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors());
app.use(errorHandler());
app.use(express.static(path.join(__dirname, 'public')));

// setup logging
if (process.env.NODE_ENV !== 'test') {
    app.use(expressLogger);
}

app.use('/', require('./routes'));

/////////////////////////////////////////////////////////////////////////////////
module.exports = app;

/////////////////////////////////////////////////////////////////////////////////
