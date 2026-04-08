Page({
  data: {
    form1: {
      origDiameter: '',
      origPulse: '',
      actualDiameter: '',
      actualPulse: ''
    },
    form2: {
      actualDist: '',
      dmiDist: '',
      gykDiameter: '',
      resultDiameter: ''
    },
    error1: '',
    error2: ''
  },

  // ===== 输入监听 =====
  onInput1(e) {
    const field = e.currentTarget.dataset.field
    const val = e.detail.value
    this.setData({
      [`form1.${field}`]: val,
      error1: ''
    })
  },

  onInput2(e) {
    const field = e.currentTarget.dataset.field
    const val = e.detail.value
    this.setData({
      [`form2.${field}`]: val,
      error2: ''
    })
  },

  // ===== 工具函数：验证数字 =====
  _isValidNum(val) {
    if (val === '' || val === null || val === undefined) return false
    const num = parseFloat(val)
    return !isNaN(num) && isFinite(num) && num > 0
  },

  // ===== 计算实际脉冲 =====
  calcPulse() {
    const { origDiameter, origPulse, actualDiameter } = this.data.form1

    if (!this._isValidNum(origDiameter)) {
      this.setData({ error1: '❌ 请输入有效的原轮径（正数）' })
      return
    }
    if (!this._isValidNum(origPulse)) {
      this.setData({ error1: '❌ 请输入有效的原脉冲数（正数）' })
      return
    }
    if (!this._isValidNum(actualDiameter)) {
      this.setData({ error1: '❌ 请输入有效的实际轮径（正数）' })
      return
    }

    const od = parseFloat(origDiameter)
    const op = parseFloat(origPulse)
    const ad = parseFloat(actualDiameter)

    const result = (ad * op / od).toFixed(4)

    this.setData({
      'form1.actualPulse': result,
      error1: ''
    })

    wx.showToast({ title: '计算完成', icon: 'success', duration: 1500 })
  },

  // ===== 计算实际轮径 =====
  calcDiameter() {
    const { actualDist, dmiDist, gykDiameter } = this.data.form2

    if (!this._isValidNum(actualDist)) {
      this.setData({ error2: '❌ 请输入有效的车辆实际走行距离（正数）' })
      return
    }
    if (!this._isValidNum(dmiDist)) {
      this.setData({ error2: '❌ 请输入有效的DMI走行距离（正数）' })
      return
    }
    if (!this._isValidNum(gykDiameter)) {
      this.setData({ error2: '❌ 请输入有效的调整前GYK轮径（正数）' })
      return
    }

    const ad = parseFloat(actualDist)
    const dd = parseFloat(dmiDist)
    const gd = parseFloat(gykDiameter)

    const result = (ad * gd / dd).toFixed(1)

    this.setData({
      'form2.resultDiameter': result,
      error2: ''
    })

    wx.showToast({ title: '计算完成', icon: 'success', duration: 1500 })
  },

  // ===== 清空 =====
  clearSection1() {
    this.setData({
      form1: { origDiameter: '', origPulse: '', actualDiameter: '', actualPulse: '' },
      error1: ''
    })
  },

  clearSection2() {
    this.setData({
      form2: { actualDist: '', dmiDist: '', gykDiameter: '', resultDiameter: '' },
      error2: ''
    })
  }
})
