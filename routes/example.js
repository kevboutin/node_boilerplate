var express = require('express');
var router = express.Router();
var ExampleModel = require('../models/ExampleModel');
var log = require('winston').logger;

/**
 * @api {get} /example      An example endpoint
 * @apiName Example
 * @apiGroup Example
 *
 * @apiSuccess {Object}   users object    Some description
 * @apiSampleRequest /example
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {}
 */
router.get('/', function (req, res) {
    ExampleModel.find({}, function (err, users) {
        var userMap = {};

        users.forEach(function (user) {
            userMap[user._id] = user;
        });

        res.send(userMap);
    });
});

/**
 * @api {post} /example      Creates a user
 * @apiName CreateUser
 * @apiGroup Example
 *
 * @apiParam {String} username      Username
 * @apiParam {String} email     email
 *
 * @apiSuccess {Object}   users object    Some description
 * @apiSampleRequest /example
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {}
 */
router.post('/', function (req, res, next) {
    log.info('Creating new example... ');
    var newExample = new ExampleModel(req.body);
    newExample.save(function (err, user) {
        if (err) {
            return next(err);
        }

        log.info('CREATED new example... ');
        res.json(user);
    });
});

module.exports = router;
