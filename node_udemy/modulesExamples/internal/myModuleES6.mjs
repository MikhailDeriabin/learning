//This is an Ecma Script standard module, which has an .mjs extension.
//It can be called via: import { something } from 'something.mjs';
//Node support that from 13 version (2019 year)
//request function method is from commonJS standard and works on older versions

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
function getRandNum() {
    return Math.random();
}

//This way is better, to understand the interface of the module
export {
    sumNums,
    getRandNum,
    SOME_CONSTANT
}