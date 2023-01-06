const mysql = require('mysql');
const util = require("util");
const express = require('express');

const dbConfig = {
    host: "localhost",
    user: "user",
    password: "user",
    database: "example_db"
};

const app = express();

const makeQuery = async (sqlQuery) => {
    const con = mysql.createConnection(dbConfig);
    const query = util.promisify(con.query).bind(con);

    try {
        return await query(sqlQuery);
    } catch(err){
        console.log("Error during getting data from DB:");
        console.log(err);
    } finally {
        con.end();
    }
}

const someQuery = 'SELECT * FROM event';

app.get('/', (req, res) => {
    makeQuery(someQuery).then((result) => {
        console.log(result);
        res.send(result);
    });
    console.log("This line will be first");
});

const anotherQuery = "SELECT * FROM event_date";
app.get("/date", (req, res) => {
    makeQuery(anotherQuery).then((result) => {
        res.send(result);
    });
});

const server = app.listen(8081, () => {
    const host = server.address().address;
    const port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port)
});