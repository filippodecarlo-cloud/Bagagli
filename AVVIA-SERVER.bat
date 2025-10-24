@echo off
echo ========================================
echo  Avvio server locale per PWA Bagagli
echo ========================================
echo.
echo Il server sta partendo...
echo Apri il browser e vai su: http://localhost:8000
echo.
echo Per fermare il server premi CTRL+C
echo ========================================
echo.

REM Prova con Python 3
python -m http.server 8000 2>nul

REM Se Python 3 non funziona, prova Python 2
if errorlevel 1 (
    python -m SimpleHTTPServer 8000
)

pause
