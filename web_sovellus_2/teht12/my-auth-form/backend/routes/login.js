const express = require("express");
const loginController = require("../controllers/login");

const router = express.Router();

router.post("/", loginController.login, handleLoginResp);

function handleLoginResp(req, res){
    if(res.isSuccess){
        res.json({
            hasAccess: true,
            message: "Logged in successfully"
        });
    } else{
        res.json({
            hasAccess: false,
            message: "Wrong username or password provided"
        });
    }

    res.end();
}

module.exports = router;