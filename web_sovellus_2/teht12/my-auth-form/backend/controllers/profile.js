const db = require("../util/DB");
const {promisify} = require("util");
const jwt = require("jsonwebtoken");

exports.updateProfileData = async (req, res, next) => {
    try{
        const username = await getUsername(req);

        if(username != null){
            const body = req.body;
            let updateUserQ = 'UPDATE userData SET';
            for(const key in body){
                updateUserQ += ' ' + key + ' = "' + body[key] + '",';
            }
            updateUserQ = updateUserQ.slice(0, -1);
            updateUserQ += ' WHERE username = "' + username + '"';

            const resp = await db.makeQuery(updateUserQ);

            if(resp != null){
                res.status(200);
                res.isSuccess = true;
                res.result = resp[0];
            } else{
                res.status(500);
                res.isSuccess = false;
            }
        } else {
            res.status(500);
            res.isSuccess = false;
        }
    } catch (e){
        console.log("No connection to the DB or problems with query");
        console.log(e);
        res.status(500);
        res.isSuccess = false;
    }

    next();
}

exports.getProfileData = async (req, res, next) => {
    try{
        const username = await getUsername(req);

        if(username != null){
            const selectUserQ = `SELECT * FROM userData WHERE username = ?`;
            const resp = await db.makeQuery(selectUserQ, username);

            if(resp != null && resp.length > 0){
                res.status(200);
                res.isSuccess = true;
                res.result = resp[0];
            } else{
                res.status(500);
                res.isSuccess = false;
            }
        } else {
            res.status(500);
            res.isSuccess = false;
        }
    } catch (e){
        console.log("No connection to the DB or problems with query");
        console.log(e);
        res.status(500);
        res.isSuccess = false;
    }

    next();
}

const getUsername = async (req) => {
    const jwtCookie = req.universalCookies.get('jwt');
    if(jwtCookie){
        try{
            const decoded = await promisify(jwt.verify)(jwtCookie, process.env.JWT_SECRET);
            return decoded.id;
        }catch(e){
            console.log("Problems with getting cookie");
            console.log(e);
        }
    }
}