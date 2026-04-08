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
]

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
]

Page({
  data: {
    gykPulse: '',
    pulse2159: '',
    gykWheelDiameter: '',
    speedMeterCount: '',
    gearRatio: '',
    dp3031Pulse: '',
    dp3031Ratio: '',
    positionOptions: ['请选择安装位置', '直通', '侧位'],
    positionIndex: 0,
    currentVersion: 'V3.1',
    dipItems: [],
    errorMsg: ''
  },

  onInput(e) {
    const field = e.currentTarget.dataset.field
    this.setData({
      [field]: e.detail.value,
      errorMsg: ''
    })
  },

  onPositionChange(e) {
    this.setData({
      positionIndex: parseInt(e.detail.value),
      errorMsg: ''
    })
  },

  switchVersion(e) {
    const ver = e.currentTarget.dataset.ver
    this.setData({ currentVersion: ver })
    // 若已有结果，重新生成拨码表
    const ratio = this.data.dp3031Ratio
    if (ratio) {
      this._buildDipItems(parseFloat(ratio), ver)
    }
    wx.showToast({ title: '已切换到' + ver, icon: 'none', duration: 1200 })
  },

  _isValidNum(val) {
    if (val === '' || val === null || val === undefined) return false
    const n = parseFloat(val)
    return !isNaN(n) && isFinite(n) && n > 0
  },

  _buildDipItems(nValue, version) {
    const table = version === 'V3.0' ? dipTableV30 : dipTableV31
    // 在拨码表中找到与计算出的N值最接近的项作为推荐值
    let nearestIdx = 0
    let minDiff = Math.abs(nValue - table[0].value)
    for (let i = 1; i < table.length; i++) {
      const diff = Math.abs(nValue - table[i].value)
      if (diff < minDiff) { minDiff = diff; nearestIdx = i }
    }
    // 判断是否"临界"：计算N值与推荐N值差值超过0.005认为是临界
    const isCritical = minDiff > 0.005

    let start, end
    // 判断是否处于边界区域（前2个或后2个）
    const isNearMin = nearestIdx <= 2           // 靠近最小值端（索引0~2）
    const isNearMax = nearestIdx >= table.length - 3  // 靠近最大值端

    if (isNearMin) {
      // 靠近最小值：显示推荐值及后面2个（从推荐值开始，共3个）
      start = nearestIdx
      end = Math.min(table.length, nearestIdx + 3)
    } else if (isNearMax) {
      // 靠近最大值：显示推荐值及前面2个（到推荐值结束，共3个）
      start = Math.max(0, nearestIdx - 2)
      end = nearestIdx + 1
    } else {
      // 临界（非边界）和正常中间：都显示推荐值上下各2个，共5行
      start = nearestIdx - 2
      end = nearestIdx + 3
    }
    const items = []
    for (let i = start; i < end; i++) {
      items.push({
        value: table[i].value.toFixed(2),
        binary: table[i].binary,
        isNearest: (i === nearestIdx)
      })
    }
    this.setData({ dipItems: items })
  },

  onCalc() {
    const {
      gykPulse, pulse2159, gykWheelDiameter,
      speedMeterCount, gearRatio, dp3031Pulse,
      positionIndex, positionOptions, currentVersion
    } = this.data

    if (!this._isValidNum(gykPulse)) {
      this.setData({ errorMsg: '❌ GYK设置脉冲数不能为空且须为正数' }); return
    }
    if (!this._isValidNum(pulse2159)) {
      this.setData({ errorMsg: '❌ 2159一圈脉冲数不能为空且须为正数' }); return
    }
    if (!this._isValidNum(gykWheelDiameter)) {
      this.setData({ errorMsg: '❌ GYK轮径不能为空且须为正数' }); return
    }
    if (!this._isValidNum(speedMeterCount)) {
      this.setData({ errorMsg: '❌ 速度表表头脉冲数不能为空且须为正数' }); return
    }
    if (!this._isValidNum(gearRatio)) {
      this.setData({ errorMsg: '❌ 伞齿轮转速比不能为空且须为正数' }); return
    }
    if (!this._isValidNum(dp3031Pulse)) {
      this.setData({ errorMsg: '❌ DP3031脉冲数不能为空且须为正数' }); return
    }
    if (positionIndex === 0) {
      this.setData({ errorMsg: '❌ 请选择DP3031安装位置' }); return
    }

    const a = parseFloat(gykPulse)
    const b = parseFloat(pulse2159)
    const wh = parseFloat(gykWheelDiameter)
    const d = parseFloat(speedMeterCount)
    const e = parseFloat(gearRatio)
    const f = parseFloat(dp3031Pulse)
    const position = positionOptions[positionIndex]
    const wm = wh / 1000

    let nValue
    if (position === '直通') {
      nValue = (d * e * f * Math.PI * wm) / (1000 * a * b)
    } else {
      nValue = (d * f * Math.PI * wm) / (1000 * a * b * e)
    }

    const result = nValue.toFixed(4)
    this.setData({ dp3031Ratio: result, errorMsg: '' })
    this._buildDipItems(nValue, currentVersion)
    wx.showToast({ title: '计算完成', icon: 'success', duration: 1500 })
  },

  onClear() {
    this.setData({
      gykPulse: '',
      pulse2159: '',
      gykWheelDiameter: '',
      speedMeterCount: '',
      gearRatio: '',
      dp3031Pulse: '',
      dp3031Ratio: '',
      positionIndex: 0,
      dipItems: [],
      errorMsg: ''
    })
    wx.showToast({ title: '已清空', icon: 'none', duration: 1200 })
  }
})
