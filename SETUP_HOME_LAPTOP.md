# ClearPass — Home Laptop Setup & Continuation Guide
**Author:** Vamshik Patela ES (`iamvamshik7@gmail.com`)  
**Repository:** `https://github.com/VamshikPatel/clearpass.git`  
**Live Production URL:** `https://clearpass-phi.vercel.app`  

---

## 1. Quick Start on Your Home Laptop (5 Minutes)

### Step 1: Open Terminal (PowerShell / Command Prompt / Terminal)
Clone your repository into your projects directory:
```bash
git clone https://github.com/VamshikPatel/clearpass.git
cd clearpass
```

### Step 2: Open in Antigravity or VS Code
- **If using Antigravity on your home laptop:**
  - Launch Antigravity.
  - Sign in using your Google account: `iamvamshik7@gmail.com`.
  - Open the cloned folder (`File > Open Folder... > clearpass`).
- **If using VS Code:**
  ```bash
  code .
  ```

### Step 3: Run the App Locally
Choose any of these options:
- **Option A (Zero-install, Fastest):**
  Simply double-click `index.html` in your file explorer, or open it directly in Chrome / Edge / Brave.
- **Option B (Python Local Server):**
  ```bash
  python server.py
  ```
  Then open: `http://127.0.0.1:5000`
- **Option C (Windows Batch Script):**
  Double-click `run_clearpass.bat` inside the folder.
- **Option D (Node / Express Backend):**
  ```bash
  npm install
  npm run dev
  ```
  Runs at: `http://localhost:5000`

---

## 2. Continuing with Antigravity at Home

When you open this folder in Antigravity on your home laptop, simply paste this prompt in chat:

> *"Hi Antigravity! I'm continuing work on my VVCE mini-project **ClearPass** from my college machine. Please read `REVIEW_2_GUIDE.md` and `SETUP_HOME_LAPTOP.md` to see where we left off and what our next review targets are."*

Antigravity will instantly inspect the repo, see all completed modules, understand the state machine, and be ready to help you with Review-3, MongoDB Atlas cloud connection, or any further features!

---

## 3. How to Save & Deploy from Home

Whenever you make any changes on your home laptop:
```bash
git add .
git commit -m "Your descriptive commit message"
git push origin main
```
**Vercel automatically redeploys** your live site at `https://clearpass-phi.vercel.app` within ~15 seconds of every push.

---

## 4. Test Credentials Cheat Sheet

### Student Credentials:
- **Vamshik Patela ES:** `4VV24CI175` | PIN: `vvce@2026` *(Active at Accounts Desk · 2H 14M)*
- **Rajesh BR:** `4VV24CI34` | PIN: `vvce@2026` *(Approved Bonafide Certificate)*
- **RP Jeetender Singh:** `4VV24CI132` | PIN: `vvce@2026` *(Approved Lab Clearance)*

### Department Desks (Officer Portal):
- **Central Library:** `library` (Dr H Nayana, Chief Librarian) | Access Key: `vvce#lib`
- **Campus Hostel:** `hostel` (Girish P, Hostel Warden) | Access Key: `vvce#hostel`
- **Accounts & Fee Section:** `accounts` (Accounts Officer - Desk 3) | Access Key: `vvce#acc`
- **AIML Department Labs:** `lab` (Prof Rashmi K, Lab In-Charge) | Access Key: `vvce#lab`
- **HOD Office (AIML):** `hod` (Dr Aditya CR, Professor & HOD) | Access Key: `vvce#hod`
- *(General Faculty PIN: `vvce#faculty`)*

### Institutional Admin:
- **ID:** `DEAN-ACADEMICS-VVCE` | Security Token: `vvce#admin#2026`
