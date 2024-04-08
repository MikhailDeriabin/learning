const {PmService} = require('./pm.service');

const pmService = new PmService();

    class PmController {
    getAll = async (req, res) => {
        const allData = await pmService.getAll();
        res.json(allData);
    }
}

module.exports = {PmController};