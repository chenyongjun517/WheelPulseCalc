const { execSync } = require('child_process');
const fs = require('fs');

// 设置环境变量
process.env.JAVA_HOME = 'D:\\jdk17\\jdk-17.0.2';
process.env.ANDROID_HOME = 'D:\\Program Files\\AndroidStudio';
process.env.ANDROID_SDK_ROOT = 'D:\\Program Files\\AndroidStudio';

const logFile = 'D:\\WorkBuddy\\WheelPulseCalc_MiniApp\\apk_build\\cap_init.log';
let log = '';

log += 'JAVA_HOME: ' + process.env.JAVA_HOME + '\n';
log += 'ANDROID_HOME: ' + process.env.ANDROID_HOME + '\n';
log += 'Current directory: ' + process.cwd() + '\n\n';

try {
  log += '=== Running: npx cap add android ===\n\n';
  const output = execSync('npx cap add android', {
    encoding: 'utf-8',
    cwd: 'D:\\WorkBuddy\\WheelPulseCalc_MiniApp\\apk_build',
    env: process.env
  });
  log += output;
  log += '\n[SUCCESS]\n';
} catch (error) {
  log += 'Error: ' + error.message + '\n';
  if (error.stdout) log += 'Stdout: ' + error.stdout.toString() + '\n';
  if (error.stderr) log += 'Stderr: ' + error.stderr.toString() + '\n';
}

fs.writeFileSync(logFile, log, 'utf-8');
console.log('Log written to: ' + logFile);