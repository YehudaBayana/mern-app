const router = require('express').Router();
const { MessageModel, validMessage } = require('../models/messageModel');

router.get('/', async (req, res) => {
  let messages = await MessageModel.find({});
  res.send(messages);
});

router.post('/', async (req, res) => {
  let validBody = validMessage(req.body);
  if (validBody.error) {
    return res.status(400).json(validBody.error.details);
  }
  try {
    let message = new MessageModel(req.body);
    await message.save();
    res.json(message);
  } catch (error) {
    console.log(error);
    res.status(400).json({ err: 'invalid message' });
  }
});

module.exports = router;
