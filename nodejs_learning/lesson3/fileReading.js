//import fs module = file system module
const fs = require("fs");

const filePath = "names.txt";

//Read file in synchronized mode, usually not in use
const fileText = fs.readFileSync(filePath, "utf8");
console.log(filePath + " file content (synch mode):");
console.log(fileText);

//Read file in asynch mode, using it
fs.readFile(filePath, "utf8", (err, data) => {
    if(err) throw err;

    console.log(filePath + " file content (asynch mode):");
    console.log(data);
});
console.log("this code will be executed first");
