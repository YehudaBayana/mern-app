// const indexR = require('./index');
const usersR = require('./users');
const foodsR = require('./students');

exports.routeInit = (app) => {
  // app.use('/', indexR);
  app.use('/api/users', usersR);
  app.use('/api/students', foodsR);
};
