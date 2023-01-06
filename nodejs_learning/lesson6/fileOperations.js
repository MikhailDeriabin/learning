const fs = require("fs");

const folderName = "txtFiles/";
const oldFileName = "renameMe.txt";
const newFileName = "renameMe.txt";

const movableFile = "moveMe.txt";

const copingFile = "copyMe.txt";
const copyFile = "copy.txt";

const deleteMeFile = "deleteMe.txt";

const clearedFile = "clearedFile.txt";
const symbolsFile = "symbols.txt";

//renaming file
fs.rename(oldFileName, newFileName, (err) => {
    if(err) throw err;
    console.log("File was renamed");
});

//moving file = renaming, but with needed folder name(or path) in the start
fs.rename(movableFile, folderName+movableFile, (err) => {
    try{
        console.log(movableFile + " file was moved to folder " + folderName);
    } catch(err){
        console.log("Can not move the file " + movableFile);
    }

});

//coping file
//by default if copy already exists it will be overwritten

//flag, which will not let overwrite copy of the file (if it is exists)
const { COPYFILE_EXCL } = fs.constants;
fs.copyFile(copingFile, copyFile, COPYFILE_EXCL, (err) => {
    try{
        console.log(copingFile + " now has a copy: " + copyFile);
    } catch (err){
        console.log(copingFile + " has a copy already: " + copyFile);
    }

});

//deleting file
//check is file exist
fs.access(deleteMeFile, fs.constants.F_OK, (err) => {
    if(!err){
        fs.unlink(deleteMeFile, (err) => {
            if(err) throw err;
            console.log("File " + deleteMeFile + " was successfully deleted");
        });
    }
    else
        console.log("File " + deleteMeFile + " not found");
});

//clear file all content
fs.truncate(clearedFile, (err) => {
    if(err) throw err;
});

//clear file all content except 2 first symbols
fs.truncate(symbolsFile, 2, (err) => {
    if(err) throw err;
});