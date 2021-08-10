const express = require('express');
const { StudentsModel, validStudent } = require('../models/studentModel');
const router = express.Router();

router.get('/', async (req, res) => {
  let data = await StudentsModel.find({});
  res.json(data);
});

router.post('/', async (req, res) => {
  let validBody = validStudent(req.body);
  if (validBody.error) {
    return res.status(400).json(validBody.error.details);
  }
  let students = new StudentsModel(req.body);
  await students.save();
  res.json(students);
});

router.put('/grade', async (req, res) => {
  let student = await StudentsModel.findById(req.body);
  student.grades.push({ test: req.body.test, grade: req.body.grade });
  await student.save();
  res.json(student);
});

router.delete('/:idDel', async (req, res) => {
  try {
    let data = await StudentsModel.deleteOne({ _id: req.params.idDel });
    // אם יש הצלחה נקבל מאפיין של אן שווה אחד
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

router.put('/:idEdit', async (req, res) => {
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
});

module.exports = router;
