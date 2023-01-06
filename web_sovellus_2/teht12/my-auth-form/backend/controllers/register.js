const bcrypt = require("bcryptjs");

const db = require("../util/DB");

exports.register = async (req, res, next) => {
    try{
        const {username, password} = req.body;

        const selectUsernameQ = `SELECT username FROM user WHERE username = ?`;
        const resp = await db.makeQuery(selectUsernameQ, username);
        const isUserExist = resp.length !== 0;

        if(!isUserExist){
            const hashedPassword = await bcrypt.hash(password, 8);
            const insertUserQ = `INSERT INTO user (username, password) VALUES (?, ?)`;
            await db.makeQuery(insertUserQ, [username, hashedPassword]);
            const insertUserDataQ = `INSERT INTO userData (username) VALUES (?)`;
            await db.makeQuery(insertUserDataQ, [username]);
            res.status(200);
            res.isSuccess = true;
        } else {
            res.status(500);
            res.isSuccess = false;
        }
    } catch (e){
        console.log('No connection to the DB or problems with query');
        res.isSuccess = false;
    }

    next();
}