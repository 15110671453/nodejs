

var server = require('./server');
var router = require('./router');

console.log(__filename);
console.log(__dirname);
server.start(router.route);