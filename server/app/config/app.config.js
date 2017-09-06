/* globals __dirname */

const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
const path = require('path');
const multer = require('multer');
const jwt = require('jsonwebtoken');

const configApp = (app) => {
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.set('superSecret', 'ilovescotchyscotch');
    // app.use(cookieParser());

    app.use((req, res, next) => {
        // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', ['Content-Type', 'token']);

        // Set to true if you need the website to include cookies in  requests
        res.setHeader('Access-Control-Allow-Credentials', true);
        next();
    });

    app.set('superSecret', 'ilovescotchyscotch');
    // app.use(cookieParser());
    app.use(multer({
        storage: multer.diskStorage({
            filename: (_, file, callback) => {
                callback(null, Date.now() + '.jpg');
            },
            destination: (_, file, callback) => {
                callback(null,
                    path.join(__dirname, '../../public/images/uploads'));
            },
        }),
    }).single('uploadFile'));
};

module.exports = configApp;