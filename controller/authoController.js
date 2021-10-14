const auth = require('../model/authoSchema');

const errorHandler = require('../utils/errorHandler');
const asyncErrorHandler = require('../middleware/asyncErrorHandler');

const sendToken = require('../utils/jwtToken');
exports.create = asyncErrorHandler(async (req, res) => {
  const Autho = new auth(req.body);
  const createAutho = await Autho.save();
  res.status(200).json({ message: createAutho, success: true });
});

// login;
exports.login = asyncErrorHandler(async (req, res, next) => {
  const { email, password } = req.body;
  console.log(req.body);
  if (!email || !password) {
    next(new errorHandler('enter all field', 400));
  } else {
    const Autho = await auth.findOne({ email: email }).select('+password');
    console.log(Autho);
    if (!Autho) {
      next(new errorHandler('invalid user and password', 401));
    }
    const passwordMatch = await Autho.comparePassword(password);

    if (!passwordMatch) {
      next(new errorHandler('invalid user and password', 401));
    }
    sendToken(Autho, 200, res);
  }
});

// for Logout

exports.Logout = asyncErrorHandler(async (req, res) => {
  res.cookie('jwttoken', null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  req.rootUser.tokens = [];
  await req.rootUser.save();
  res.status(200).json({ message: 'user logout', success: true });
});
