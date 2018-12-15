

var url = require('../../config.js')
const sendAjax = require('../../utils/sendAjax.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    curpage:1,
    medicine_id:"",
    pagecount:1
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    this.getList();


  },
  getList:function(){
    var that = this
    let infoOpt = {
      url: '/medicine',
      type: 'POST',
      data: {
        curpage: that.data.curpage
      },
    }
    let infoCb = {}
    infoCb.success = function (res) {
      wx.hideToast();
      console.log(res)
      that.setData({
        list: that.data.list.concat(res.medicineList),
        pagecount: res.pagecount
      })
    }
    infoCb.beforeSend = () => { }
    infoCb.complete = () => {

    }
    sendAjax(infoOpt, infoCb, () => {
    });

  },
  toClassical: function (e) {

    var that = this
    var index = e.currentTarget.dataset.openlist;
    var list = this.data.list;
    var medicine_id = parseInt(list[index].medicine_id)
    var name = list[index].name
    wx.navigateTo({
      url: 'classicalDetail/classicalDetail?id=' + medicine_id +"&title=" + name
    });
  },
  bindKeyInput: function (e) {
    var that = this

    var inputValue = e.detail.value
    // console.log(e.detail.value)
    if (inputValue != ""){
      let infoOpt = {
        url: '/medicine',
        type: 'POST',
        data: {
          keywords: inputValue
        },
      }
      let infoCb = {}
      infoCb.success = function (res) {

        // console.log(res)
        that.setData({
          list: res.medicineList
        })
      }
      infoCb.beforeSend = () => { }
      infoCb.complete = () => {

      }
      sendAjax(infoOpt, infoCb, () => {
      });

    }else{
      that.setData({
        list: [],
        curpage: 1,
        medicine_id: "",
        pagecount: 1
      })
      that.getList();
    }
    
  },
  symptom: function () {
    // console.log('12321313');
    wx.navigateTo({
      url: 'symptom/symptom'
    })

  }, disease: function () {
    // console.log('12321313');
    wx.navigateTo({
      url: 'disease/disease'
    })

  }, sickness: function () {
    // console.log('12321313');
    wx.navigateTo({
      url: 'sickness/sickness'
    })

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
    var  pagecount= that.data.pagecount;
    if (curpage < pagecount){
      wx.showToast({
        title: '正在加载...',
        icon: 'loading',
        duration: 10000
      })
      this.setData({
        curpage,
      })
      this.getList();

    }
    
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})