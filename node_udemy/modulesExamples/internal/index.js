//File named index.js is used automatically by node for export all needed scripts
//If that file was created it is possible to import the whole folder in any script, without specifying exact modules or methods names separately
//BETTER NOT TO USE IT

/*
const myModule = require('myModule');

module.exports = {
    SOME_CONSTANT: myModule.SOME_CONSTANT,
    sumNums: myModule.sumNums,
    getRandNum: myModule.getRandNum
}*/


//Same thing as above
module.exports = {
    ...require('./myModule')
}