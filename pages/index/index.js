//index.js
//获取应用实例
let app = getApp()
var url = require('../../config.js')
const sendAjax = require('../../utils/sendAjax.js')
Page({
  data: {
   
  },
  tizhiBtn: function () {
    
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
            }
          }
        });

      } else {
        if(app.data.show){
          var timer = setTimeout(function () {
            wx.navigateTo({
              url: '/pages/physical/physical'
            })
          }, 400);
          
        }
        
      }
    
    

  },
   zizhenBtn: function () {
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
           }
         }
       });
      
    } else {
      if(app.data.show){
        var timer = setTimeout(function () {
          wx.navigateTo({
            url: '/pages/autognosis/autognosis',
          })
        }, 400);
        
      }
     
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
    // console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
    app.onLaunch()
    this.getindex()
    
  },
  getUserInfo: function(e) {
  }
})
