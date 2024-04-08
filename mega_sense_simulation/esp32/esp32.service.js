const {File} = require("../dataFile/file");
const {InfluxHandler} = require("../influxHandler/influxHandler");

const file = new File('./data');
const influx = new InfluxHandler();

class ESP32Service {

    getAll = async () => {
        try {
            const resp = await influx.readAll();
            return resp === '\r\n' ? null : resp;
        } catch (e) {
            console.log(e);
            return null;
        }

    }

    create = async (data) => {
        try{
            await influx.write(data);
            await file.saveData('esp32.json', data);
            return { isSuccess: true };
        }catch (e) {
            console.log(e);
            return { isSuccess: false };
        }

    }
}

module.exports = {ESP32Service};