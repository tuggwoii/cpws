'use strict';
class BaseModel {

    serialize (data) {
        return data;
    }

    isValid () {
        return true;
    }
}

module.exports = BaseModel;