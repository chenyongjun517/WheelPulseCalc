Page({
  data: {
    gykPulse: '',
    pulse2159: '',
    dp3031Ratio: '',
    speedMeterCount: '',
    gearRatio: '',
    dp3031Pulse: '',
    gykWheelDiameter: '',
    positionOptions: ['请选择安装位置', '直通', '侧位'],
    positionIndex: 0,
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

  _isValidNum(val) {
    if (val === '' || val === null || val === undefined) return false
    const n = parseFloat(val)
    return !isNaN(n) && isFinite(n) && n > 0
  },

  onCalc() {
    const {
      gykPulse, pulse2159, dp3031Ratio,
      speedMeterCount, gearRatio, dp3031Pulse,
      positionIndex, positionOptions
    } = this.data

    if (!this._isValidNum(gykPulse)) {
      this.setData({ errorMsg: '❌ GYK设置脉冲数不能为空且须为正数' }); return
    }
    if (!this._isValidNum(pulse2159)) {
      this.setData({ errorMsg: '❌ 2159一圈脉冲数不能为空且须为正数' }); return
    }
    if (!this._isValidNum(dp3031Ratio)) {
      this.setData({ errorMsg: '❌ DP3031拨码盘比例不能为空且须为正数' }); return
    }
    if (!this._isValidNum(speedMeterCount)) {
      this.setData({ errorMsg: '❌ 速度表表头数不能为空且须为正数' }); return
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
    const c = parseFloat(dp3031Ratio)
    const d = parseFloat(speedMeterCount)
    const e = parseFloat(gearRatio)
    const f = parseFloat(dp3031Pulse)
    const position = positionOptions[positionIndex]

    let wheelDiameter
    if (position === '直通') {
      wheelDiameter = (1000 * a * b * c) / (d * e * f * Math.PI)
    } else {
      wheelDiameter = (1000 * a * b * c * e) / (d * f * Math.PI)
    }

    const result = (wheelDiameter * 1000).toFixed(1)

    this.setData({
      gykWheelDiameter: result,
      errorMsg: ''
    })

    wx.showToast({ title: '计算完成', icon: 'success', duration: 1500 })
  },

  onClear() {
    this.setData({
      gykPulse: '',
      pulse2159: '',
      dp3031Ratio: '',
      speedMeterCount: '',
      gearRatio: '',
      dp3031Pulse: '',
      gykWheelDiameter: '',
      positionIndex: 0,
      errorMsg: ''
    })
    wx.showToast({ title: '已清空', icon: 'none', duration: 1200 })
  }
})
