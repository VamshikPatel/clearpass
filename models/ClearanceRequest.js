const mongoose = require('mongoose');

const stepSchema = new mongoose.Schema({
  order: {
    type: Number,
    required: true
  },
  deskId: {
    type: String,
    enum: ['library', 'hostel', 'accounts', 'lab', 'hod'],
    required: true
  },
  deskName: {
    type: String,
    required: true
  },
  fullName: {
    type: String,
    required: true
  },
  officerName: {
    type: String,
    default: 'Desk Officer'
  },
  status: {
    type: String,
    enum: ['pending', 'active', 'completed', 'correction', 'rejected'],
    default: 'pending'
  },
  remarks: {
    type: String,
    default: null
  },
  duesAmount: {
    type: Number,
    default: 0
  },
  timestamp: {
    type: String,
    default: null
  },
  slaHours: {
    type: Number,
    default: 24
  }
});

const auditLogSchema = new mongoose.Schema({
  action: { type: String, required: true },
  actor: { type: String, required: true },
  desk: { type: String, required: true },
  details: { type: String, default: '' },
  timestamp: { type: Date, default: Date.now }
});

const clearanceRequestSchema = new mongoose.Schema({
  requestId: {
    type: String,
    required: true,
    unique: true
  },
  usn: {
    type: String,
    required: true,
    uppercase: true
  },
  studentName: {
    type: String,
    required: true
  },
  department: {
    type: String,
    default: 'CSE (AIML)'
  },
  semester: {
    type: String,
    default: '05'
  },
  type: {
    type: String,
    required: true
  },
  purpose: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['in_progress', 'approved', 'rejected', 'action_required'],
    default: 'in_progress'
  },
  activeDesk: {
    type: String,
    default: 'library'
  },
  elapsedWait: {
    type: String,
    default: 'JUST NOW'
  },
  steps: [stepSchema],
  certificateHash: {
    type: String,
    default: null
  },
  qrVerificationUrl: {
    type: String,
    default: null
  },
  auditTrail: [auditLogSchema]
}, { timestamps: true });

module.exports = mongoose.model('ClearanceRequest', clearanceRequestSchema);
