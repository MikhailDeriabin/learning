const path = require("path");
const db = require("./db");
const bodyParser = require("body-parser");
const express = require("express");

const router = (app) => {
    const urlencodedParser = bodyParser.urlencoded({ extended: false })
    app.use(express.static('public'));

    sendIndexPage(app);

    app.get('/events', urlencodedParser, (req, res) => {
        const name = req.query.name;

        const searchQuery = "SELECT * FROM location, event, event_date WHERE event.name LIKE ? AND location.Location_id = event.Location_Location_id AND event_date.Event_id = event.Event_id";
        db.makeQuery(searchQuery, `${name}%`).then((result) => {
            let response = [];

            if(result.length > 0){
                for(let i=0; i<result.length; i++){
                    response[i] = {
                        name: result[i].Name,
                    }
                }
            }
            res.end(JSON.stringify(result));
        });
    });
}

function sendIndexPage(app) {
    app.get('/', function (req, res) {
        sendFile(res, "place.html");
    });
    app.get("/placeClient.js", (req, res) => {
        sendFile(res, "placeClient.js");
    });
}

function sendFile(res, name){
    const fileLocation = path.resolve(name);
    res.sendFile(fileLocation);
}

module.exports = router;