const { StudentsModel, validStudent } = require('../models/studentModel');

async function getAllStudents(req, res) {
  let data = await StudentsModel.find({});
  res.json(data);
}

async function postStudent(req, res) {
  let validBody = validStudent(req.body);
  if (validBody.error) {
    return res.status(400).json(validBody.error.details);
  }
  let students = new StudentsModel(req.body);
  await students.save();
  res.json(students);
}

async function deleteStudent(req, res) {
  try {
    let data = await StudentsModel.deleteOne({ _id: req.params.idDel });
    // אם יש הצלחה נקבל מאפיין של אן שווה אחד
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
}
async function updateStudent(req, res) {
  let validBody = validStudent(req.body);
  if (validBody.error) {
    return res.status(400).json(validBody.error.details);
  }
  try {
    let data = await StudentsModel.updateOne(
      { _id: req.params.idEdit },
      req.body
    );
    // אם יש הצלחה נקבל מאפיין של אן שווה אחד
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
}
async function updateStudentGrade(req, res) {
  let student = await StudentsModel.findById(req.body);
  student.grades.push({ test: req.body.test, grade: req.body.grade });
  await student.save();
  res.json(student);
}

module.exports = {
  getAllStudents,
  postStudent,
  deleteStudent,
  updateStudent,
  updateStudentGrade,
};
