const mongoose = require('mongoose');

const apiontmentShema = new mongoose.Schema({
  DrID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'doctor',
    required: true,
  },
  pID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'patient',
    required: true,
  },
  Datet: {
    type: Date,
    default: Date.now,
  },
});

const apiotmentmodel = mongoose.model('apiotment', apiontmentShema);

module.exports = apiotmentmodel;
