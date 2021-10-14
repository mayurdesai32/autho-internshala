const sendToken = async (User, status, res) => {
  const token = await User.generateJWTToken();
  // options for cookie

  const options = {
    expires: new Date(Date.now() + process.env.COOKIE_EXPIRE * 60 * 60 * 1000),
    httpOnly: true,
  };

  // console.log(token);

  res
    .status(status)
    .cookie('jwttoken', token, options)
    .json({ sucess: true, message: User, token });
};

module.exports = sendToken;
