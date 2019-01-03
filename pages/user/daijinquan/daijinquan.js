var url = require('../../../config.js')
const sendAjax = require('../../../utils/sendAjax.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    status:[{
        name:"未使用",
      select:true,
      index:0
    }, {
        name: "已使用",
        select:false,
        index:1
      }, {
        name: "已失效",
        select:false,
        index:2
      }]
  },
  quanSelect(e){
    // console.log(e.currentTarget.dataset.id)
    var id = e.currentTarget.dataset.id
    var status = this.data.status
    for(let i in status){
      if(i == id){
        status[i].select = true
      }else{
        status[i].select = false
      }
    }
    this.setData({
      status
    })
  },
  getCouponList0(){
    var that = this
    let infoOpt = {
      url: '/order/userCouponList',
      type: 'POST',
      data: {
        type:0,
        curpage:1,
        pagesize:1000
      }
    }
    let infoCb = {}
    infoCb.success = function (res) {
      console.log(res)
      that.setData({
        userCouponList0: res.userCouponList
      })
    }
    infoCb.beforeSend = () => { }
    infoCb.complete = () => {

    }
    sendAjax(infoOpt, infoCb, () => {
    });
  },
  getCouponList1() {
    var that = this
    let infoOpt = {
      url: '/order/userCouponList',
      type: 'POST',
      data: {
        type: 1,
        curpage: 1,
        pagesize: 1000
      }
    }
    let infoCb = {}
    infoCb.success = function (res) {
      console.log(res)
      that.setData({
        userCouponList1: res.userCouponList
      })
    }
    infoCb.beforeSend = () => { }
    infoCb.complete = () => {

    }
    sendAjax(infoOpt, infoCb, () => {
    });
  },
  getCouponList2() {
    var that = this
    let infoOpt = {
      url: '/order/userCouponList',
      type: 'POST',
      data: {
        type: 2,
        curpage: 1,
        pagesize: 1000
      }
    }
    let infoCb = {}
    infoCb.success = function (res) {
      console.log(res)
      that.setData({
        userCouponList2: res.userCouponList
      })
    }
    infoCb.beforeSend = () => { }
    infoCb.complete = () => {

    }
    sendAjax(infoOpt, infoCb, () => {
    });
  },
  gozizhen(){
    wx.navigateTo({
      url: '/pages/autognosis/autognosis',
    })
  },
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
    this.getCouponList0()
    this.getCouponList1()
    this.getCouponList2()
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