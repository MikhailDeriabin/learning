const express = require("express");
const {PmController} = require("./pm.controller");


const router = express.Router();
const pmController = new PmController();

router.get("/", pmController.getAll);

module.exports = router;