//The middleware function is function, which can be used in the middle of operation.
// For Express it is returning response to the client.
//The middleware can be placed in any place from request to response using app.use() function (app is express server object)

function logHelloWorld(req, res, next) {
    console.log('Hello world!');
    console.log('The url is ' + req.url);
    next();
}

module.exports = {
    logHelloWorld
}