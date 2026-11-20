/**
 * ClearPass — Node.js + Express + MongoDB Backend Engine
 * Digital No-Dues and Certificate Clearance System with QR Verification
 * Vidyavardhaka College of Engineering (VVCE), Mysuru
 */

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const crypto = require('crypto');
const path = require('path');
require('dotenv').config();

const Student = require('./models/Student');
const ClearanceRequest = require('./models/ClearanceRequest');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/clearpass_vvce';

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Connect to MongoDB
mongoose.connect(MONGODB_URI)
  .then(() => console.log('✓ MongoDB Connected: ClearPass VVCE Database'))
  .catch(err => {
    console.warn('! MongoDB connection failed (running in fallback mock mode):', err.message);
  });

// Default 5-Desk Workflow Sequence: LIBRARY -> HOSTEL -> ACCOUNTS -> LAB -> HOD
const DEFAULT_DESKS = [
  { order: 1, deskId: 'library', deskName: 'Library', fullName: 'Central Library', officerName: 'Dr H Nayana (Chief Librarian)', slaHours: 24 },
  { order: 2, deskId: 'hostel', deskName: 'Hostel', fullName: 'Campus Hostel Office', officerName: 'Girish P (Hostel Warden)', slaHours: 48 },
  { order: 3, deskId: 'accounts', deskName: 'Accounts', fullName: 'Accounts & Fee Section', officerName: 'Accounts Officer (Desk 3)', slaHours: 24 },
  { order: 4, deskId: 'lab', deskName: 'Lab', fullName: 'AIML Department Labs', officerName: 'Prof Rashmi K (Lab In-charge)', slaHours: 24 },
  { order: 5, deskId: 'hod', deskName: 'HOD', fullName: 'HOD - Dept. of CSE (AIML)', officerName: 'Dr Aditya CR (Prof & HOD)', slaHours: 24 }
];

// Routes
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    system: 'ClearPass Node.js + MongoDB Protocol Engine',
    institution: 'Vidyavardhaka College of Engineering (VVCE), Mysuru',
    database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
    timestamp: new Date().toISOString()
  });
});

// GET all clearance requests
app.get('/api/requests', async (req, res) => {
  try {
    const requests = await ClearanceRequest.find().sort({ createdAt: -1 });
    res.json(requests);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST create new clearance request
app.post('/api/requests', async (req, res) => {
  try {
    const { usn, studentName, type, purpose, department, semester } = req.body;
    const reqId = `CP-2026-${Math.floor(1000 + Math.random() * 9000)}`;

    const steps = DEFAULT_DESKS.map(d => ({
      ...d,
      status: d.order === 1 ? 'active' : 'pending',
      remarks: null,
      timestamp: null
    }));

    const newRequest = new ClearanceRequest({
      requestId: reqId,
      usn: usn || '4VV24CI175',
      studentName: studentName || 'Vamshik Patela ES',
      department: department || 'CSE (AIML)',
      semester: semester || '05',
      type: type || 'Semester No-Dues Clearance',
      purpose: purpose || 'End-Term Examination Hall Ticket Eligibility',
      status: 'in_progress',
      activeDesk: 'library',
      steps,
      auditTrail: [{
        action: 'INITIATED',
        actor: studentName || 'Vamshik Patela ES',
        desk: 'STUDENT_PORTAL',
        details: `Initiated ${type}`
      }]
    });

    await newRequest.save();
    res.status(201).json({ success: true, request: newRequest });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST officer action: approve, correction, reject
app.post('/api/requests/:id/action', async (req, res) => {
  try {
    const { id } = req.params;
    const { deskId, action, remarks, officerName } = req.body;

    const reqDoc = await ClearanceRequest.findOne({ requestId: id });
    if (!reqDoc) return res.status(404).json({ error: 'Request not found' });

    const stepIndex = reqDoc.steps.findIndex(s => s.deskId === deskId);
    if (stepIndex === -1) return res.status(400).json({ error: 'Desk not in chain' });

    const step = reqDoc.steps[stepIndex];
    const now = new Date();
    const timeStr = `${now.toLocaleString('default', { month: 'short' }).toUpperCase()} ${now.getDate()} · ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    if (action === 'approve') {
      step.status = 'completed';
      step.remarks = remarks || 'Clearance verified. Zero outstanding dues.';
      step.timestamp = timeStr;
      if (officerName) step.officerName = officerName;

      // Advance to next desk
      if (stepIndex < reqDoc.steps.length - 1) {
        reqDoc.steps[stepIndex + 1].status = 'active';
        reqDoc.activeDesk = reqDoc.steps[stepIndex + 1].deskId;
      } else {
        // Final sign-off at HOD!
        reqDoc.status = 'approved';
        reqDoc.activeDesk = null;
        const certDigest = crypto.createHash('sha256')
          .update(`${reqDoc.requestId}:${reqDoc.usn}:${timeStr}:VVCE_CRYPTO_SEAL`)
          .digest('hex');
        reqDoc.certificateHash = certDigest;
        reqDoc.qrVerificationUrl = `/verify/${certDigest}`;
      }
    } else if (action === 'correction') {
      step.status = 'correction';
      step.remarks = remarks || 'Action required: Student must resolve pending dues.';
      reqDoc.status = 'action_required';
    } else if (action === 'reject') {
      step.status = 'rejected';
      step.remarks = remarks || 'Clearance rejected by desk authority.';
      reqDoc.status = 'rejected';
      reqDoc.activeDesk = null;
    }

    reqDoc.auditTrail.push({
      action: action.toUpperCase(),
      actor: officerName || step.officerName,
      desk: deskId.toUpperCase(),
      details: remarks || ''
    });

    await reqDoc.save();
    res.json({ success: true, request: reqDoc });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET cryptographic verification
app.get('/api/verify/:hash', async (req, res) => {
  try {
    const { hash } = req.params;
    const match = await ClearanceRequest.findOne({ certificateHash: hash });

    if (!match) {
      return res.status(404).json({ valid: false, message: 'Hash not recognized in VVCE Clearance Registry' });
    }

    res.json({
      valid: true,
      institution: 'Vidyavardhaka College of Engineering (VVCE), Mysuru',
      accreditation: 'Autonomous, Affiliated to VTU | NBA & NAAC Grade A',
      request: match,
      tamperStatus: 'AUTHENTIC_UNALTERED',
      verifiedAt: new Date().toISOString()
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Serve frontend for all standard routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`===================================================================`);
  console.log(` ClearPass VVCE Node.js + Express + MongoDB Server`);
  console.log(` Running on port: http://localhost:${PORT}`);
  console.log(`===================================================================`);
});
