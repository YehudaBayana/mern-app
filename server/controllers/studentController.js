const StudentModel = require('../models/studentModel');

async function getAllStudents(req, res) {
  try {
    await StudentModel.find((err, result) => {
      if (err) throw err;
      res.json({ msg: 'success', data: result });
    });
  } catch (err) {
    res.json({ msg: 'database problem', error: err });
  }
}

async function postStudent(req, res) {
  try {
    await StudentModel.insertMany(req.body, (err, result) => {
      if (err) throw err;
      res.json({ msg: 'success', data: result });
    });
  } catch (err) {
    res.json({ msg: 'database problem', error: err });
  }
}

async function deleteStudent(req, res) {
  try {
    await StudentModel.findByIdAndDelete(req.body._id, (err, result) => {
      if (err) throw err;
      res.json({ msg: 'success', data: result });
    });
  } catch (err) {
    res.json({ msg: 'database problem', error: err });
  }
}
async function updateStudent(req, res) {
  try {
    await StudentModel.findByIdAndUpdate(
      req.body._id,
      req.body,
      (err, result) => {
        if (err) throw err;
        res.json({ msg: 'success', data: result });
      }
    );
  } catch (err) {
    res.json({ msg: 'database problem', error: err });
  }
}

module.exports = {
  getAllStudents,
  postStudent,
  deleteStudent,
  updateStudent,
};
