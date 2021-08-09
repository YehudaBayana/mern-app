const mongoose = require('mongoose');
mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('mongo connected'))
  .catch((error) => {
    console.error('connection error', error.message);
  });

module.exports = mongoose.connection;
