function responseSuccess (message) {
    this.success = true;
    this.message = 'success';
    if (message) {
        this.message = message;
    }
}

function responseError(message) {
    this.success = false;
    this.message = 'unknow error';
    if (message) {
        this.message = message;
    }
}

exports.responseSuccess = function (message) {
    return new responseSuccess(message);
}

exports.responseError = function (message) {
    return new responseError(message);
}

