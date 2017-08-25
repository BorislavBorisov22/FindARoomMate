const CryptoJS = require('crypto-js');

class User {
    static validateModel(user) {
        const isUserValid =
            typeof user !== 'undefined' &&
            typeof user.username === 'string' &&
            typeof user.password === 'string' &&
            typeof user.email === 'string' &&
            user.username.match(/^\w{3,20}$/g) &&
            user.password.match(/^\w{4,20}$/g) &&
            user.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/g);

        if (!isUserValid) {
            return Promise.reject('Incorrect username or password characters!');
        }

        user.password = CryptoJS.SHA1(user.password).toString();
        return Promise.resolve(user);
    }

    static validateUserCredentials(user, dbUser) {
        const userPassHash = CryptoJS.SHA1(user.password).toString();
        if (userPassHash == dbUser.password) {
            return Promise.resolve(dbUser);
        } else {
            return Promise.reject('Invalid credentials!');
        }
    }

    static validatePassword(user, password) {
        if (user === null) {
            return Promise.reject('Invalid user!');
        }

        // eslint-disable-next-line new-cap
        if (user.password !== CryptoJS.SHA1(password).toString()) {
            return Promise.reject('Invalid password!');
        }

        return Promise.resolve(user);
    }
}

module.exports = User;