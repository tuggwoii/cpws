'use strict';
var fs = require('fs');
var log = require('../helpers/log');
var Base = require('./base');
var date = require('../helpers/date');
var pages;

class Classes extends Base {

    create (data) {
        var promise = new Promise(function (resolve, reject) {
            var path = './src/db/classes/' + data.name + '.json';
            var isExist = false;
            try {
                var file = fs.lstatSync(path);
                if (file.isFile()) {
                    isExist = true;
                    reject('exist');
                }
            }
            catch (e) { }
            if (!isExist) {
                var dateTime = new Date();
                var logDate = date.current();
                data.datetime_created = dateTime;
                data.datetime_updated = dateTime;
                fs.writeFile(path, JSON.stringify(data), function (err) {
                    if (err) reject(err);
                    log.write('class created: ' + logDate);
                    resolve(data);
                });
            }
        });
        return promise;
    }

    get () {
        var promise = new Promise(function (resolve, reject) {
            var path = './src/db/classes';
            var classes = [];
            var isError = false;
            fs.readdir(path, function (err, files) {
                if (err) {
                    isError = true;
                    reject(err);
                }
                var fileCount = 0;
                files.forEach(function (file) {
                    fs.readFile(path +'/'+ file, 'utf-8', function (err, content) {
                        if (err) {
                            isError = true;
                            reject(err);
                        }
                        if (!isError) {
                            fileCount++;
                            classes.push(JSON.parse(content));
                            if (fileCount === files.length) {
                                resolve(classes)
                            }
                        }
                    });
                });
            });
        });
        return promise;
    }

    save () {
        var promise = new Promise(function (resolve, reject) {
            var dateTime = date.current();
            var file = './src/db/routes/views.json';
            fs.writeFile(file, JSON.stringify(pages), function (err) {
                if (err) reject(err);
                log.write('pages saved: ' + dateTime);
                resolve();
            });
        });
        return promise;
    }

    sync () {
        pages = JSON.parse(fs.readFileSync('src/db/routes/views.json', 'utf8'));
    }

    isValid (data) {
        if (data.name) {
            return true;
        }
        return false;
    }

    serialize (data) {
        var classes = {
            name: data.name,
            datetime_created: data.datetime_created,
            datetime_updated: data.datetime_updated
        }
        return classes;
    }

    serializeList(data) {
        console.log('line 99', data);
        return data;
    }
}

module.exports = new Classes();
