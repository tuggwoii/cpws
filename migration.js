var db = require('./src/db/schema');
if (process.argv[2] == 'down') {
    db.down();
}
else {
    db.up();
}