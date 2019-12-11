var staticServer = require('static-server');
var server = new staticServer({
    rootPath: "./dist/",
    port: 8000
});

server.start(function() {
    console.log('server started at port', server.port);
});