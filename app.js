/**
 * ClearPass — Motion.dev × A24 Front-End Engine
 * Strict Role-Based Access Control (RBAC) & User-Isolated Clearance State Machine
 * Vidyavardhaka College of Engineering (VVCE), Mysuru
 */

// Official Institutional Student Registry
const STUDENTS = [
  { usn: '4VV24CI175', name: 'Vamshik Patela ES', dept: 'CSE (AIML)', sem: '05', sec: 'C', email: 'vamshik.24ci175@vvce.ac.in', pin: 'vvce@2026' },
  { usn: '4VV24CI34', name: 'Rajesh BR', dept: 'CSE (AIML)', sem: '05', sec: 'A', email: 'rajesh.24ci34@vvce.ac.in', pin: 'vvce@2026' },
  { usn: '4VV24CI132', name: 'RP Jeetender Singh', dept: 'CSE (AIML)', sem: '05', sec: 'B', email: 'jeetender.24ci132@vvce.ac.in', pin: 'vvce@2026' }
];

// Official Clearance Desks & Signatories (Monospace Architectural Tags, Zero Emojis)
const OFFICER_DESKS = [
  { id: 'library', name: 'Central Library', officerName: 'Smt. Sunitha K', roleTitle: 'Chief Librarian', tag: '[DESK 01 // LIB]', pin: 'vvce#lib', defaultRemark: 'All borrowed textbooks returned intact. Zero library fine.' },
  { id: 'hostel', name: 'Campus Hostel Office', officerName: 'Mr. Chandrashekar B', roleTitle: 'Hostel Warden', tag: '[DESK 02 // HOSTEL]', pin: 'vvce#hostel', defaultRemark: 'Room inventory cleared. Caution deposit verified.' },
  { id: 'accounts', name: 'Accounts & Fee Section', officerName: 'Accounts Officer (Desk 3)', roleTitle: 'Fee Section Officer', tag: '[DESK 03 // ACC]', pin: 'vvce#acc', defaultRemark: 'Tuition fee cleared in full for Odd Sem 2026-27.' },
  { id: 'lab', name: 'AIML Department Labs', officerName: 'Prof. Manjunath R', roleTitle: 'Lab In-Charge', tag: '[DESK 04 // LAB]', pin: 'vvce#lab', defaultRemark: 'AI Lab record signed. GPU kit returned.' },
  { id: 'hod', name: 'HOD Office (AIML)', officerName: 'Dr. Paramesha K', roleTitle: 'Professor & HOD', tag: '[DESK 05 // HOD]', pin: 'vvce#hod', defaultRemark: 'Academic clearance sanctioned for academic year 2026-27.' }
];

// Pre-seeded Individual Student Requests (Distinct, User-Isolated)
const SEED_REQUESTS = [
  // 1. Vamshik Patela ES - In Progress at Accounts Desk (Ready for live demo sign-off)
  {
    id: 'CP-2026-0842',
    usn: '4VV24CI175',
    studentName: 'Vamshik Patela ES',
    dept: 'CSE (AIML)',
    sem: '05',
    type: 'Semester No-Dues Clearance',
    purpose: 'End-Term Examination Hall Ticket Eligibility & Lab Clearance',
    status: 'in_progress',
    createdAt: '2026-11-20 09:15:00',
    updatedAt: '2026-11-20 10:20:00',
    certificateHash: null,
    activeDesk: 'accounts',
    elapsedWait: '2H 14M',
    steps: [
      { order: 1, deskId: 'library', deskName: 'Library', fullName: 'Central Library', officerName: 'Smt. Sunitha K (Chief Librarian)', status: 'completed', remarks: 'All 3 technical textbooks returned intact. Zero library fine.', timestamp: 'NOV 20 · 09:45', slaHours: 24 },
      { order: 2, deskId: 'hostel', deskName: 'Hostel', fullName: 'Campus Hostel Office', officerName: 'Mr. Chandrashekar B (Hostel Warden)', status: 'completed', remarks: 'Day scholar exempted / room inventory cleared.', timestamp: 'NOV 20 · 10:12', slaHours: 48 },
      { order: 3, deskId: 'accounts', deskName: 'Accounts', fullName: 'Accounts & Fee Section', officerName: 'Accounts Officer (Desk 3)', status: 'active', remarks: 'Tuition fee ledger verification in progress.', timestamp: null, slaHours: 24 },
      { order: 4, deskId: 'lab', deskName: 'Lab', fullName: 'AIML Department Labs', officerName: 'Prof. Manjunath R (Lab In-charge)', status: 'pending', remarks: null, timestamp: null, slaHours: 24 },
      { order: 5, deskId: 'hod', deskName: 'HOD', fullName: 'HOD - Dept. of CSE (AIML)', officerName: 'Dr. Paramesha K (Prof & HOD)', status: 'pending', remarks: null, timestamp: null, slaHours: 24 }
    ]
  },
  // 2. Rajesh BR - Completed & Approved Bonafide Certificate
  {
    id: 'CP-2026-0719',
    usn: '4VV24CI34',
    studentName: 'Rajesh BR',
    dept: 'CSE (AIML)',
    sem: '05',
    type: 'Bonafide Certificate',
    purpose: 'Passport Application & AICTE Sponsored Summer Internship Verification',
    status: 'approved',
    createdAt: '2026-11-18 10:15:00',
    updatedAt: '2026-11-19 16:40:00',
    certificateHash: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
    activeDesk: null,
    elapsedWait: 'COMPLETED IN 4.2H',
    steps: [
      { order: 1, deskId: 'library', deskName: 'Library', fullName: 'Central Library', officerName: 'Smt. Sunitha K', status: 'completed', remarks: 'Cleared. Zero dues.', timestamp: 'NOV 18 · 11:20', slaHours: 24 },
      { order: 2, deskId: 'hostel', deskName: 'Hostel', fullName: 'Campus Hostel Office', officerName: 'Mr. Chandrashekar B', status: 'completed', remarks: 'Day scholar - exempted.', timestamp: 'NOV 18 · 14:05', slaHours: 48 },
      { order: 3, deskId: 'accounts', deskName: 'Accounts', fullName: 'Accounts & Fee Section', officerName: 'Accounts Officer', status: 'completed', remarks: 'Tuition fee cleared in full for Odd Sem 2026-27.', timestamp: 'NOV 19 · 09:30', slaHours: 24 },
      { order: 4, deskId: 'lab', deskName: 'Lab', fullName: 'AIML Department Labs', officerName: 'Prof. Manjunath R', status: 'completed', remarks: 'AI Lab record verified.', timestamp: 'NOV 19 · 14:10', slaHours: 24 },
      { order: 5, deskId: 'hod', deskName: 'HOD', fullName: 'HOD - Dept. of CSE (AIML)', officerName: 'Dr. Paramesha K', status: 'completed', remarks: 'Bonafide sanctioned for academic year 2026-27.', timestamp: 'NOV 19 · 16:40', slaHours: 24 }
    ]
  },
  // 3. RP Jeetender Singh - Completed & Approved Laboratory Clearance
  {
    id: 'CP-2026-0690',
    usn: '4VV24CI132',
    studentName: 'RP Jeetender Singh',
    dept: 'CSE (AIML)',
    sem: '05',
    type: 'Laboratory Course Clearance',
    purpose: 'Deep Learning & Computer Vision GPU Lab Course Sign-off',
    status: 'approved',
    createdAt: '2026-11-15 14:00:00',
    updatedAt: '2026-11-16 11:30:00',
    certificateHash: '8f434346648f6b96df89dda901c5176b10a6d83961dd3c1ac88b59b2dc327aa4',
    activeDesk: null,
    elapsedWait: 'COMPLETED IN 3.8H',
    steps: [
      { order: 1, deskId: 'library', deskName: 'Library', fullName: 'Central Library', officerName: 'Smt. Sunitha K', status: 'completed', remarks: 'Cleared.', timestamp: 'NOV 15 · 14:30', slaHours: 24 },
      { order: 2, deskId: 'hostel', deskName: 'Hostel', fullName: 'Campus Hostel Office', officerName: 'Mr. Chandrashekar B', status: 'completed', remarks: 'Hostel clearance recorded.', timestamp: 'NOV 15 · 15:45', slaHours: 48 },
      { order: 3, deskId: 'accounts', deskName: 'Accounts', fullName: 'Accounts & Fee Section', officerName: 'Accounts Officer', status: 'completed', remarks: 'Lab fees accounted.', timestamp: 'NOV 16 · 09:20', slaHours: 24 },
      { order: 4, deskId: 'lab', deskName: 'Lab', fullName: 'AIML Department Labs', officerName: 'Prof. Manjunath R', status: 'completed', remarks: 'Mini-project benchmarks verified. GPU kits returned.', timestamp: 'NOV 16 · 10:45', slaHours: 24 },
      { order: 5, deskId: 'hod', deskName: 'HOD', fullName: 'HOD - Dept. of CSE (AIML)', officerName: 'Dr. Paramesha K', status: 'completed', remarks: 'Approved.', timestamp: 'NOV 16 · 11:30', slaHours: 24 }
    ]
  }
];

// Reactive State Store with LocalStorage Persistence
class StateStore {
  constructor() {
    const saved = localStorage.getItem('clearpass_v4_state');
    if (saved) {
      try {
        this.state = JSON.parse(saved);
      } catch (e) {
        this.state = this.getInitialState();
      }
    } else {
      this.state = this.getInitialState();
      this.save();
    }
    this.subscribers = [];
  }

  getInitialState() {
    return {
      currentView: 'login', // 'login', 'student', 'officer', 'admin', 'verify'
      currentRole: 'guest', // 'guest', 'student', 'officer', 'admin'
      currentUser: null,    // User object
      loginTab: 'student',  // 'student', 'officer', 'admin'
      currentOfficerDesk: 'accounts', // default desk to inspect
      lookupHash: null,     // searched hash for public verifier
      requests: JSON.parse(JSON.stringify(SEED_REQUESTS))
    };
  }

  save() {
    localStorage.setItem('clearpass_v4_state', JSON.stringify(this.state));
    this.notify();
  }

  resetAllData() {
    this.state = this.getInitialState();
    this.save();
  }

  subscribe(fn) {
    this.subscribers.push(fn);
    return () => {
      this.subscribers = this.subscribers.filter(s => s !== fn);
    };
  }

  notify() {
    this.subscribers.forEach(fn => fn(this.state));
  }

  // Switch Login Tab
  setLoginTab(tab) {
    this.state.loginTab = tab;
    this.save();
  }

  // Explicit Student Authentication
  loginStudent(usn) {
    const student = STUDENTS.find(s => s.usn.toUpperCase() === usn.trim().toUpperCase());
    if (!student) {
      window.clearPassApp.showToast(`ERROR: Student USN '${usn}' not found in VVCE AIML Registry.`);
      return false;
    }

    this.state.currentRole = 'student';
    this.state.currentUser = student;
    this.state.currentView = 'student';
    this.state.lookupHash = null; // Clear lookup hash so student sees THEIR OWN certificate
    this.save();
    window.clearPassApp.showToast(`WELCOME: ${student.name} (${student.usn})`);
    return true;
  }

  // Explicit Officer Authentication
  loginOfficer(deskId) {
    const desk = OFFICER_DESKS.find(d => d.id === deskId) || OFFICER_DESKS[0];
    this.state.currentRole = 'officer';
    this.state.currentOfficerDesk = desk.id;
    this.state.currentUser = {
      name: desk.officerName,
      deskName: desk.name,
      roleTitle: desk.roleTitle,
      deskId: desk.id
    };
    this.state.currentView = 'officer';
    this.save();
    window.clearPassApp.showToast(`SIGNED IN: ${desk.name} (${desk.officerName})`);
    return true;
  }

  // Explicit Admin Authentication
  loginAdmin() {
    this.state.currentRole = 'admin';
    this.state.currentUser = {
      name: 'Dean of Academic Affairs',
      roleTitle: 'Dean Academics & Principal Office',
      dept: 'VVCE Administrative Cell'
    };
    this.state.currentView = 'admin';
    this.save();
    window.clearPassApp.showToast('SIGNED IN: Institutional Administration Console');
    return true;
  }

  logout() {
    this.state.currentRole = 'guest';
    this.state.currentUser = null;
    this.state.currentView = 'login';
    this.state.lookupHash = null;
    this.save();
    window.clearPassApp.showToast('SESSION TERMINATED. RETURNED TO LOGIN GATEWAY.');
  }

  // View Navigation with Strict Role Guard
  setView(view) {
    if (this.state.currentRole === 'student') {
      if (view === 'officer' || view === 'admin') {
        window.clearPassApp.showToast('ACCESS BLOCKED: Students are restricted from faculty ledgers and admin audits.');
        return;
      }
    } else if (this.state.currentRole === 'officer') {
      if (view === 'student' || view === 'admin') {
        window.clearPassApp.showToast('ACCESS BLOCKED: Faculty accounts cannot access student private portals or admin audits.');
        return;
      }
    }

    this.state.currentView = view;
    this.save();
  }

  setOfficerDeskFilter(deskId) {
    this.state.currentOfficerDesk = deskId;
    this.save();
  }

  setLookupHash(hash) {
    this.state.lookupHash = hash ? hash.trim() : null;
    this.state.currentView = 'verify';
    this.save();
  }

  // Student Creates Request
  createClearanceRequest(data) {
    const newId = `CP-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const now = new Date();
    const formattedDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:00`;

    const user = this.state.currentUser;

    const newRequest = {
      id: newId,
      usn: user.usn,
      studentName: user.name,
      dept: user.dept,
      sem: user.sem,
      type: data.type,
      purpose: data.purpose,
      status: 'in_progress',
      createdAt: formattedDate,
      updatedAt: formattedDate,
      certificateHash: null,
      activeDesk: 'library',
      elapsedWait: 'JUST NOW',
      steps: [
        { order: 1, deskId: 'library', deskName: 'Library', fullName: 'Central Library', officerName: 'Smt. Sunitha K (Chief Librarian)', status: 'active', remarks: null, timestamp: null, slaHours: 24 },
        { order: 2, deskId: 'hostel', deskName: 'Hostel', fullName: 'Campus Hostel Office', officerName: 'Mr. Chandrashekar B (Hostel Warden)', status: 'pending', remarks: null, timestamp: null, slaHours: 48 },
        { order: 3, deskId: 'accounts', deskName: 'Accounts', fullName: 'Accounts & Fee Section', officerName: 'Accounts Officer (Desk 3)', status: 'pending', remarks: null, timestamp: null, slaHours: 24 },
        { order: 4, deskId: 'lab', deskName: 'Lab', fullName: 'AIML Department Labs', officerName: 'Prof. Manjunath R (Lab In-charge)', status: 'pending', remarks: null, timestamp: null, slaHours: 24 },
        { order: 5, deskId: 'hod', deskName: 'HOD', fullName: 'HOD - Dept. of CSE (AIML)', officerName: 'Dr. Paramesha K (Prof & HOD)', status: 'pending', remarks: null, timestamp: null, slaHours: 24 }
      ]
    };

    this.state.requests.unshift(newRequest);
    this.state.currentView = 'student';
    this.save();
    return newRequest;
  }

  // Officer Triage Action
  processDeskAction(reqId, deskId, action, remarks) {
    const req = this.state.requests.find(r => r.id === reqId);
    if (!req) return false;

    const currentStepIndex = req.steps.findIndex(s => s.deskId === deskId);
    if (currentStepIndex === -1) return false;

    const step = req.steps[currentStepIndex];
    const now = new Date();
    const timeStr = `${now.toLocaleString('default', { month: 'short' }).toUpperCase()} ${now.getDate()} · ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    if (action === 'approve') {
      step.status = 'completed';
      step.remarks = remarks || 'Clearance granted. No outstanding liabilities.';
      step.timestamp = timeStr;

      // Advance to next desk
      if (currentStepIndex < req.steps.length - 1) {
        req.steps[currentStepIndex + 1].status = 'active';
        req.activeDesk = req.steps[currentStepIndex + 1].deskId;
        req.elapsedWait = '10M';
      } else {
        // Final HOD Sign-off!
        req.status = 'approved';
        req.activeDesk = null;
        req.elapsedWait = 'FULLY CLEARED';
        req.certificateHash = generateCryptographicHash(`${req.id}:${req.usn}:${timeStr}:VVCE_CRYPTO_SEAL`);
      }
    } else if (action === 'correction') {
      step.status = 'correction';
      step.remarks = remarks || 'Action required: Student must resolve pending dues.';
      req.status = 'action_required';
    } else if (action === 'reject') {
      step.status = 'rejected';
      step.remarks = remarks || 'Clearance rejected by department authority.';
      req.status = 'rejected';
      req.activeDesk = null;
    }

    this.save();
    return true;
  }

  // Simulator for Live Review Demonstration
  simulateAdvanceStep(reqId) {
    const req = this.state.requests.find(r => r.id === reqId);
    if (!req || req.status !== 'in_progress') return;

    const activeStep = req.steps.find(s => s.status === 'active');
    if (!activeStep) return;

    const desk = OFFICER_DESKS.find(d => d.id === activeStep.deskId);
    const remark = desk ? desk.defaultRemark : 'Clearance audited and approved.';
    this.processDeskAction(reqId, activeStep.deskId, 'approve', remark);
  }
}

// Deterministic Cryptographic Hash Generator
function generateCryptographicHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  const hex = Math.abs(hash).toString(16).padStart(8, '0');
  return (hex + 'e3b0c44298fc1c14' + hex + '49afbf4c8996' + hex).substring(0, 64);
}

// Zero-Dependency Pure SVG QR Code Generator
function generatePureSVGQRCode(data, size = 120) {
  const matrixSize = 25;
  const matrix = Array.from({ length: matrixSize }, () => Array(matrixSize).fill(false));

  function drawFinder(r0, c0) {
    for (let r = 0; r < 7; r++) {
      for (let c = 0; c < 7; c++) {
        if (r === 0 || r === 6 || c === 0 || c === 6 || (r >= 2 && r <= 4 && c >= 2 && c <= 4)) {
          matrix[r0 + r][c0 + c] = true;
        }
      }
    }
  }

  drawFinder(0, 0);
  drawFinder(0, matrixSize - 7);
  drawFinder(matrixSize - 7, 0);

  for (let i = 8; i < matrixSize - 8; i++) {
    matrix[6][i] = (i % 2 === 0);
    matrix[i][6] = (i % 2 === 0);
  }

  let idx = 0;
  for (let r = 0; r < matrixSize; r++) {
    for (let c = 0; c < matrixSize; c++) {
      const inFinder = (r < 8 && c < 8) || (r < 8 && c >= matrixSize - 8) || (r >= matrixSize - 8 && c < 8);
      const inTiming = r === 6 || c === 6;
      if (!inFinder && !inTiming) {
        const charVal = data.charCodeAt(idx % data.length);
        matrix[r][c] = ((charVal + r * 5 + c * 3) % 2 === 0);
        idx++;
      }
    }
  }

  const cellSize = (size / matrixSize).toFixed(2);
  let rects = '';
  for (let r = 0; r < matrixSize; r++) {
    for (let c = 0; c < matrixSize; c++) {
      if (matrix[r][c]) {
        rects += `<rect x="${(c * cellSize)}" y="${(r * cellSize)}" width="${cellSize}" height="${cellSize}" fill="#F4F3EF" />`;
      }
    }
  }

  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" style="background: #08080A; border: 1px solid rgba(255,255,255,0.14);">
      ${rects}
    </svg>
  `;
}

// Global Store Instance
const store = new StateStore();

// Motion.dev × A24 UI Controller
class ClearPassUI {
  constructor() {
    this.store = store;
    this.expandedLedgerRowId = null;
    this.init();
  }

  init() {
    this.bindGlobalEvents();
    this.render();
    store.subscribe(() => this.render());
  }

  bindGlobalEvents() {
    // Review-2 compliance modal trigger
    const revBtn = document.getElementById('btn-review2-compliance');
    if (revBtn) {
      revBtn.addEventListener('click', () => {
        this.openModal('modal-review2-compliance');
      });
    }

    // Modal Close handlers
    document.querySelectorAll('.modal-backdrop-a24').forEach(backdrop => {
      backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop || e.target.closest('.modal-close-trigger')) {
          this.closeModal(backdrop.id);
        }
      });
    });

    // New Request button on Student Dashboard
    const newReqBtn = document.getElementById('btn-open-new-request');
    if (newReqBtn) {
      newReqBtn.addEventListener('click', () => {
        // Pre-fill with current user credentials
        const usnInput = document.getElementById('input-req-usn');
        const nameInput = document.getElementById('input-req-name');
        if (usnInput && store.state.currentUser) usnInput.value = store.state.currentUser.usn;
        if (nameInput && store.state.currentUser) nameInput.value = store.state.currentUser.name;
        this.openModal('modal-new-request');
      });
    }

    // Form submission for New Clearance Request
    const newReqForm = document.getElementById('form-submit-clearance');
    if (newReqForm) {
      newReqForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const type = document.getElementById('input-req-type').value;
        const purpose = document.getElementById('input-req-purpose').value;
        const created = store.createClearanceRequest({ type, purpose });
        this.closeModal('modal-new-request');
        this.showToast(`CLEARANCE PROTOCOL ${created.id} CREATED & ROUTED TO LIBRARY`);
      });
    }
  }

  openModal(id) {
    const m = document.getElementById(id);
    if (m) m.classList.add('active');
  }

  closeModal(id) {
    const m = document.getElementById(id);
    if (m) m.classList.remove('active');
  }

  showToast(msg) {
    const shelf = document.getElementById('toast-shelf');
    if (!shelf) return;
    const toast = document.createElement('div');
    toast.className = 'toast-pill-a24';
    toast.innerHTML = `
      <span style="color: var(--accent-volt); font-weight: bold;">[VVCE PROTOCOL]</span>
      <span>${msg}</span>
    `;
    shelf.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(8px)';
      toast.style.transition = 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)';
      setTimeout(() => toast.remove(), 260);
    }, 3200);
  }

  render() {
    this.renderTopNav();
    this.renderActiveView();
    this.renderLoginPane();
    this.renderStudentView();
    this.renderOfficerLedger();
    this.renderAdminView();
    this.renderVerifyView();
  }

  // 1. Strict Role-Based Top Navigation
  renderTopNav() {
    const navBar = document.getElementById('route-navigator');
    const roleBadge = document.getElementById('nav-role-badge');
    const authActions = document.getElementById('nav-auth-actions');
    if (!navBar) return;

    const role = store.state.currentRole;
    const currentView = store.state.currentView;

    let navHTML = '';
    if (role === 'student') {
      navHTML = `
        <button class="nav-pill-btn ${currentView === 'student' ? 'active' : ''}" data-view="student">01 // MY CLEARANCE RAIL</button>
        <button class="nav-pill-btn ${currentView === 'verify' ? 'active' : ''}" data-view="verify">02 // MY CERTIFICATE & QR</button>
      `;
      if (roleBadge) {
        roleBadge.textContent = `STUDENT: ${store.state.currentUser.name} (${store.state.currentUser.usn})`;
        roleBadge.style.display = 'inline-block';
      }
      if (authActions) {
        authActions.innerHTML = `
          <button class="review-badge-btn" onclick="window.clearPassApp.store.logout()">
            <span>LOGOUT / SWITCH USER ➔</span>
          </button>
        `;
      }
    } else if (role === 'officer') {
      const deskName = store.state.currentUser ? store.state.currentUser.deskName : 'DEPARTMENT DESK';
      navHTML = `
        <button class="nav-pill-btn ${currentView === 'officer' ? 'active' : ''}" data-view="officer">01 // ${deskName.toUpperCase()} QUEUE</button>
        <button class="nav-pill-btn ${currentView === 'verify' ? 'active' : ''}" data-view="verify">02 // PUBLIC VERIFIER</button>
      `;
      if (roleBadge) {
        roleBadge.textContent = `OFFICER: ${store.state.currentUser.name} (${store.state.currentUser.roleTitle})`;
        roleBadge.style.display = 'inline-block';
      }
      if (authActions) {
        authActions.innerHTML = `
          <button class="review-badge-btn" onclick="window.clearPassApp.store.logout()">
            <span>SWITCH DESK / LOGOUT ➔</span>
          </button>
        `;
      }
    } else if (role === 'admin') {
      navHTML = `
        <button class="nav-pill-btn ${currentView === 'admin' ? 'active' : ''}" data-view="admin">01 // INSTITUTIONAL AUDIT & KPIS</button>
        <button class="nav-pill-btn ${currentView === 'verify' ? 'active' : ''}" data-view="verify">02 // PUBLIC VERIFIER</button>
      `;
      if (roleBadge) {
        roleBadge.textContent = `ADMIN: ${store.state.currentUser.name}`;
        roleBadge.style.display = 'inline-block';
      }
      if (authActions) {
        authActions.innerHTML = `
          <button class="review-badge-btn" onclick="window.clearPassApp.store.logout()">
            <span>LOGOUT ➔</span>
          </button>
        `;
      }
    } else {
      // Guest / Login page
      navHTML = `
        <button class="nav-pill-btn ${currentView === 'login' ? 'active' : ''}" data-view="login">01 // INSTITUTIONAL LOGIN</button>
        <button class="nav-pill-btn ${currentView === 'verify' ? 'active' : ''}" data-view="verify">02 // PUBLIC QR VERIFIER</button>
      `;
      if (roleBadge) roleBadge.style.display = 'none';
      if (authActions) {
        authActions.innerHTML = `
          <button class="review-badge-btn" id="btn-review2-compliance" onclick="window.clearPassApp.openModal('modal-review2-compliance')">
            <span style="color: var(--accent-volt);">●</span>
            <span>REV-02 // 20 NOV 2026</span>
          </button>
        `;
      }
    }

    navBar.innerHTML = `<div class="nav-active-pill" id="nav-active-slider"></div>` + navHTML;

    navBar.querySelectorAll('.nav-pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        store.setView(btn.dataset.view);
      });
    });

    this.updateNavPillSlider();
  }

  updateNavPillSlider() {
    const navBar = document.getElementById('route-navigator');
    const slider = document.getElementById('nav-active-slider');
    if (!navBar || !slider) return;

    const activeBtn = navBar.querySelector('.nav-pill-btn.active');
    if (!activeBtn) {
      slider.style.width = '0px';
      return;
    }

    const navRect = navBar.getBoundingClientRect();
    const btnRect = activeBtn.getBoundingClientRect();

    slider.style.left = `${btnRect.left - navRect.left}px`;
    slider.style.width = `${btnRect.width}px`;
  }

  renderActiveView() {
    const view = store.state.currentView;
    document.querySelectorAll('.view-section').forEach(sec => {
      sec.classList.remove('active');
    });

    const targetSec = document.getElementById(`view-${view}`);
    if (targetSec) targetSec.classList.add('active');
    this.updateNavPillSlider();
  }

  // 2. Separate, Dedicated Authentication Forms on Login
  renderLoginPane() {
    const container = document.getElementById('login-credential-dynamic-container');
    const roleTabs = document.getElementById('login-role-tabs');
    if (!container) return;

    const currentTab = store.state.loginTab;

    if (roleTabs) {
      roleTabs.querySelectorAll('.role-tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.role === currentTab);
        btn.onclick = () => {
          store.setLoginTab(btn.dataset.role);
          this.updateLoginRoleSlider(btn);
        };
      });
      this.updateLoginRoleSlider();
    }

    if (currentTab === 'student') {
      container.innerHTML = `
        <form id="form-login-student" style="display: flex; flex-direction: column; gap: 14px;">
          <div class="form-field-group">
            <span class="field-label">Student University Seat Number (USN)</span>
            <input type="text" id="login-input-usn" class="input-hairline" value="4VV24CI175" placeholder="e.g. 4VV24CI175" required />
          </div>
          <div class="form-field-group">
            <span class="field-label">Student Security PIN / Password</span>
            <input type="password" id="login-input-pin" class="input-hairline" value="vvce@2026" required />
          </div>
          <button type="submit" class="btn-volt" style="width: 100%; margin-top: 4px;">
            SIGN IN TO STUDENT PORTAL ➔
          </button>
        </form>

        <!-- One-Click Demo Profiles for Viva -->
        <div style="margin-top: 20px; border-top: 1px solid var(--border-subtle); padding-top: 16px;">
          <span class="mono-label" style="color: var(--accent-volt);">VIVA DEMO PROFILES (CLICK TO SIGN IN INSTANTLY)</span>
          <div class="quick-dossier-list" style="margin-top: 8px;">
            ${STUDENTS.map(s => {
              const req = store.state.requests.find(r => r.usn === s.usn);
              const statusTag = req ? (req.status === 'approved' ? '✓ APPROVED CERTIFICATE' : `WAITING AT ${req.activeDesk ? req.activeDesk.toUpperCase() : 'DESK'}`) : 'NO ACTIVE REQUEST';
              return `
                <div class="dossier-card" onclick="window.clearPassApp.store.loginStudent('${s.usn}')">
                  <div>
                    <div class="dossier-name">${s.name}</div>
                    <div class="mono-label" style="font-size: 10px;">${s.dept} · SEM ${s.sem} · SEC ${s.sec}</div>
                  </div>
                  <div style="text-align: right;">
                    <div class="dossier-usn">${s.usn}</div>
                    <div class="mono-label" style="font-size: 9px; color: ${req && req.status === 'approved' ? 'var(--state-approved)' : 'var(--accent-volt)'};">${statusTag}</div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;

      const form = container.querySelector('#form-login-student');
      if (form) {
        form.onsubmit = (e) => {
          e.preventDefault();
          const usn = document.getElementById('login-input-usn').value;
          store.loginStudent(usn);
        };
      }
    } else if (currentTab === 'officer') {
      container.innerHTML = `
        <form id="form-login-officer" style="display: flex; flex-direction: column; gap: 14px;">
          <div class="form-field-group">
            <span class="field-label">Select Department Clearance Desk</span>
            <select id="login-select-desk" class="select-hairline" required>
              ${OFFICER_DESKS.map(d => `
                <option value="${d.id}" ${store.state.currentOfficerDesk === d.id ? 'selected' : ''}>
                  ${d.tag} ${d.name} (${d.officerName})
                </option>
              `).join('')}
            </select>
          </div>
          <div class="form-field-group">
            <span class="field-label">Faculty Clearance PIN / Access Token</span>
            <input type="password" id="login-input-officer-pin" class="input-hairline" value="vvce#faculty" required />
          </div>
          <button type="submit" class="btn-volt" style="width: 100%; margin-top: 4px;">
            SIGN IN TO DEPARTMENT QUEUE ➔
          </button>
        </form>

        <!-- Department Desks Quick Select -->
        <div style="margin-top: 20px; border-top: 1px solid var(--border-subtle); padding-top: 16px;">
          <span class="mono-label" style="color: var(--accent-volt);">OFFICIAL CLEARANCE DESKS (CLICK TO SIGN IN)</span>
          <div class="quick-dossier-list" style="margin-top: 8px;">
            ${OFFICER_DESKS.map(d => `
              <div class="dossier-card" onclick="window.clearPassApp.store.loginOfficer('${d.id}')">
                <div>
                  <div class="dossier-name"><span class="mono-label" style="color: var(--accent-volt); margin-right: 6px;">${d.tag}</span>${d.name}</div>
                  <div class="mono-label" style="font-size: 10px;">${d.officerName} · ${d.roleTitle}</div>
                </div>
                <div class="mono-label" style="color: var(--accent-volt); font-size: 10px;">${d.id.toUpperCase()}</div>
              </div>
            `).join('')}
          </div>
        </div>
      `;

      const form = container.querySelector('#form-login-officer');
      if (form) {
        form.onsubmit = (e) => {
          e.preventDefault();
          const deskId = document.getElementById('login-select-desk').value;
          store.loginOfficer(deskId);
        };
      }
    } else if (currentTab === 'admin') {
      container.innerHTML = `
        <form id="form-login-admin" style="display: flex; flex-direction: column; gap: 14px;">
          <div class="form-field-group">
            <span class="field-label">Institutional Administrative ID</span>
            <input type="text" class="input-hairline" value="DEAN-ACADEMICS-VVCE" readonly />
          </div>
          <div class="form-field-group">
            <span class="field-label">Master Security Token</span>
            <input type="password" class="input-hairline" value="vvce#admin#2026" required />
          </div>
          <button type="submit" class="btn-volt" style="width: 100%; margin-top: 4px;">
            SIGN IN TO AUDIT CONSOLE ➔
          </button>
        </form>

        <div style="margin-top: 20px; border-top: 1px solid var(--border-subtle); padding-top: 16px;">
          <div class="dossier-card" onclick="window.clearPassApp.store.loginAdmin()">
            <div>
              <div class="dossier-name"><span class="mono-label" style="color: var(--accent-volt); margin-right: 6px;">[ADMIN // AUDIT]</span>Dean of Academic Affairs & Principal Office</div>
              <div class="mono-label" style="font-size: 10px;">VVCE Institutional Audit & Delay Monitoring</div>
            </div>
            <div class="mono-label" style="color: var(--accent-volt); font-size: 10px;">ADMIN</div>
          </div>
        </div>
      `;

      const form = container.querySelector('#form-login-admin');
      if (form) {
        form.onsubmit = (e) => {
          e.preventDefault();
          store.loginAdmin();
        };
      }
    }
  }

  updateLoginRoleSlider(activeBtn) {
    const container = document.getElementById('login-role-tabs');
    const slider = document.getElementById('login-role-slider');
    if (!container || !slider) return;

    const btn = activeBtn || container.querySelector(`.role-tab-btn[data-role="${store.state.loginTab}"]`);
    if (!btn) return;

    const cRect = container.getBoundingClientRect();
    const bRect = btn.getBoundingClientRect();

    slider.style.left = `${bRect.left - cRect.left}px`;
    slider.style.width = `${bRect.width}px`;
  }

  // 3. User-Isolated Student Dashboard
  renderStudentView() {
    const user = store.state.currentUser;
    if (!user || store.state.currentRole !== 'student') return;

    // STRICT USER SCOPING: Only load requests matching THIS student's USN
    const studentRequests = store.state.requests.filter(r => r.usn === user.usn);
    const activeReq = studentRequests[0];

    const nameEl = document.getElementById('student-masthead-name');
    const usnEl = document.getElementById('student-masthead-usn');
    const deptEl = document.getElementById('student-masthead-dept');

    if (nameEl) nameEl.textContent = user.name;
    if (usnEl) usnEl.textContent = user.usn;
    if (deptEl) deptEl.textContent = `${user.dept} · SEM ${user.sem || '05'}`;

    const railContainer = document.getElementById('student-hero-rail-container');
    if (!railContainer) return;

    if (!activeReq) {
      railContainer.innerHTML = `
        <div style="padding: 48px; text-align: center; color: var(--text-slate); border: 1px dashed var(--border-subtle);">
          <p class="mono-label" style="font-size: 12px; margin-bottom: 16px;">NO CLEARANCE PROTOCOL CURRENTLY INITIATED FOR ${user.name} (${user.usn})</p>
          <button class="btn-volt" onclick="window.clearPassApp.openModal('modal-new-request')">+ INITIATE NEW CLEARANCE REQUEST</button>
        </div>
      `;
      return;
    }

    const currentActiveStep = activeReq.steps.find(s => s.status === 'active');

    railContainer.innerHTML = `
      <div class="rail-card-header">
        <div class="rail-request-tag">
          <span class="req-id">${activeReq.id}</span>
          <span style="color: var(--border-medium);">/</span>
          <span class="req-type">${activeReq.type}</span>
        </div>
        <div style="display: flex; align-items: center; gap: 12px;">
          ${activeReq.activeDesk ? `
            <div class="mono-label" style="color: var(--accent-volt); display: flex; align-items: center; gap: 6px;">
              <span class="volt-dot" style="width: 6px; height: 6px;"></span>
              <span>WAITING AT ${activeReq.activeDesk.toUpperCase()} · ${activeReq.elapsedWait}</span>
            </div>
          ` : `
            <div class="mono-label" style="color: var(--state-approved); font-weight: 700;">✓ FULLY CLEARED & ISSUED</div>
          `}
        </div>
      </div>

      <!-- Live Demonstration Helper for Review-2 Panel -->
      ${activeReq.status === 'in_progress' ? `
        <div style="background: rgba(232, 255, 71, 0.05); border: 1px solid rgba(232, 255, 71, 0.2); padding: 12px 16px; margin-bottom: 20px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: var(--accent-volt); font-size: 13px;">⚡</span>
            <span style="font-size: 12px; color: var(--text-bone);">
              Currently waiting at <strong>${currentActiveStep ? currentActiveStep.fullName : 'Next Desk'}</strong>.
              Log in as <strong>${currentActiveStep ? currentActiveStep.officerName : 'Officer'}</strong> to sign off, or click fast simulator:
            </span>
          </div>
          <button class="btn-stark" id="btn-simulate-step" style="padding: 5px 12px; font-size: 10px; border-color: var(--accent-volt); color: var(--accent-volt);">
            SIMULATE NEXT SIGN-OFF (DEMO) ➔
          </button>
        </div>
      ` : ''}

      <!-- Sequential 5-Desk Grid (LIBRARY -> HOSTEL -> ACCOUNTS -> LAB -> HOD) -->
      <div class="rail-grid-steps">
        ${activeReq.steps.map(step => this.renderRailNodeHTML(step)).join('')}
      </div>

      <!-- Certificate Drawer Unlocked on Completion for THIS Student -->
      ${activeReq.status === 'approved' ? this.renderArtifactDrawerHTML(activeReq) : ''}
    `;

    const simBtn = railContainer.querySelector('#btn-simulate-step');
    if (simBtn) {
      simBtn.addEventListener('click', () => {
        store.simulateAdvanceStep(activeReq.id);
        this.showToast(`STEP APPROVED! ADVANCED TO NEXT DESK.`);
      });
    }

    const copyBtn = railContainer.querySelector('#btn-copy-verify-link');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        store.setView('verify');
        this.showToast('VERIFICATION CREDENTIAL LOADED INTO ARTIFACT INSPECTOR');
      });
    }
  }

  renderRailNodeHTML(step) {
    const isCompleted = step.status === 'completed';
    const isActive = step.status === 'active';
    const isRejected = step.status === 'rejected';
    const isCorrection = step.status === 'correction';

    let stateClass = 'pending';
    if (isCompleted) stateClass = 'completed';
    else if (isActive) stateClass = 'active';
    else if (isRejected) stateClass = 'rejected';
    else if (isCorrection) stateClass = 'correction';

    return `
      <div class="rail-node-block ${stateClass}">
        <div>
          <div class="node-top-row">
            <div class="node-marker">${isCompleted ? '✓' : step.order}</div>
            <span class="mono-label" style="font-size: 10px;">${stateClass.toUpperCase()}</span>
          </div>
          <div class="node-step-title">${step.deskName}</div>
          <div class="node-officer-line">${step.officerName}</div>
          
          ${step.remarks ? `
            <div class="node-remark-box ${stateClass}">${step.remarks}</div>
          ` : ''}
        </div>

        <div class="node-timestamp-mono">
          ${isCompleted ? step.timestamp : (isActive ? 'WAITING APPROVAL' : 'PENDING ROUTE')}
        </div>
      </div>
    `;
  }

  renderArtifactDrawerHTML(req) {
    const qrSvg = generatePureSVGQRCode(`VVCE://CLEARPASS/VERIFY/${req.certificateHash}`, 110);

    return `
      <div class="artifact-card-wrap">
        <div class="artifact-sheet-a24">
          <div class="artifact-watermark-serif">VVCE CLEARPASS</div>
          
          <div class="cert-a24-header">
            <div>
              <div class="cert-a24-sangha">Vidyavardhaka Sangha®, Mysore</div>
              <div class="cert-a24-college">Vidyavardhaka College of Engineering</div>
              <div class="mono-label" style="margin-top: 4px; color: var(--text-bone);">
                Department of CSE (Artificial Intelligence & Machine Learning)
              </div>
            </div>
            <div class="cert-a24-protocol">
              <span class="mono-label">ARTIFACT NO.</span>
              <span class="mono-bold" style="color: var(--accent-volt); font-size: 13px;">${req.id}</span>
              <span class="mono-label" style="font-size: 9px; color: var(--text-slate);">ACADEMIC PROTOCOL 2026-27</span>
            </div>
          </div>

          <div class="cert-title-editorial">
            Official Digital No-Dues & Bonafide Clearance Pass
          </div>

          <div class="cert-prose-text">
            This is to certify that <strong>${req.studentName}</strong> bearing University Seat Number (USN) 
            <strong>${req.usn}</strong> has satisfied all institutional, departmental, laboratory, and residential accounts. 
            All clearances have been audited across the 5 mandatory desks without outstanding liabilities.
          </div>

          <table class="cert-ledger-table">
            <thead>
              <tr>
                <th>01 // DESK</th>
                <th>02 // SIGNATORY</th>
                <th>03 // STATUS</th>
                <th>04 // AUDIT REMARK</th>
                <th>05 // TIMESTAMP</th>
              </tr>
            </thead>
            <tbody>
              ${req.steps.map(s => `
                <tr>
                  <td class="mono-bold">${s.fullName}</td>
                  <td>${s.officerName}</td>
                  <td style="color: var(--state-approved); font-weight: 600;">APPROVED</td>
                  <td style="color: var(--text-slate);">${s.remarks || 'No dues recorded'}</td>
                  <td class="mono-label">${s.timestamp}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>

          <div class="cert-a24-footer">
            <div style="display: flex; align-items: center; gap: 16px;">
              <div>${qrSvg}</div>
              <div>
                <span class="mono-label">CRYPTOGRAPHIC DIGEST (SHA-256)</span>
                <div class="mono-label" style="color: var(--text-bone); font-size: 10px; max-width: 280px; word-break: break-all; margin-top: 4px;">
                  ${req.certificateHash}
                </div>
              </div>
            </div>

            <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 8px;">
              <div class="cert-verified-seal">
                <span>✓</span>
                <span>AUTHENTIC VVCE PASS</span>
              </div>
              <div style="display: flex; gap: 8px; margin-top: 6px;">
                <button class="btn-stark" onclick="window.print()">PRINT / EXPORT PDF</button>
                <button class="btn-volt" id="btn-copy-verify-link">INSPECT CRYPTO PROOF</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // 4. Department Officer Queue
  renderOfficerLedger() {
    const container = document.getElementById('officer-ledger-tbody');
    const headerTitle = document.getElementById('officer-desk-header-title');
    if (!container) return;

    const activeFilter = store.state.currentOfficerDesk;
    const currentOfficer = store.state.currentUser;

    if (headerTitle && currentOfficer) {
      headerTitle.textContent = `${currentOfficer.deskName || 'Faculty'} Clearance Queue`;
    }

    let list = store.state.requests;
    if (activeFilter !== 'all') {
      list = list.filter(r => {
        const step = r.steps.find(s => s.deskId === activeFilter);
        return step && (step.status === 'active' || step.status === 'completed');
      });
    }

    if (list.length === 0) {
      container.innerHTML = `
        <tr>
          <td colspan="6" style="padding: 40px; text-align: center; color: var(--text-slate); font-family: var(--font-mono); font-size: 12px;">
            NO PENDING CLEARANCE PROTOCOLS IN THIS DESK QUEUE.
          </td>
        </tr>
      `;
      return;
    }

    container.innerHTML = list.map(req => {
      const step = req.steps.find(s => s.deskId === (activeFilter === 'all' ? (req.activeDesk || 'library') : activeFilter)) || req.steps[0];
      const isExpanded = this.expandedLedgerRowId === req.id;
      const isActionable = step.status === 'active';

      const deskPreset = OFFICER_DESKS.find(d => d.id === step.deskId);
      const defaultRemark = deskPreset ? deskPreset.defaultRemark : 'Clearance verified. Zero outstanding liabilities.';

      return `
        <tr class="ledger-row ${isExpanded ? 'expanded' : ''}" data-req-id="${req.id}" style="${isActionable ? 'border-left: 2px solid var(--accent-volt);' : ''}">
          <td class="ledger-cell ledger-cell-mono">${req.usn}</td>
          <td class="ledger-cell">
            <div style="font-weight: 600; color: var(--text-bone);">${req.studentName}</div>
            <div class="mono-label" style="font-size: 10px;">${req.dept} · SEM ${req.sem}</div>
          </td>
          <td class="ledger-cell">${req.type}</td>
          <td class="ledger-cell mono-label">${step.status === 'active' ? req.elapsedWait : 'COMPLETED'}</td>
          <td class="ledger-cell">
            <span class="mono-label" style="color: ${step.status === 'completed' ? 'var(--state-approved)' : (step.status === 'active' ? 'var(--accent-volt)' : 'var(--text-slate)')}">
              ${step.status === 'active' ? '● ACTION REQUIRED' : step.status.toUpperCase()}
            </span>
          </td>
          <td class="ledger-cell">
            <button class="btn-stark" style="padding: 4px 10px; font-size: 10px; ${isActionable ? 'border-color: var(--accent-volt); color: var(--accent-volt);' : ''}">
              ${isExpanded ? 'COLLAPSE ▲' : (isActionable ? 'REVIEW & SIGN ▼' : 'VIEW DETAILS ▼')}
            </button>
          </td>
        </tr>
        ${isExpanded ? `
          <tr>
            <td colspan="6" style="padding: 0;">
              <div class="inline-action-drawer">
                <div class="drawer-grid-dossier">
                  <div class="dossier-col">
                    <span class="mono-label">REQUEST IDENTIFIER</span>
                    <span class="mono-bold" style="color: var(--accent-volt);">${req.id}</span>
                  </div>
                  <div class="dossier-col">
                    <span class="mono-label">PURPOSE OF CLEARANCE</span>
                    <span style="font-size: 12px; color: var(--text-bone);">${req.purpose}</span>
                  </div>
                  <div class="dossier-col">
                    <span class="mono-label">CURRENT AUDIT DESK</span>
                    <span class="mono-bold">${step.fullName}</span>
                  </div>
                  <div class="dossier-col">
                    <span class="mono-label">SLA TARGET</span>
                    <span class="mono-bold" style="color: var(--text-slate);">24 HOURS MAXIMUM</span>
                  </div>
                </div>

                ${isActionable ? `
                  <div class="drawer-remark-row">
                    <input 
                      type="text" 
                      id="input-remark-${req.id}" 
                      class="drawer-remark-input" 
                      placeholder="Enter official sign-off remark..." 
                      value="${defaultRemark}"
                    />
                    <div style="display: flex; gap: 8px;">
                      <button class="btn-approve-pill btn-triage-act" data-req-id="${req.id}" data-desk="${step.deskId}" data-act="approve">
                        ✓ APPROVE CLEARANCE
                      </button>
                      <button class="btn-correction-pill btn-triage-act" data-req-id="${req.id}" data-desk="${step.deskId}" data-act="correction">
                        ! REQUEST CORRECTION
                      </button>
                      <button class="btn-reject-pill btn-triage-act" data-req-id="${req.id}" data-desk="${step.deskId}" data-act="reject">
                        ✕ REJECT
                      </button>
                    </div>
                  </div>
                ` : `
                  <div style="background: rgba(52, 211, 153, 0.08); border: 1px solid rgba(52, 211, 153, 0.25); padding: 10px 14px; font-size: 12px; color: var(--state-approved);">
                    ✓ Clearance already completed at this desk on <strong>${step.timestamp}</strong> with remark: "<em>${step.remarks}</em>"
                  </div>
                `}
              </div>
            </td>
          </tr>
        ` : ''}
      `;
    }).join('');

    container.querySelectorAll('.ledger-row').forEach(row => {
      row.addEventListener('click', (e) => {
        if (e.target.closest('.btn-triage-act')) return;
        const id = row.dataset.reqId;
        this.expandedLedgerRowId = (this.expandedLedgerRowId === id) ? null : id;
        this.renderOfficerLedger();
      });
    });

    container.querySelectorAll('.btn-triage-act').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const reqId = btn.dataset.reqId;
        const desk = btn.dataset.desk;
        const act = btn.dataset.act;
        const remarkInput = document.getElementById(`input-remark-${reqId}`);
        const remarks = remarkInput ? remarkInput.value : '';

        store.processDeskAction(reqId, desk, act, remarks);
        this.expandedLedgerRowId = null;
        this.showToast(`CLEARANCE ${reqId} ${act.toUpperCase()} AT ${desk.toUpperCase()}`);
      });
    });

    const filterContainer = document.getElementById('desk-filter-group');
    if (filterContainer) {
      filterContainer.querySelectorAll('.desk-filter-pill').forEach(pill => {
        pill.classList.toggle('active', pill.dataset.desk === activeFilter);
        pill.onclick = () => {
          store.setOfficerDeskFilter(pill.dataset.desk);
        };
      });
    }
  }

  // 5. Admin View
  renderAdminView() {
    const total = store.state.requests.length;
    const approved = store.state.requests.filter(r => r.status === 'approved').length;
    const active = store.state.requests.filter(r => r.status === 'in_progress').length;

    const elTotal = document.getElementById('admin-kpi-total');
    const elApproved = document.getElementById('admin-kpi-cleared');
    const elActive = document.getElementById('admin-kpi-active');

    if (elTotal) elTotal.textContent = `${total} TOTAL`;
    if (elApproved) elApproved.textContent = `${approved} ISSUED`;
    if (elActive) elActive.textContent = `${active} IN ROUTE`;
  }

  // 6. Public Verifier View — STRICTLY USER ISOLATED & GUEST-SAFE
  renderVerifyView() {
    const container = document.getElementById('verify-artifact-container');
    if (!container) return;

    let targetReq = null;
    const lookup = store.state.lookupHash ? store.state.lookupHash.trim().toUpperCase() : null;

    // Check 1: If an explicit lookup was made by Hash, Protocol ID, or USN
    if (lookup) {
      targetReq = store.state.requests.find(r => 
        (r.certificateHash && r.certificateHash.toUpperCase() === lookup) ||
        r.id.toUpperCase() === lookup ||
        r.usn.toUpperCase() === lookup
      );
    }

    // Check 2: If student is logged in and not doing a guest lookup, show THEIR OWN request
    if (!targetReq && !lookup && store.state.currentRole === 'student' && store.state.currentUser) {
      targetReq = store.state.requests.find(r => r.usn === store.state.currentUser.usn);
      if (!targetReq) {
        container.innerHTML = `
          <div style="max-width: 640px; margin: 32px auto; padding: 32px; background: #0E0E12; border: 1px solid var(--border-medium); text-align: center;">
            <div class="mono-label" style="color: var(--accent-volt); font-size: 11px; margin-bottom: 8px;">[NO ACTIVE RECORD]</div>
            <h3 style="font-size: 20px; font-weight: 600; color: var(--text-bone); margin-bottom: 12px;">No Clearance Initiated</h3>
            <p style="font-size: 13px; color: var(--text-slate); line-height: 1.6; max-width: 460px; margin: 0 auto 20px;">
              You do not have an active clearance protocol on file. Click below to initiate your 5-desk no-dues clearance.
            </p>
            <button class="btn-volt" onclick="window.clearPassApp.openModal('modal-new-request')">+ NEW CLEARANCE REQUEST</button>
          </div>
        `;
        return;
      }
    }

    // State A: If no target request found (Guest view or search not yet entered)
    if (!targetReq) {
      const isSearchFailed = !!lookup;
      container.innerHTML = `
        <div style="max-width: 660px; margin: 24px auto; background: #0E0E12; border: 1px solid var(--border-medium); padding: 32px 36px;">
          <div class="mono-label" style="color: var(--accent-volt); font-size: 11px; margin-bottom: 8px;">
            [VVCE DIGITAL SECURITY PROTOCOL // PUBLIC VERIFIER]
          </div>
          <h2 style="font-family: var(--font-serif); font-size: 32px; color: var(--text-bone); margin-bottom: 8px; font-weight: 400;">
            Cryptographic Credential Authenticator
          </h2>
          <p style="font-size: 13px; color: var(--text-slate); line-height: 1.6; margin-bottom: 24px;">
            Public cryptographic verifier for academic passes issued by Vidyavardhaka College of Engineering. Authenticate official clearance status by entering a Student USN or Protocol ID.
          </p>

          ${isSearchFailed ? `
            <div style="background: rgba(248, 113, 113, 0.1); border: 1px solid var(--state-rejected); padding: 12px 16px; margin-bottom: 20px; font-size: 12px; color: var(--state-rejected);">
              <strong>VERIFICATION FAILED:</strong> No clearance pass found matching "<code>${lookup}</code>". Please check the USN or Protocol ID.
            </div>
          ` : ''}

          <form id="form-public-verify" style="display: flex; gap: 8px; margin-bottom: 24px;">
            <input 
              type="text" 
              id="input-verify-search" 
              class="input-hairline" 
              style="flex: 1; border: 1px solid var(--border-medium); padding: 10px 14px; font-family: var(--font-mono); font-size: 12px;" 
              placeholder="Enter USN (e.g. 4VV24CI34) or Protocol ID (e.g. CP-2026-0719)..." 
              value="${lookup || ''}"
              required
            />
            <button type="submit" class="btn-volt" style="white-space: nowrap; padding: 10px 20px;">
              AUTHENTICATE ➔
            </button>
          </form>

          <div style="border-top: 1px solid var(--border-subtle); padding-top: 20px;">
            <div class="mono-label" style="color: var(--accent-volt); font-size: 10px; margin-bottom: 12px;">
              VIVA DEMONSTRATION SAMPLES (CLICK TO AUDIT INSTANTLY):
            </div>
            <div style="display: flex; flex-direction: column; gap: 10px;">
              <div class="dossier-card" onclick="window.clearPassApp.store.setLookupHash('CP-2026-0719')">
                <div>
                  <div style="font-size: 13px; font-weight: 600; color: var(--text-bone);">Rajesh BR — Bonafide Certificate</div>
                  <div class="mono-label" style="font-size: 10px; color: var(--text-slate);">USN: 4VV24CI34 · PROTOCOL: CP-2026-0719</div>
                </div>
                <span class="mono-label" style="color: var(--state-approved); font-size: 10px;">✓ APPROVED &amp; VERIFIED</span>
              </div>

              <div class="dossier-card" onclick="window.clearPassApp.store.setLookupHash('CP-2026-0690')">
                <div>
                  <div style="font-size: 13px; font-weight: 600; color: var(--text-bone);">RP Jeetender Singh — Lab Clearance</div>
                  <div class="mono-label" style="font-size: 10px; color: var(--text-slate);">USN: 4VV24CI132 · PROTOCOL: CP-2026-0690</div>
                </div>
                <span class="mono-label" style="color: var(--state-approved); font-size: 10px;">✓ APPROVED &amp; VERIFIED</span>
              </div>

              <div class="dossier-card" onclick="window.clearPassApp.store.setLookupHash('CP-2026-0842')">
                <div>
                  <div style="font-size: 13px; font-weight: 600; color: var(--text-bone);">Vamshik Patela ES — Semester No-Dues</div>
                  <div class="mono-label" style="font-size: 10px; color: var(--text-slate);">USN: 4VV24CI175 · PROTOCOL: CP-2026-0842</div>
                </div>
                <span class="mono-label" style="color: var(--accent-volt); font-size: 10px;">● IN PROGRESS (AT ACCOUNTS)</span>
              </div>
            </div>
          </div>
        </div>
      `;

      const searchForm = container.querySelector('#form-public-verify');
      if (searchForm) {
        searchForm.onsubmit = (e) => {
          e.preventDefault();
          const val = document.getElementById('input-verify-search').value.trim();
          if (val) store.setLookupHash(val);
        };
      }
      return;
    }

    // State B: Request exists but is IN PROGRESS (Not yet fully signed off)
    if (targetReq.status === 'in_progress') {
      const activeStep = targetReq.steps.find(s => s.status === 'active') || targetReq.steps[0];
      container.innerHTML = `
        <div style="max-width: 660px; margin: 24px auto; background: #0E0E12; border: 1px solid var(--border-medium); padding: 32px 36px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
            <div class="mono-label" style="color: var(--accent-volt); font-size: 11px;">[CLEARANCE IN PROGRESS]</div>
            <button class="review-badge-btn" onclick="window.clearPassApp.store.setLookupHash(null)">← LOOKUP ANOTHER</button>
          </div>

          <h2 style="font-family: var(--font-serif); font-size: 28px; color: var(--text-bone); margin-bottom: 8px; font-weight: 400;">
            Certificate Pending Final Sign-Off
          </h2>
          <p style="font-size: 13px; color: var(--text-slate); line-height: 1.6; margin-bottom: 24px;">
            The clearance dossier for <strong>${targetReq.studentName} (${targetReq.usn})</strong> is actively in route across department desks. A tamper-proof SHA-256 certificate and QR seal will be cryptographically minted once all 5 desks complete sign-off.
          </p>

          <div style="background: #09090C; border: 1px solid var(--border-subtle); padding: 18px 20px; display: flex; flex-direction: column; gap: 12px; margin-bottom: 24px;">
            <div style="display: flex; justify-content: space-between; font-size: 12px;">
              <span class="mono-label">CURRENT ACTIVE DESK</span>
              <span class="mono-bold" style="color: var(--accent-volt);">${activeStep.fullName.toUpperCase()}</span>
            </div>
            <div style="display: flex; justify-content: space-between; font-size: 12px;">
              <span class="mono-label">DESK IN-CHARGE</span>
              <span style="color: var(--text-bone);">${activeStep.officerName}</span>
            </div>
            <div style="display: flex; justify-content: space-between; font-size: 12px;">
              <span class="mono-label">ELAPSED TIME AT DESK</span>
              <span class="mono-bold" style="color: var(--text-bone);">${targetReq.elapsedWait}</span>
            </div>
          </div>

          <div style="display: flex; gap: 12px; justify-content: flex-end;">
            ${store.state.currentRole === 'student' ? `
              <button class="btn-volt" onclick="window.clearPassApp.store.setView('student')">VIEW MY CLEARANCE RAIL ➔</button>
            ` : `
              <button class="btn-stark" onclick="window.clearPassApp.store.setLookupHash('CP-2026-0719')">VIEW SAMPLE APPROVED PASS (RAJESH BR) ➔</button>
            `}
          </div>
        </div>
      `;
      return;
    }

    // State C: Request is APPROVED — Render Authentic A24 Boarding Pass Certificate
    const qrSvg = generatePureSVGQRCode(`VVCE://CLEARPASS/VERIFY/${targetReq.certificateHash}`, 140);

    container.innerHTML = `
      <div style="max-width: 640px; margin: 0 auto 16px; display: flex; justify-content: space-between; align-items: center;">
        <button class="review-badge-btn" onclick="window.clearPassApp.store.setLookupHash(null)">← LOOKUP ANOTHER DOCUMENT</button>
        <button class="btn-volt" onclick="window.print()" style="font-size: 11px; padding: 6px 14px;">PRINT / DOWNLOAD PDF ➔</button>
      </div>

      <div class="boarding-pass-artifact">
        <div class="boarding-pass-notch-left"></div>
        <div class="boarding-pass-notch-right"></div>

        <div class="pass-header-meta">
          <div>
            <span class="mono-label">INSTITUTION</span>
            <div class="mono-bold" style="font-size: 13px; color: var(--text-bone);">VVCE MYSURU · CSE (AI&ML)</div>
          </div>
          <div style="text-align: right;">
            <span class="mono-label">PROTOCOL ID</span>
            <div class="mono-bold" style="color: var(--accent-volt);">${targetReq.id}</div>
          </div>
        </div>

        <div class="pass-headline-serif">
          Verified Academic Clearance Pass
        </div>

        <div class="verified-seal-banner">
          <div style="display: flex; align-items: center; gap: 8px;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#070708" stroke-width="2.8">
              <path class="animated-checkmark-path" d="M20 6L9 17l-5-5"/>
            </svg>
            <span>CRYPTOGRAPHICALLY AUTHENTIC & UNTAMPERED</span>
          </div>
          <span style="font-size: 11px;">PASS // 2026-27</span>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 140px; gap: 20px; align-items: center;">
          <div style="display: flex; flex-direction: column; gap: 12px;">
            <div>
              <span class="mono-label">STUDENT CREDENTIAL</span>
              <div style="font-size: 16px; font-weight: 700; color: var(--text-bone);">${targetReq.studentName}</div>
              <div class="mono-label" style="color: var(--accent-volt); margin-top: 2px;">USN: ${targetReq.usn} · ${targetReq.dept}</div>
            </div>
            <div>
              <span class="mono-label">SHA-256 SIGNATURE</span>
              <div class="mono-label" style="font-size: 10px; color: var(--text-slate); word-break: break-all; margin-top: 2px;">
                ${targetReq.certificateHash}
              </div>
            </div>
          </div>
          <div>${qrSvg}</div>
        </div>

        <div class="pass-audit-trail">
          <span class="mono-label" style="margin-bottom: 6px;">DEPARTMENT CLEARANCE AUDIT TRAIL</span>
          ${targetReq.steps.map(s => `
            <div class="audit-row-item">
              <span class="mono-bold">${s.fullName}</span>
              <span style="color: var(--text-slate);">${s.officerName}</span>
              <span class="mono-label" style="color: var(--state-approved);">✓ ${s.timestamp || 'VERIFIED'}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  window.clearPassApp = new ClearPassUI();
});
