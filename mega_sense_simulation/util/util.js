const { SensorValue } = require('../MQTT/sensorValue');

class Util {
    convertSensorValuesNumericObjToStrObj = (obj) => {
        const result = {};

        for(const key in obj){
            result[SensorValue[key]] = obj[key];
        }
        return result;
    }
}

module.exports = { Util };