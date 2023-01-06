const express = require("express");
const loginController = require("../controllers/login");
const profileController = require("../controllers/profile");

const router = express.Router();

router.put("/", loginController.isLoggedIn, profileController.updateProfileData, handleUpdateResp);

router.get("/", loginController.isLoggedIn, profileController.getProfileData, handleGetResp);

function handleUpdateResp(req, res){
    if(res.isSuccess){
        res.json({
            isSuccess: true,
            message: "Data has been saved"
        });
    } else{
        res.json({
            isSuccess: false,
            message: "Problems with saving data"
        });
    }

    res.end();
}

function handleGetResp(req, res){
    if(res.isSuccess){
        res.json({
            hasAccess: true,
            message: "Data has been found",
            result: res.result
        });
    } else{
        res.json({
            hasAccess: false,
            message: "No data found",
            result: {}
        });
    }

    res.end();
}

module.exports = router;