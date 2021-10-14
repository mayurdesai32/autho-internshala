const mongoose = require('mongoose');
// const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// const crypto = require('crypto');
const Schema = mongoose.Schema;

const authoSchema = new Schema({
  email: {
    type: String,
    required: [true, 'enter number'],
    // unique: true,
    // validate: [validator.isEmail, 'email is not valid'],
  },

  password: {
    type: String,
    required: [true, 'enter password'],

    select: false,
  },
  tokens: [{ token: { type: String, required: true } }],
});

// for hashing
authoSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

// for jwt token

authoSchema.methods.generateJWTToken = async function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRE_TIME * 60 * 60 * 1000,
  });
  this.tokens = this.tokens.concat({ token: token });
  await this.save();
  return token;
};

// compare password
authoSchema.methods.comparePassword = async function (enterPassword) {
  return await bcrypt.compare(enterPassword, this.password);
};

const autho = new mongoose.model('AUTHO', authoSchema);
module.exports = autho;
