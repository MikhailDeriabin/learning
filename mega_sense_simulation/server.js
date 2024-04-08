require("dotenv").config({path: './.env'});

const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors({credentials: true, origin: process.env.CORS_ORIGIN}));

app.use("/esp86", require('./esp86/esp86Router'));
app.use("/esp32", require('./esp32/esp32.router'));

app.listen(process.env.SERVER_PORT, async () => {
    displayLinks();
    /*
    setInterval(async () => {
        const respObj = await sensor.measure();
        await influx.write(respObj);

        await file.saveData('esp86.json', respObj);
    }, 15000);*/
});

function displayLinks(){
    console.log();
    console.log("----------------------");
    console.log(`HOME: http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}/`);
    console.log("----------------------");
    console.log();
}