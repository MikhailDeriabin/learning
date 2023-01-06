const mysql = require("mysql");

const con = mysql.createConnection({
    host: "localhost",
    user: "user",
    password: "user",
    database: "firstDB"
});

con.connect(function (err){
    if(err) throw err;

    const sqlQuery = "SELECT * FROM customers WHERE address LIKE 'S%'"; //= where address starts with S
    //const sqlQuery = "SELECT * FROM customers WHERE id < 10";
    //const sqlQuery = "SELECT * FROM customers";
    //const sqlQuery = "SELECT name FROM customers";
    con.query(sqlQuery, function (err, result, columns) {
        if(err) throw err;

        console.log(result);
        console.log("2nd row data: " + result[1].name + ", " + result[1].address);
        //information about columns
        console.log(columns);
    });
});