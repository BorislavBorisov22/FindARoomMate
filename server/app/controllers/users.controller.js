const DEFAULT_RATING = 0;
const DEFAULT_RATES_COUNT = 0;
const DEFAULT_PROFILE_PICTURE = 'http://www.injazuae.org/wp-content/themes/hope-charity-theme-v16-child/img/default_user.png';
const DEFAULT_DESCRIPTION = 'None';

const usersController = ({ users }, utils) => {
    return {
        createUser(req, res) {
            const user = req.body;
            user.rating = DEFAULT_RATING;
            user.ratingUsers = [];
            user.profilePictureUrl = DEFAULT_PROFILE_PICTURE;
            user.description = 'none';
            return users.add(user)
                .then(() => {
                    res.send({ success: true, message: `user ${user.username} created` });
                })
                .catch((errMessage) => {
                    res.status(400).send({ success: false, message: errMessage })
                });
        },
        getUsers(req, res) {
            return users.getAll()
                .then((users) => {
                    users = users.map(x => {
                        delete x.password;
                        return x;
                    });
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
                    return res.send({
                        success: true,
                        message: `User ${user.username} is now logged in!`,
                        token,
                        username: user.username,
                        profilePicture: user.profilePictureUrl,
                    });
                })
                .catch((err) => {
                    console.log(err, 'error, error');
                    res.status(400).send(({ success: false, message: 'Invalid Credentials' }))
                });
        },
        rateUser(req, res) {
            const userToRateId = req.params.userToRate;
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
        },
        getProfileInfo(req, res) {
            const user = req.user;

            delete user.password;
            return res.json({ success: true, user, });
        },
        updateUserInfo(req, res) {
            const userToUpdate = req.body;
            const loggedUser = req.user;
            if (loggedUser.username !== userToUpdate.username) {
                return res.status(400).send({ success: false, message: 'Cannot edit username!' });
            }

            return users.findUserByUsername(userToUpdate.username)
                .then((foundUser) => {
                    foundUser.firstName = userToUpdate.firstName;
                    foundUser.lastName = userToUpdate.lastName;
                    foundUser.profilePictureUrl = userToUpdate.profilePictureUrl;
                    foundUser.description = userToUpdate.description;
                    foundUser.email = userToUpdate.email;

                    return users.update(foundUser);
                })
                .then(() => {
                    return res.status(204).send({ success: true, updatedUser: userToUpdate });
                })
                .catch((err) => {
                    return res.status(400).send({ success: false, err });
                });
        }
    };
};

module.exports = usersController;