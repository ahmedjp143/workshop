const express = require('express');
const PatientModel = require('../models/patientModel');

const router = express.Router();
// locolhost:3001/patient/get
router.get('/', async (req, res) => {
  const getdata = await PatientModel.find();
  res.send(getdata);
});
router.post('/', async (req, res) => {
  try {
    const postdata = await PatientModel({
      PName: req.body.PName,
      PAddress: req.body.PAddress,
      PGender: req.body.PGender,
    });
    await postdata.save();
    res.send({ message: 'xogta patient waa la zave ', postdata });
  } catch (error) {
    res.send(error.message);
    // console.log(error);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedata = await PatientModel.findByIdAndUpdate(
      req.params.id,
      {
        PName: req.body.PName,
        PAddress: req.body.PAddress,
        PGender: req.body.PGender,
      },
      {
        new: true,
      }
    );

    res.send({ message: 'xogtii waala update gareeyay', updatedata });
  } catch (error) {
    res.send(error.message);
  }
});

router.delete('/:id', async (req, res) => {
  const deletedata = await PatientModel.findByIdAndDelete(req.params.id);
  res.send({ message: 'xogta waala delete gareeyay', deletedata });
});
module.exports = router;
