var url = require('../../../config.js')
const sendAjax = require('../../../utils/sendAjax.js')

var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    symptomList:[],
    infoId:""
  },
  getSLi(){
    var that = this
    let infoOpt = {
      url: '/selfDiagnosis/getTonguePulseSymptomList',
      type: 'GET',
      data: {
      }
    }
    let infoCb = {}
    infoCb.success = function (res) {
      var symptomList = res.symptomList
      for (let i in symptomList){
        for (let j in symptomList[i]){
          symptomList[i][j]['select'] = false
        }
      }
      // console.log(symptomList)

      that.setData({
        symptomList
      })
    }
    infoCb.beforeSend = () => { }
    infoCb.complete = () => {

    }
    sendAjax(infoOpt, infoCb, () => {
    });
  },
  clickSelect(e){
    var that = this
    var id = e.currentTarget.dataset.id
    var key = e.currentTarget.dataset.key
    var symptomList = that.data.symptomList
    var num = that.data.num



    if(key !="脉象"){
      for (let i in symptomList[key]){
        if(i == id){
          symptomList[key][i].select = !symptomList[key][i].select
        }else{
          symptomList[key][i].select = false
        }
      }
    }else{
      var num = 0 
      for (let i in symptomList[key]) {
        if (i == id) {
          symptomList[key][id].select = !symptomList[key][id].select
        }
        if (symptomList[key][i].select == true){
          num++
          if(num > 2){
            console.log(id)
              symptomList[key][id].select = !symptomList[key][id].select
            // console.log("aaaS")
            wx.showToast({
              title: '最多选择两个',
              icon: 'none',
              duration: 2000
            })
          }
        }

      }

      

    }
    that.setData({
      symptomList
    })
    // console.log(symptomList)
  },
  subBtn(){
    console.log(this.data.symptomList)
    var symptomList = this.data.symptomList
    var tongueList={}
    var tonguePic = []
    var pulseCondition =[]
    var symptomId =""
    for (let i in symptomList){
      
      for (let j in symptomList[i]){
        if (symptomList[i][j].select){
          symptomId = symptomId + "," + symptomList[i][j].symptom_id
          // console.log(symptomId)
          
          if (symptomList[i][j].group == "脉象"){
            console.log(symptomList[i][j] )
            pulseCondition.push({ 'name': symptomList[i][j].name, 'related_id': symptomList[i][j].related_id })
              tongueList["pulse"] = pulseCondition
            
            
          }else{
            tonguePic.push({ 'name': symptomList[i][j].name, 'related_id': symptomList[i][j].related_id})
            tongueList["tongue"] = tonguePic
          }
          
        }
        
      }

    }
    console.log(tongueList)
    wx.setStorageSync('tongueList', tongueList)//舌脉列表获取
      var infoId = this.data.infoId
      infoId = infoId.substring(1, infoId.length)
      symptomId = symptomId.substring(1, symptomId.length)
    if (symptomId == ""){
      wx.showToast({
        title: '请选择至少一项',
        icon: 'none',
        duration: 1000
      })
    }else{
      var symptomId = infoId + "," + symptomId
      wx.setStorageSync('getInfoId', symptomId)
      console.log(symptomId)

      let infoOpt = {
        url: '/selfDiagnosis/matchMedicines',
        type: 'POST',
        data: {
          patient_id: app.data.patient_id,
          symptoms: symptomId
        }
      }
      let infoCb = {}
      infoCb.success = function (res) {
        console.log(res.matchedMedicineList)
        app.data.matchedMedicineList = res.matchedMedicineList
        wx.navigateTo({
          url: 'tongueDetail/tongueDetail'
        })

      }
      infoCb.beforeSend = () => { }
      infoCb.complete = () => {

      }
      sendAjax(infoOpt, infoCb, () => {
      });



      
    
    }
      
    
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  getZhifustate() {
    var that = this
    wx.request({
      url: url.host + '/selfDiagnosis/matchMedicines',
      method: "POST",
      data: {
        symptoms: '169',
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
  },
  PostSelfDiagnosis() {
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
          timeStamp: "" + res.timeStamp,
          'success': function (res) {
            console.log(res)
          },
          'fail': function (res) { },
          'complete': function (res) { console.log(res) }
        })
    }
    infoCb.beforeSend = () => { }
    infoCb.complete = () => {

    }
    sendAjax(infoOpt, infoCb, () => {
    });
  },
  onLoad: function (options) {
    this.getZhifustate()
    this.getSLi()
    var infoId = options.infoId
    this.setData({
      infoId
    
    })
    
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