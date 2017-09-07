const { Router } = require('express');
const passport = require('passport');

const attachRoutes = (app, { usersController, auth }) => {
    const router = new Router();

    router
        .post('/auth/register', usersController.createUser)
        .get('/users/profile', passport.authenticate('jwt'), usersController.getProfileInfo)
        .get('/users', usersController.getUsers)
        .put('/auth/login', usersController.authenticateUser)
        .put(
            '/users/:id/rate',
            passport.authenticate('jwt'),
            usersController.rateUser)
        .put('/users/update', passport.authenticate('jwt'), usersController.updateUserInfo);

    app.use('/api', router);
};

module.exports = attachRoutes;