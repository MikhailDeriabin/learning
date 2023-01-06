const path = require("path");
const db = require("./db");
const bodyParser = require("body-parser");
const express = require("express");

const router = (app) => {
    const urlencodedParser = bodyParser.urlencoded({ extended: false })
    app.use(express.static('public'));

    sendIndexPage(app);

    app.get('/events', urlencodedParser, (req, res) => {
        const start = req.query.start;
        const end = req.query.end;

        const searchQuery = "SELECT Event.Name, Event_date.Date FROM Event, Event_date WHERE Event_date.Date BETWEEN '" +
            + start + "' AND '" + end + "' AND Event.Event_id = Event_date.Event_id";
        db.makeQuery(searchQuery).then((result) => {
            let response = [];

            if(result.length > 0){
                for(let i=0; i<result.length; i++){
                    response[i] = {
                        name: result[i].Name,
                        date: result[i].Date
                    }
                }
            }

            res.end(JSON.stringify(response));
        });
    });
}

function sendIndexPage(app) {
    app.get('/', function (req, res) {
        sendFile(res, "listofevents.html");
    });
    app.get("/listofeventsClient.js", (req, res) => {
        sendFile(res, "listofeventsClient.js");
    });
}

function sendFile(res, name){
    const fileLocation = path.resolve(name);
    res.sendFile(fileLocation);
}

module.exports = router;