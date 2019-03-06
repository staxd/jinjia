// pages/medicalrecord/medicalrecord.js
var url = require('../../config.js')
const sendAjax = require('../../utils/sendAjax.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    curpage:1,
    pagesize:1,
    list:[],
    keywords:"",
    noMore:"暂无内容"
  },
  bindKeyInput: function (e) {
    var that = this

    var inputValue = e.detail.value
      that.setData({
        list: [],
        keywords:inputValue
      })
    // console.log(e.detail.value)
    if (inputValue != "") {
      that.setData({
        noMore: "暂无内容"
      })
      that.getList();
      

    } else {
      that.setData({
        list: [],
        curpage: 1,
        medicine_id: "",
        pagecount: 1,
        noMore:""
      })
      that.getList();
      
    }

  },
  getList: function () {
    var that = this
    let infoOpt = {
      url: '/medicineRecord',
      type: 'POST',
      data: {
        curpage: that.data.curpage,
        keywords:that.data.keywords
      },
    }
    let infoCb = {}
    infoCb.success = function (res) {
      wx.hideToast();
      console.log(res)
      if (that.data.curpage <= res.pagecount) {

        that.setData({
          list: that.data.list.concat(res.medicineRecordList),
          pagecount: res.pagecount
        })

      }

    }
    infoCb.beforeSend = () => { }
    infoCb.complete = () => {

    }
    sendAjax(infoOpt, infoCb, () => {
    });

  },
  toMedicine(e){
    var that = this
    var index = e.currentTarget.dataset.openlist;
    var list = this.data.list;
    var medicine_record_id = parseInt(list[index].medicine_record_id)
    var name = list[index].name
    wx.navigateTo({
      url: 'medicalrecordDetail/medicalrecordDetail?id=' + medicine_record_id + "&title=" + name
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getList();

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

    var that = this;
    var curpage = that.data.curpage;
    curpage++;
    var pagecount = that.data.pagecount;
    if (curpage <= pagecount) {
      wx.showToast({
        title: '正在加载...',
        icon: 'loading',
        duration: 10000
      })
      this.setData({
        curpage,
      })
      this.getList();

    } else {
      wx.showToast({
        title: '到底啦！',
        icon: 'none',
        duration: 1000
      })
    }


  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (options) {
   
  }
})