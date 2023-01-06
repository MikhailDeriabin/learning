const path = require("path");
const db = require("./db");
const bodyParser = require("body-parser");
const express = require("express");

const router = (app) => {
    const urlencodedParser = bodyParser.urlencoded({ extended: false })
    app.use(express.static('public'));
    app.use(express.json({limit : "1mb"}));

    sendIndexPage(app);

    app.get('/events', urlencodedParser, (req, res) => {
        const name = req.query.name;

        const searchQuery = "SELECT * FROM location, event, event_date WHERE event.name LIKE ? AND location.Location_id = event.Location_Location_id AND event_date.Event_id = event.Event_id";
        db.makeQuery(searchQuery, `${name}%`).then((result) => {
            res.end(JSON.stringify(result));
        });
    });

    app.post('/events', async (req, res) => {
        const receivedData = req.body;

        const q1 = "INSERT INTO location (street_address) VALUES (?)";
        const promise1 = await db.makeQuery(q1, receivedData.address);
        const locationId = await promise1.insertId;

        const q2 = "INSERT INTO event (name, location_location_id) VALUES (?, ?)";
        const eventValues = [receivedData.name, locationId];
        const promise2 = await db.makeQuery(q2, eventValues);
        const eventId = await promise2.insertId;

        const q3 = "INSERT INTO event_date (date, event_id) VALUES (?, ?)";
        const dateValues = [receivedData.eventDate, eventId];
        db.makeQuery(q3, dateValues);

        res.json(receivedData);
        res.end();
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