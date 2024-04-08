const {ESP32Service} = require("./esp32.service");

const service = new ESP32Service();

class ESP32Controller {
    getAll = async (req, res) => {
        const respObj = await service.getAll();
        const code = respObj != null ? 200 : 404;

        res.status(code);
        res.json(respObj);
    }

    create = async (req, res) => {
        const respObj = await service.create(req.body);
        const code = respObj.code ? 200 : 400;

        res.status(code);
        res.json(respObj);
    }
}

module.exports = {ESP32Controller};