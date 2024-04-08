//group routes together

const { Router } = require('express');
const friendsController = require("../controller/friends");

const router = Router();

router.get('/', friendsController.getFriends);

module.exports = router;