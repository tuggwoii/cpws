'use strict';
class Account {

    serialize(data) {
        return {
            email: data.email
        };
    }
}

module.exports = new Account();
