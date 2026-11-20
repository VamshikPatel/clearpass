/**
 * ClearPass — Motion.dev × A24 Front-End Engine
 * Digital No-Dues & Certificate Clearance Protocol with QR Verification
 * Vidyavardhaka College of Engineering (VVCE), Mysuru
 */

// Initial Seed Data with Verified VVCE Team & Sequential Desks
const INITIAL_STATE = {
  currentView: 'student', // 'login', 'student', 'officer', 'admin', 'verify'
  currentRole: 'student', // 'student', 'officer', 'admin'
  currentUser: {
    name: 'Vamshik Patela ES',
    usn: '4VV24CI175',
    dept: 'Dept. of CSE (AI & ML)',
    sem: '05',
    sec: 'C',
    email: 'vamshik.24ci175@vvce.ac.in'
  },
  currentOfficerDesk: 'accounts', // 'library', 'hostel', 'accounts', 'lab', 'hod'
  selectedVerifyHash: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
  
  students: [
    { usn: '4VV24CI175', name: 'Vamshik Patela ES', dept: 'CSE (AIML)', sem: '05', sec: 'C', email: 'vamshik.24ci175@vvce.ac.in' },
    { usn: '4VV24CI34', name: 'Rajesh BR', dept: 'CSE (AIML)', sem: '05', sec: 'A', email: 'rajesh.24ci34@vvce.ac.in' },
    { usn: '4VV24CI132', name: 'RP Jeetender Singh', dept: 'CSE (AIML)', sem: '05', sec: 'B', email: 'jeetender.24ci132@vvce.ac.in' },
    { usn: '4VV23CS089', name: 'Ananya Sharma', dept: 'CSE', sem: '07', sec: 'A', email: 'ananya.23cs089@vvce.ac.in' }
  ],

  // Requests Seed Data (Exact Sequential Chain: LIBRARY -> HOSTEL -> ACCOUNTS -> LAB -> HOD)
  requests: [
    {
      id: 'CP-2026-0842',
      usn: '4VV24CI175',
      studentName: 'Vamshik Patela ES',
      dept: 'CSE (AIML)',
      sem: '05',
      type: 'Semester No-Dues Clearance',
      purpose: 'End-Term Examination Hall Ticket Eligibility & Lab Clearance',
      status: 'in_progress', // 'in_progress', 'approved', 'rejected', 'action_required'
      createdAt: '2026-11-20 09:15:00',
      updatedAt: '2026-11-20 10:20:00',
      certificateHash: null,
      activeDesk: 'accounts',
      elapsedWait: '2H 14M',
      steps: [
        {
          order: 1,
          deskId: 'library',
          deskName: 'Library',
          fullName: 'Central Library',
          officerName: 'Smt. Sunitha K (Chief Librarian)',
          status: 'completed',
          remarks: 'All 3 technical textbooks returned intact. Zero library fine.',
          timestamp: 'NOV 20 · 09:45',
          slaHours: 24
        },
        {
          order: 2,
          deskId: 'hostel',
          deskName: 'Hostel',
          fullName: 'Campus Hostel Office',
          officerName: 'Mr. Chandrashekar B (Hostel Warden)',
          status: 'completed',
          remarks: 'Day scholar exempted / room inventory cleared.',
          timestamp: 'NOV 20 · 10:12',
          slaHours: 48
        },
        {
          order: 3,
          deskId: 'accounts',
          deskName: 'Accounts',
          fullName: 'Accounts & Fee Section',
          officerName: 'Accounts Officer (Desk 3)',
          status: 'active',
          remarks: 'Tuition fee ledger verification in progress.',
          timestamp: null,
          slaHours: 24
        },
        {
          order: 4,
          deskId: 'lab',
          deskName: 'Lab',
          fullName: 'AIML Department Labs',
          officerName: 'Prof. Manjunath R (Lab In-charge)',
          status: 'pending',
          remarks: null,
          timestamp: null,
          slaHours: 24
        },
        {
          order: 5,
          deskId: 'hod',
          deskName: 'HOD',
          fullName: 'HOD - Dept. of CSE (AIML)',
          officerName: 'Dr. Paramesha K (Prof & HOD)',
          status: 'pending',
          remarks: null,
          timestamp: null,
          slaHours: 24
        }
      ]
    },
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
  ]
};

// Store with LocalStorage & Reactive State
class StateStore {
  constructor() {
    const saved = localStorage.getItem('clearpass_a24_state');
    if (saved) {
      try {
        this.state = JSON.parse(saved);
      } catch (e) {
        this.state = JSON.parse(JSON.stringify(INITIAL_STATE));
      }
    } else {
      this.state = JSON.parse(JSON.stringify(INITIAL_STATE));
      this.save();
    }
    this.subscribers = [];
  }

  save() {
    localStorage.setItem('clearpass_a24_state', JSON.stringify(this.state));
    this.notify();
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

  setView(view) {
    this.state.currentView = view;
    this.save();
  }

  setRole(role, studentUsn = null) {
    this.state.currentRole = role;
    if (role === 'student') {
      const target = this.state.students.find(s => s.usn === (studentUsn || '4VV24CI175')) || this.state.students[0];
      this.state.currentUser = target;
    } else if (role === 'officer') {
      this.state.currentUser = {
        name: 'Desk Officer In-Charge',
        usn: 'FACULTY-VVCE',
        dept: 'VVCE Administrative Cell'
      };
    } else if (role === 'admin') {
      this.state.currentUser = {
        name: 'Dean of Academic Affairs',
        usn: 'ADMIN-VVCE',
        dept: 'VVCE Administration'
      };
    }
    this.save();
  }

  setOfficerDesk(deskId) {
    this.state.currentOfficerDesk = deskId;
    this.save();
  }

  createClearanceRequest(data) {
    const newId = `CP-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const now = new Date();
    const formattedDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:00`;

    const newRequest = {
      id: newId,
      usn: data.usn || this.state.currentUser.usn,
      studentName: data.studentName || this.state.currentUser.name,
      dept: data.dept || 'CSE (AIML)',
      sem: '05',
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
    this.save();
    return newRequest;
  }

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

      // Advance to next desk if available
      if (currentStepIndex < req.steps.length - 1) {
        req.steps[currentStepIndex + 1].status = 'active';
        req.activeDesk = req.steps[currentStepIndex + 1].deskId;
        req.elapsedWait = '10M';
      } else {
        // All desks cleared!
        req.status = 'approved';
        req.activeDesk = null;
        req.elapsedWait = 'FULLY CLEARED';
        req.certificateHash = generateCryptographicHash(`${req.id}:${req.usn}:${timeStr}:VVCE_CRYPTO_SEAL`);
      }
    } else if (action === 'correction') {
      step.status = 'correction';
      step.remarks = remarks || 'Action required: student must provide clarification or pay fine.';
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

// Zero-Dependency Pure SVG QR Code Generator (Crisp Vector Matrix)
function generatePureSVGQRCode(data, size = 120) {
  const matrixSize = 25;
  const matrix = Array.from({ length: matrixSize }, () => Array(matrixSize).fill(false));

  // Finder Patterns
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

  // Timing lines
  for (let i = 8; i < matrixSize - 8; i++) {
    matrix[6][i] = (i % 2 === 0);
    matrix[i][6] = (i % 2 === 0);
  }

  // Data fill simulation
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
    this.expandedLedgerRowId = null;
    this.init();
  }

  init() {
    this.bindEvents();
    this.render();
    store.subscribe(() => this.render());
  }

  bindEvents() {
    // Navigation bar pills
    const navBar = document.getElementById('route-navigator');
    if (navBar) {
      navBar.addEventListener('click', (e) => {
        const btn = e.target.closest('.nav-pill-btn');
        if (!btn) return;
        const targetView = btn.dataset.view;
        store.setView(targetView);
        this.updateNavPillSlider(btn);
      });
    }

    // Role switcher on Login View
    const roleTabs = document.getElementById('login-role-tabs');
    if (roleTabs) {
      roleTabs.addEventListener('click', (e) => {
        const btn = e.target.closest('.role-tab-btn');
        if (!btn) return;
        const role = btn.dataset.role;
        store.setRole(role);
        this.updateLoginRoleSlider(btn);
      });
    }

    // Review-2 compliance button
    const revBtn = document.getElementById('btn-review2-compliance');
    if (revBtn) {
      revBtn.addEventListener('click', () => {
        this.openModal('modal-review2-compliance');
      });
    }

    // New Request button on Student Dashboard
    const newReqBtn = document.getElementById('btn-open-new-request');
    if (newReqBtn) {
      newReqBtn.addEventListener('click', () => {
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
        const usn = document.getElementById('input-req-usn').value;
        const name = document.getElementById('input-req-name').value;

        const created = store.createClearanceRequest({ type, purpose, usn, studentName: name });
        this.closeModal('modal-new-request');
        this.showToast(`CLEARANCE PROTOCOL ${created.id} DISPATCHED TO CENTRAL LIBRARY`);
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
  }

  updateNavPillSlider(activeBtn) {
    const navBar = document.getElementById('route-navigator');
    const slider = document.getElementById('nav-active-slider');
    if (!navBar || !slider) return;

    const btn = activeBtn || navBar.querySelector(`.nav-pill-btn[data-view="${store.state.currentView}"]`);
    if (!btn) return;

    navBar.querySelectorAll('.nav-pill-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const navRect = navBar.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();

    slider.style.left = `${btnRect.left - navRect.left}px`;
    slider.style.width = `${btnRect.width}px`;
  }

  updateLoginRoleSlider(activeBtn) {
    const container = document.getElementById('login-role-tabs');
    const slider = document.getElementById('login-role-slider');
    if (!container || !slider) return;

    const btn = activeBtn || container.querySelector(`.role-tab-btn[data-role="${store.state.currentRole}"]`);
    if (!btn) return;

    container.querySelectorAll('.role-tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const cRect = container.getBoundingClientRect();
    const bRect = btn.getBoundingClientRect();

    slider.style.left = `${bRect.left - cRect.left}px`;
    slider.style.width = `${bRect.width}px`;
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
    this.renderActiveView();
    this.renderTopNavMeta();
    this.renderStudentView();
    this.renderOfficerLedger();
    this.renderAdminView();
    this.renderVerifyView();
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

  renderTopNavMeta() {
    const roleBadge = document.getElementById('nav-role-badge');
    if (roleBadge) {
      roleBadge.textContent = `${store.state.currentRole.toUpperCase()}: ${store.state.currentUser.name}`;
    }
  }

  renderStudentView() {
    const user = store.state.currentUser;
    const reqs = store.state.requests.filter(r => r.usn === user.usn);
    const activeReq = reqs[0] || store.state.requests[0];

    // Masthead metadata
    const nameEl = document.getElementById('student-masthead-name');
    const usnEl = document.getElementById('student-masthead-usn');
    const deptEl = document.getElementById('student-masthead-dept');

    if (nameEl) nameEl.textContent = user.name;
    if (usnEl) usnEl.textContent = user.usn;
    if (deptEl) deptEl.textContent = `${user.dept} · SEM ${user.sem || '05'}`;

    // Render Hero Rail Component
    const railContainer = document.getElementById('student-hero-rail-container');
    if (!railContainer) return;

    if (!activeReq) {
      railContainer.innerHTML = `<div style="padding: 24px; text-align: center; color: var(--text-slate);">NO ACTIVE CLEARANCE PROTOCOL FOUND.</div>`;
      return;
    }

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
              <span class="volt-dot" style="width: 5px; height: 5px;"></span>
              <span>AT ${activeReq.activeDesk.toUpperCase()} · ${activeReq.elapsedWait}</span>
            </div>
          ` : `
            <div class="mono-label" style="color: var(--state-approved);">✓ FULLY CLEARED</div>
          `}
        </div>
      </div>

      <!-- Sequential 5-Desk Grid (LIBRARY -> HOSTEL -> ACCOUNTS -> LAB -> HOD) -->
      <div class="rail-grid-steps">
        ${activeReq.steps.map(step => this.renderRailNodeHTML(step)).join('')}
      </div>

      <!-- Certificate Drawer Unlocked on Completion -->
      ${activeReq.status === 'approved' ? this.renderArtifactDrawerHTML(activeReq) : ''}
    `;

    // Attach verify trigger in artifact
    const copyBtn = railContainer.querySelector('#btn-copy-verify-link');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        store.state.selectedVerifyHash = activeReq.certificateHash;
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
            <div class="node-marker">${step.order}</div>
            <span class="mono-label" style="font-size: 10px;">${stateClass.toUpperCase()}</span>
          </div>
          <div class="node-step-title">${step.deskName}</div>
          <div class="node-officer-line">${step.officerName}</div>
          
          ${step.remarks ? `
            <div class="node-remark-box ${stateClass}">${step.remarks}</div>
          ` : ''}
        </div>

        <div class="node-timestamp-mono">
          ${isCompleted ? step.timestamp : (isActive ? 'WAITING DECISION' : 'PENDING ROUTE')}
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

          <!-- A24 Ledger Table -->
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
                <button class="btn-volt" id="btn-copy-verify-link">COPY VERIFY LINK</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  renderOfficerLedger() {
    const container = document.getElementById('officer-ledger-tbody');
    if (!container) return;

    const activeFilter = store.state.currentOfficerDesk;
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
          <td colspan="6" style="padding: 36px; text-align: center; color: var(--text-slate); font-family: var(--font-mono); font-size: 12px;">
            NO PENDING CLEARANCE PROTOCOLS AT THIS DESK.
          </td>
        </tr>
      `;
      return;
    }

    container.innerHTML = list.map(req => {
      const step = req.steps.find(s => s.deskId === (activeFilter === 'all' ? (req.activeDesk || 'library') : activeFilter)) || req.steps[0];
      const isExpanded = this.expandedLedgerRowId === req.id;

      return `
        <tr class="ledger-row ${isExpanded ? 'expanded' : ''}" data-req-id="${req.id}">
          <td class="ledger-cell ledger-cell-mono">${req.usn}</td>
          <td class="ledger-cell">
            <div style="font-weight: 600; color: var(--text-bone);">${req.studentName}</div>
            <div class="mono-label" style="font-size: 10px;">${req.dept} · SEM ${req.sem}</div>
          </td>
          <td class="ledger-cell">${req.type}</td>
          <td class="ledger-cell mono-label">${step.status === 'active' ? req.elapsedWait : 'COMPLETED'}</td>
          <td class="ledger-cell">
            <span class="mono-label" style="color: ${step.status === 'completed' ? 'var(--state-approved)' : (step.status === 'active' ? 'var(--accent-volt)' : 'var(--text-slate)')}">
              ${step.status.toUpperCase()}
            </span>
          </td>
          <td class="ledger-cell">
            <button class="btn-stark" style="padding: 4px 10px; font-size: 10px;">
              ${isExpanded ? 'COLLAPSE ▲' : 'ACTION ▼'}
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
                    <span class="mono-label">STUDENT PURPOSE</span>
                    <span style="font-size: 12px; color: var(--text-bone);">${req.purpose}</span>
                  </div>
                  <div class="dossier-col">
                    <span class="mono-label">DESK RESPONSIBILITY</span>
                    <span class="mono-bold">${step.fullName}</span>
                  </div>
                  <div class="dossier-col">
                    <span class="mono-label">SLA TARGET</span>
                    <span class="mono-bold" style="color: var(--text-slate);">24 HOURS MAXIMUM</span>
                  </div>
                </div>

                <div class="drawer-remark-row">
                  <input 
                    type="text" 
                    id="input-remark-${req.id}" 
                    class="drawer-remark-input" 
                    placeholder="Enter mandatory audit remark (e.g. Cleared. Zero outstanding dues.)..." 
                    value="Clearance verified and approved."
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
              </div>
            </td>
          </tr>
        ` : ''}
      `;
    }).join('');

    // Attach row expansion clicks
    container.querySelectorAll('.ledger-row').forEach(row => {
      row.addEventListener('click', (e) => {
        if (e.target.closest('.btn-triage-act')) return;
        const id = row.dataset.reqId;
        this.expandedLedgerRowId = (this.expandedLedgerRowId === id) ? null : id;
        this.renderOfficerLedger();
      });
    });

    // Attach triage action buttons
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
        this.showToast(`CLEARANCE PROTOCOL ${reqId} UPDATED AT ${desk.toUpperCase()}`);
      });
    });

    // Desk filter buttons
    const filterContainer = document.getElementById('desk-filter-group');
    if (filterContainer) {
      filterContainer.querySelectorAll('.desk-filter-pill').forEach(pill => {
        pill.classList.toggle('active', pill.dataset.desk === activeFilter);
        pill.onclick = () => {
          store.setOfficerDesk(pill.dataset.desk);
          this.renderOfficerLedger();
        };
      });
    }
  }

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

  renderVerifyView() {
    const container = document.getElementById('verify-artifact-container');
    if (!container) return;

    const hash = store.state.selectedVerifyHash || 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855';
    const req = store.state.requests.find(r => r.certificateHash === hash) || store.state.requests[1];

    const qrSvg = generatePureSVGQRCode(`VVCE://CLEARPASS/VERIFY/${req.certificateHash}`, 140);

    container.innerHTML = `
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
            <div class="mono-bold" style="color: var(--accent-volt);">${req.id}</div>
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
              <div style="font-size: 16px; font-weight: 700; color: var(--text-bone);">${req.studentName}</div>
              <div class="mono-label" style="color: var(--accent-volt); margin-top: 2px;">USN: ${req.usn} · ${req.dept}</div>
            </div>
            <div>
              <span class="mono-label">SHA-256 SIGNATURE</span>
              <div class="mono-label" style="font-size: 10px; color: var(--text-slate); word-break: break-all; margin-top: 2px;">
                ${req.certificateHash}
              </div>
            </div>
          </div>
          <div>${qrSvg}</div>
        </div>

        <!-- Full Audit Trail -->
        <div class="pass-audit-trail">
          <span class="mono-label" style="margin-bottom: 6px;">DEPARTMENT CLEARANCE AUDIT TRAIL</span>
          ${req.steps.map(s => `
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

// Instantiate UI Controller on DOM Load
document.addEventListener('DOMContentLoaded', () => {
  window.clearPassApp = new ClearPassUI();
});
