@echo off
title NoPixel 4.0 Server (txAdmin)
cd /d "%~dp0"
"%~dp0server\FXServer.exe" +set txAdminPort 40120 +set txDataPath "%~dp0txData"
pause
