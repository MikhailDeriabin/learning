const http = require("http");

console.log("starting server...");
http.createServer(function (request, response) {
    const pages = [
        {address: "index", content: "<p>This is the index page</p>"},
        {address: "about", content: "<p>This is the about page</p>"},
        {address: "contacts", content: "<p>This is the contacts page</p>"}
    ];

    const requestUrl = request.url;

    let isPage = false;
    for(let i=0; i<pages.length; i++){
        const address = "/" + pages[i].address;
        if(address === requestUrl){
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(pages[i].content);
            response.end();
            isPage = true;
            break;
        }
    }

    if(!isPage){
        response.writeHead(404, {"Content-Type": "text/html"});
        response.write("Page " + request.headers.host + requestUrl + " not found");
        response.end();
    }
}).listen(8888);