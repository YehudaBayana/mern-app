const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const db = require('./DB/mongoConnect');
// const studentRouter = require('./routes/studentsRoute');

const dbConnect = require('./db/mongoConnect');
const { routeInit } = require('./routes/configRoute');

const PORT = process.env.PORT || 8080;

db.on('err', () => {
  console.error('there is error');
});

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// app.use('/students', studentRouter);
routeInit(app);

// app.get('/', (req, res) => {
//   res.send({ msg: 'express work' });
// });

app.listen(PORT);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}
