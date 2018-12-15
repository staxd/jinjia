

var url = require('../../../../config.js')
const sendAjax = require('../../../../utils/sendAjax.js')
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
    var that = this
    let infoOpt = {
      url: '/Medicine/category',
      type: 'POST',
      data: {
        class: 'sickness',
        pid: options.id
      }
    }
    let infoCb = {}
    infoCb.success = function (res) {
      // console.log(res)
      that.setData({
        list: res.categoryList
      })
    }
    infoCb.beforeSend = () => { }
    infoCb.complete = () => {

    }
    sendAjax(infoOpt, infoCb, () => {
    });


  },
  medicineListIndex: function (e) {
    var that = this
    var medicineListIndex = e.currentTarget.dataset.openlist;
      that.setData({
        medicineListIndex
      })
    

  },
  listIndex: function (e) {
    var that = this
    var listIndex = e.currentTarget.dataset.openlist;
    var medicineListIndex = that.data.medicineListIndex

    var list = this.data.list;
    var medicine_id = parseInt(list[listIndex].medicineList[medicineListIndex].medicine_id)
    var name = list[listIndex].medicineList[medicineListIndex].name
    wx.navigateTo({
      url: 'sicknessDetail/sicknessDetail?id=' + medicine_id + "&title=" + name
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