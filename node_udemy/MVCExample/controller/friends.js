//Handling responds to clients requests

const friendsModel = require('../model/friends');

function getFriends(req, res){
    res.status(200).json(friendsModel.friends);
}

module.exports = {
    getFriends
}