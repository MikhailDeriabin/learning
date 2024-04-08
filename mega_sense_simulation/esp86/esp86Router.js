const express = require("express");
const {Esp86Controller} = require("./esp86Controller.js");

const controller = new Esp86Controller();

const router = express.Router();
router.get("/", controller.getAll);

module.exports = router;