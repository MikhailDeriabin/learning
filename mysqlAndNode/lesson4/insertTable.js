const mysql = require("mysql");

const dbName = "firstDB";
const tableName = "customers";

const conn = mysql.createConnection({
    host: "localhost",
    user: "user",
    password: "user",
    database: dbName
});

conn.connect(function (err) {
    if(err) throw err;
    console.log("Connection established");

    /*
    insert one value
    const query = "INSERT INTO " + tableName + " (name, address) VALUES ('Bob', 'Wall Street 34')";
    conn.query(query, function (err, result){
        if(err) throw err;
        console.log("inserted");
    });
     */

    const sql =  "INSERT INTO " + tableName + " (name, address) VALUES ?";
    const customersData = [
        ['John', 'Highway 71'],
        ['Peter', 'Lowstreet 4'],
        ['Amy', 'Apple st 652'],
        ['Hannah', 'Mountain 21'],
        ['Michael', 'Valley 345'],
        ['Sandy', 'Ocean blvd 2'],
        ['Betty', 'Green Grass 1'],
        ['Richard', 'Sky st 331'],
        ['Susan', 'One way 98'],
        ['Vicky', 'Yellow Garden 2'],
        ['Ben', 'Park Lane 38'],
        ['William', 'Central st 954'],
        ['Chuck', 'Main Road 989'],
        ['Viola', 'Sideway 1633']
    ];

    conn.query(sql, [customersData], function (err, result) {
        if(err) throw err;
        console.log("Inserted values count: " + result.affectedRows);
    });
});