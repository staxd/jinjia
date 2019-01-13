var WxParse = require('../../../wxParse/wxParse.js');
const sendAjax = require('../../../utils/sendAjax.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    message: [],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    let infoOpt = {
      url: '/page/index/goldrule',
      type: 'GET',
      data: {
      },
      header: {
        'content-type': 'application/json',
      },
    }
    let infoCb = {}
    infoCb.success = function (data) {
      // console.log(data);
      var article = data.content
      var arr = WxParse.wxParse('article', 'html', article, that, 30)
      that.setData({
        message: data.content
      })
      // console.log(that.data.message)
    }
    sendAjax(infoOpt, infoCb, () => {
      // that.onLoad()
      // wx.setStorageSync('G_needUploadIndex', true)
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