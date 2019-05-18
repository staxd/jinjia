//index.js
//获取应用实例
let app = getApp()
var url = require('../../config.js')
const sendAjax = require('../../utils/sendAjax.js')
Page({
  data: {
   cantodetail:true,
    jingfang: [],
    bottomHeight:0
  },
  toDetail(res){
    var that = this
    var callback = {}
    callback.beforeSend = function () {
      that.setData({
        cantodetail: false
      })
    }
    callback.success = function () {
      if (wx.getStorageSync('show')){
        wx.navigateTo({
          url: res
        })
        that.setData({
          cantodetail: true
        })
      }
    }
    app.login(callback)
  },
  tizhiBtn() {
    this.toDetail('/pages/physical/physical')
  },
  zizhenBtn() {
    this.toDetail('/pages/autognosis/autognosis')
  },
  zhongyaoBtn() {
    this.toDetail('/pages/medicine/medicine')
  },
  ganmaoBtn() {
    this.toDetail('/pages/cold/cold')
  },
  getEncyclopediaList(){
    var that = this
    let infoOpt = {
      url: '/encyclopedia',
      type: 'POST',
      data: {
        curpage:1,
        pagesize:999
      }
    }
    let infoCb = {}
    infoCb.success = function (res) {
      that.setData({
        jingfang: res.encyclopediaList
      })
    }
    infoCb.beforeSend = () => { }
    infoCb.complete = () => {

    }
    sendAjax(infoOpt, infoCb, () => {
    });
  },
  getindex(){
    var that = this
    let infoOpt = {
      url: '/home',
      type: 'GET',
      data: {
      }
    }
    let infoCb = {}
    infoCb.success = function (res) {
      console.log(res.bannerList)
      that.setData({
        imgs:res.bannerList
      })
    }
    infoCb.beforeSend = () => { }
    infoCb.complete = () => {

    }
    sendAjax(infoOpt, infoCb, () => {
    });
  },
  toEncyclopedia(e){
    var name = e.currentTarget.dataset.name
    var id = e.currentTarget.dataset.id
    
    wx.navigateTo({
      url: '/pages/index/encyclopedia/encyclopedia?id=' + id + "&title=" + name
    })
  },
  onLoad: function (res) {
    
    console.log(res)
    
    if (res.inviteicode){
      wx.setStorageSync("inviteicode", res.inviteicode)
    }
    this.getindex()
    this.getEncyclopediaList()
    
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log(wx.getSystemInfoSync())
    var height = wx.getSystemInfoSync().windowHeight-180-8-8
    this.setData({
      bottomHeight:height
    })
    wx.removeStorageSync("patientInfolist")
    wx.removeStorageSync("constitutionId")
    wx.removeStorageSync("firstList")
    wx.removeStorageSync("nameList")
    wx.removeStorageSync("rateJson")
    wx.removeStorageSync("rateList")
    wx.removeStorageSync("getInfoId")
    wx.removeStorageSync("matchedMedicineList")
    wx.removeStorageSync("tongueList")
    wx.removeStorageSync("symptomInfo")
    wx.removeStorageSync("patientInfolist")
    wx.removeStorageSync("option")
    wx.removeStorageSync("infoList")

  },
  getUserInfo: function(e) {
  },
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
