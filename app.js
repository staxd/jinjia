//app.js
var url = require('config.js')
const sendAjax = require('/utils/sendAjax.js')
App({
  onLaunch: function () {
  },
  login(callback){
    if(!callback){
      callback = {}     
    }
    var that = this;
    const bcallback = callback.beforeSend || function (data) {};
    const scallback = callback.success || function (data) {};
    // 登录
    bcallback()
    wx.login({
      success: resp => {
        wx.setStorageSync("code", resp.code)
        wx.getSetting({
          success: res => {
            if (res.authSetting['scope.userInfo']) {
            wx.getUserInfo({
              success: userResult => {
                wx.setStorageSync('userInfo',userResult.userInfo)
                var platUserInfoMap = that.globalData.platUserInfoMap;
                platUserInfoMap["userInfo"] = userResult.userInfo;
                platUserInfoMap["rawData"] = userResult.rawData;
                platUserInfoMap["signature"] = userResult.signature;
                platUserInfoMap["encryptedData"] = userResult.encryptedData;
                platUserInfoMap["iv"] = userResult.iv;
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
                    if (res.data.code==403){
                      wx.showModal({
                        title: '温馨提示',
                        content: '检测到您未绑定手机号，请先绑定手机号！',
                        showCancel: true,
                        success: function (res) {
                          if (res.confirm) {
                            wx.navigateTo({
                              url: '/pages/login/login'
                            })
                          }
                        }
                      })
                    } else if (res.data.code == 200){
                      wx.setStorageSync('show', true)
                      that.data.show = true
                      wx.setStorageSync("api_token", res.data.api_token)
                      wx.setStorageSync("mobile", res.data.mobile)
                      wx.setStorageSync("user_id", res.data.user_id)
                      wx.setStorageSync("icode", res.data.icode)
                      scallback(res.data)
                    }
                  }
                })
                if (that.userInfoReadyCallback) {
                  that.userInfoReadyCallback(userResult)
                }
              }
            })
            }else{
              wx.redirectTo({
                url: "/pages/start/start"
              })
            }

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
        var patientId = ""
        for (let i in patientList) {
          if (patientList[i].is_default == '1') {
            patientId = patientList[i].patient_id
          }
        }
        if (patientId==""){
          wx.showModal({
            title: '温馨提示',
            content: '请先设置默认亲友哦！',
            showCancel: false,
            success: function (res) {
              if (res.confirm) {
                wx.redirectTo({
                  url: '/pages/user/friends/friends'
                }) 
              }
            }
          });
        }else{
          wx.setStorageSync("patient_id", patientId)
          
        }
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
    nickName: '',
    headimgurl: '',
    authorization: '',
    isbound: '',
    

  },
  data:{
    patient_id:"",
    show:false,
    matchedMedicineList:[],
    btn1:"",
    btn2: "",
    btn3: "",
    btn4: "",
    btn5: ""
  }

})