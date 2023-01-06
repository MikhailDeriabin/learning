const http = require("http");

console.log("starting server...");
http.createServer(function (request, response) {
    //request object is object created by browser, you can not control it here (on nodejs)
    console.log("URL of query is " + request.url);
    console.log("Method of query is " + request.method);
    //headers is an object with a helpful info about client's query
    console.log("Host of query is " + request.headers.host);

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<p>Hello, here is some text for you</p>");
    response.end();

}).listen(8888);