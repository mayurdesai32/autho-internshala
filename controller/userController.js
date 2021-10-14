const user = require('../model/userSchema');
const errorHandler = require('../utils/errorHandler');
const asyncErrorHandler = require('../middleware/asyncErrorHandler');
exports.create = asyncErrorHandler(async (req, res) => {
  const User = new user(req.body);
  console.log(req.body);
  const createUser = await User.save();
  res.status(201).json({ message: 'user created', createUser, success: true });
});

// get All
exports.getAllUser = asyncErrorHandler(async (req, res) => {
  const User = await user.find({});

  res.status(200).json({ message: User, success: true });
});

// getsingle
exports.getSingleUser = async (req, res) => {
  try {
    console.log(req.params.id);
    const userId = req.params.id;
    const User = await user.findOne({ _id: userId });

    res.status(200).json({ message: User, success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'user error ', success: false });
  }
};

// Delete user
exports.deleteUser = asyncErrorHandler(async (req, res, next) => {
  const userId = req.params.id;
  let User = await user.findOne({ _id: userId });
  if (!User) {
    next(new errorHandler(`user not found by id ${userId}`, 500));
  }
  User = await user.findByIdAndDelete({ _id: userId });
  res.status(200).json({ message: 'user Deleted', success: true });
});
