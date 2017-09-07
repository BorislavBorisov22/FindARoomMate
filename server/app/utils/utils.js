const jwt = require('jsonwebtoken');

const initUtils = (app) => {
    return {
        generateToken(jwtObject) {
            return jwt.sign(jwtObject, app.get('superSecret'), {
                expiresIn: 1440,
            });
        },
    }
};

module.exports = initUtils;

/*
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlBldGFyIiwicGFzc3dvcmQiOiJzb21lUGFzc3dvcmQiLCJpYXQiOjE1MDM2MTU0MTEsImV4cCI6MTUwMzYxNjg1MX0.dUJRX7cgiMX4hbUphW5kzkCtry9wUo04v7PRQpOPM5w
*/