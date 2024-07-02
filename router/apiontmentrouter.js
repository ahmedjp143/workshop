const express = require('express');
const apiotmentmodel = require('../models/apiontmentmodel');
// const docotModel = require('../models/doctormodel');
// const PatientModel = require('../models/patientModel');

const router = express.Router();
// locolhost:3001/patient/get
router.get('/', async (req, res) => {
  try {
    const getdata = await apiotmentmodel.find().populate({
      path: 'DrID',
      model: 'doctor',
      select: 'drname drspecialist',
    });
    res.send(getdata);
  } catch (error) {
    res.send(error.message);
  }
});
router.post('/', async (req, res) => {
  try {
    const postdata = await apiotmentmodel(req.body);
    await postdata.save();
    res.send({ message: 'xogta   waa la zave ', postdata });
  } catch (error) {
    res.send(error.message);
    // console.log(error);
  }
});

// router.put('/:id', async (req, res) => {
//   try {
//     const updatedata = await apiotmentmodel.findByIdAndUpdate(
//       req.params.id,
//       {
//         drname: req.body.drname,
//         drAddress: req.body.drAddress,
//         drspecialist: req.body.drspecialist,
//       },
//       {
//         new: true,
//       }
//     );

//     res.send({ message: 'xogtii waala update gareeyay', updatedata });
//   } catch (error) {
//     res.send(error.message);
//   }
// });

router.delete('/:id', async (req, res) => {
  const deletedata = await apiotmentmodel.findByIdAndDelete(req.params.id);
  res.send({ message: 'xogta waala delete gareeyay', deletedata });
});
module.exports = router;
