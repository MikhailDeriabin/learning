//create connection to the DB

const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "user",
    password: "user"
});

connection.connect(function (err) {
    if(err) throw err;
    console.log("Connected");
});