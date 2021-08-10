const jwt = require('jsonwebtoken');

exports.authToken = (req, res, next) => {
  let token = req.header('x-api-key');
  if (!token) {
    return res.status(401).json({ msg: 'you must have token 111' });
  }

  try {
    let decodeToken = jwt.verify(token, 'TECHSECRET');
    req.tokenData = decodeToken;
    next();
  } catch (error) {
    return res.status(401).json({ msg: 'invalid token or expired 1111' });
  }
};
