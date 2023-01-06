const http = require("http");

//start from cmd with command node startServer.js, then open http://localhost:8888/

//ATTENTION: the site will not update automatically, you need to restart the server each time (stop server with ctrl+c)

console.log("Starting server...");

http.createServer(function (request, response) {

    //This code will run each time client will ask = browser with this page will be opened
    console.log("Query was made");

    //Answer to client (browser) with code 200=site found and return type of content (just text)
    /*
    response.writeHead(200, {"Content-Type": "text/plain"});
    //send information
    response.write("Hello world!");
    */

    // for HTML use text/html type
    response.writeHead(202, {"Content-Type": "text/html"});
    response.write("<p>This is a paragraph</p>");

    //close the query
    response.end();

}).listen(8888);