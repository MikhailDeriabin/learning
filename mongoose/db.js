const mongoose = require('mongoose');

class DB{
    constructor() {
        mongoose.set('strictQuery', true);
    }
    async connect(){
        try{
            await mongoose.connect('mongodb://127.0.0.1:27017/mongooseLearning');
            return true;
        }catch (e) {
            console.log(e);
            return false;
        }
    }
}

module.exports = new DB();