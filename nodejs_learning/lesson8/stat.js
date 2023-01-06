const fs = require("fs");

//stat contains information about the file
fs.stat("someFile.txt", (err, stats) => {
    if(err) throw err;

    console.log(stats);
    console.log("Is it directory " + stats.isDirectory());
    console.log("Is it file " + stats.isFile());
    console.log("Size in bytes " + stats.size);
    console.log("The file was created at " + stats.birthtime);

})