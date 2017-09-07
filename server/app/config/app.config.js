/* globals __dirname */

const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
const path = require('path');
const multer = require('multer');
const jwt = require('jsonwebtoken');

const UPLOADS_URL = 'http://localhost:4201/uploads/';

const configApp = (app) => {
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.set('superSecret', 'ilovescotchyscotch');
    // app.use(cookieParser());

    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.setHeader('Access-Control-Allow-Headers', ['Content-Type', 'token', 'Origin', 'X-Requested-With', 'Content-Type', 'Accept']);
        res.setHeader('Access-Control-Allow-Credentials', true);
        next();
    });

    app.set('superSecret', 'ilovescotchyscotch');

    const storage = multer.diskStorage({
        filename: function(req, file, cb) {
            cb(null, `${Date.now()}.jpg`);
        },
        destination: function(req, file, cb) {
            cb(null, path.join(__dirname, `../../uploads`));
        },
    });

    const upload = multer({ storage: storage });

    app.post("/upload", upload.array("uploads[]", 12), function(req, res) {
        const filesUrls = req.files.map(x => UPLOADS_URL + x.filename);
        return res.status(201).send({ success: true, filesUrls, });
    });
};

module.exports = configApp;