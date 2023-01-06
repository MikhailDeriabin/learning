const mysql = require("mysql");
const util = require("util");

const dbConfig = {
    host: "localhost",
    user: "user",
    password: "user",
    database: "example_db"
};

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

module.exports.makeQuery = makeQuery;