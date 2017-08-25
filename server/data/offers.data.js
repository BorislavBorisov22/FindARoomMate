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
        return this.collection.findById(id)
            .then((offer) => {
                if (!offer) {
                    return Promise.reject('No such offer found!');
                }

                targetOffer = offer

                return this.validate.validateComment(comment)
            })
            .then((commentToAdd) => {
                targetOffer.comments.add(commentToAdd);

                return this.update(targetOffer);
            });
    }
}

module.exports = OffersData;