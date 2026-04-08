@echo off
chcp 65001 >nul
echo === 初始化 iOS 项目目录 ===
echo.

REM 创建 iOS 专用目录
if exist ios_build (
    echo 删除旧的 ios_build 目录...
    rmdir /s /q ios_build
)

mkdir ios_build
echo 创建 ios_build 目录完成
echo.

REM 复制源码到 iOS 目录（不修改原 apk_build）
echo 复制源码文件...
xcopy /E /I /Y apk_build\www ios_build\www
copy /Y apk_build\capacitor.config.json ios_build\
copy /Y apk_build\package.json ios_build\
copy /Y apk_build\package-lock.json ios_build\

echo.
echo === iOS 项目目录准备完成 ===
echo 目录: D:\WorkBuddy\WheelPulseCalc_MiniApp\ios_build
echo.
echo 注意：iOS 相关的修改请只在 ios_build 目录下进行
echo 原 apk_build 目录保持 Android 专用，不受影响
echo.
pause