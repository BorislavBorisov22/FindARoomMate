const { Router } = require('express');
const passport = require('passport');

const attachRoutes = (app, { usersController, auth }) => {
    const router = new Router();

    router
        .post('/users', usersController.createUser)
        .get('/users', usersController.getUsers)
        .put('/users', usersController.authenticateUser)
        .put(
            '/users/:id/rate',
            passport.authenticate('jwt'),
            usersController.rateUser);

    app.use('/api', router);
};

module.exports = attachRoutes;