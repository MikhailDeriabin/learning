const fs = require("fs");

//Make a folder
const newFolderName = "myFolder";
fs.mkdirSync(newFolderName, handleException);

//Make folder in folder
const folderInFolder = "anotherFolder";
fs.mkdir(newFolderName+"/"+folderInFolder, handleException);

//delete empty folder
fs.mkdir("test", (err) => {
    handleException(err);

    fs.rmdir("test", handleException);
});


function handleException(err){
    if(err) throw err;
}