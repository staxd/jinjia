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
    that.setData({
      cantotizhi:false
    })
    if (app.data.show) {
        // wx.showModal({
        //   title: '提示',
        //   content: '请您先绑定手机号！',
        //   showCancel: true,
        //   success: function (res) {
        //     console.log(res)
        //     if (res.confirm) {
        //       wx.navigateTo({
        //         url: '/pages/login/login?pageUrl=' + "/pages/physical/physical"
        //       })
        //       that.setData({
        //         cantotizhi:true
        //       })
        //     }
        //   }
        // });

      } else {
          
            wx.navigateTo({
              url: '/pages/physical/physical'
            })
            that.setData({
                cantotizhi:true
              })
          
          
        
        
      }
    
    

  },
   zizhenBtn: function () {
     var that = this
     that.setData({
       cantozizhen: false
     })
     if (app.data.show) {
      //  wx.showModal({
      //    title: '提示',
      //    content: '请您先绑定手机号！',
      //    showCancel: true,
      //    success: function (res) {
      //      console.log(res)
      //      if (res.confirm) {
      //        wx.navigateTo({
      //          url: '/pages/login/login?pageUrl=' + "/pages/autognosis/autognosis"
      //        })
      //        that.setData({
      //          cantozizhen:true
      //        })
      //      }
      //    }
      //  });
      
    } else {
          wx.navigateTo({
            url: '/pages/autognosis/autognosis',
          })
          that.setData({
            cantozizhen: true
          })
      
     
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
    app.login()
    app.getPatientId()
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
  getUserInfo: function(e) {
  }
})
