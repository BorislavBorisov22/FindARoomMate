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