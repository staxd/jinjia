var url = require('../../../config.js')
const sendAjax = require('../../../utils/sendAjax.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    symptomList:[]
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
            if (symptomList[i][j]){
              pulseCondition.push({ 'name': symptomList[i][j].name, 'related_id': symptomList[i][j].related_id })
              tongueList["pulse"] = pulseCondition
            }
            
          }else{
            tonguePic.push({ 'name': symptomList[i][j].name, 'related_id': symptomList[i][j].related_id})
            tongueList["tongue"] = tonguePic
          }
          
        }
        
      }

    }
    
      var infoId = wx.getStorageSync('infoId')
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
          patient_id: "169",
          symptoms: symptomId
        }
      }
      let infoCb = {}
      infoCb.success = function (res) {
        console.log(res.matchedMedicineList)
        wx.setStorageSync("matchMedicinesName", res.matchedMedicineList)

      }
      infoCb.beforeSend = () => { }
      infoCb.complete = () => {

      }
      sendAjax(infoOpt, infoCb, () => {
      });



      wx.setStorageSync('tongueList', tongueList)//舌脉列表获取
      wx: wx.navigateTo({
        url: 'tongueDetail/tongueDetail'
      })
    
    }
      
    
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSLi()
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