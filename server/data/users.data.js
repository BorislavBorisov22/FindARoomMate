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

    rateUser(userId, ratingUserId, rating) {
        const promises = [this.findById(userId), this.findUserByUsername(ratingUser)]

        return Promise.all(promises)
            .then((userToRate, ratingUser) => {
                if (!userToRate) {
                    return Promise.reject('Invalid user to be rated id!');
                }

                if (!ratingUser) {
                    return Promise.reject('Ivanlid rating user id!');
                }

                const hasAlreadyCommented = userToRate.ratingUsers
                    .findIndex(x => x == ratingUser.username) >= 0;

                if (hasAlreadyCommented) {
                    return Promise.reject('User has already been rated!');
                }

                userToRate.ratingUsers.push(ratingUser.username);
                userToRate.rating += 1;
                return Promise.resolve(userToRate.username);
            });
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