const {Point, InfluxDB, HttpError} = require("@influxdata/influxdb-client");

class InfluxHandler {
    constructor() {
       this.influxObj = new InfluxDB({url: this.#url, token: this.#token});
       this.readAPI = this.influxObj.getQueryApi(this.#org);
    }

    influxObj;
    readAPI;

    #url = process.env.INFLUX_URL;
    #token = process.env.INFLUX_TOKEN;
    #org = process.env.INFLUX_ORGANIZATION;
    #bucket = process.env.INFLUX_ESP32_BUCKET_ID;

    write = async (obj) => {
        const point = new Point('weather')
            .tag('station', 'esp32')
            .floatField('temp', obj['temp'])
            .timestamp(new Date().getTime());

        const writeAPI = this.influxObj.getWriteApi(this.#org, this.#bucket, 'ms');
        writeAPI.writePoint(point);
        try {
            await writeAPI.close();
        } catch (e) {
            if (e instanceof HttpError) {
                console.error(e.statusCode);
                console.error(e.statusMessage);
            } else
                console.log(e);
        }
    }

    readAll = async () => {
        //last 100 days data
        const fluxTempQuery = `from(bucket:"esp32") |> range(start: -100d) |> filter(fn: (r) => r._field == "temp")`;
        return await this.readAPI.collectRows(fluxTempQuery);
    }
}

module.exports = { InfluxHandler };