@echo off
title Portfolio - Ana Sofia Sanchez Rojas
echo.
echo  Starting portfolio server...
echo  The site will open automatically in your browser.
echo.

powershell -ExecutionPolicy Bypass -File "%~dp0server.ps1" -Port 3000

pause
