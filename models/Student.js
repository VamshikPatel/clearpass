const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  usn: {
    type: String,
    required: true,
    unique: true,
    uppercase: true,
    trim: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  department: {
    type: String,
    required: true,
    default: 'CSE (Artificial Intelligence & Machine Learning)'
  },
  semester: {
    type: String,
    required: true,
    default: '05'
  },
  section: {
    type: String,
    default: 'A'
  },
  phone: {
    type: String,
    default: ''
  },
  isHostelite: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);
