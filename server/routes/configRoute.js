// const indexR = require('./index');
const usersR = require('./users');
const studentR = require('./studentRoute');

exports.routeInit = (app) => {
  // app.use('/', indexR);
  app.use('/api/users', usersR);
  app.use('/api/students', studentR);
};
