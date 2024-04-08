//U can use pm2 tool for run server
//This tool can start multiple worker processes automatically
//Also it provides logging, additional information of processes and realtime dashboard
//If u are using that tool u do not have to call .fork() functions or do anything in server script
//u can run the pm2 by:
//pm2 start server.js -l logs.txt -i 4 --no-daemon
//Where -l is there u wanna save all logs(optional) and -i amount of workers, max for maximum(= amount of cpu logical cores)
//To stop pm2 run:
//pm2 stop server
//pm2 delete server
//To open realtime dashboard run (better in separate terminal window):
//pm2 monit
//if u wish to update your backend code, but the application is running online and is used by users, so u can not just stop the server and then restart it
//u can run pm2 reload server.js
//In that case pm2 will reload one core after another, but not all in the same time and users will always have access to backend

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send(`Performance example ${process.pid}`);
});

app.get('/timer', (req, res) => {
    delay(4000);
    res.send(`change on server ${process.pid}`);
});

//here is a code for workers
console.log('worker process started: ' + process.pid);
app.listen(8080);

function delay(duration) {
    const startTime = Date.now();
    while (Date.now() - startTime < duration){
        //event loop is blocked
        //if u will try to get data from any other path, u will need to wait til the end of this while loop
    }
}