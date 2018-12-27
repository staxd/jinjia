var url = require('../../config.js')
const sendAjax = require('../../utils/sendAjax.js')
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 1,
    mbList: [],
    optionId:"",
    patientId:"",
    nonceStr: "",
    package: "",
    paySign: "",
    signType: "",
    timeStamp:"",
  },
  getZhifustate(){
    var that = this
    wx.request({
      url: url.host + '/constitution/matchConstitutions',
      method: "POST",
      data:{
        options: '169',
        patient_id: '169'
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'api_token': getApp().data.api_token

      },
      success(res) {
          if (res.data.code == 406) {
            console.log('aaaa')
            that.PostSelfDiagnosis()

          }

        

      },
      fail(){
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
  },
  clickSelect: function (e) {
    // console.log(e)
    var _this = this;

    var option_id = e.currentTarget.dataset.id
    var isshow = e.currentTarget.dataset.isshow
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
  PostSelfDiagnosis(){
    var that = this
    let infoOpt = {
      url: '/order/selfDiagnosis',
      type: 'POST',
      data: {
      }
    }
    let infoCb = {}
    infoCb.success = function (res) {
        console.log(res)
      wx.requestPayment(
        {   
          'appId': "wx86f0a2d39b2e279e",
          nonceStr: res.nonceStr,
          package: res.package,
          paySign: res.paySign,
          signType: res.signType,
          timeStamp:""+ res.timeStamp,
          'success': function (res) { 
            console.log(res)
          },
          'fail': function (res) { },
          'complete': function (res) {console.log(res) }
        })
    }
    infoCb.beforeSend = () => { }
    infoCb.complete = () => {

    }
    sendAjax(infoOpt, infoCb, () => {
    });
  },
  onLoad: function (options) {
    
    
    app.getPatientId();
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
    this.getZhifustate();
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