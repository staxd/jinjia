var url = require('../../config.js')
const sendAjax = require('../../utils/sendAjax.js')

var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    symptomList:[],
    index:0, //获取下标
    contentList:[],
    imgId:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.status) {
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
                  wx.setStorageSync("isFirst", userResult.userInfo)
                  var platUserInfoMap = {};
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
                      console.log(res);
                      app.data.api_token = res.data.api_token
                      app.data.mobile = res.data.mobile
                      app.data.user_id = res.data.user_id
                      wx.setStorageSync("icode", res.data.icode)
                    }
                  })
                  if (that.userInfoReadyCallback) {
                    that.userInfoReadyCallback(userResult)
                  }
                }
              })
            }
          })

        }
      })
    }
    
    this.getBodyPartList()
      
  },
  getBodyPartList: function () {
    var that = this
    
    let infoOpt = {
      url: '/selfDiagnosis/getBodyPartList',
      type: 'GET',
      data: {
      }
    }
    let infoCb = {}
    infoCb.success = function (res) {
      app.getPatientId()
      console.log(res)
      var bodyId = res[0].body_part_id
      var contentList = []
      for(let i in res){
        if(res[i]!=200){
          if(i == 0){
            res[0]['select'] = true
          }
          contentList.push(res[i])
          // console.log(contentList)
          let infoOpt = {
            url: '/selfDiagnosis/getBodySymptomList',
            type: 'POST',
            data: {
              body_part_id: res[i].body_part_id,
              patient_id: app.data.patient_id
            }
          }
          let infoCb = {}
          infoCb.success = function (res) {
            //  console.log(res)
            var subSymptomList = res.subSymptomList
            var symptomList = res.symptomList
            for (let i in symptomList) {
              var groupList = subSymptomList[symptomList[i].group_name]
              // console.log(groupList)
              if (groupList != undefined) {
                symptomList[i]["group_list"] = groupList
                var groupList = symptomList[i]["group_list"]
                for (let j in groupList) {
                  groupList[j]["open"] = false
                }
              }

              symptomList[i]["open"] = false

            }
            contentList[i]['symptomList'] = symptomList
            // console.log(contentList)
            that.setData({
              contentList
            })
          }
          infoCb.beforeSend = () => { }
          infoCb.complete = () => {

          }
          sendAjax(infoOpt, infoCb, () => {
          });
        }


      }



    }
    infoCb.beforeSend = () => { }
    infoCb.complete = () => {

    }
    sendAjax(infoOpt, infoCb, () => {
    });
    
  },
  imageSelect:function(e){
    console.log(e)
    var that = this
    var id = e.currentTarget.dataset.id
    var imgId = that.data.imgId
    that.setData({
      imgId:id
    })
    var bodyId = e.currentTarget.dataset.bodyid
    // console.log(id)
    var contentList = that.data.contentList
    console.log(contentList)

    for (let c in contentList){
      if(c == id){
        contentList[c]['select'] = true
      }else{
        contentList[c]['select']= false
      }
    }
    that.setData({
      contentList
    })

  }, 
  kindToggle(e) {
    // console.log(e)
    var index = e.currentTarget.dataset.openlist;
    this.setData({
      index
    })
    var imgId = this.data.imgId
    // console.log(imgId)
    let contentList = this.data.contentList;
    // console.log(contentList[imgId].symptomList)
    var symptomList = contentList[imgId].symptomList
    symptomList[index].open = !symptomList[index].open;
    this.setData({
      contentList
    })
  },
  groupList(e) {
    var index = e.currentTarget.dataset.id;
    var id = this.data.index
    var imgId = this.data.imgId
    let contentList = this.data.contentList;
    // console.log(contentList[imgId].symptomList[id].group_list[index])
    var gList = contentList[imgId].symptomList[id].group_list
    gList[index].open = !gList[index].open;
    this.setData({
      contentList
    })
  },

  subBtn(){
    var contentList = this.data.contentList
    var symptomInfo = []
    var infoId = ""
    // console.log(contentList)
    for (let i in contentList){
      var symptomList = contentList[i].symptomList
      for (let j in symptomList){
        // console.log(symptomList[j])
      if (symptomList[j].name){
        if (symptomList[j].open){
          // console.log(symptomList[j])
          infoId = infoId + "," + symptomList[j].symptom_id
          symptomInfo.push({ 'name': symptomList[j].name, 'symptom_id': symptomList[j].symptom_id })
        }
      } else if (symptomList[j].group_name){
        var group_list = symptomList[j].group_list
        for (var o in group_list)
        if (group_list[o].open){
          // console.log(group_list[o])
          infoId = infoId + "," + group_list[o].symptom_id
          symptomInfo.push({ 'name': group_list[o].name, 'symptom_id': group_list[o].symptom_id })
        }
      }
      }
    }
    if (infoId == "") {
      wx.showToast({
        title: '请选择至少一项',
        icon: 'none',
        duration: 1000
      })
    }else{
      
      wx.setStorageSync('symptomInfo', symptomInfo)
      wx.navigateTo({
        url: 'tongue/tongue?infoId=' + infoId,
      })
    }

    
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