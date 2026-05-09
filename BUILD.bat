@echo off
REM SURI Web - Production build + start (port 3200)
REM ASCII only

cd /d "%~dp0"

if not exist "node_modules" (
    echo [SURI] Installing dependencies...
    call npm install
)

echo [SURI] Building production bundle...
call npm run build
if errorlevel 1 (
    echo [SURI] Build failed
    pause
    exit /b 1
)

echo [SURI] Starting production server on port 3200...
call npm run start
