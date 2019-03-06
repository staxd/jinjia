import * as echarts from '../../ec-canvas/echarts';
var url = require('../../config.js')
const sendAjax = require('../../utils/sendAjax.js')

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
    silent:true,
    xAxis: {
      show: false
    },
    yAxis: {
      show: false
    },
    textStyle: {                    // 图例的公用文本样式。
      fontSize: 17,
      color: '#fff'
    },
    radar: {
      // shape: 'circle',
      indicator: [{
        name: '食品',
        max: 1,
        color: '#4a4a4a',
        
      },
      {
        name: '玩具',
        max: 1,
        color: '#4a4a4a'

      },
      {
        name: '服饰',
        max: 1,
        color: '#4a4a4a'

      },
      {
        name: '绘本',
        max: 1,
        color: '#4a4a4a'

      },
      {
        name: '医疗',
        max: 1,
        color: '#4a4a4a'

      },
      {
        name: '门票',
        max: 1,
        color: '#4a4a4a'

        },
        {
          name: '门票',
          max: 1,
          color: '#4a4a4a'

        },
        {
          name: '门票',
          max: 1,
          color: '#4a4a4a'

        },
        {
          name: '门票',
          max: 1,
          color: '#4a4a4a'

        }
        
      ]
    },
    series: [{
      name: '预算',
      type: 'radar',
      
      data: [{
        value: [10000],
        name: '预算',
        areaStyle: {                // 单项区域填充样式
          normal: {
            color: '#dcf2da'       // 填充的颜色。[ default: "#000" ]
          }
        }
      }
      ]
    }]
  };
  var indicator = option.radar.indicator
  for(var o in indicator){
    var firstList = wx.getStorageSync("firstList")
    var nameList = wx.getStorageSync("nameList")
    if(firstList!=0){
      indicator[o].max = firstList
    }
    indicator[o].name = nameList[o]
    
  }
  
  var rateList = wx.getStorageSync("rateList")
  var key = 0
  for(let j in rateList){
    if(rateList[j]==0){
      key++
    }
  }
  console.log(rateList)
  if(key!=rateList.length){
    option.series[0].data[0].value = rateList
  }
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
  data: {
    hide:false,
    ec: {
      onInit: initChart
    }
  },

  btn1(e) {
    console.log(e)
    var constitutionId = wx.getStorageSync("constitutionId")
    var nameList = wx.getStorageSync("nameList")
    wx.navigateTo({
      url: 'index/radarDetail/radarDetail?id=' + constitutionId[0] + "&title=" + nameList[0]
    });
  },

  btn2() {
    var constitutionId = wx.getStorageSync("constitutionId")
    var nameList = wx.getStorageSync("nameList")
    wx.navigateTo({
      url: 'index/radarDetail/radarDetail?id=' + constitutionId[1] + "&title=" + nameList[1]
    });
  },

  btn3() {
    var constitutionId = wx.getStorageSync("constitutionId")
    var nameList = wx.getStorageSync("nameList")
    wx.navigateTo({
      url: 'index/radarDetail/radarDetail?id=' + constitutionId[2] + "&title=" + nameList[2]
    });
  },

  btn4() {
    var constitutionId = wx.getStorageSync("constitutionId")
    var nameList = wx.getStorageSync("nameList")
    wx.navigateTo({
      url: 'index/radarDetail/radarDetail?id=' + constitutionId[3] + "&title=" + nameList[3]
    });
  },

  btn5() {
    var constitutionId = wx.getStorageSync("constitutionId")
    var nameList = wx.getStorageSync("nameList")
    wx.navigateTo({
      url: 'index/radarDetail/radarDetail?id=' + constitutionId[4] + "&title=" + nameList[4]
    });
  },

  btn6() {
    var constitutionId = wx.getStorageSync("constitutionId")
    var nameList = wx.getStorageSync("nameList")
    wx.navigateTo({
      url: 'index/radarDetail/radarDetail?id=' + constitutionId[5] + "&title=" + nameList[5]
    });
  },

  btn7() {
    var constitutionId = wx.getStorageSync("constitutionId")
    var nameList = wx.getStorageSync("nameList")
    wx.navigateTo({
      url: 'index/radarDetail/radarDetail?id=' + constitutionId[6] + "&title=" + nameList[6]
    });
  },

  btn8() {
    var constitutionId = wx.getStorageSync("constitutionId")
    var nameList = wx.getStorageSync("nameList")
    wx.navigateTo({
      url: 'index/radarDetail/radarDetail?id=' + constitutionId[7] + "&title=" + nameList[7]
    });
  },

  btn9() {
    var constitutionId = wx.getStorageSync("constitutionId")
    var nameList = wx.getStorageSync("nameList")
    wx.navigateTo({
      url: 'index/radarDetail/radarDetail?id=' + constitutionId[8] + "&title=" + nameList[8]
    });
  },
  onLoad(options){
    console.log(options)
    var hide = options.hide
    if(hide){
      this.setData({
        hide
      })
    }
    
  },
  subBtn(){
    var option = wx.getStorageSync("option")
    var rateJson = wx.getStorageSync("rateJson")
    rateJson = JSON.stringify(rateJson).toString()
    var that = this
    let infoOpt = {
      url: '/constitution/addArchive',
      type: 'POST',
      data: {
        patient_id: wx.getStorageSync("patient_id"),
        symptoms: option,
        matchedConstitutionList: rateJson
      }
    }
    let infoCb = {}
    infoCb.success = function (res) {
      console.log(res)
      that.setData({
        okBtn:true
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
  },onShareAppMessage: function (options) {
   
  }
});
