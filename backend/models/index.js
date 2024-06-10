const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const EmployeeModel = require('./Employee');
const LawyerModel = require('./Lawyer');

const app = express();
app.use(express.json());
app.use(cors());

// mongoose.connect('mongodb://localhost:27017/sahayak');
mongoose.connect('mongodb://localhost:27017/sahayak', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch((error) => {
    console.error('Error connecting to database:', error);
  });


app.post('/login', (req, res) => {
  const { email, password } = req.body;
  EmployeeModel.findOne({ email: email })
    .then((user) => {
      if (user) {
        if (user.password === password) {
          res.json('Success');
        } else {
          res.json('The password is incorrect');
        }
      } else {
        res.json('No record existed');
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

app.post('/register', (req, res) => {
  EmployeeModel.create(req.body)
    .then((employees) => res.json(employees))
    .catch((err) => res.status(400).json({ error: err.message }));
});

app.post('/register-lawyer', (req, res) => {
  console.log('Received request body:', req.body);

  const { name, experience, areaOfExpertise, email } = req.body;

  // Validate that all required fields are present
  if (!name || !experience || !areaOfExpertise || !email) {
    return res.status(400).json({ error: 'All fields are required for lawyer registration.' });
  }

  LawyerModel.create(req.body)
    .then((lawyer) => res.json(lawyer))
    .catch((err) => res.status(400).json({ error: err.message }));
});

app.get('/get-lawyers', (req, res) => {
  LawyerModel.find({})
    .then((lawyers) => res.json(lawyers))
    .catch((err) => res.status(500).json({ error: err.message }));
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
