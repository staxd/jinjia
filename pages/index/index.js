//index.js
//获取应用实例
let app = getApp()
var url = require('../../config.js')
const sendAjax = require('../../utils/sendAjax.js')
Page({
  data: {
   cantotizhi:true,
   cantozizhen:true
  },
  tizhiBtn: function () {
    var that = this
    if (app.data.show) {
    that.setData({
      cantotizhi:false
    })
    }else{
      return
    }
    var mobile = app.data.mobile
    console.log(mobile)
      if (mobile == undefined) {
        wx.showModal({
          title: '提示',
          content: '请您先绑定手机号！',
          showCancel: true,
          success: function (res) {
            console.log(res)
            if (res.confirm) {
              wx.navigateTo({
                url: '/pages/login/login?pageUrl=' + "/pages/physical/physical"
              })
              that.setData({
                cantotizhi:true
              })
            }
          }
        });

      } else {
        var timer = setTimeout(function () {
        if(app.data.show){
          
            wx.navigateTo({
              url: '/pages/physical/physical'
            })
            that.setData({
                cantotizhi:true
              })
          
          
        }
        }, 400);
        
      }
    
    

  },
   zizhenBtn: function () {
     var that = this
     if (app.data.show) {
     that.setData({
       cantozizhen: false
     })
     }else{
       return
     }
     var mobile = app.data.mobile
     if (mobile == undefined) {
       wx.showModal({
         title: '提示',
         content: '请您先绑定手机号！',
         showCancel: true,
         success: function (res) {
           console.log(res)
           if (res.confirm) {
             wx.navigateTo({
               url: '/pages/login/login?pageUrl=' + "/pages/autognosis/autognosis"
             })
             that.setData({
               cantozizhen:true
             })
           }
         }
       });
      
    } else {
       var timer = setTimeout(function () {
      if(app.data.show){
          wx.navigateTo({
            url: '/pages/autognosis/autognosis',
          })
          that.setData({
            cantozizhen: true
          })
      }
       }, 400);
     
    }
     
  },
  getindex(){
    var that = this
    let infoOpt = {
      url: '/home',
      type: 'GET',
      data: {
      }
    }
    let infoCb = {}
    infoCb.success = function (res) {
      console.log(res.bannerList)
      that.setData({
        imgs:res.bannerList
      })
    }
    infoCb.beforeSend = () => { }
    infoCb.complete = () => {

    }
    sendAjax(infoOpt, infoCb, () => {
    });
  },
  onLoad: function (res) {
    console.log(res)
    
    if (res.inviteicode){
      wx.setStorageSync("inviteicode", res.inviteicode)
    }
    this.getindex()
    
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
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
  onPullDownRefresh: function () {
    wx.setBackgroundTextStyle({
      textStyle: 'dark', // 下拉背景字体、loading 图的样式，仅支持 'dark', 'light'
    })
    wx.showNavigationBarLoading();
    app.login()
    // 隐藏导航栏加载框
    wx.hideNavigationBarLoading();
    // 停止下拉动作
    wx.stopPullDownRefresh();


  },
  getUserInfo: function(e) {
  }
})
