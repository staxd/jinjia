//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   
  },
  tizhiBtn: function () {
    var user_id = wx.getStorageSync("mobile")
    if (user_id == "") {
      wx.navigateTo({
        url: '../login/login'
      })
    } else {
      wx.navigateTo({
        url: '../physical/physical'
      })
    }

  },
   zizhenBtn: function () {
    var user_id = wx.getStorageSync("mobile")
    if (user_id == "") {
      wx.navigateTo({
        url: '../login/login'
      })
    } else {
     wx.navigateTo({
       url: '../autognosis/autognosis',
     })
    }

  },
  onLoad: function () {
   
  },
  getUserInfo: function(e) {
  }
})
