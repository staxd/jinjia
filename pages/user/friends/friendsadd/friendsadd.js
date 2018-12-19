
var url = require('../../../../config.js')
const sendAjax = require('../../../../utils/sendAjax.js')


Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { name: 'male', value: '男'},
      { name: 'female', value: '女'},
    ],
    sex:"",
    name:"",
    age:"",
    medical_history:""
  },
  radioChange: function (e) {
    var sex = e.detail.value
    this.setData({
      sex
    })
  },
  userName(e){
    var name = e.detail.value
    this.setData({
      name
    })
  },
  number(e){
    var age = e.detail.value
    this.setData({
      age
    })
  },
  userProposal(e){
    var medical_history = e.detail.value
    this.setData({
      medical_history
    })

  },
  addBtn(e){
    var that= this
    var name = that.data.name
    var sex = that.data.sex
    var age = that.data.age
    var medical_history = that.data.medical_history
    let infoOpt = {
      url: '/selfDiagnosis/addPatient',
      type: 'POST',
      data: {
        name,
        sex,
        age,
        medical_history
      }
    }
    let infoCb = {}
    infoCb.success = function (res) {
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
        var pages = getCurrentPages();
        var currPage = pages[pages.length - 1];   //当前页面
        var prevPage = pages[pages.length - 2];  //上一个页面

        //直接调用上一个页面对象的setData()方法，把数据存到上一个页面中去
        prevPage.setData({
          patientList
        });
        wx.navigateBack({
          delta: 1
        })
      }
      infoCb.beforeSend = () => { }
      infoCb.complete = () => {

      }
      sendAjax(infoOpt, infoCb, () => {
      });
    }
    infoCb.beforeSend = () => { }
    infoCb.complete = () => {

    }
    sendAjax(infoOpt, infoCb, () => {
    });
  }
  ,
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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