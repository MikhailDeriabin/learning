const express = require('express');
const { logHelloWorld } = require('../middlewares/myMiddleware');

const app = express();

app.get('/log', logHelloWorld, (req, res) => {
    res.end();
});
app.listen(8080, () => {
    console.log('Express server is on');
    console.log('http://localhost:8080');
});