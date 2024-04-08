const express = require('express');
const friendsRouter = require("./route/friends");

const app = express();
app.use(express.json());

app.use('/friends', friendsRouter);
app.listen(8080, () => {
    console.log('http://localhost:8080');
});

module.exports = app;