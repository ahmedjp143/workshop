const mongoose = require('mongoose');
const customerShema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
});

const customermodel = mongoose.model('Customer', customerShema);

module.exports = customermodel;
