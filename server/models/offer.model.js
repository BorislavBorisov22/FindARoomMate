const MIN_TITLE_LENGTH = 5;
const MIN_COMMENT_LENGTH = 5;
const MAX_COMMENT_LENGTH = 250;

class Offer {
    static validateModel(offer) {
        if (!offer) {
            return Promise.reject('Offer is undefined!');
        }

        if (typeof offer.title != 'string' || offer.title.length < MIN_TITLE_LENGTH) {
            return Promise.reject('Offer title must be a valid string!');
        }

        if (!Array.isArray(offer.pictureUrls)) {
            return Promise.reject('Offer pictureUrls must be a of type array!');
        }

        if (Number.isNaN(Number(offer.rentPrice))) {
            return Promise.reject('offer rentPrice must be a of type number!');
        }

        return Promise.resolve(offer);
    }

    validateComment(comment) {
        if (!comment.author || typeof comment.author !== 'string') {
            return Promise.reject('Invalid comment author!');
        }

        if (typeof comment.text !== 'string' ||
            comment.text.legnth < MIN_COMMENT_LENGTH ||
            comment.text.legnth > MAX_COMMENT_LENGTH) {
            return Promise.reject('Invalid offer comment!');
        }

        return Promise.resolve(comment);
    }
}

module.exports = Offer;