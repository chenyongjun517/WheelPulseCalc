// 拨码表数据 - V3.0版本 (64个拨码，6位二进制)
const dipTableV30 = [
  {value: 1, binary: '000000'},
  {value: 1.03125, binary: '000001'},
  {value: 1.0625, binary: '000010'},
  {value: 1.1, binary: '000011'},
  {value: 1.125, binary: '000100'},
  {value: 1.16, binary: '000101'},
  {value: 1.2, binary: '000110'},
  {value: 1.22, binary: '000111'},
  {value: 1.24, binary: '001000'},
  {value: 1.26, binary: '001001'},
  {value: 1.28, binary: '001010'},
  {value: 1.3, binary: '001011'},
  {value: 1.32, binary: '001100'},
  {value: 1.36, binary: '001101'},
  {value: 1.4, binary: '001110'},
  {value: 1.42, binary: '001111'},
  {value: 1.46, binary: '010000'},
  {value: 1.5, binary: '010001'},
  {value: 1.52, binary: '010010'},
  {value: 1.56, binary: '010011'},
  {value: 1.58, binary: '010100'},
  {value: 1.6, binary: '010101'},
  {value: 1.62, binary: '010110'},
  {value: 1.66, binary: '010111'},
  {value: 1.68, binary: '011000'},
  {value: 1.7, binary: '011001'},
  {value: 1.72, binary: '011010'},
  {value: 1.76, binary: '011011'},
  {value: 1.78, binary: '011100'},
  {value: 1.8, binary: '011101'},
  {value: 1.82, binary: '011110'},
  {value: 1.86, binary: '011111'},
  {value: 1.88, binary: '100000'},
  {value: 1.92, binary: '100001'},
  {value: 1.96, binary: '100010'},
  {value: 1.98, binary: '100011'},
  {value: 2, binary: '100100'},
  {value: 2.06, binary: '100101'},
  {value: 2.08, binary: '100110'},
  {value: 2.12, binary: '100111'},
  {value: 2.16, binary: '101000'},
  {value: 2.18, binary: '101001'},
  {value: 2.2, binary: '101010'},
  {value: 2.22, binary: '101011'},
  {value: 2.24, binary: '101100'},
  {value: 2.28, binary: '101101'},
  {value: 2.32, binary: '101110'},
  {value: 2.34, binary: '101111'},
  {value: 2.36, binary: '110000'},
  {value: 2.38, binary: '110001'},
  {value: 2.42, binary: '110010'},
  {value: 2.44, binary: '110011'},
  {value: 2.48, binary: '110100'},
  {value: 2.5, binary: '110101'},
  {value: 2.52, binary: '110110'},
  {value: 2.54, binary: '110111'},
  {value: 2.58, binary: '111000'},
  {value: 2.62, binary: '111001'},
  {value: 2.64, binary: '111010'},
  {value: 2.68, binary: '111011'},
  {value: 2.7, binary: '111100'},
  {value: 2.72, binary: '111101'},
  {value: 3, binary: '111110'},
  {value: 3.2, binary: '111111'}
];

// 拨码表数据 - V3.1版本 (221个拨码，8位二进制)
const dipTableV31 = [
  {value: 1, binary: '00000000'},
  {value: 1.01, binary: '00000001'},
  {value: 1.02, binary: '00000010'},
  {value: 1.03, binary: '00000011'},
  {value: 1.04, binary: '00000100'},
  {value: 1.05, binary: '00000101'},
  {value: 1.06, binary: '00000110'},
  {value: 1.07, binary: '00000111'},
  {value: 1.08, binary: '00001000'},
  {value: 1.09, binary: '00001001'},
  {value: 1.1, binary: '00001010'},
  {value: 1.11, binary: '00001011'},
  {value: 1.12, binary: '00001100'},
  {value: 1.13, binary: '00001101'},
  {value: 1.14, binary: '00001110'},
  {value: 1.15, binary: '00001111'},
  {value: 1.16, binary: '00010000'},
  {value: 1.17, binary: '00010001'},
  {value: 1.18, binary: '00010010'},
  {value: 1.19, binary: '00010011'},
  {value: 1.2, binary: '00010100'},
  {value: 1.21, binary: '00010101'},
  {value: 1.22, binary: '00010110'},
  {value: 1.23, binary: '00010111'},
  {value: 1.24, binary: '00011000'},
  {value: 1.25, binary: '00011001'},
  {value: 1.26, binary: '00011010'},
  {value: 1.27, binary: '00011011'},
  {value: 1.28, binary: '00011100'},
  {value: 1.29, binary: '00011101'},
  {value: 1.3, binary: '00011110'},
  {value: 1.31, binary: '00011111'},
  {value: 1.32, binary: '00100000'},
  {value: 1.33, binary: '00100001'},
  {value: 1.34, binary: '00100010'},
  {value: 1.35, binary: '00100011'},
  {value: 1.36, binary: '00100100'},
  {value: 1.37, binary: '00100101'},
  {value: 1.38, binary: '00100110'},
  {value: 1.39, binary: '00100111'},
  {value: 1.4, binary: '00101000'},
  {value: 1.41, binary: '00101001'},
  {value: 1.42, binary: '00101010'},
  {value: 1.43, binary: '00101011'},
  {value: 1.44, binary: '00101100'},
  {value: 1.45, binary: '00101101'},
  {value: 1.46, binary: '00101110'},
  {value: 1.47, binary: '00101111'},
  {value: 1.48, binary: '00110000'},
  {value: 1.49, binary: '00110001'},
  {value: 1.5, binary: '00110010'},
  {value: 1.51, binary: '00110011'},
  {value: 1.52, binary: '00110100'},
  {value: 1.53, binary: '00110101'},
  {value: 1.54, binary: '00110110'},
  {value: 1.55, binary: '00110111'},
  {value: 1.56, binary: '00111000'},
  {value: 1.57, binary: '00111001'},
  {value: 1.58, binary: '00111010'},
  {value: 1.59, binary: '00111011'},
  {value: 1.6, binary: '00111100'},
  {value: 1.61, binary: '00111101'},
  {value: 1.62, binary: '00111110'},
  {value: 1.63, binary: '00111111'},
  {value: 1.64, binary: '01000000'},
  {value: 1.65, binary: '01000001'},
  {value: 1.66, binary: '01000010'},
  {value: 1.67, binary: '01000011'},
  {value: 1.68, binary: '01000100'},
  {value: 1.69, binary: '01000101'},
  {value: 1.7, binary: '01000110'},
  {value: 1.71, binary: '01000111'},
  {value: 1.72, binary: '01001000'},
  {value: 1.73, binary: '01001001'},
  {value: 1.74, binary: '01001010'},
  {value: 1.75, binary: '01001011'},
  {value: 1.76, binary: '01001100'},
  {value: 1.77, binary: '01001101'},
  {value: 1.78, binary: '01001110'},
  {value: 1.79, binary: '01001111'},
  {value: 1.8, binary: '01010000'},
  {value: 1.81, binary: '01010001'},
  {value: 1.82, binary: '01010010'},
  {value: 1.83, binary: '01010011'},
  {value: 1.84, binary: '01010100'},
  {value: 1.85, binary: '01010101'},
  {value: 1.86, binary: '01010110'},
  {value: 1.87, binary: '01010111'},
  {value: 1.88, binary: '01011000'},
  {value: 1.89, binary: '01011001'},
  {value: 1.9, binary: '01011010'},
  {value: 1.91, binary: '01011011'},
  {value: 1.92, binary: '01011100'},
  {value: 1.93, binary: '01011101'},
  {value: 1.94, binary: '01011110'},
  {value: 1.95, binary: '01011111'},
  {value: 1.96, binary: '01100000'},
  {value: 1.97, binary: '01100001'},
  {value: 1.98, binary: '01100010'},
  {value: 1.99, binary: '01100011'},
  {value: 2, binary: '01100100'},
  {value: 2.01, binary: '01100101'},
  {value: 2.02, binary: '01100110'},
  {value: 2.03, binary: '01100111'},
  {value: 2.04, binary: '01101000'},
  {value: 2.05, binary: '01101001'},
  {value: 2.06, binary: '01101010'},
  {value: 2.07, binary: '01101011'},
  {value: 2.08, binary: '01101100'},
  {value: 2.09, binary: '01101101'},
  {value: 2.1, binary: '01101110'},
  {value: 2.11, binary: '01101111'},
  {value: 2.12, binary: '01110000'},
  {value: 2.13, binary: '01110001'},
  {value: 2.14, binary: '01110010'},
  {value: 2.15, binary: '01110011'},
  {value: 2.16, binary: '01110100'},
  {value: 2.17, binary: '01110101'},
  {value: 2.18, binary: '01110110'},
  {value: 2.19, binary: '01110111'},
  {value: 2.2, binary: '01111000'},
  {value: 2.21, binary: '01111001'},
  {value: 2.22, binary: '01111010'},
  {value: 2.23, binary: '01111011'},
  {value: 2.24, binary: '01111100'},
  {value: 2.25, binary: '01111101'},
  {value: 2.26, binary: '01111110'},
  {value: 2.27, binary: '01111111'},
  {value: 2.28, binary: '10000000'},
  {value: 2.29, binary: '10000001'},
  {value: 2.3, binary: '10000010'},
  {value: 2.31, binary: '10000011'},
  {value: 2.32, binary: '10000100'},
  {value: 2.33, binary: '10000101'},
  {value: 2.34, binary: '10000110'},
  {value: 2.35, binary: '10000111'},
  {value: 2.36, binary: '10001000'},
  {value: 2.37, binary: '10001001'},
  {value: 2.38, binary: '10001010'},
  {value: 2.39, binary: '10001011'},
  {value: 2.4, binary: '10001100'},
  {value: 2.41, binary: '10001101'},
  {value: 2.42, binary: '10001110'},
  {value: 2.43, binary: '10001111'},
  {value: 2.44, binary: '10010000'},
  {value: 2.45, binary: '10010001'},
  {value: 2.46, binary: '10010010'},
  {value: 2.47, binary: '10010011'},
  {value: 2.48, binary: '10010100'},
  {value: 2.49, binary: '10010101'},
  {value: 2.5, binary: '10010110'},
  {value: 2.51, binary: '10010111'},
  {value: 2.52, binary: '10011000'},
  {value: 2.53, binary: '10011001'},
  {value: 2.54, binary: '10011010'},
  {value: 2.55, binary: '10011011'},
  {value: 2.56, binary: '10011100'},
  {value: 2.57, binary: '10011101'},
  {value: 2.58, binary: '10011110'},
  {value: 2.59, binary: '10011111'},
  {value: 2.6, binary: '10100000'},
  {value: 2.61, binary: '10100001'},
  {value: 2.62, binary: '10100010'},
  {value: 2.63, binary: '10100011'},
  {value: 2.64, binary: '10100100'},
  {value: 2.65, binary: '10100101'},
  {value: 2.66, binary: '10100110'},
  {value: 2.67, binary: '10100111'},
  {value: 2.68, binary: '10101000'},
  {value: 2.69, binary: '10101001'},
  {value: 2.7, binary: '10101010'},
  {value: 2.71, binary: '10101011'},
  {value: 2.72, binary: '10101100'},
  {value: 2.73, binary: '10101101'},
  {value: 2.74, binary: '10101110'},
  {value: 2.75, binary: '10101111'},
  {value: 2.76, binary: '10110000'},
  {value: 2.77, binary: '10110001'},
  {value: 2.78, binary: '10110010'},
  {value: 2.79, binary: '10110011'},
  {value: 2.8, binary: '10110100'},
  {value: 2.81, binary: '10110101'},
  {value: 2.82, binary: '10110110'},
  {value: 2.83, binary: '10110111'},
  {value: 2.84, binary: '10111000'},
  {value: 2.85, binary: '10111001'},
  {value: 2.86, binary: '10111010'},
  {value: 2.87, binary: '10111011'},
  {value: 2.88, binary: '10111100'},
  {value: 2.89, binary: '10111101'},
  {value: 2.9, binary: '10111110'},
  {value: 2.91, binary: '10111111'},
  {value: 2.92, binary: '11000000'},
  {value: 2.93, binary: '11000001'},
  {value: 2.94, binary: '11000010'},
  {value: 2.95, binary: '11000011'},
  {value: 2.96, binary: '11000100'},
  {value: 2.97, binary: '11000101'},
  {value: 2.98, binary: '11000110'},
  {value: 2.99, binary: '11000111'},
  {value: 3, binary: '11001000'},
  {value: 3.01, binary: '11001001'},
  {value: 3.02, binary: '11001010'},
  {value: 3.03, binary: '11001011'},
  {value: 3.04, binary: '11001100'},
  {value: 3.05, binary: '11001101'},
  {value: 3.06, binary: '11001110'},
  {value: 3.07, binary: '11001111'},
  {value: 3.08, binary: '11010000'},
  {value: 3.09, binary: '11010001'},
  {value: 3.1, binary: '11010010'},
  {value: 3.11, binary: '11010011'},
  {value: 3.12, binary: '11010100'},
  {value: 3.13, binary: '11010101'},
  {value: 3.14, binary: '11010110'},
  {value: 3.15, binary: '11010111'},
  {value: 3.16, binary: '11011000'},
  {value: 3.17, binary: '11011001'},
  {value: 3.18, binary: '11011010'},
  {value: 3.19, binary: '11011011'},
  {value: 3.2, binary: '11011100'}
];

// Toast 提示工具函数
function showToast(message, type = 'none') {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.className = 'toast show';
  setTimeout(() => {
    toast.className = 'toast';
  }, 2000);
}

// 验证数字工具函数
function isValidNum(val) {
  if (val === '' || val === null || val === undefined) return false;
  const n = parseFloat(val);
  return !isNaN(n) && isFinite(n) && n > 0;
}

// 显示错误提示
function showError(elementId, message) {
  const el = document.getElementById(elementId);
  if (message) {
    el.textContent = message;
    el.style.display = 'block';
  } else {
    el.style.display = 'none';
  }
}

// ===== N值计算页面 =====
const nValuePage = {
  currentVersion: 'V3.1',
  dipItems: [],

  switchVersion(ver) {
    this.currentVersion = ver;
    document.getElementById('btn-v30').className = ver === 'V3.0' ? 'btn-ver btn-ver-active' : 'btn-ver';
    document.getElementById('btn-v31').className = ver === 'V3.1' ? 'btn-ver btn-ver-active' : 'btn-ver';
    
    const ratio = document.getElementById('dp3031Ratio').value;
    if (ratio) {
      this.buildDipItems(parseFloat(ratio), ver);
    }
    showToast('已切换到' + ver);
  },

  buildDipItems(nValue, version) {
    const table = version === 'V3.0' ? dipTableV30 : dipTableV31;
    let nearestIdx = 0;
    let minDiff = Math.abs(nValue - table[0].value);
    for (let i = 1; i < table.length; i++) {
      const diff = Math.abs(nValue - table[i].value);
      if (diff < minDiff) { minDiff = diff; nearestIdx = i; }
    }
    
    // 边界判断逻辑
    const isNearMin = nearestIdx <= 2;
    const isNearMax = nearestIdx >= table.length - 3;
    let start, end;
    
    if (isNearMin) {
      // 靠近最小值：显示推荐值及后面2个（共3个）
      start = nearestIdx;
      end = Math.min(table.length, nearestIdx + 3);
    } else if (isNearMax) {
      // 靠近最大值：显示推荐值及前面2个（共3个）
      start = Math.max(0, nearestIdx - 2);
      end = nearestIdx + 1;
    } else {
      // 临界（非边界）和正常中间：都显示5个
      start = nearestIdx - 2;
      end = nearestIdx + 3;
    }
    
    const items = [];
    for (let i = start; i < end; i++) {
      items.push({
        value: table[i].value.toFixed(2),
        binary: table[i].binary,
        isNearest: (i === nearestIdx)
      });
    }
    this.dipItems = items;
    this.renderDipTable();
  },

  renderDipTable() {
    document.getElementById('currentVersion').textContent = this.currentVersion;
    document.getElementById('displayRatio').textContent = document.getElementById('dp3031Ratio').value;
    document.getElementById('dipTableWrap').style.display = 'block';
    
    const tbody = document.getElementById('dipTableBody');
    tbody.innerHTML = this.dipItems.map(item => `
      <div class="dip-row ${item.isNearest ? 'dip-row-nearest' : ''}">
        <span class="dip-cell-n">${item.value}</span>
        <span class="dip-cell-b">${item.binary}${item.isNearest ? ' ← 推荐' : ''}</span>
      </div>
    `).join('');
  },

  onCalc() {
    const gykPulse = document.getElementById('gykPulse').value;
    const pulse2159 = document.getElementById('pulse2159').value;
    const gykWheelDiameter = document.getElementById('gykWheelDiameter').value;
    const speedMeterCount = document.getElementById('speedMeterCount').value;
    const gearRatio = document.getElementById('gearRatio').value;
    const dp3031Pulse = document.getElementById('dp3031Pulse').value;
    const positionIndex = parseInt(document.getElementById('positionIndex').value);

    if (!isValidNum(gykPulse)) {
      showError('errorMsg-nValue', '❌ GYK设置脉冲数不能为空且须为正数'); return;
    }
    if (!isValidNum(pulse2159)) {
      showError('errorMsg-nValue', '❌ 2159一圈脉冲数不能为空且须为正数'); return;
    }
    if (!isValidNum(gykWheelDiameter)) {
      showError('errorMsg-nValue', '❌ GYK轮径不能为空且须为正数'); return;
    }
    if (!isValidNum(speedMeterCount)) {
      showError('errorMsg-nValue', '❌ 速度表表头脉冲数不能为空且须为正数'); return;
    }
    if (!isValidNum(gearRatio)) {
      showError('errorMsg-nValue', '❌ 伞齿轮转速比不能为空且须为正数'); return;
    }
    if (!isValidNum(dp3031Pulse)) {
      showError('errorMsg-nValue', '❌ DP3031脉冲数不能为空且须为正数'); return;
    }
    if (positionIndex === 0) {
      showError('errorMsg-nValue', '❌ 请选择DP3031安装位置'); return;
    }

    const a = parseFloat(gykPulse);
    const b = parseFloat(pulse2159);
    const wh = parseFloat(gykWheelDiameter);
    const d = parseFloat(speedMeterCount);
    const e = parseFloat(gearRatio);
    const f = parseFloat(dp3031Pulse);
    const wm = wh / 1000;

    let nValue;
    if (positionIndex === 1) { // 直通
      nValue = (d * e * f * Math.PI * wm) / (1000 * a * b);
    } else { // 侧位
      nValue = (d * f * Math.PI * wm) / (1000 * a * b * e);
    }

    const result = nValue.toFixed(4);
    document.getElementById('dp3031Ratio').value = result;
    showError('errorMsg-nValue', '');
    this.buildDipItems(nValue, this.currentVersion);
    showToast('计算完成');
  },

  onClear() {
    document.getElementById('gykPulse').value = '';
    document.getElementById('pulse2159').value = '';
    document.getElementById('gykWheelDiameter').value = '';
    document.getElementById('speedMeterCount').value = '';
    document.getElementById('gearRatio').value = '';
    document.getElementById('dp3031Pulse').value = '';
    document.getElementById('positionIndex').value = '0';
    document.getElementById('dp3031Ratio').value = '';
    document.getElementById('dipTableWrap').style.display = 'none';
    showError('errorMsg-nValue', '');
    showToast('已清空');
  }
};

// ===== 轮径参数计算页面 =====
const wheelParamPage = {
  onCalc() {
    const gykPulse = document.getElementById('wp-gykPulse').value;
    const pulse2159 = document.getElementById('wp-pulse2159').value;
    const dp3031Ratio = document.getElementById('wp-dp3031Ratio').value;
    const speedMeterCount = document.getElementById('wp-speedMeterCount').value;
    const gearRatio = document.getElementById('wp-gearRatio').value;
    const dp3031Pulse = document.getElementById('wp-dp3031Pulse').value;
    const positionIndex = parseInt(document.getElementById('wp-positionIndex').value);

    if (!isValidNum(gykPulse)) {
      showError('errorMsg-wheelParam', '❌ GYK设置脉冲数不能为空且须为正数'); return;
    }
    if (!isValidNum(pulse2159)) {
      showError('errorMsg-wheelParam', '❌ 2159一圈脉冲数不能为空且须为正数'); return;
    }
    if (!isValidNum(dp3031Ratio)) {
      showError('errorMsg-wheelParam', '❌ DP3031拨码盘比例不能为空且须为正数'); return;
    }
    if (!isValidNum(speedMeterCount)) {
      showError('errorMsg-wheelParam', '❌ 速度表表头数不能为空且须为正数'); return;
    }
    if (!isValidNum(gearRatio)) {
      showError('errorMsg-wheelParam', '❌ 伞齿轮转速比不能为空且须为正数'); return;
    }
    if (!isValidNum(dp3031Pulse)) {
      showError('errorMsg-wheelParam', '❌ DP3031脉冲数不能为空且须为正数'); return;
    }
    if (positionIndex === 0) {
      showError('errorMsg-wheelParam', '❌ 请选择DP3031安装位置'); return;
    }

    const a = parseFloat(gykPulse);
    const b = parseFloat(pulse2159);
    const c = parseFloat(dp3031Ratio);
    const d = parseFloat(speedMeterCount);
    const e = parseFloat(gearRatio);
    const f = parseFloat(dp3031Pulse);

    let wheelDiameter;
    if (positionIndex === 1) { // 直通
      wheelDiameter = (1000 * a * b * c) / (d * e * f * Math.PI);
    } else { // 侧位
      wheelDiameter = (1000 * a * b * c * e) / (d * f * Math.PI);
    }

    const result = (wheelDiameter * 1000).toFixed(1);
    document.getElementById('wp-gykWheelDiameter').value = result;
    showError('errorMsg-wheelParam', '');
    showToast('计算完成');
  },

  onClear() {
    document.getElementById('wp-gykPulse').value = '';
    document.getElementById('wp-pulse2159').value = '';
    document.getElementById('wp-dp3031Ratio').value = '';
    document.getElementById('wp-speedMeterCount').value = '';
    document.getElementById('wp-gearRatio').value = '';
    document.getElementById('wp-dp3031Pulse').value = '';
    document.getElementById('wp-positionIndex').value = '0';
    document.getElementById('wp-gykWheelDiameter').value = '';
    showError('errorMsg-wheelParam', '');
    showToast('已清空');
  }
};

// ===== 轮径脉冲校正页面 =====
const converterPage = {
  calcPulse() {
    const origDiameter = document.getElementById('cv-origDiameter').value;
    const origPulse = document.getElementById('cv-origPulse').value;
    const actualDiameter = document.getElementById('cv-actualDiameter').value;

    if (!isValidNum(origDiameter)) {
      showError('error1', '❌ 请输入有效的原轮径（正数）'); return;
    }
    if (!isValidNum(origPulse)) {
      showError('error1', '❌ 请输入有效的原脉冲数（正数）'); return;
    }
    if (!isValidNum(actualDiameter)) {
      showError('error1', '❌ 请输入有效的实际轮径（正数）'); return;
    }

    const od = parseFloat(origDiameter);
    const op = parseFloat(origPulse);
    const ad = parseFloat(actualDiameter);

    const result = (ad * op / od).toFixed(4);
    document.getElementById('cv-actualPulse').value = result;
    showError('error1', '');
    showToast('计算完成');
  },

  calcDiameter() {
    const actualDist = document.getElementById('cv-actualDist').value;
    const dmiDist = document.getElementById('cv-dmiDist').value;
    const gykDiameter = document.getElementById('cv-gykDiameter').value;

    if (!isValidNum(actualDist)) {
      showError('error2', '❌ 请输入有效的车辆实际走行距离（正数）'); return;
    }
    if (!isValidNum(dmiDist)) {
      showError('error2', '❌ 请输入有效的DMI走行距离（正数）'); return;
    }
    if (!isValidNum(gykDiameter)) {
      showError('error2', '❌ 请输入有效的调整前GYK轮径（正数）'); return;
    }

    const ad = parseFloat(actualDist);
    const dd = parseFloat(dmiDist);
    const gd = parseFloat(gykDiameter);

    const result = (ad * gd / dd).toFixed(1);
    document.getElementById('cv-resultDiameter').value = result;
    showError('error2', '');
    showToast('计算完成');
  },

  clearSection1() {
    document.getElementById('cv-origDiameter').value = '';
    document.getElementById('cv-origPulse').value = '';
    document.getElementById('cv-actualDiameter').value = '';
    document.getElementById('cv-actualPulse').value = '';
    showError('error1', '');
  },

  clearSection2() {
    document.getElementById('cv-actualDist').value = '';
    document.getElementById('cv-dmiDist').value = '';
    document.getElementById('cv-gykDiameter').value = '';
    document.getElementById('cv-resultDiameter').value = '';
    showError('error2', '');
  }
};

// ===== 页面导航 =====
document.addEventListener('DOMContentLoaded', function() {
  const navTabs = document.querySelectorAll('.nav-tab');
  const pages = document.querySelectorAll('.page');

  navTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const targetPage = this.dataset.page;
      
      // 更新导航样式
      navTabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      
      // 切换页面
      pages.forEach(p => p.classList.remove('active'));
      document.getElementById('page-' + targetPage).classList.add('active');
    });
  });
});
