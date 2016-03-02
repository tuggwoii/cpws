'use strict';
var fs = require('fs');
var date = require('../helpers/date');

function log (message) {
    /* eslint-disable */
    console.log(message);
    /* eslint-enable */
}

exports.write = function (message) {
    log(message);
};


exports.file = function (message) {
    var promise = new Promise(function (resolve, reject) {
        var dateTime = date.current();
        var file = './src/db/logs/' + dateTime + '.txt';
        var logDetail = {
            datetime: dateTime,
            message: message
        };
        fs.writeFile(file, JSON.stringify(logDetail), function (err) {
            if (err) {
				log('error, create log: ' + dateTime);
				reject(err);
			}
			else {
				resolve();
			}
        });
    });
    return promise;
};
