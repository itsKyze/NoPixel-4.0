@echo off
title NoPixel 4.0 Server
cd /d "%~dp0..\"
"%~dp0..\FXServer.exe" +set citizen_dir "%~dp0..\citizen" +set txAdminPort 40120 +set txDataPath "%~dp0..\..\txData" "%~dp0server.cfg"
pause
