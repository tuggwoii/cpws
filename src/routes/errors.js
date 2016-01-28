'use strict';
var config = require('../../config/settings');
var log = require('../helpers/log');

module.exports = function (err, req, res) {
    log.file(err.stack).catch(function (err) {
        log.write(err);
    });
    if (config['environment'] === 'dev') {
        res.status(500).send(err.stack);
    }
    else {
        res.status(500).render('pages/500.html');
    }
};
