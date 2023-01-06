const mathModule = require("./math");

console.log("The square of 11 is " + mathModule.pow2(11));
console.log("The cube of 11 is " + mathModule.pow3(11));
console.log("The power of 4 of 11 is " + mathModule.pow4(11));

//This function can not be used here, because it was not exported
//console.log(mathModule.isPositive(11));