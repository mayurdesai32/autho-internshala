const mongoose = require('mongoose');
const validator = require('validator');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const crypto = require('crypto');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    maxlength: [20, 'length cant be more than 20'],
    minlength: [3, 'length cant be less than 3'],
    unique: true,
    required: [true, 'please enter name'],
    validate: [
      validator.isAlphanumeric,
      'username is must contain only alphabet and number',
    ],
    trim: true,
  },
  phone: {
    type: Number,
    required: [true, 'enter number'],
    validate: function (value) {
      if (value < 999999999) {
        throw new Error('mobile number should be of 10 char length ');
      } else if (value > 9999999999) {
        throw new Error('mobile number should be of 10 char length ');
      }
    },
  },

  email: {
    type: String,
    required: [true, 'enter email'],
    unique: true,
    validate: [validator.isEmail, 'email is not valid'],
  },
  address: {
    type: String,

    minlength: [3, 'length cant be less than 3'],
    required: [true, 'please enter address'],
    trim: true,
  },
});

const user = new mongoose.model('USER', userSchema);
module.exports = user;
