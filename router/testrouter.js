const express = require('express');
const customermodel = require('../models/costumermodel');

const router = express.Router();

router.get('/', async (req, res) => {
  const data = await customermodel.find();
  res.json(data);
});

router.post('/', async (req, res) => {
  const postdata = await customermodel(req.body);
  // console.log(postdata);
  await postdata.save();
  res.send(postdata);
});

module.exports = router;
