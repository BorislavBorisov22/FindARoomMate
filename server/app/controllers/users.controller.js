const DEFAULT_RATING = 0;
const DEFAULT_RATES_COUNT = 0;

const usersController = ({ users }, utils) => {
    return {
        createUser(req, res) {
            const user = req.body;
            user.rating = DEFAULT_RATING;
            user.ratingUsers = [];
            return users.add(user)
                .then(() => {
                    res.send({ success: true, message: `user ${user.username} created!` });
                })
                .catch((errMessage) => {
                    res.send({ success: false, message: errMessage })
                });
        },
        getUsers(req, res) {
            return users.getAll()
                .then((users) => {
                    return res.send(users);
                });
        },
        getUserInfo(req, res) {
            const userId = req.user._id;

            users.findById(userId)
                .then((user) => {
                    res.send({ success: true, user });
                })
                .catch((err) => {
                    res
                        .status(400)
                        .send({ success: false, err });
                });
        },
        authenticateUser(req, res) {
            const user = req.body;
            users.validateUserCredentials(user)
                .then((user) => {
                    const jwtObject = {
                        _id: user._id,
                        username: user.username,
                    };

                    const token = utils.generateToken(jwtObject);
                    return res.send({ success: true, message: 'login success!', token, });
                })
                .catch(() => {
                    res.send(({ success: false, message: 'Invalid Credentials' }))
                });
        },
        rateUser(req, res) {
            const userToRateId = req.params.id;
            const raterUsername = req.user.username;

            users.rateUser(userToRateId, raterUsername)
                .then((result) => {
                    return res.send({ success: true, response: result });
                })
                .catch((err) => {
                    return res
                        .status(400)
                        .send({ success: false, err });
                });
        }
    };
};

module.exports = usersController;