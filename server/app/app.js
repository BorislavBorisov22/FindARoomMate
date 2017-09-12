/* globals __dirname */
const path = require('path');
const express = require('express');
const app = express();
const init = (data) => {
    require('./config/app.config')(app);
    require('./config/auth.config')(app, data);

    app.use('/uploads', express.static(path.join(__dirname, '../uploads')));
    app.use(express.static(path.join(__dirname, '../../dist')));

    const utils = require('./utils')(app);
    const controllers = require('./controllers')(data, utils);
    require('./routes')(app, controllers);

    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, "../../dist"))
    });

    return Promise.resolve(app);
};

module.exports = init;
