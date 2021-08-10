const bcrypt = require('bcryptjs');
const { UserModel } = require('../models/userModel');

async function register(req, res) {
  await UserModel.findOne(
    { email: require.body.UserModel.email },
    (err, user) => {
      if (user) {
        return res.status(403).json({ email: 'email already in system' });
      } else {
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(req.body.user.password, salt, (err, hash) => {
            if (err) {
              throw err;
            }
            req.body.user.password = hash;
            UserModel.insertMany(req.body.user, (err) => {
              if (err)
                return res.status(400).json({ success: false, error: err });
              return res
                .status(201)
                .json({
                  success: true,
                  message: ` ${req.body.user} registered`,
                });
            });
          });
        });
      }
    }
  );
}
