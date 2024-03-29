const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {
  UserModel,
  validUser,
  validLogin,
  genToken,
} = require('../models/userModel');
const { authToken } = require('../auth/authToken');
const validationData = require('../validation/validationData');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ msg: 'users wwwork perfect' });
});

router.post('/', async (req, res) => {
  let validBody = validUser(req.body);
  if (validBody.error) {
    return res.status(400).json(validBody.error.details);
  }
  try {
    let user = new UserModel(req.body);
    user.pass = await bcrypt.hash(user.pass, 7);
    await user.save();
    user.pass = '****';
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(400).json({ err: 'email already in system or other problem' });
  }
});

router.get('/userInfo', authToken, async (req, res) => {
  validationData(req.body);
  let user = await UserModel.findOne({ _id: req.tokenData._id });
  res.json(user);
});

router.post('/login', async (req, res) => {
  let validBody = validLogin(req.body);
  if (validBody.error) {
    return res.status(400).json(validBody.error.details);
  }
  let user = await UserModel.findOne({ email: req.body.email });
  if (!user) {
    return res.status(401).json({ msg: 'user not found' });
  }
  let passValid = await bcrypt.compare(req.body.pass, user.pass);
  if (!passValid) {
    return res.status(401).json({ msg: 'password wrong' });
  }

  let newToken = genToken(user._id);

  res.json({ token: newToken });
});

module.exports = router;
