//This is a JS module kind a class in java

const pow2 = (num) => {
    if(isPositive(num))
        return num*num;
    return 0;
}

const pow3 = (num) => {
    if(isPositive(num))
        return num*num*num;
    return 0;
}

const pow4 = (num) => {
    if(isPositive(num))
        return num*num*num*num;
    return 0;
}

//This function will not be exported and another scripts can not use it (see comment below)
function isPositive(num){
    return num >=0;
}

//These functions will be exported = other js scripts can use them
exports.pow2 = pow2;
exports.pow3 = pow3;
exports.pow4 = pow4;