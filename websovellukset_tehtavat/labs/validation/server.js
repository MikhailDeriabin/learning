const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');

// Create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.static('public'));
app.get('/index.htm', function (req, res) {
    res.sendFile( __dirname + "/" + "index.html" );
})
app.post('/process_post', urlencodedParser,
    [
        check('first_name').isLength({ min: 2 }).withMessage("vähintään 2 merkkiä!"),
        check('last_name').isLength({ min: 2 }).withMessage("vähintään 2 merkkiä!"),
        check('email').isEmail().withMessage('sähköposti pitää olla muodossa posti@gmail.com'),
        check('age').isNumeric().withMessage("pitää olla numero")

    ],
    function (req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({errors: errors.array()});
        }
        // Prepare output in JSON format
        response = {
            first_name:req.body.first_name,
            last_name:req.body.last_name
        };
        console.log("Response: " + response);
        res.end(JSON.stringify(response));
    }
);

const server = app.listen(8081, function () {
    const host = server.address().address;
    const port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port);
})