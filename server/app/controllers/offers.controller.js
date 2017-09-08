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
            return offers.getAll()
                .then((offers) => {
                    res.send({ success: true, offers })
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