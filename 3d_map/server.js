require("dotenv").config({path: './.env'});

const express = require('express');
const cors = require('cors');
const {DataMaker} = require("./dataMaker/dataMaker");

const app = express();

const dataMaker = new DataMaker();

app.use(express.json());
app.use(cors({credentials: true, origin: process.env.CORS_ORIGIN}));

app.use('/pm', require('./pm/pm.router'));

app.listen(process.env.SERVER_PORT, async () => {
    displayLinks();

    //call only once
    //await dataMaker.makeUpData(10);
});

function displayLinks(){
    console.log();
    console.log("----------------------");
    console.log(`HOME: http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}/`);
    console.log("----------------------");
    console.log();
}