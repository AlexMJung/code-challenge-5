var express = require('express');
var router = express.Router();
var message = require('../models/messages.schema.js')

router.get('/', function (req, res) {
    console.log('messages get was hit');
    message.find({}, function (err, data) {
        if (err) {
            console.log('find error:', err);
        } else {
            console.log('find data:', data);
            res.send(data);
        }
    });
});

router.post('/', function (req, res) {
    console.log('message to store: ', req.body);
    var goose = new message(req.body);
    goose.save(function (err, data) {
        if (err) {
            console.log('save error:', err);
            res.sendStatus(500);

        } else {
            res.sendStatus(201);
        }
    });
});

module.exports = router;