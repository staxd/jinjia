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
  daijinquan: function () {
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
            url: 'daijinquan/daijinquan'
          })
        }, 400);



      }
    }
   

  },
  share: function () {},
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
  onShareAppMessage: function (options) {
    　　var that = this;
    　　// 设置菜单中的转发按钮触发转发事件时的转发内容
    var inviteicode = wx.getStorageSync("icode")
    console.log(inviteicode)
    　　var shareObj = {
      　　　　title: "金荚中医",        // 默认是小程序的名称(可以写slogan等)
        path: '/pages/index/index?inviteicode=' + inviteicode,        // 默认是当前页面，必须是以‘/’开头的完整路径
        imageUrl: '/images/indexPic.png',     //自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径，支持PNG及JPG，不传入 imageUrl 则使用默认截图。显示图片长宽比是 5:4
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
  onReachBottom: function () {

  }
})