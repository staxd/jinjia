//index.js
//获取应用实例
let app = getApp()

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
          wx.navigateTo({
            url: '/pages/physical/physical'
          })
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
        wx.navigateTo({
          url: '/pages/autognosis/autognosis',
        })
      }
     
    }
     
  },
  onLoad: function () {
    app.onLaunch()
  },
  getUserInfo: function(e) {
  }
})
