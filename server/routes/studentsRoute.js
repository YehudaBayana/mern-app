const router = require('express').Router();
const {
  getAllStudents,
  postStudent,
  deleteStudent,
  updateStudent,
} = require('../controllers/studentController');

router.get('/', getAllStudents);
router.post('/', postStudent);
router.delete('/', deleteStudent);
router.put('/', updateStudent);

module.exports = router;
