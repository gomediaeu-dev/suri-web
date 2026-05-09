@echo off
REM SURI Web - Dev launcher (port 3200)
REM ASCII only - no special chars

cd /d "%~dp0"

if not exist "node_modules" (
    echo [SURI] Installing dependencies...
    call npm install
    if errorlevel 1 (
        echo [SURI] npm install failed
        pause
        exit /b 1
    )
)

if not exist ".env.local" (
    if exist ".env.example" (
        echo [SURI] Creating .env.local from .env.example
        copy ".env.example" ".env.local" > nul
        echo.
        echo [SURI] Edit .env.local and add your ANTHROPIC_API_KEY
        echo.
    )
)

echo [SURI] Starting dev server on port 3200...
echo [SURI] Open http://localhost:3200
echo.
call npm run dev
