

var url = require('../../../../config.js')
const sendAjax = require('../../../../utils/sendAjax.js')
var wxCharts = require('../../../../ec-canvas/wxcharts.js');
var radarChart = null;
var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    hide:false,
    okBtn: false
    // symptomInfo
  },
  touchHandler: function (e) {
    console.log(radarChart.getCurrentDataIndex(e));
  },
  onReady: function (e) {
    var matchMedicinesName = wx.getStorageSync('matchedMedicineList')
  console.log(matchMedicinesName)
    var rateList = [0,0,0,0,0]
  var indicator = ["","","","",""]
    var maxValue = matchMedicinesName[0].rate
    if (maxValue){
      for (let i = 0; i < matchMedicinesName.length; i++) {
        if (i == 0) {
          rateList[0] = matchMedicinesName[i].rate
          indicator[0] = matchMedicinesName[i].medicine_name
        }
        if(i==1){
          rateList[4] = matchMedicinesName[i].rate
          indicator[4] = matchMedicinesName[i].medicine_name
        }
        if (i == 2) {
          rateList[3] = matchMedicinesName[i].rate
          indicator[3] = matchMedicinesName[i].medicine_name
        }
        if (i == 3) {
          rateList[2] = matchMedicinesName[i].rate
          indicator[2] = matchMedicinesName[i].medicine_name
        }
        if (i == 4) {
          rateList[1] = matchMedicinesName[i].rate
          indicator[1] = matchMedicinesName[i].medicine_name
        }
      }
      var windowWidth = 100;
      try {
        var res = wx.getSystemInfoSync();
        windowWidth = res.windowWidth;
      } catch (e) {
        console.error('getSystemInfoSync failed!');
      }
      radarChart = new wxCharts({
        
        canvasId: 'radarCanvas',
        type: 'radar',
        categories: indicator, //name
        series: [{
          name: '',
          data: rateList  //value
        }],
        width: windowWidth,
        height: 220,
        extra: {
          radar: {
            max: maxValue
          },
          pie:{
            offsetAngle:-90
          }
        }
      });
    }else{
      wx.showModal({
        title: '条件缺少',
        content: '',
      })
    }
  
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("11111111111111111111111111111111")
    
    if (options.hide){
      this.setData({
        hide:true
      })
    }
    var symptomInfo = wx.getStorageSync('symptomInfo')//症状列表

    console.log(symptomInfo)

    var tongueList = wx.getStorageSync('tongueList')
    console.log(tongueList)
    
    this.setData({
      symptomInfo,
      tongueList
    })
    
  },

 
  symptomDetail(e){
    
    wx.navigateTo({
      url: 'tongueToDetail/tongueToDetail?id=' + e.currentTarget.dataset.id + "&title=" + e.currentTarget.dataset.name + "&group=0"
    });
  }, 
  tongueDetail(e) {
    console.log(e.currentTarget.dataset.id)
    wx.navigateTo({
      url: 'tongueToDetail/tongueToDetail?id=' + e.currentTarget.dataset.id + "&title=" + e.currentTarget.dataset.name + "&group=1"
    });
  },
  pulseDetail(e) {

    wx.navigateTo({
      url: 'tongueToDetail/tongueToDetail?id=' + e.currentTarget.dataset.id + "&title=" + e.currentTarget.dataset.name + "&group=2"
    });
  },
  btn1(e) {
    var matchMedicinesName = wx.getStorageSync('matchedMedicineList')

    // console.log(matchMedicinesName)
    if (matchMedicinesName[0]){
      wx.navigateTo({
        url: 'tongueToDetail/tongueToDetail?id=' + matchMedicinesName[0].medicine_id + "&title=" + matchMedicinesName[0].medicine_name + "&group=3"
      });
    }
    
  },
  btn2(e) {
    var matchMedicinesName = wx.getStorageSync('matchedMedicineList')

    // console.log(matchMedicinesName)
    if (matchMedicinesName[1]) {
      wx.navigateTo({
        url: 'tongueToDetail/tongueToDetail?id=' + matchMedicinesName[1].medicine_id + "&title=" + matchMedicinesName[1].medicine_name + "&group=3"
      });
    }

  },
  btn3(e) {
    var matchMedicinesName = wx.getStorageSync('matchedMedicineList')

    // console.log(matchMedicinesName)
    if (matchMedicinesName[2]) {
      wx.navigateTo({
        url: 'tongueToDetail/tongueToDetail?id=' + matchMedicinesName[2].medicine_id + "&title=" + matchMedicinesName[2].medicine_name + "&group=3"
      });
    }

  },
  btn4(e) {
    var matchMedicinesName = wx.getStorageSync('matchedMedicineList')

    // console.log(matchMedicinesName)
    if (matchMedicinesName[3]) {
      wx.navigateTo({
        url: 'tongueToDetail/tongueToDetail?id=' + matchMedicinesName[3].medicine_id + "&title=" + matchMedicinesName[3].medicine_name + "&group=3"
      });
    }

  },
  btn5(e) {
    var matchMedicinesName = wx.getStorageSync('matchedMedicineList')

    // console.log(matchMedicinesName)
    if (matchMedicinesName[4]) {
      wx.navigateTo({
        url: 'tongueToDetail/tongueToDetail?id=' + matchMedicinesName[4].medicine_id + "&title=" + matchMedicinesName[4].medicine_name + "&group=3"
      });
    }

  },
  subBtn(){
    var getInfoId = wx.getStorageSync('getInfoId')
    var matchMedicinesName = wx.getStorageSync('matchedMedicineList')
    // console.log(matchMedicinesName)
    var that = this
    let infoOpt = {
      url: '/selfDiagnosis/addArchive',
      type: 'POST',
      data: {
        patient_id: wx.getStorageSync("patient_id"),
        symptoms: getInfoId,
        matchedMedicineList: JSON.stringify(matchMedicinesName)
      }
    }
    let infoCb = {}
    infoCb.success = function (res) {
      // console.log(res)
      that.setData({
        okBtn: true
      })
      var timer = setTimeout(function () {
        wx.switchTab({
          url: '/pages/index/index',
        })
      }, 2000);

    }
    infoCb.beforeSend = () => { }
    infoCb.complete = () => {

    }
    sendAjax(infoOpt, infoCb, () => {
    });
   
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */

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