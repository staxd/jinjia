//app.js
var url = require('config.js')
const sendAjax = require('/utils/sendAjax.js')
App({
  onLaunch: function () {
    var that = this
      that.login()
  },
  login(){
    var that = this;
    // 登录
    wx.login({
      success: resp => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        // console.log(resp.code);
        wx.setStorageSync("code", resp.code)

        
        // 获取用户信息
        wx.getSetting({
          success: res => {
            //  console.log(res);
            if (res.authSetting['scope.userInfo']) {
            // 已经授权不会弹框
            wx.getUserInfo({
              success: userResult => {
                // console.log(userResult);
                // 可以将 res 发送给后台解码出 unionId
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
                    console.log(res.data.code)
                    if (res.data.code==403){
                      wx.showModal({
                        title: '温馨提示',
                        content: '检测到您未绑定手机号，请先绑定手机号！',
                        showCancel: false,
                        success: function (res) {
                          console.log(res)
                          if (res.confirm) {
                            wx.navigateTo({
                              url: '/pages/login/login'
                            })
                          }
                        }
                      })
                    } else if (res.data.code == 200){
                      wx.setStorageSync("api_token", res.data.api_token)
                      wx.setStorageSync("mobile", res.data.mobile)
                      wx.setStorageSync("user_id", res.data.user_id)
                      wx.setStorageSync("icode", res.data.icode)
                      that.data.show=false
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
        console.log(res)
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
    show:true,
    matchedMedicineList:[],
    btn1:"",
    btn2: "",
    btn3: "",
    btn4: "",
    btn5: ""
  }

})