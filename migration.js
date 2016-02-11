var db = require('./src/db/migrations/migration-2');
if (process.argv[2] == 'down') {
    db.down();
}
else {
    db.up();
}