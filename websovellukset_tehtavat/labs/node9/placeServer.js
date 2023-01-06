const express = require('express');
const app = express();

const routes = require("./custom_modules/routes");

routes(app);

app.listen(8081, () => {
    console.log("Example app listening at http://localhost:8081");
});