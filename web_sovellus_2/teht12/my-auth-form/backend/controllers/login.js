const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { promisify } = require("util");

const db = require("../util/DB");

exports.login = async (req, res, next) => {
    try{
        const username = req.body.username;
        const password = req.body.password;

        const selectUsernameQ = `SELECT username FROM user WHERE username = ?`;
        const resp = await db.makeQuery(selectUsernameQ, username);
        const isUserExist = resp.length !== 0;

        if(isUserExist){
            const selectUserQ = `SELECT * FROM user WHERE username = ?`;
            const resp = await db.makeQuery(selectUserQ, username);

            if(!resp || !(await bcrypt.compare(password, resp[0].password))){
                res.status(500);
                res.isSuccess = false;
            } else{
                const id = resp[0].username;
                createAccessCookie(id, req, res);
                createUsernameCookie(req, id);
                res.status(200);
                res.isSuccess = true;
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

exports.isLoggedIn = async (req, res, next) => {
    const jwtCookie = req.universalCookies.get('jwt');
    if(jwtCookie){
        console.log('jwt token', jwtCookie);
        try{
            const decoded = await promisify(jwt.verify)(jwtCookie, process.env.JWT_SECRET);
            console.log('jwt decoded:', JSON.stringify(decoded));

            try{
                const selectUsernameQ = `SELECT username FROM user WHERE username = ?`;
                const result = await db.makeQuery(selectUsernameQ, decoded.id);

                if(result){
                    req.result = result[0];
                } else{
                    console.log("No user found");
                }
            }catch(e){
                console.log("Problems with DB or connection");
                console.log(e);
            }
        }catch(e){
            console.log("Problems with getting cookie");
            console.log(e);
        }
    }

    next();
}

exports.getUsername = async (req, res, next) => {
    const jwtCookie = req.universalCookies.get('jwt');
    if(jwtCookie){
        try{
            const decoded = await promisify(jwt.verify)(jwtCookie, process.env.JWT_SECRET);
            req.username = decoded.id;
        }catch(e){
            console.log("Problems with getting cookie");
            console.log(e);
        }
    }

    next();
}

exports.logout = (req, res) => {
    res.cookie("jwt", "logout", {
        expires: new Date(Date.now() + 2*1000),
        httpOnly: true
    });
}

function createAccessCookie(id, req, res) {
    const token = jwt.sign({ id: id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });

    const cookieOptions = {
        expires: new Date( Date.now() + process.env.JWT_COOKIE_EXPIRES*24*60*60*1000 ),
        path: '/'
    };

    req.universalCookies.set('jwt', token, cookieOptions);
}

function createUsernameCookie(req, username) {
    const cookieOptions = {
        expires: new Date( Date.now() + process.env.JWT_COOKIE_EXPIRES*24*60*60*1000 ),
        path: '/'
    };

    req.universalCookies.set('username', username, cookieOptions);
}