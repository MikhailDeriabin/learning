const mqtt = require('mqtt');

class PubSubClient {
    getInstance = () => {
        if(!this.#client)
            this.#client = mqtt.connect(this.mqttOptions);


        return this.#client;
    }

    #client;
    mqttOptions = {
        servers: [
            {
                host: '192.168.50.91',
                port: 1884
            }
        ],
        username: 'server',
        password: 'server',
        reconnectPeriod: 2000
    }

    getClient = () => {
        return this.#client;
    }
}

module.exports = {PubSubClient}