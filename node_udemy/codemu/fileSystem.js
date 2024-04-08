const fs = require('fs');

const objToWrite = {
    model: 'Audi',
    wheelCount: 4,
    color: 'red'
}

const objToWrite1 = {
    model: 'BMW',
    wheelCount: 3,
    color: 'shit'
}

try {
    fs.writeFile('./car.json',JSON.stringify(objToWrite, null, 4), 'utf8', (e) => {
        if(e)
            console.error("Fuck");
    });
} catch (e){
    console.log("Sad");
}

try{
    fs.readFile('./car.json', 'utf8',(e, data) => {
        console.log(data.toString());
    });

}catch(e){
    console.log("oh no");
}