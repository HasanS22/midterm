var express = require('express');
var router = express.Router();
var Student = require('../models/Student');

// CREATE
router.post('/', async function(req, res, next) {
  const student = new Student({
    StudentNumber: req.body.StudentNumber,
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    EmailAddress: req.body.EmailAddress
  });

  try {
    const newStudent = await student.save();
    res.status(201).json(newStudent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// READ
router.get('/', async function(req, res, next) {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
