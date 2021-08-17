// const indexR = require('./index');
const usersR = require('./userRoute');
const studentR = require('./studentRoute');
const messageR = require('./messageRoute');

exports.routeInit = (app) => {
  // app.use('/', indexR);
  app.use('/api/users', usersR);
  app.use('/api/students', studentR);
  app.use('/api/messages', messageR);
};
