const mongoose = require('mongoose');

const lawyerSchema = new mongoose.Schema({
  name: String,
  experience: String,
  areaOfExpertise: String,
  email: {
    type: String,
    unique: true,
  },
});

const Lawyer = mongoose.model('Lawyer', lawyerSchema);

module.exports = Lawyer;
