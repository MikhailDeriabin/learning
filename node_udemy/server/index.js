const http = require("http");

const server = http.createServer((req, res) => {
    const { url, method } = req;
    console.log(url + ' ' + method);

    switch (url) {
        case '/':
            res.writeHead(200, {
                'Content-Type': 'text/plain'
            });

            res.end('Hello world!');
            break;
        case '/object':
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });

            res.end(JSON.stringify({Hello:"world!"}, null, 4));
            break;
        case '/site':
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.write('<h1>This is a html doc</h1>');
            res.end();
            break;
        default:
            res.statusCode = 404;
            res.end();
            break;
    }
});

server.listen(8080, () => {
    console.log('Listening on ' + 'http://localhost:8080');
});