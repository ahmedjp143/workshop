const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const app = express();

const testrouter = require('./router/testrouter');
const patientRouter = require('./router/Patientrouter');
const doctoreouter = require('./router/doctorrouter');
const apiotmnetrouter = require('./router/apiontmentrouter');
const userrouter = require('./router/userrouter');
app.use(express.json());
app.use('/user', userrouter);
app.use((req, res, next) => {
  try {
    const token = req.headers['token'];
    if (!token)
      return res.send({ message: 'raali noqo ogolaasho uma heesatid' });
    const userverivy = jwt.verify(token, 'apiontment');
    next();
  } catch (error) {
    res.send(error.message);
  }
});

app.use('/test', testrouter);
app.use('/patient', patientRouter);
app.use('/doctor', doctoreouter);
app.use('/apiotment', apiotmnetrouter);

// locolhost:3001/test
mongoose
  .connect(
    'mongodb+srv://ajb1434:nkKbBiDV6ByVow4Y@cluster0.bmydzw6.mongodb.net/workshop'
  )
  .then(() => console.log('Connected DATABASE!'))
  .catch(() => console.log(' connection failed'));

const port = 3001;
app.get('/', (req, res) => {
  res.send('hello api');
});
app.listen(port, () => {
  console.log('this server has been started ');
});
