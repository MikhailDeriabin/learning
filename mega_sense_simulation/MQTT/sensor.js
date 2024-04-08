const {Command} = require('./command');
const {PubSubClient} = require('./pubSubClient');
const {Util} = require('../util/util');

const util = new Util();

class Sensor {

    constructor(sensorTopic) {
        this.#topic = sensorTopic;
        this.#mqttClient = new PubSubClient().getInstance();
    }

    #topic;
    #mqttClient;

    measure = async () => {
        let message = Command.MEASURE + ';';

        this.#mqttClient.publish(this.#topic, message);
        this.#mqttClient.subscribe(this.#topic);
        const that = this;
        const p = new Promise(function(resolve, reject) {
            that.#mqttClient.on('message', function (topic, message) {
                const messageStr = message.toString();
                that.#mqttClient.unsubscribe(topic);
                const respObj = that.sensorStrToObj(messageStr);
                resolve(respObj);
            });
        });

        return p.then( (obj) =>  util.convertSensorValuesNumericObjToStrObj(obj) );
    }

    sensorStrToObj = (str) => {
        const obj = {};
        let currentKey = '';
        for(let i=0; i<str.length; i++){
            if(str[i] === ':'){
                i++;
                let currentValue = '';
                for(;i<str.length; i++){
                    if(str[i] === ',' || i === str.length-1 ){
                        if(i === str.length-1)
                            currentValue += str[i];
                        obj[currentKey] = currentValue;
                        currentKey = '';
                        break;
                    } else
                        currentValue += str[i];
                }
            } else
                currentKey += str[i];
        }

        return obj;
    }
}

module.exports = {Sensor}