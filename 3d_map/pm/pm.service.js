const db = require("../util/db");

class PmService {
    getAll = async () => {
        const query = 'SELECT * FROM pmLocation;';
        const resp = await db.makeQuery(query);

        return resp;
    }
}

module.exports = { PmService };