const jwt = require('jsonwebtoken');
function generateToken(user) {
  return jwt.sign(user, 'secret',	{ expiresIn: '1h' });
}
module.exports = { generateToken };