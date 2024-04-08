const fs = require("fs");

class File {
    constructor(folderName) {
        this.#folderName = folderName;
    }

    #folderName;

    saveData = async (fileName, data) => {
        const path = this.#folderName + '/' + fileName;
        const content = this.#configureContent(data);

        await fs.appendFile(path, content, (err) => {
            if(err)
                console.error(err);
        });
    }

    #configureContent = (dataObj) => {
        dataObj.location = {
            lat: this.#getRandomNum(60.168871, 60.196063),
            lon: this.#getRandomNum(24.920435, 24.963907),
            acc: 13.845999717712402
        };
        dataObj.timestamp = new Date().getTime();

        return '{\n' +
            '"bucket":"esp86",\n' +
            '"accessKey":"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",\n' +
            '"key":"F5-C2-DE-B9-5D-CC/1603289156808",\n' +
            '"data":' + JSON.stringify(dataObj) + '\n' +
            '},\n';
    }

    #getRandomNum = (min, max) => {
        return Math.random() * (max - min) + min;
    }
}

module.exports = { File };