const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validationData(data) {
  let errors = {};

  data.email = isEmpty(data.email) ? '' : data.email;
  data.pass = isEmpty(data.pass) ? '' : data.pass;

  if (Validator.isEmpty(data.email)) {
    errors.email = 'email field is required';
  }
  if (Validator.isEmpty(data.pass)) {
    errors.pass = 'pass field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
