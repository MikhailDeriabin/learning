const db = require("../util/db");

class DataMaker {
    makeUpData = async (count) => {
        for(let i=0; i<count; i++){
            const value = this.#getRandomNum(3, 10);
            //60.167159, 24.944448
            //60.167910, 24.953665
            const lat = this.#getRandomNum(60.167159, 60.167910);
            const lon = this.#getRandomNum(24.944448, 24.953665);

            const query = 'INSERT INTO pmLocation (value, lat, lon) VALUES (?, ?, ?)';
            await db.makeQuery(query, [value, lat, lon]);
        }
    }

    #getRandomNum(min, max) {
        return Math.random() * (max - min) + min;
    }
}

module.exports = {DataMaker};