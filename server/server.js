const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const db = require('./DB');
const studentRouter = require('./routes/studentsRoute');

const PORT = process.env.PORT || 8080;

db.on('err', () => {
  console.error('there is error');
});

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/students', studentRouter);

// app.get('/', (req, res) => {
//   res.send({ msg: 'express work' });
// });

app.listen(PORT);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.get('*', (req, res) => {
    res, sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}
