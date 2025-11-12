const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const employRouter = require('./routes/employee.route');

dotenv.config();

const app = express();

app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log('Connected to db');
  })
  .catch((error) => {
    console.error('connecting to db error', error);
  });

app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});

app.use('/', employRouter);
