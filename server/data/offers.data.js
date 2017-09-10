const Data = require('./abstractions');
const Offer = require('../models/offer.model');

class OffersData extends Data {
    constructor(database) {
        super(database, Offer, Offer)
    }

    findByTitle(title) {
        if (typeof title !== 'string') {
            return Promise.reject('Invalid title!');
        }

        return this.users.findOne({
            title: {
                $regex: `.*${title}.*`,
            }
        })
    }

    addComment(offerId, comment) {
        let targetOffer = null;
        return this.findById(offerId)
            .then((offer) => {
                if (!offer) {
                    return Promise.reject('No such offer found!');
                }

                targetOffer = offer

                return this.validator.validateComment(comment)
            })
            .then((commentToAdd) => {
                if (!targetOffer.comments) {
                    targetOffer.comments = [];
                }

                targetOffer.comments.push(commentToAdd);
                return this.update(targetOffer);
            })
            .then(() => {
                return targetOffer;
            });
    }
}

module.exports = OffersData;