@echo off
set JAVA_HOME=D:\jdk17\jdk-17.0.2
set ANDROID_HOME=D:\Program Files\AndroidStudio
set ANDROID_SDK_ROOT=D:\Program Files\AndroidStudio
cd /d D:\WorkBuddy\WheelPulseCalc_MiniApp\apk_build
call npx cap add android
pause