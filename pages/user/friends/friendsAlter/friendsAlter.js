
var url = require('../../../../config.js')
const sendAjax = require('../../../../utils/sendAjax.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    patientList:{},
    items: [
      { name: 'male', value: '男' },
      { name: 'female', value: '女' },
    ],
    sex: "",
    name: "",
    age: "",
    medical_history: ""
  },
  radioChange: function (e) {
    var sex = e.detail.value
    this.setData({
      sex
    })
  },
  userName(e) {
    var name = e.detail.value
    this.setData({
      name
    })
  },
  number(e) {
    var age = e.detail.value
    this.setData({
      age
    })
  },
  userProposal(e) {
    var medical_history = e.detail.value
    this.setData({
      medical_history
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var items = that.data.items
    var patientList = wx.getStorageSync('patientList')
    
    for(let i in items){
      if(items[i].name == patientList.sex){
        items[i]['checked'] = true
      }
    }
    that.setData({
      patientList,
      items
    })
    // console.log(patientList)
  },
  alterBtn(){
    var that = this
    var patientList = that.data.patientList
    var patient_id = patientList.patient_id
    var name = that.data.name
    var sex = that.data.sex
    var age = that.data.age
    var medical_history = that.data.medical_history
    console.log(patientList)
    if(name ==""){
      name = patientList.name
    }
    if (sex == "") {
      sex = patientList.sex
    }
    if (age == "") {
      age = patientList.age
    }
    if (medical_history == "") {
      medical_history = patientList.medical_history
    }
    let infoOpt = {
      url: '/selfDiagnosis/modifyPatient',
      type: 'POST',
      data: {
        patient_id,
        name,
        sex,
        age,
        medical_history
      }
    }
    let infoCb = {}
    infoCb.success = function (res) {
      console.log(res)
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
        if (headList.length!=0){
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
  },
  alterDelect(){
    var that = this
    var patientList = that.data.patientList
    var patient_id = ""
    patient_id = patientList.patient_id
    if (patientList.is_default == "1"){
      wx.showModal({
        title: '温馨提示',
        content: '不允许删除默认亲友哦！',
        showCancel: false
      });
    }else{
      let infoOpt = {
        url: '/selfDiagnosis/deletePatient',
        type: 'POST',
        data: {
          patient_id
        }
      }
      let infoCb = {}
      infoCb.success = function (res) {
        console.log(res)

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