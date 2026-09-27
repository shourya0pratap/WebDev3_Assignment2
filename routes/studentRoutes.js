const express = require('express');
const router = express.Router();
const students = require('../data/students');

// Get all students
router.get('/', (_, res) => {
  res.status(200).json(students);
});

// Get student by id
router.get('/:id', (req, res) => {
  const studentId = parseInt(req.params.id, 10);
  const student = students.find((s) => s.id === studentId);

  if (!student) {
    return res.status(404).json({ error: 'Student not found!' });
  }

  res.status(200).json(student);
});

// Post
router.post('/', (req, res) => {
  const { name, age, course } = req.body;

  if (!name || !age || !course) {
    return res.status(400).json({ error: 'Name, age, and course are required!' });
  }

  const newStudent = {
    id: students.length > 0 ? Math.max(...students.map((s) => s.id)) + 1 : 1,
    name,
    age,
    course
  };

  students.push(newStudent);
  res.status(201).json(newStudent);
});

// Put
router.put('/:id', (req, res) => {
  const studentId = parseInt(req.params.id, 10);
  const student = students.find((s) => s.id === studentId);

  if (!student) {
    return res.status(404).json({ error: 'Student not found!' });
  }

  const { name, age, course } = req.body;

  if (!name || !age || !course) {
    return res.status(400).json({ error: 'Name, age, and course are required!' });
  }

  student.name = name;
  student.age = age;
  student.course = course;

  res.status(200).json(student);
});

// Delete
router.delete('/:id', (req, res) => {
  const studentId = parseInt(req.params.id, 10);
  const index = students.findIndex((s) => s.id === studentId);

  if (index === -1) {
    return res.status(404).json({ error: 'Student not found!' });
  }

  students.splice(index, 1);
  res.status(200).json({ message: 'Student deleted successfully!' });
});

module.exports = router;