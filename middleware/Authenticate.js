const jwt = require('jsonwebtoken');

const autho = require('../model/authoSchema');
const errorHandler = require('../utils/errorHandler');
// const asyncErrorHandler = require('../middleware/asyncErrorHandler');
const isAuthenticate = async (req, res, next) => {
  try {
    const token = req.cookies.jwttoken;
    const verifytoken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log(verifytoken);
    const rootUser = await autho.findOne({
      _id: verifytoken._id,
      'tokens.token': token,
    });
    if (!rootUser) {
      next(new errorHandler('user not found', 400));
    }
    console.log('right token');

    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;
    next();
  } catch (error) {
    res.status(401).send('unauthorized token');
    console.log(error);
  }
};

module.exports = isAuthenticate;
