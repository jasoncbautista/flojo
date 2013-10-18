
var port = 3091;

var connect = require('connect');
connect.createServer(
        connect.static(__dirname)
).listen(port, '0.0.0.0');


console.log(port);

