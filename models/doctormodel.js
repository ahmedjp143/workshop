const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  drname: {
    type: String,
    required: true,
  },
  drAddress: {
    type: String,
    required: true,
  },
  drspecialist: {
    type: String,
    required: true,
  },
});

const docotModel = mongoose.model('doctor', doctorSchema);

module.exports = docotModel;
