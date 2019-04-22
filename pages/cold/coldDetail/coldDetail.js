// pages/cold/coldDetail/coldDetail.js
var url = require('../../../config.js')
const sendAjax = require('../../../utils/sendAjax.js')

var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    matchedDiseaseInfo:{},
    symptoms:"",
    show:'true'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      symptoms:options.id,
      show:options.show
    })
    this.getSLi(options.id)
  },
  getSLi(id) {
    var that = this
    let infoOpt = {
      url: '/disease/matchDisease',
      type: 'POST',
      data: {
        symptoms:id,
        patient_id: wx.getStorageSync('patient_id')
      }
    }
    let infoCb = {}
    infoCb.success = function (res) {
      var matchedDiseaseInfo = res.matchedDiseaseInfo
      that.setData({
        matchedDiseaseInfo
      })
    }
    infoCb.beforeSend = () => { }
    infoCb.complete = () => {

    }
    sendAjax(infoOpt, infoCb, () => {
    });
  },
  subBtn() {
    var that = this
    var symptoms = that.data.symptoms
    var matchedDiseaseInfo = that.data.matchedDiseaseInfo
    let infoOpt = {
      url: '/disease/addArchive',
      type: 'POST',
      data: {
        symptoms,
        patient_id: wx.getStorageSync('patient_id'),
        matchedDiseaseInfo
      }
    }
    let infoCb = {}
    infoCb.success = function (res) {
      that.setData({
        okBtn: true
      })
      var timer = setTimeout(function () {
        wx.switchTab({
          url: '/pages/index/index',
        })
      }, 2000);
    }
    infoCb.beforeSend = () => { }
    infoCb.complete = () => {

    }
    sendAjax(infoOpt, infoCb, () => {
    });
  },
  disDetail(e){
    var type = e.currentTarget.dataset.type
    var id = e.currentTarget.dataset.id
    var title = e.currentTarget.dataset.title
    if(type == '0'){
      wx.navigateTo({
        url: '/pages/autognosis/tongue/tongueDetail/tongueToDetail/tongueToDetail?group=3&&title=' + title + '&&id=' + id,
      })
    }else if(type == '1'){
      wx.navigateTo({
        url: '/pages/autognosis/tongue/tongueDetail/tongueToDetail/tongueToDetail?group=4&&title=' + title + '&&id=' + id,
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