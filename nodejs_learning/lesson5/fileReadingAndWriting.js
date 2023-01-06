const fs = require("fs");

const folderName = "numbers/";
const fileName = "number.txt";
const num = "10";

fs.writeFileSync(folderName + fileName, num);

fs.readFile(folderName + fileName, "utf-8", (err, data) => {
    if(err) throw err;

    const square = data*data;

    fs.writeFile(folderName + fileName, square+"", (err) => {
        if(err) throw err;
    });

    console.log("all saved to " + fileName);
});

const firstFile = "first.txt";
const secondFile = "second.txt";

fs.readFile(folderName + firstFile, "utf-8", (err, data) => {
    if(err) throw err;

    const fileText = "Data from " + firstFile + ": " + data;

    fs.writeFile(folderName + secondFile, fileText, (err) => {
        if(err) throw err;

        console.log("Data saved successfully to " + secondFile);
        fs.readFile(folderName + secondFile, "utf-8", (err, data) => {
            if(err) throw err;
            console.log(secondFile + " content:");
            console.log(data);
        });
    });
});