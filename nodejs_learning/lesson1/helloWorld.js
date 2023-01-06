//This is usual JS, run it in cmd with command "node helloWorld.js" (from the folder where this file, helloWorld.js is)
console.log("Hello world!");

const num = 11;
const numSquare = num*num;

console.log("The square of the " + num + " number is " + numSquare);

const date = new Date();

console.log("The server's day and months are " + (date.getDate()) + "/" + (date.getMonth()+1));

//ctrl + c to stop executing
let i = 0;
setInterval(function () {
    console.log(i++);
}, 1000);