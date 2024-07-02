const express = require('express');
const usermodel = require('../models/usermodel');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.get('/', async (req, res) => {
  const data = await usermodel.find();
  res.send(data);
});
// gfdshgfhsxtfewytrewyur36534yet

router.post('/', async (req, res) => {
  try {
    const userdata = await usermodel({
      fullName: req.body.fullName,
      username: req.body.username,
      password: req.body.password,
    });
    const salt = await bcrypt.genSalt(10);
    userdata.password = await bcrypt.hash(userdata.password, salt);

    await userdata.save();
    res.send({ message: 'xogta userka waaa la xariiyay', userdata });
  } catch (error) {
    res.send(error.message);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userlogin = await usermodel.findOne({ username: req.body.username });
    // console.log(userlogin)
    if (!userlogin)
      return res.send({ message: 'Username or password incorrect' });

    const checpass = await bcrypt.compare(
      req.body.password,
      userlogin.password
    );
    if (!checpass)
      return res.send({ message: 'username or password incorrect' });

    const token = jwt.sign(
      {
        id: userlogin.id,
        username: userlogin.username,
      },
      'apiontment'
    );
    res.send({ message: 'successfull login', token });

    // console.log(userlogin);
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = router;
