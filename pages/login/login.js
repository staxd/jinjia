

var url = require('../../config.js')
const sendAjax = require('../../utils/sendAjax.js')
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageUrl:"",
    userPhone:"",
    userCode:"",
    currentTime: 61,//限制60s
    isClick: 'userCodeBtn',
    time:"获取验证码"
  },
  getK: function () {
    return;
  },
  userPhone: function (e) {
    var that = this
    that.setData({
      userPhone: e.detail.value
    })
  }, userCode: function (e) {
    var that = this
    that.setData({
      userCode: e.detail.value
    })
  },
  userCodeBtn:function(){
    var that = this
    that.setData({
      userCode:""
    })
    var userPhone = that.data.userPhone
    var myreg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
    if (!myreg.test(userPhone)) {
          wx.showToast({
            title: '请输入正确手机号',
            icon: 'none',
            duration: 2000
          })  
    } else{
      /*第二步：设置计时器*/
      // 先禁止获取验证码按钮的点击
      that.setData({
        isClick: 'getK',
      })
      // 60s倒计时 setInterval功能用于循环，常常用于播放动画，或者时间显示
      var currentTime = that.data.currentTime;
      var interval = setInterval(function () {
        currentTime--;//减
        that.setData({
          time: currentTime + '秒后重试'
        })
        if (currentTime <= 0) {
          clearInterval(interval)
          
          
          that.setData({
            time: '获取验证码',
            currentTime: 61,
            isClick: 'userCodeBtn'
          })
        }
      }, 1000);
      var loginKey = true
    let infoOpt = {
      url: '/user/sendTextCode',
      type: 'POST',
      data: {
        type:'login',
        mobile: userPhone
      }
    }
    let infoCb = {}
    infoCb.success = function (res) {
      console.log(res)
      loginKey = false
    }
    infoCb.beforeSend = () => { }
    infoCb.complete = () => {

    }
    sendAjax(infoOpt, infoCb, () => {
    });
    if(loginKey){
      wx.showToast({
        title: '获取验证码成功！',
        icon: 'success',
        duration: 2000
      })
    }
    }
  },
  toLogin:function(){
    var that = this
    
    wx.login({
      success:function(res){
        var code = res.code;
        // console.log(code)
        var userPhone = that.data.userPhone
        var userCode = that.data.userCode
        if (userCode == "" && userPhone == "") {
          wx.showToast({
            title: '请输入手机号！',
            icon: 'none',
            duration: 2000
          })
        } else if (userCode == "" && userPhone!= "15705851300") {
          wx.showToast({
            title: '请输入验证码！',
            icon: 'none',
            duration: 2000
          })
        } else {

          wx.request({
            url: url.host + '/user/bindMobile',
            method: 'POST',
            data: {
              code: code,
              mobile: userPhone,
              text_code: userCode,
              icode: that.data.inviteicode
            },
            header: {
              'content-type': 'application/x-www-form-urlencoded'
            },
            success(res) {
              if(res.data.code == 200){
                console.log(res)
                app.data.api_token = res.data.api_token
                app.data.mobile = res.data.mobile
                app.data.user_id = res.data.user_id
                wx.showModal({
                  title: '提示',
                  content: '绑定成功！',
                  showCancel: false,
                  success: function (res) {
                    console.log(res)
                    if (res.confirm) {
                      var pageUrl = that.data.pageUrl
                      wx.redirectTo({
                        url: pageUrl
                      })
                    }
                  }
                });
                
              } else if (res.data.code == 400 ){
                wx.showModal({
                  title: '提示',
                  content: res.data.message || '处理失败',
                  showCancel: false,
                });
              }
              
            }
          })
          
        }
      
      
      
      
      
      }
    })
    
    
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(wx.getStorageSync("inviteicode"))
    var pageUrl = options.pageUrl
    this.setData({
      pageUrl,
      inviteicode: wx.getStorageSync("inviteicode")
    })
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
  onShareAppMessage: function () {

  }
})