const express = require('express');
/**
 * Add this for highlighting syntax (webstorm bug)
 * @type {module:cluster.Cluster}
 */
const cluster = require('cluster');
const os = require('os');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send(`Performance example ${process.pid}`);
});

app.get('/timer', (req, res) => {
    delay(9000);
    res.send(`timer done ${process.pid}`);
});

if(cluster.isPrimary){
    console.log('Master process started...');

    //Create clusters with fork function (each worker use one logical core of CPU)
    const logicalCoresCount = os.cpus().length;
    console.log('Logical cores on this cpu: ' + logicalCoresCount);
    for(let i=0; i<logicalCoresCount; i++)
        cluster.fork();
} else{
    //here is a code for workers
    console.log('worker process started: ' + process.pid);
    app.listen(8080);
}

function delay(duration) {
    const startTime = Date.now();
    while (Date.now() - startTime < duration){
        //event loop is blocked
        //if u will try to get data from any other path, u will need to wait til the end of this while loop
    }
}