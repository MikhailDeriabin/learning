const mysql = require("mysql");
const util = require("util");

const dbConfig = {
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
};

class DB{
    static async makeQuery(sqlQuery, params) {
        const con = mysql.createConnection(dbConfig);
        const query = util.promisify(con.query).bind(con);

        try {
            if (params !== null)
                return await query(sqlQuery, params);
            else
                return await query(sqlQuery);
        } catch (err) {
            console.log("Error during getting data from DB:");
            console.log(err);
        } finally {
            con.end();
        }
    }
}

module.exports = DB;