const mysql = require("mysql");

const conn = mysql.createConnection({
    host: "localhost",
    user: "user",
    password: "user",
    database: "firstDB"
});

conn.connect(function (err) {
    if(err) throw err;
    console.log("Connection established");

    const query = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
    conn.query(query, function (err, result){
        if(err) throw err;
        console.log("Table created");
    });
});