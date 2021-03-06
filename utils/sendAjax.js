const url = require('../config.js')

var key = 0
function sendAjax(options, callback, outTimeAuthCbOrNeedAuth) {
  
  // 登录信息过期处理类型
  // const OTCB = outTimeAuthCbOrNeedAuth || function() {
  //   getCurrentPages().pop().onLoad(getCurrentPages().pop().options)
  // }
  const _sets = options
  // console.log(options.data)
  if (typeof _sets.type === 'undefined') {
    _sets.type = 'POST'
  }
  if (typeof _sets.data === 'undefined') {
    _sets.data = {}
  }

  // 如果不是明确不需要登录权限 而且 没有 G_authorization 的缓存信息 
  // if (outTimeAuthCbOrNeedAuth !== false && !wx.getStorageSync('authorization')) {
  // console.log(1111);
  //   // getApp().uploadUserInfo(OTCB)
  //   return
  // }

  // 纠正method大写
  _sets.type = _sets.type.toUpperCase();

  const bcallback = callback.beforeSend || function(data) {
    // wx.showToast({
    //   title: '正在加载...',
    //   icon: 'loading',
    //   duration: 10000
    // })
  };
  const scallback = callback.success || function(data) {};
  const ccallback = callback.complete || function(data) {
    wx.hideToast()
  };

  bcallback()
  // wx.showToast({
  //   title: '正在加载...',
  //   icon: 'loading',
  //   duration: 10000
  // })

  wx.request({
    url: url.host + _sets.url,
    method: _sets.type,
    data: _sets.data,
    header: {
      'content-type': 'application/x-www-form-urlencoded',
      'api_token': wx.getStorageSync("api_token")

    },
    success(res) {
      wx.hideToast();
      //  console.log(res);
      if (res.data.code == 200) {
        scallback(res.data)
        
      }else {
        if (res.data.code==406) {
          wx.showModal({
            title: '提示',
            content: res.data.message,
            showCancel: true,
            
          });
        }else if (res.data.code == 403) {
          key++
          if(key > 20){
            return
          }else{
            sendAjax(options, callback)
          }
        }else{
          wx.showModal({
            title: '提示',
            content: res.data.message || '处理失败',
            showCancel: false,
          });

        }

        
         
        
         
        }
      
    },
    fail() {
      wx.showModal({
        title: '提示',
        content: '服务器连接失败',
        showCancel: false
      });
    },
    complete() {
      // ccallback()
    }
  })
}

module.exports = sendAjax