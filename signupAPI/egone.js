var http = require(‘http’);

http.createServer(function (request, response) {
     	response.writeHead(200, {“Content-type”: “text/plain”})
	response.end(“<h1>Hello world</h1>”)
}).listen(8354);
