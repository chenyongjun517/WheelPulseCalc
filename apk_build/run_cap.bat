@echo off
setlocal enabledelayedexpansion
set JAVA_HOME=D:\jdk17\jdk-17.0.2
set ANDROID_HOME=D:\Program Files\AndroidStudio
set ANDROID_SDK_ROOT=D:\Program Files\AndroidStudio
set PATH=%JAVA_HOME%\bin;%ANDROID_HOME%\platform-tools;%ANDROID_HOME%\build-tools\36.1.0;%PATH%
cd /d D:\WorkBuddy\WheelPulseCalc_MiniApp\apk_build

echo === Running: npx cap add android ===
call npx cap add android
if errorlevel 1 (
    echo [ERROR] cap add android failed with error level !errorlevel!
) else (
    echo [SUCCESS] cap add android completed
)

echo.
echo === Checking android directory ===
dir android

pause