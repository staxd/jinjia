var url = require('../../config.js')
const sendAjax = require('../../utils/sendAjax.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 1,
    mbList: [],
    optionId:"",
    patientId:""
  },
  clickSelect: function (e) {
    // console.log(e)
    var _this = this;

    var option_id = e.target.dataset.id
    var isshow = e.target.dataset.isshow
    var mbList = _this.data.mbList

    // console.log(mbList)
    for (var i in mbList) {
      for (var j = 0; j < mbList[i].length; j++) {

        if (mbList[i][j].option_id == option_id)
          {
          mbList[i][j].isshow = !mbList[i][j].isshow;
          // console.log(mbList[i][j])
          }
      }
    }
    _this.setData({
      mbList
    })
  },

  onLoad: function (options) {
    this.getOptionList();
    this.getPatientId();
  },
  getPatientId:function(){
    var that = this
    let infoOpt = {
      url: '/selfDiagnosis/getPatientList',
      type: 'GET',
      data: {
      }
    }
    let infoCb = {}
    infoCb.success = function (res) {
      that.setData({
        patientId:res.patientList[0].patient_id
      })
    }
    infoCb.beforeSend = () => { }
    infoCb.complete = () => {

    }
    sendAjax(infoOpt, infoCb, () => {
    });
  },

  getOptionList: function () {
    var that = this
    let infoOpt = {
      url: '/constitution/getOptionList',
      type: 'GET',
      data: {
      }
    }
    let infoCb = {}
    infoCb.success = function (res) {
      // console.log(res.optionList)
      var data = res.optionList;
      var mbList = that.data.mbList
      that.setData({
        mbList: res.optionList
      })

      var mbList = that.data.mbList
      // console.log(mbList)
      for (var i in mbList ){
        for (var j = 0; j < mbList[i].length;j++)
          {
          mbList[i][j]['isshow'] = false
          }
      }
      // console.log(mbList)
 
      that.setData({
        mbList
      })
    
      
    }
    infoCb.beforeSend = () => { }
    infoCb.complete = () => {

    }
    sendAjax(infoOpt, infoCb, () => {
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  subBtn:function(){
    var that=this
    var mbList = that.data.mbList
    var option = that.data.optionId
  
    for (var i in mbList) {
      for (var j = 0; j < mbList[i].length; j++) {

        
        if (mbList[i][j].isshow){
          // console.log(mbList[i][j])
          option = option +","+ mbList[i][j].option_id
        }
      }
    }

    // console.log(option.length)
    option = option.substring(1, option.length)
    // console.log(option)
    wx.setStorageSync("option", option)
    console.log(option)
    if (option == ""){
      wx.showToast({
        title: '请选择至少一项',
        icon:'none',
        duration:1000
      })
    }else{
      var that = this
      let infoOpt = {
        url: '/constitution/matchConstitutions',
        type: 'POST',
        data: {
          options: option,
          patient_id: that.data.patientId
        }
      }
      let infoCb = {}
      infoCb.success = function (res) {
        var rate = res.matchedConstitutionList["标准"]
        var rateJson = res.matchedConstitutionList
        var rateList = []
        var nameList = []
        var constitutionId = []
        for (var o in rate) {
          rateList.push(rate[o].rate)
          nameList.push(rate[o].name)
          constitutionId.push(rate[o].constitution_id)
        }
        wx.setStorageSync("rateList", rateList)
        wx.setStorageSync("rateJson", rateJson)
        wx.setStorageSync("nameList", nameList)
        wx.setStorageSync("firstList", rateList[0])
        wx.setStorageSync("constitutionId", constitutionId)
        // console.log(rateList[0])
        wx.navigateTo({
          url: '../radar/index'
        })
      }
      infoCb.beforeSend = () => { }
      infoCb.complete = () => {

      }
      sendAjax(infoOpt, infoCb, () => {
      });
    }
    

  },
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