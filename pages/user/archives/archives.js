var url = require('../../../config.js')
const sendAjax = require('../../../utils/sendAjax.js')
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    patient_id:'',
    patientList:[],
    name:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getOpId()
  },
  getOpId:function(){
    var that = this
    let infoOpt = {
      url: '/selfDiagnosis/getPatientList',
      type: 'GET',
      data: {
      }
    }
    let infoCb = {}
    infoCb.success = function (res) {
      // console.log(res.patientList)
      var paList = res.patientList
      var patientList = []
      var headList = []
      for (let i in paList) {
        if (paList[i].is_default == '1') {
          console.log(paList[i])
          headList = paList[i]
        } else {
          patientList.push(paList[i])
        }

      }
      patientList.unshift(headList)
      // console.log(patientList)
      that.setData({
        patientList
      })
    }
    infoCb.beforeSend = () => { }
    infoCb.complete = () => {

    }
    sendAjax(infoOpt, infoCb, () => {
    });
  },
  listDetail:function(e){
    var that = this
    var patientList = that.data.patientList
    var id = e.currentTarget.dataset.id
    var name = e.currentTarget.dataset.name
    // console.log(e)
    
    let infoOpt = {
      url: '/archive',
      type: 'POST',
      data: {
        patient_id:id
      }
    }
    let infoCb = {}
    infoCb.success = function (res) {
      // console.log(res)
      wx.navigateTo({
        url: 'archivesDetail/archivesDetail?title=' + name + '&archiveList=' + JSON.stringify(res.archiveList)
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