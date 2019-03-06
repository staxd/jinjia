// pages/index/encyclopedia/encyclopedia.js
var url = require('../../../config.js')
var WxParse = require('../../../wxParse/wxParse.js');
const sendAjax = require('../../../utils/sendAjax.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:""
  },
  getList(){
    var that = this
    let infoOpt = {
      url: '/encyclopedia/detail',
      type: 'GET',
      data: {
        encyclopedia_id:that.data.id
      }
    }
    let infoCb = {}
    infoCb.success = function (res) {
      var article = res.content
      var arr = WxParse.wxParse('article', 'html', article, that, 5)
      that.setData({
        message: res.content
      })
    }
    infoCb.beforeSend = () => { }
    infoCb.complete = () => {

    }
    sendAjax(infoOpt, infoCb, () => {
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: options.title
    })
    this.setData({
      id:options.id
    })
    this.getList()
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