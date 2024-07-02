const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const usermodel = mongoose.model('users', userschema);

module.exports = usermodel;
