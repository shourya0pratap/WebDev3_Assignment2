const express = require('express');
const studentRoutes = require('./routes/studentRoutes');
const logger = require("./middleware/logger")

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(logger);

// Display menu
app.get('/', (_, res) => {
  res.status(200).json({
    message: 'Student Management REST API',
    availableRoutes: {
      'GET /students': 'Retrieve all students',
      'GET /students/:id': 'Retrieve a student by ID',
      'POST /students': 'Create a new student',
      'PUT /students/:id': 'Update an existing student',
      'DELETE /students/:id': 'Delete a student'
    }
  });
});

// Routes
app.use('/students', studentRoutes);

// --- Error handling ---

// Route Not Found Handler (404)
app.use((req, res, _) => {
  res.status(404).json({
    status: 'fail',
    message: `Resource not found: ${req.method} ${req.url}`
  });
});

// Global Error Handler (500)
app.use((err, _, res, _) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    status: 'fail',
    message: err.message || 'Internal Server Error'
  });
});

// ----------------------

// Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;