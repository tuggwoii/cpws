var crypto = require('crypto');
exports.createToken = function (callback) {
    crypto.randomBytes(48, function (ex, buf) {
        var token = buf.toString('hex');
        callback(token)
    });
}
