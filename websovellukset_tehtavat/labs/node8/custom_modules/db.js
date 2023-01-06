const mysql = require("mysql");
const util = require("util");

const dbConfig = {
    host: "localhost",
    user: "root",
    password: "root",
    database: "example_db"
};

const makeQuery = async (sqlQuery , param) => {
    const con = mysql.createConnection(dbConfig);
    const query = util.promisify(con.query).bind(con);

    try {
        if(param !== null && param !== undefined)
            return await query(sqlQuery, param);
        else
            return await query(sqlQuery);
    } catch(err){
        console.log("Error during getting data from DB:");
        console.log(err);
    } finally {
        con.end();
    }
}

module.exports.makeQuery = makeQuery;