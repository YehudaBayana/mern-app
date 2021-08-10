const express = require('express');
const router = express.Router();

const {
  getAllStudents,
  postStudent,
  deleteStudent,
  updateStudent,
  updateStudentGrade,
} = require('../controllers/studentController');

router.get('/', getAllStudents);
router.post('/', postStudent);
router.delete('/:idDel', deleteStudent);
router.put('/grade', updateStudentGrade);
router.put('/:idEdit', updateStudent);

module.exports = router;
