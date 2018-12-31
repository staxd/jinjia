
import * as echarts from '../../../../ec-canvas/echarts';
var url = require('../../../../config.js')
const sendAjax = require('../../../../utils/sendAjax.js')

var app = getApp();
function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = {
    backgroundColor: "#ffffff",
    color: ["#7ED321"],
    tooltip: {},
    silent: true,
    
    textStyle: {                    // 图例的公用文本样式。
      fontSize: 13,
      color: '#fff'
    },
    
    xAxis: {
      show: false
    },
    yAxis: {
      show: false
    },
    radar: {
      // shape: 'circle',
      indicator: [{
        name: '',
        max: 0.055555555555556,
        color: '#4a4a4a'
      },
        {
          name: '',
          max: 0.055555555555556,
          color: '#4a4a4a'

        },
        {
          name: '',
          max: 0.055555555555556,
          color: '#4a4a4a'

        },
        {
          name: '',
          max: 0.055555555555556,
          color: '#4a4a4a'

        },
        {
          name: '',
          max: 0.055555555555556,
          color: '#4a4a4a'

        }]
    },
    series: [{
      name: '预算',
      type: 'radar',
      data: [{
        value: [],
        name: '预算',
        areaStyle: {                // 单项区域填充样式
          normal: {
            color: '#7ED321'       // 填充的颜色。[ default: "#000" ]
          }
        }
      }
      ]
    }]
  };
  // console.log(option.radar.indicator)
  var matchMedicinesName = app.data.matchedMedicineList
  console.log(matchMedicinesName)
  var rateList = []
  var indicator = []
  for(let i =0 ;i<5;i++){
    if(i<matchMedicinesName.length){
      indicator.push({ 'max': matchMedicinesName[0].rate, 'name': matchMedicinesName[i].medicine_name, "color": '#4a4a4a' })
      rateList.push(matchMedicinesName[i].rate)
    }else{
      indicator.push({ 'max': matchMedicinesName[0].rate, 'name': "", "color": '#4a4a4a' })
      rateList.push(0)
    }
  }
  option.radar.indicator = indicator
  // console.log(rateList)
  option.series[0].data[0].value = rateList

  chart.setOption(option);
  return chart;
}

Page({
  onShareAppMessage: function (res) {
    return {
      title: '',
      path: '/pages/index/index',
      success: function () { },
      fail: function () { }
    }
  },

  /**
   * 页面的初始数据
   */
  data: {
    ec: {
      onInit: initChart
    },
    hide:false,
    okBtn: false
    // symptomInfo
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
  btn1(e){
    var matchMedicinesName = app.data.matchedMedicineList
    // console.log(matchMedicinesName)
    if (matchMedicinesName[0]){
      wx.navigateTo({
        url: 'tongueToDetail/tongueToDetail?id=' + matchMedicinesName[0].medicine_id + "&title=" + matchMedicinesName[0].medicine_name + "&group=3"
      });
    }
    
  },
  btn2(e) {
    var matchMedicinesName = app.data.matchedMedicineList
    // console.log(matchMedicinesName)
    if (matchMedicinesName[1]) {
      wx.navigateTo({
        url: 'tongueToDetail/tongueToDetail?id=' + matchMedicinesName[1].medicine_id + "&title=" + matchMedicinesName[1].medicine_name + "&group=3"
      });
    }

  },
  btn3(e) {
    var matchMedicinesName = app.data.matchedMedicineList
    // console.log(matchMedicinesName)
    if (matchMedicinesName[2]) {
      wx.navigateTo({
        url: 'tongueToDetail/tongueToDetail?id=' + matchMedicinesName[2].medicine_id + "&title=" + matchMedicinesName[2].medicine_name + "&group=3"
      });
    }

  },
  btn4(e) {
    var matchMedicinesName = app.data.matchedMedicineList
    // console.log(matchMedicinesName)
    if (matchMedicinesName[3]) {
      wx.navigateTo({
        url: 'tongueToDetail/tongueToDetail?id=' + matchMedicinesName[3].medicine_id + "&title=" + matchMedicinesName[3].medicine_name + "&group=3"
      });
    }

  },
  btn5(e) {
    var matchMedicinesName = app.data.matchedMedicineList
    // console.log(matchMedicinesName)
    if (matchMedicinesName[4]) {
      wx.navigateTo({
        url: 'tongueToDetail/tongueToDetail?id=' + matchMedicinesName[4].medicine_id + "&title=" + matchMedicinesName[4].medicine_name + "&group=3"
      });
    }

  },
  subBtn(){
    var getInfoId = wx.getStorageSync('getInfoId')
    var matchMedicinesName = app.data.matchedMedicineList
    // console.log(matchMedicinesName)
    var that = this
    let infoOpt = {
      url: '/selfDiagnosis/addArchive',
      type: 'POST',
      data: {
        patient_id: app.data.patient_id,
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