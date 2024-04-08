const SOME_CONSTANT = 34;

//private function
function helloWorld() {
    console.log("Hello world!");
}

//public, can be accessed via request function
function sumNums(num1, num2) {
    return num1 + num2;
}

//public
exports.getRandNum = function getRandNum() {
    return Math.random();
}

//This way is better, to understand the interface of the module
module.exports = {
    sumNums,
    SOME_CONSTANT
}