const Cat = require('./cat.model');

class CatController{
    async getAll(req, res, next){
        try{
            res.result = await Cat.find();
        }catch (e) {
            res.error = e;
            res.status = 500;
        } finally {
            next();
        }
    }
}

module.exports = new CatController();