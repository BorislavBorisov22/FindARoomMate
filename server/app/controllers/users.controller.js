const usersController = ({ users }, utils) => {
    return {
        createUser(req, res) {
            const user = req.body;

            return users.add(user)
                .then(() => {
                    console.log(user);
                    res.send({ success: true, message: `user ${user.username} created!` });
                })
                .catch((errMessage) => {
                    res.send({ success: false, message: errMessage })
                });
        },
        getUsers(req, res) {
            if (!req.user) {
                return { success: false };
            }

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
    };
};

module.exports = usersController;