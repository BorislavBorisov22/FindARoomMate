const Data = require('./abstractions');
const User = require('../models/user.model');

class UsersData extends Data {
    constructor(database) {
        super(database, User, User);
    }

    findUserByUsername(username) {
        if (typeof username !== 'string') {
            return Promise.reject('Invalid username!');
        }

        return this.collection.findOne({ username });
    }

    add(user) {
        return this.findUserByUsername(user.username)
            .then((currUser) => {
                if (currUser !== null) {
                    return Promise.reject(
                        'There is already a user with such username!');
                }

                return super.add(user);
            });
    }

    validateUserCredentials(user) {
        if (!user || !user.username) {
            return Promise.reject('invalid user object!');
        }

        return this.findUserByUsername(user.username)
            .then((foundUser) => {
                if (!foundUser) {
                    return Promise.reject('No such username or password!');
                }

                return this.validator.validateUserCredentials(user, foundUser)
            });
    }

    updateUserInfo(user) {
        return this.validator.validateUserInfo(user)
            .then(() => {
                return this.update(user);
            });
    }

    getCountByUsername(username) {
        return this.getByUsername(username)
            .then((users) => {
                return users.length;
            });
    }

    rateUser(userId, raterUsername, dislike) {
        if (typeof raterUsername !== 'string') {
            return Promise.reject('Rater username must be a string!');
        }

        let targetUser;
        return this.findById(userId)
            .then((foundUser) => {
                if (!foundUser) {
                    return Promise.reject('Invalid userRate id!');
                }

                targetUser = foundUser;
                const index = foundUser.ratingUsers.findIndex(x => x == raterUsername);
                const hasAlreadyRated = index >= 0;

                if (!dislike) {

                    if (hasAlreadyRated) {
                        return Promise.reject('User has already been rated!');
                    }

                    foundUser.rating += 1;
                    foundUser.ratingUsers.push(raterUsername);
                } else {
                    if (hasAlreadyRated) {
                        foundUser.rating -= 1;
                        foundUser.ratingUsers.splice(index, 1);
                    } else {
                        return Promise.reject('User has not been been rated!');
                    }
                }

                return this.update(foundUser);
            })
            .then(() => targetUser);
    }

    getByUsername(username) {
        if (typeof username !== 'string') {
            return Promise.reject('Invalid username');
        }

        const filterExpression = new RegExp(`.*${username}.*`, 'ig');
        return this.collection.find({
                username: {
                    $regex: filterExpression,
                },
            })
            .toArray();
    }

    validateUserPassword(user, password) {
        return this.validator.validatePassword(user, password);
    }

    updateProfilePicture(user, pictureUrl) {
        if (typeof pictureUrl !== 'string') {
            return Promise.reject('Invalid profile picture url!');
        }

        user.pictureUrl = pictureUrl;
        return this.update(user);
    }
}

module.exports = UsersData;