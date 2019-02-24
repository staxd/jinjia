var url = require('../../../config.js')
const sendAjax = require('../../../utils/sendAjax.js')

var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    patient_id: '',
    patientList: [],
    name: '',
    
  },

  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getOpId()
  },
  getOpId: function () {
    var that = this
    let infoOpt = {
      url: '/selfDiagnosis/getPatientList',
      type: 'GET',
      data: {
      }
    }
    let infoCb = {}
    infoCb.success = function (res) {
      // console.log(res.patientList)
      var paList = res.patientList
      var patientList = []
      var headList = []
      for (let i in paList) {
        if (paList[i].is_default == '1') {
          console.log(paList[i])
          headList = paList[i]
        } else {
          patientList.push(paList[i])
        }

      }
      if (headList.length != 0) {
        patientList.unshift(headList)
      }
      // console.log(patientList)
      that.setData({
        patientList
      })
    }
    infoCb.beforeSend = () => { }
    infoCb.complete = () => {

    }
    sendAjax(infoOpt, infoCb, () => {
    });
  },
  addBtn:function(){
    var patientList = this.data.patientList
    console.log(patientList)
    wx.navigateTo({
      url: 'friendsadd/friendsadd',
    })
  },
  alterBtn: function (e) {
    // console.log(e.currentTarget.dataset.id)
    var that = this
    var id = e.currentTarget.dataset.id
    var patientList = that.data.patientList
    // console.log(patientList[id])
    wx.setStorageSync('patientList', patientList[id])
    wx.navigateTo({
      url: 'friendsAlter/friendsAlter',
    })
  },
  radioChange: function (e) {
    var that = this
    var paList = that.data.patientList
    console.log(e.detail.value)
    var patient_id = e.detail.value
    var patientList =[]
    var headList =[]
    
    let infoOpt = {
      url: '/selfDiagnosis/setDefaultPatient',
      type: 'POST',
      data: {
        patient_id
      }
    }
    let infoCb = {}
    infoCb.success = function (res) {
      console.log(res)
      for (let i in paList) {
        if (paList[i].patient_id == patient_id) {
          wx.setStorageSync("patient_id",patient_id) 
          console.log(paList[i])
          paList[i]['is_default'] = "1"
          headList = paList[i]
        } else {
          paList[i]['is_default'] = "0"
          patientList.push(paList[i])
        }

      }
      if (headList.length != 0) {
        patientList.unshift(headList)
      }
      that.setData({
        patientList
      })

    }
    infoCb.beforeSend = () => { }
    infoCb.complete = () => {

    }
    sendAjax(infoOpt, infoCb, () => {
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (options) {
    var that = this;
    // 设置菜单中的转发按钮触发转发事件时的转发内容
    var inviteicode = wx.getStorageSync("icode")
    console.log(inviteicode)
    var shareObj = {
      title: "",        // 默认是小程序的名称(可以写slogan等)
      path: '/pages/index/index?inviteicode=' + inviteicode,        // 默认是当前页面，必须是以‘/’开头的完整路径
      imageUrl: 'https://jinjiazy.com/public/jf.jpg',     //自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径，支持PNG及JPG，不传入 imageUrl 则使用默认截图。显示图片长宽比是 5:4
      success: function (res) {
        // 转发成功之后的回调
        if (res.errMsg == 'shareAppMessage:ok') {
        }
      },
      fail: function () {
        // 转发失败之后的回调
        if (res.errMsg == 'shareAppMessage:fail cancel') {
          // 用户取消转发
        } else if (res.errMsg == 'shareAppMessage:fail') {
          // 转发失败，其中 detail message 为详细失败信息
        }
      },
      complete: function () {
        // 转发结束之后的回调（转发成不成功都会执行）
      }
    };
    // 来自页面内的按钮的转发
    if (options.from == 'button') {
      var eData = options.target.dataset;
      console.log(eData.name);     // shareBtn
      // 此处可以修改 shareObj 中的内容
      shareObj.path = '/pages/index/index?inviteicode=' + inviteicode;
    }
    // 返回shareObj
    return shareObj;
  }
})