var url = require('../../../../../config.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
console.log(options)
    wx.setNavigationBarTitle({
      title: options.title
    })
    if(options.group == "0"){
      this.setData({
        web_src: url.host + '/symptom/detail?symptom_id=' + options.id
      })
    }else if (options.group == "1"){
      this.setData({
        web_src: url.host + '/tongue/detail?tongue_id=' + options.id
      })
    } else if (options.group == "2"){
      this.setData({
        web_src: url.host + '/pulse/detail?pulse_id=' + options.id
      })
      var pages = getCurrentPages(); //获取当前页面js里面的pages里的所有信息。
      var currPage = pages[pages.length - 1];   //当前页面
      var prevPage = pages[pages.length - 2];  //-2上一个页面，-3是上上个页面以此类推。

      //直接调用上一个页面对象的setData()方法，把数据存到上一个页面中去
      prevPage.setData({
        longTap:false
      });
    } else if (options.group == "3"){
      this.setData({
        web_src: url.host + '/medicine/detail?medicine_id=' + options.id
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