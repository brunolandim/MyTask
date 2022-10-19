const jwt = require('jsonwebtoken');
require('dotenv/config');

module.exports = (payload, Secret) => jwt.sign({ ...payload }, Secret, { algorithm: 'RS256' });
