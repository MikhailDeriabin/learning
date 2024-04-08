const Events = require("events");

const evtObj = new Events();

//Observers
evtObj.on("win", () => {
    console.log("Congrats!");
});

evtObj.on("win", () => {
    console.log("No way!");
});

evtObj.on("win", (data) => {
    if(data != null)
        console.log("I got some data: " + data);
    else
        console.log("No data provided");
});

evtObj.emit("win");
evtObj.emit("win", "lol");

//process is event as well:
process.on("exit", (code) => {
    console.log("Program is executed with code " + code);
});