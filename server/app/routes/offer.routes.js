const { Router } = require('express');

const passport = require('passport');

const attachRoutes = (app, { offersController }) => {
    const router = new Router();

    router
        .get('/', offersController.getOffers)
        .post('/', passport.authenticate('jwt'), offersController.addOffer)
        .put('/:id', passport.authenticate('jwt'), offersController.addComment);

    app.use('/api/offers', router);
};

module.exports = attachRoutes;