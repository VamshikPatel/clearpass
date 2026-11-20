@echo off
title ClearPass - VVCE Mini Project
echo ===================================================================
echo   ClearPass: Digital No-Dues & Certificate Clearance System
echo   Vidyavardhaka College of Engineering (VVCE), Mysuru
echo   Department of CSE (Artificial Intelligence & Machine Learning)
echo ===================================================================
echo.
echo Starting ClearPass Local Engine...
echo.

where python >nul 2>nul
if %errorlevel% equ 0 (
    echo Python detected. Starting backend server on port 5000...
    start http://localhost:5000
    python server.py
) else (
    echo Python not found in PATH. Opening standalone client directly in default browser...
    start index.html
)
pause
