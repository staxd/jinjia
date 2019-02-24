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
      if (headList.length != 0) {
        patientList.unshift(headList)
      }
      // console.log(patientList)
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
      console.log(patientList[j].patient_id)
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
      console.log(res)
      var time = util.formatTime(new Date());
      var year = parseInt(time.substring(0, 4))
      for (let i = year; i >= parseInt(res.firstYear); i--) {
        console.log(i)
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
          console.log(res)
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
    
    console.log(patientInfolist)
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
    var that = this;
    // 设置菜单中的转发按钮触发转发事件时的转发内容
    var inviteicode = wx.getStorageSync("icode")
    console.log(inviteicode)
    var shareObj = {
      title: "",        // 默认是小程序的名称(可以写slogan等)
      path: '/pages/index/index?inviteicode=' + inviteicode,        // 默认是当前页面，必须是以‘/’开头的完整路径
      imageUrl: 'https://jinjiazy.com/public/jf.jpg',     //自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径，支持PNG及JPG，不传入 imageUrl 则使用默认截图。显示图片长宽比是 5:4
      success: function (res) {
        // 转发成功之后的回调
        if (res.errMsg == 'shareAppMessage:ok') {
        }
      },
      fail: function () {
        // 转发失败之后的回调
        if (res.errMsg == 'shareAppMessage:fail cancel') {
          // 用户取消转发
        } else if (res.errMsg == 'shareAppMessage:fail') {
          // 转发失败，其中 detail message 为详细失败信息
        }
      },
      complete: function () {
        // 转发结束之后的回调（转发成不成功都会执行）
      }
    };
    // 来自页面内的按钮的转发
    if (options.from == 'button') {
      var eData = options.target.dataset;
      console.log(eData.name);     // shareBtn
      // 此处可以修改 shareObj 中的内容
      shareObj.path = '/pages/index/index?inviteicode=' + inviteicode;
    }
    // 返回shareObj
    return shareObj;
  }
})