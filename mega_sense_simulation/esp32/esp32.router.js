const express = require("express");
const {ESP32Controller} = require("./esp32.controller.js");

const controller = new ESP32Controller();

const router = express.Router();
router.post("/", controller.create);
router.get("/", controller.getAll);

module.exports = router;