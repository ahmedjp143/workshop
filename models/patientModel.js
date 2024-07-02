const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
  PName: {
    type: String,
    required: true,
  },
  PAddress: {
    type: String,
    required: true,
  },
  PGender: {
    type: String,
    enum: ['male', 'female'],
  },
});

const PatientModel = mongoose.model('patient ', PatientSchema);

module.exports = PatientModel;
