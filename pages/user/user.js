// pages/user/user.js
var url = require('../../config.js')
const sendAjax = require('../../utils/sendAjax.js')
var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    cantodetail:true,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },
  toDetail(res) {
    var that = this
    var callback = {}
    callback.beforeSend = function () {
      that.setData({
        cantodetail: false
      })
    }
    callback.success = function () {
      if (wx.getStorageSync('show')) {
        wx.navigateTo({
          url: res
        })
        that.setData({
          cantodetail: true
        })
      }
    }
    app.login(callback)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
  },
  invite: function() {
    // console.log('12321313');
    wx.navigateTo({
      url: 'invite/invite'
    })

  }, 
  archives: function () {
    this.toDetail('archives/archives')
  },
  daijinquan: function () {
    this.toDetail('daijinquan/daijinquan')
  },
  share: function () {},
  friends: function () {
    this.toDetail('friends/friends')
  },
  shengming(){
    wx.navigateTo({
      url: 'aboutUs/aboutUs',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this;
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this
    that.setData({
      userInfo: wx.getStorageSync('userInfo')
    })
    if (wx.getStorageSync('show')){
      var callBack = {}
      callBack.success = function(){
        that.setData({
          userInfo: wx.getStorageSync('userInfo')
        })
      }
      app.login(callBack);
    }
    
    wx.removeStorageSync("patientInfolist")
    wx.removeStorageSync("constitutionId")
    wx.removeStorageSync("firstList")
    wx.removeStorageSync("nameList")
    wx.removeStorageSync("rateJson")
    wx.removeStorageSync("rateList")
    wx.removeStorageSync("getInfoId")
    wx.removeStorageSync("matchedMedicineList")
    wx.removeStorageSync("tongueList")
    wx.removeStorageSync("symptomInfo")
    wx.removeStorageSync("patientInfolist")
    wx.removeStorageSync("option")
    wx.removeStorageSync("infoList")
  },
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
      　　　　complete: function(){
        　　　　　　// 转发结束之后的回调（转发成不成功都会执行）
      　　　　}
  　　};
  　　// 来自页面内的按钮的转发
  　　if(options.from == 'button'){
  　　　　var eData = options.target.dataset;
  　　　　console.log(eData.name);     // shareBtn
  　　　　// 此处可以修改 shareObj 中的内容
      shareObj.path = '/pages/index/index?inviteicode=' + inviteicode;
　　}
　　// 返回shareObj
　　return shareObj;
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