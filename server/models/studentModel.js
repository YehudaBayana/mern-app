const mongoose = require('mongoose');
const Joi = require('joi');

const studentSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  class: String,
  image: String,
  description: String,
  grades: [
    {
      test: String,
      grade: Number,
    },
  ],
  date_created: {
    type: Date,
    default: Date.now(),
  },
});

const StudentsModel = mongoose.model('students', studentSchema);

exports.StudentsModel = StudentsModel;

exports.validStudent = (_bodyData) => {
  let joiSchema = Joi.object({
    firstName: Joi.string().min(2).max(20).required(),
    lastName: Joi.string().min(2).max(20).required(),
    email: Joi.string().min(1).max(50).required(),
    class: Joi.string().min(1).max(50).required(),
    image: Joi.string().min(1).max(1000),
    description: Joi.string().min(1).max(9999),
    grades: Joi.array().items({
      test: Joi.string().min(1).max(20),
      grade: Joi.number().min(1).max(110),
    }),
  });
  return joiSchema.validate(_bodyData);
};
