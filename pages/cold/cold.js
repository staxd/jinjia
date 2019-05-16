var url = require('../../config.js')
const sendAjax = require('../../utils/sendAjax.js')
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 1,
    mbList: [],
    symptomId: "",
    patientId: "",
    nonceStr: "",
    package: "",
    paySign: "",
    signType: "",
    timeStamp: "",
    fenxiang: false,
    canClick: true
  },
  tohelp() {
    wx.navigateTo({
      url: '/pages/user/help/help',
    })
  },
  clickSelect: function (e) {
    var that = this;

    var symptom_id = e.currentTarget.dataset.id
    var isshow = e.currentTarget.dataset.isshow
    var mbList = that.data.mbList

    for (var i in mbList) {
      for (var j = 0; j < mbList[i].symptom_list.length; j++) {

        if (mbList[i].symptom_list[j].symptom_id == symptom_id) {
          mbList[i].symptom_list[j].isshow = !mbList[i].symptom_list[j].isshow;
        }
      }
    }
    // console.log(mbList)

    that.setData({
      mbList
    })
  },

  onLoad: function (symptoms) {

    this.getsymptomList();
  },
  getsymptomList: function () {
    var that = this
    let infoOpt = {
      url: '/disease/getDiscaseSymptomList',
      type: 'POST',
      data: {

      }
    }
    let infoCb = {}
    infoCb.success = function (res) {
      app.getPatientId()
      var data = res.symptom_category;
      var mbList = res.symptom_category
      that.setData({
        mbList: res.symptom_category
      })
      for (var i in mbList) {
        for (var j = 0; j < mbList[i].symptom_list.length; j++) {
          mbList[i].symptom_list[j]['isshow'] = false
        }
      }
      console.log(mbList)

      that.setData({
        mbList
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
  fenxiangClose() {
    this.setData({
      fenxiang: false
    })
  },
  subBtn() {
    var that = this
    var mbList = that.data.mbList
    var symptomId = that.data.symptomId

    for (var i in mbList) {
      for (var j = 0; j < mbList[i].symptom_list.length; j++) {


        if (mbList[i].symptom_list[j].isshow) {
          symptomId = symptomId + "," + mbList[i].symptom_list[j].symptom_id
        }
      }
    }
    symptomId = symptomId.substring(1, symptomId.length)
    if (symptomId == "") {
      wx.showToast({
        title: '请选择至少一项',
        icon: 'none',
        duration: 1000
      })
    } else {
      that.setData({
        fenxiang: true,
        symptomId
      })
    }

  },
  tosubBtn: function () {
    this.setData({
      canClick: false
    })
    var that = this
    var mbList = that.data.mbList
    var list = []
    var symptomId = that.data.symptomId
    for(let i in mbList){
      for (let j in mbList[i].symptom_list){
        if (mbList[i].symptom_list[j].isshow) {
          list.push(mbList[i].symptom_list[j])
        }
      }
    }
    wx.navigateTo({
      url: '/pages/cold/coldDetail/coldDetail?id='+symptomId+'&&show=true&&list='+JSON.stringify(list),
    })
  },
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      canClick: true
    })
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
  onShareAppMessage: function (symptoms) {
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
    if (symptoms.from == 'button') {
      var eData = symptoms.target.dataset;
      console.log(eData.name);     // shareBtn
      // 此处可以修改 shareObj 中的内容
      shareObj.path = '/pages/index/index?inviteicode=' + inviteicode;
    }
    // 返回shareObj
    return shareObj;
  }
})