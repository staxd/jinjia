// pages/user/user.js
var url = require('../../config.js')
const sendAjax = require('../../utils/sendAjax.js')
var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    platUserInfoMap: {},
    code: '',
    showUs:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    
  },
  login: function () {
    // console.log(111)
    var that = this
    wx.login({
      success: function (resp) {
        var code = resp.code;
        that.setData({
          code
        })
        wx.getUserInfo({
          success: function (userResult) {
            that.setData({
              userInfo: userResult.userInfo
            })
            var platUserInfoMap = that.data.platUserInfoMap;
            platUserInfoMap["userInfo"] = userResult.userInfo;
            platUserInfoMap["rawData"] = userResult.rawData;
            platUserInfoMap["signature"] = userResult.signature;
            platUserInfoMap["encryptedData"] = userResult.encryptedData;
            platUserInfoMap["iv"] = userResult.iv;
            // console.log(that.data.code);
            wx.request({
              url: url.loginUrl,
              method: 'POST',
              data: {
                code: resp.code,
                userInfo: JSON.stringify(platUserInfoMap)
              },
              header: {
                'content-type': 'application/x-www-form-urlencoded'
              },
              success(res) {
                app.data.api_token=res.data.api_token
                app.data.mobile = res.data.mobile
                app.data.user_id = res.data.user_id
                app.data.showUs = true
                that.setData({
                  showUs:true
                })
              }
            })
          }
        })
      }
    })
  },
  
  invite: function() {
    // console.log('12321313');
    wx.navigateTo({
      url: 'invite/invite'
    })

  }, 
  archives: function () {
    var mobile = app.data.mobile
    if (app.data.show) {
    if (mobile == undefined) {
      wx.showModal({
        title: '提示',
        content: '请您先绑定手机号！',
        showCancel: true,
        success: function (res) {
          console.log(res)
          if (res.confirm) {
            wx.navigateTo({
              url: '/pages/login/login?pageUrl=' + "archives/archives"
            })
          }
        }
      });
      
    } else {
        var timer = setTimeout(function () {
          wx.navigateTo({
            url: 'archives/archives'
          })
        }, 400);
        
     
      
    }
    }

  },
  help: function () {
    wx.navigateTo({
      url: 'help/help'
    })

  },
  aboutUs: function () {
    // console.log('12321313');
    wx.navigateTo({
      url: 'aboutUs/aboutUs'
    })

  }, 
  friends: function () {
    var mobile = app.data.mobile
    if (app.data.show) {
    if (mobile == undefined) {
      wx.showModal({
        title: '提示',
        content: '请您先绑定手机号！',
        showCancel: true,
        success: function (res) {
          console.log(res)
          if (res.confirm) {
            wx.navigateTo({
              url: '/pages/login/login?pageUrl=' + "friends/friends"
            })
          }
        }
      });
      
    } else {
      
      var timer = setTimeout(function () {
        wx.navigateTo({
          url: 'friends/friends'
        })

      }, 400);
        


     
    }
    }

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
    this.login();

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
  onShareAppMessage: function () {

  }
})