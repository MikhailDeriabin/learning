const express = require("express");
const registerController = require("../controllers/register");

const router = express.Router();

router.post("/", registerController.register, handleRegisterResp);

function handleRegisterResp(req, res){
    if(res.isSuccess){
        res.json({
            result: "Username was registered"
        });
    } else{
        res.json({
            result: "Registration failed, try again"
        });
    }

    res.end();
}

module.exports = router;