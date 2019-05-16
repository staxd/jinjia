var url = require('../../../config.js')
const sendAjax = require('../../../utils/sendAjax.js')
const util = require('../../../utils/util.js')

var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    patient_id:'',
    patientList:[],
    name:'',
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
      var paList = res.patientList
      var patientList = []
      var headList = []
      for (let i in paList) {
        if (paList[i].is_default == '1') {
          headList = paList[i]
        } else {
          patientList.push(paList[i])
        }

      }
      if (headList.length != 0) {
        patientList.unshift(headList)
      }
      that.setData({
        patientList
      })
      that.getInfo()
    }
    infoCb.beforeSend = () => { }
    infoCb.complete = () => {

    }
    sendAjax(infoOpt, infoCb, () => {
    });
  },
  getInfo(){
    var that = this
    var patientList = that.data.patientList
    var patientInfolist = []
    for(let j in patientList){
      patientInfolist[j]={}
      let infoOpt = {
      url: '/archive',
      type: 'POST',
      data: {
        patient_id: patientList[j].patient_id,
        firstYear:"2000"
      }
    }
      let infoCb = {}
    infoCb.success = function (res) {
      var time = util.formatTime(new Date());
      var year = parseInt(time.substring(0, 4))
      for (let i = year; i >= parseInt(res.firstYear); i--) {
        let infoOpt = {
          url: '/archive',
          type: 'POST',
          data: {
            patient_id: patientList[j].patient_id,
            year: ""+i
          }
        }
        let infoCb = {}
        infoCb.success = function (res) {
          patientInfolist[j][""+i]=[]
          patientInfolist[j]["" + i] = res.archiveList
          that.setData({
            patientInfolist
          })
          wx.setStorageSync('patientInfolist', patientInfolist)
        }
        infoCb.beforeSend = () => { }
        infoCb.complete = () => {

        }
        sendAjax(infoOpt, infoCb, () => {
        });
      }
      











    }
      infoCb.beforeSend = () => { }
    infoCb.complete = () => {

    }
    sendAjax(infoOpt, infoCb, () => {})

    }
    
  },
  listDetail:function(e){
    var that = this
    var patientInfolist = wx.getStorageSync('patientInfolist')
    var id = e.currentTarget.dataset.id
    var name = e.currentTarget.dataset.name
    var time = util.formatTime(new Date());
    var year = parseInt(time.substring(0, 4))
    if (patientInfolist){
      for (let i in patientInfolist) {
        for (let j in patientInfolist[i]) {
          for (let z in patientInfolist[i][j]) {
            if (patientInfolist[i][j][z]['isshow'] == true) {
              patientInfolist[i][j][z]['isshow'] = true
            } else {
              patientInfolist[i][j][z]['isshow'] = false

            }
            if (j == year) {
              patientInfolist[i][j][z]['showNmlgb'] = true
            } else {
              patientInfolist[i][j][z]['showNmlgb'] = false
            }


          }
        }
      }
      wx.navigateTo({
        url: 'archivesDetail/archivesDetail?title=' + name + '&patientInfolist=' + JSON.stringify(patientInfolist[id])
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
  onShareAppMessage: function (options) {
    
  }
})