const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "user",
    password: "user"
});

connection.connect(function (err) {
    if(err) throw err;
    console.log("Connection established");

    connection.query("CREATE DATABASE firstDB", function (err, result) {
        if(err) throw err;
        console.log("Database created");
    });
});