const config = require('./config');

Promise.resolve()
    .then(() => require('./database')(config.CONNECTION_STRING))
    .then((database) => require('./data')(database))
    .then((data) => require('./app')(data))
    .then((app) => {
        app.listen(config.PORT, () => console.log(`Server running on port ${config.PORT}..`));
    });