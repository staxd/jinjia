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