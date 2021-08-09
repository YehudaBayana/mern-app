const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const db = require('./DB');
const studentRouter = require('./routes/studentsRoute');

const PORT = process.env.PORT || 8080;

db.on('err', () => {
  console.error('there is error');
});

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/students', studentRouter);

app.get('/', (req, res) => {
  res.send({ msg: 'express work' });
});

app.listen(PORT);
