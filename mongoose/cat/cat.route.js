const express = require('express');
const router = express.Router();
const controller = require('./cat.controller');
const responser = require('./cat.responser');

router.get('/', controller.getAll, responser.sendGetResponse);

module.exports = router;