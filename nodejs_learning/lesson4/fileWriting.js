const fs = require("fs");

const filePath = "importantFile.txt";

const newText = "Hello world, node js is simple";

fs.writeFile(filePath, newText, (err) => {
    if(err) throw err;
});