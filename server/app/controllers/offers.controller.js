const offersController = ({ users, offers }, _) => {
    return {
        addOffer(req, res) {
            const offer = req.body;
            offer.author = {
                username: req.user.username,
                profilePictureUrl: req.user.profilePictureUrl,
            };

            return offers.add(offer)
                .then(() => {
                    res.status(201).send({ success: true, offer });
                })
                .catch((err) => {
                    res.status(400).send({ success: false, err });
                });
        },
        getOffers(req, res) {
            console.log(req.query);
            let page = Number(req.query.page);
            let size = Number(req.query.size);

            let totalOffersCount = 0;
            return offers.count()
                .then((offersCount) => {
                    const lastPage = Math.ceil(offersCount / size);
                    if (lastPage > page) {
                        page = 1;
                    }

                    totalOffersCount = offersCount;
                    return offers.getRange(page, size);
                })
                .then((resOffers) => {
                    return res.send({ success: true, offers: resOffers, offersCount: totalOffersCount });
                });
        },
        getOfferById(req, res) {
            const id = req.params.id;
            return offers.findById(id)
                .then((offer) => {
                    res.send({ success: true, offer })
                });
        },
        addComment(req, res) {
            const { comment } = req.body;
            const offerId = req.params.id;

            comment.author = {
                username: req.user.username,
            }

            return offers.addComment(offerId, comment)
                .then((result) => {
                    return res.status(201).send({ success: true, offer: result })
                })
                .catch((err) => {
                    return res
                        .status(400)
                        .send({ success: false, err, });
                });
        }
    }
};

module.exports = offersController;