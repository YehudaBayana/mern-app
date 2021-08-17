const Joi = require('joi');
const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  from: String,
  text: String,
  date_created: {
    type: Date,
    default: new Date(),
  },
});

exports.MessageModel = mongoose.model('messages', messageSchema);

exports.validMessage = (_bodyData) => {
  let joiSchema = Joi.object({
    from: Joi.string().min(2).max(50).required(),
    text: Joi.string().min(2).max(300).required(),
  });
  return joiSchema.validate(_bodyData);
};
