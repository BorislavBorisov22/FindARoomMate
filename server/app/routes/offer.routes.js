const { Router } = require('express');

const passport = require('passport');

const attachRoutes = (app, { offersController }) => {
    const router = new Router();

    router
        .get('/', offersController.getOffers)
        .post('/add', offersController.addOffer)
        .put('/:id', offersController.addComment);

    app.use('/api/offers', router);
};

module.exports = attachRoutes;