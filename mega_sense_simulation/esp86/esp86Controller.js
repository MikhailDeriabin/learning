const {Esp86Service} = require("./esp86Service");

const service = new Esp86Service();

class Esp86Controller {
    getAll = async (req, res) => {
        const respObj = await service.getAll();

        res.json(respObj);
    }
}

module.exports = {Esp86Controller};