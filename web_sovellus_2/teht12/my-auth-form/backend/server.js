const express = require('express');
const dotenv = require("dotenv");
const cors = require('cors');
const cookieParser = require("cookie-parser");
const cookiesMiddleware = require('universal-cookie-express');

dotenv.config();

//For generating links in console
const htmlFiles = [];

const app = express();

app.use(express.json());
app.use(cors({credentials: true, origin: process.env.CORS_ORIGIN}));
app.use(cookiesMiddleware());
//app.use(cookieParser());
//make automatic routing
//app.use(express.static(path.join(__dirname, "public")));

app.use("/login", require("./routes/login"));
app.use("/register", require("./routes/register"));
app.use("/profile", require("./routes/profile"));

app.listen(process.env.DATABASE_PORT, () => {
    displayLinks();
});

function displayLinks(){
    console.log();
    console.log("----------------------");
    console.log(`HOME: http://${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/`);
    for(let i=0; i<htmlFiles.length; i++){
        const name = htmlFiles[i].split(".")[0].toUpperCase();
        console.log(name + `: http://${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}` + htmlFiles[i]);
    }
    console.log("----------------------");
    console.log();
}