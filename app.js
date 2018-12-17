//app.js
var url = require('config.js')
const sendAjax = require('/utils/sendAjax.js')
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    wx.setStorageSync("isLogin", 0)
    var isFir = wx.getStorageSync("isFirst")
    if(!isFir){
      wx.redirectTo({
        url:"pages/start/start"
      })
    }else{
      wx.switchTab({
        url: 'pages/index/index'
      })
    }
    // 登录
    wx.login({
      success: resp => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        // console.log(resp.code);
        wx.setStorageSync("code", resp.code)

        var that = this;
        // 获取用户信息
        wx.getSetting({
          success: res => {
            //  console.log(res);
              // 已经授权不会弹框
              wx.getUserInfo({
                success: userResult => {
                  // console.log(userResult);
                  // 可以将 res 发送给后台解码出 unionId
                  wx.setStorageSync("isFirst", userResult.userInfo)
                  that.globalData.userInfo = userResult.userInfo
                  // console.log(userResult);
                  var platUserInfoMap = that.globalData.platUserInfoMap;
                  platUserInfoMap["userInfo"] = userResult.userInfo;
                  platUserInfoMap["rawData"] = userResult.rawData;
                  platUserInfoMap["signature"] = userResult.signature;
                  platUserInfoMap["encryptedData"] = userResult.encryptedData;
                  platUserInfoMap["iv"] = userResult.iv;
                  // console.log(platUserInfoMap);
                  
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
                      console.log(res);
                      
                      wx.setStorageSync("api_token", res.data.api_token)
                      wx.setStorageSync("mobile", res.data.mobile)
                      wx.setStorageSync("user_id", res.data.user_id)
                    }
                  })
                  
                  //   that.getPatientId()
                  
                  // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                  // 所以此处加入 callback 以防止这种情况
                  // console.log(that.userInfoReadyCallback);
                  if (that.userInfoReadyCallback) {
                    // console.log(222);
                    that.userInfoReadyCallback(userResult)
                  }
                }
              })

            
          }
        })
      }
    })
    
  },
  getPatientId(){
    var that = this
    let infoOpt = {
      url: '/selfDiagnosis/getPatientList',
      type: 'GET',
      data: {
      }
    }
    let infoCb = {}
    infoCb.success = function (res) {
      var patientList = res.patientList
      for (let i in patientList) {
        if (patientList[i].is_default == '1') {
            that.data.patient_id = patientList[i].patient_id
          console.log(patientList[i].patient_id)
            return
        }
      }
      console.log(patient_id)
      
      that.data.patient_id = patient_id
      
    }
    infoCb.beforeSend = () => { }
    infoCb.complete = () => {

    }
    sendAjax(infoOpt, infoCb, () => {
    });

  },
  
  globalData: {
    userInfo: null,
    platUserInfoMap: {},
    userInfo: '',
    authorization: '',
    nickName: '',
    headimgurl: '',
    authorization: '',
    isbound: '',

  },
  data:{
    patient_id:"",
    matchedMedicineList:[]
  }

})