const express = require('express');
const db = require('./db');
const bodyParser = require('body-parser');
const cors = require('cors');

const catRoute = require('./cat/cat.route');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/cats', catRoute);

app.listen(8080, async() => {
    const isDBConnected = await db.connect();

    if(isDBConnected)
        console.log(`Server started on http://localhost:8080/`);
    else
        console.log('Problems with DB connection');

});