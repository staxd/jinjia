var url = require('../../../config.js')
const sendAjax = require('../../../utils/sendAjax.js')

var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    symptomList:[],
    infoId:"",
    fenxiang: false,
    longTap:false,
    canClick:true
  },
  longTap: function (e) {
    var that = this
    var relatedid = e.currentTarget.dataset.relatedid
    var name = e.currentTarget.dataset.name
    wx.navigateTo({
      url: 'tongueDetail/tongueToDetail/tongueToDetail?id=' + relatedid + "&title=" + name + "&group=2"
    });
    this.setData({
      longTap:true
    })
  },
  tohelp(){
    wx.navigateTo({
      url: '/pages/user/help/help',
    })
  },
  fenxiangClose() {
    this.setData({
      fenxiang: false
    })
  },
  subBtn() {
    var symptomList = this.data.symptomList
    var tongueList = {}
    var tonguePic = []
    var pulseCondition = []
    var symptomId = ""
    for (let i in symptomList) {

      for (let j in symptomList[i]) {
        if (symptomList[i][j].select) {
          symptomId = symptomId + "," + symptomList[i][j].symptom_id

          if (symptomList[i][j].group == "脉象") {
            pulseCondition.push({ 'name': symptomList[i][j].name, 'related_id': symptomList[i][j].related_id })
            tongueList["pulse"] = pulseCondition


          } else {
            tonguePic.push({ 'name': symptomList[i][j].name, 'related_id': symptomList[i][j].related_id })
            tongueList["tongue"] = tonguePic
          }

        }

      }

    }
    var that = this
    wx.setStorageSync('tongueList', tongueList)//舌脉列表获取
    var infoId = this.data.infoId
    infoId = infoId.substring(1, infoId.length)
    symptomId = symptomId.substring(1, symptomId.length)
    if (symptomId == "") {
      wx.showToast({
        title: '请选择至少一项',
        icon: 'none',
        duration: 1000
      })
    }else{
      this.setData({
        fenxiang: true
      })
    }
    
  },
  getSLi(){
    var that = this
    let infoOpt = {
      url: '/selfDiagnosis/getTonguePulseSymptomList',
      type: 'GET',
      data: {
      }
    }
    let infoCb = {}
    infoCb.success = function (res) {
      var symptomList = res.symptomList
      for (let i in symptomList){
        for (let j in symptomList[i]){
          symptomList[i][j]['select'] = false
        }
      }

      that.setData({
        symptomList
      })
    }
    infoCb.beforeSend = () => { }
    infoCb.complete = () => {

    }
    sendAjax(infoOpt, infoCb, () => {
    });
  },
  clickSelect(e){
    var that = this
    var longTap = that.data.longTap
    if(!longTap){
      var id = e.currentTarget.dataset.id
      var key = e.currentTarget.dataset.key
      var symptomList = that.data.symptomList
      var num = that.data.num



      if (key != "脉象") {
        for (let i in symptomList[key]) {
          if (i == id) {
            symptomList[key][i].select = !symptomList[key][i].select
          } else {
            symptomList[key][i].select = false
          }
        }
      } else {
        for (let i in symptomList[key]) {


          if (i == id) {
            if (symptomList[key][id].select) {
              symptomList[key][id].select = false
            } else {
              symptomList[key][id].select = true
              var group = symptomList[key][id].subGroup
              for (let j in symptomList[key]) {
                if (symptomList[key][j].subGroup == group && j != i) {
                  symptomList[key][j].select = false
                }
              }
            }
          }
          var num = 0
          for (let z in symptomList[key]) {
            if (symptomList[key][z].select) {
              // console.log("11")
              num++
              if (num > 2) {
                symptomList[key][id].select = !symptomList[key][id].select
                // console.log("aaaS")
                wx.showToast({
                  title: '最多选择两个',
                  icon: 'none',
                  duration: 2000
                })
              }
            }
          }

        }



      }
      that.setData({
        symptomList
      })
    // console.log(symptomList)
    }
    
  },
  tosubBtn(){
    this.setData({
      canClick:false
    })
    var symptomList = this.data.symptomList
    var tongueList={}
    var tonguePic = []
    var pulseCondition =[]
    var symptomId =""
    for (let i in symptomList){
      
      for (let j in symptomList[i]){
        if (symptomList[i][j].select){
          symptomId = symptomId + "," + symptomList[i][j].symptom_id
          // console.log(symptomId)
          
          if (symptomList[i][j].group == "脉象"){
            pulseCondition.push({ 'name': symptomList[i][j].name, 'related_id': symptomList[i][j].related_id })
              tongueList["pulse"] = pulseCondition
            
            
          }else{
            tonguePic.push({ 'name': symptomList[i][j].name, 'related_id': symptomList[i][j].related_id})
            tongueList["tongue"] = tonguePic
          }
          
        }
        
      }

    }
    var that = this
    wx.setStorageSync('tongueList', tongueList)//舌脉列表获取
      var infoId = this.data.infoId
      infoId = infoId.substring(1, infoId.length)
      symptomId = symptomId.substring(1, symptomId.length)
      var symptomId = infoId + "," + symptomId
      wx.setStorageSync('getInfoId', symptomId)
      that.setData({
        symptomId
      })
      
      wx.request({
        url: url.host + '/selfDiagnosis/matchMedicines',
        method: "POST",
        data: {
          patient_id: wx.getStorageSync("patient_id"),
          symptoms: symptomId
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded',
          'api_token': wx.getStorageSync("api_token")

        },
        success(res) {
          if (res.data.code == 406) {
            that.PostSelfDiagnosis()

          }else if(res.data.code == 200){
            wx.setStorageSync('matchedMedicineList', res.data.matchedMedicineList)

            var timer = setTimeout(function () {
              wx.navigateTo({
                url: 'tongueDetail/tongueDetail'
              })
              that.setData({
                canClick: true
              })
            },500)
          }
        },
        fail() {
          wx.showModal({
            title: '提示',
            content: '服务器连接失败',
            showCancel: false
          });
        },
        complete() {
          // ccallback()
        }
      })

      
    
    
      
    
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  
  PostSelfDiagnosis() {
    var that = this
    let infoOpt = {
      url: '/order/selfDiagnosis',
      type: 'POST',
      data: {
      }
    }
    let infoCb = {}
    infoCb.success = function (res) {
      if(res.is_pay==0){
        wx.requestPayment(
          {
            'appId': "wx86f0a2d39b2e279e",
            nonceStr: res.nonceStr,
            package: res.package,
            paySign: res.paySign,
            signType: res.signType,
            timeStamp: "" + res.timeStamp,
            'success': function (res) {
              wx.request({
                url: url.host + '/selfDiagnosis/matchMedicines',
                method: "POST",
                data: {
                  patient_id: wx.getStorageSync("patient_id"),
                  symptoms: that.data.symptomId
                },
                header: {
                  'content-type': 'application/x-www-form-urlencoded',
                  'api_token': wx.getStorageSync("api_token")

                },
                success(res) {
                  if(res.data.code == 200) {
                    wx.setStorageSync('matchedMedicineList', res.data.matchedMedicineList)
                    // wx.setStorageSync('matchedMedicineList', res.data.matchedMedicineList)
                    var timer = setTimeout(function(){
                      wx.navigateTo({
                      url: 'tongueDetail/tongueDetail'
                    })
                      that.setData({
                        canClick: true
                      })
                    },500)
                  }
                },
                fail() {
                  wx.showModal({
                    title: '提示',
                    content: '服务器连接失败',
                    showCancel: false
                  });
                },
                complete() {
                  // ccallback()
                }
              })
            },
            'fail': function (res) { },
            'complete': function (res) {
              that.setData({
                canClick: true
              })
               }
          })
      }else{
        wx.showToast({
      title: '代金券使用成功！',
      icon: 'success',
      duration: 1200
        })
        var timer = setTimeout(function () {
        wx.request({
          url: url.host + '/selfDiagnosis/matchMedicines',
          method: "POST",
          data: {
            patient_id: wx.getStorageSync("patient_id"),
            symptoms: that.data.symptomId
          },
          header: {
            'content-type': 'application/x-www-form-urlencoded',
            'api_token': wx.getStorageSync("api_token")

          },
          success(res) {
            if (res.data.code == 200) {
              wx.setStorageSync('matchedMedicineList', res.data.matchedMedicineList)
              // wx.setStorageSync('matchedMedicineList', res.data.matchedMedicineList)
              var timer = setTimeout(function () {
                wx.navigateTo({
                  url: 'tongueDetail/tongueDetail'
                })
                that.setData({
                  canClick: true
                })
              }, 500)
            }
          },
          fail() {
            wx.showModal({
              title: '提示',
              content: '服务器连接失败',
              showCancel: false
            });
          },
          complete() {
            // ccallback()
          }
        })
        },500)
      }
      
    }
    infoCb.beforeSend = () => { }
    infoCb.complete = () => {

    }
    sendAjax(infoOpt, infoCb, () => {
    });
  },
  onLoad: function (options) {
    this.getSLi()
    var infoId = options.infoId
    this.setData({
      infoId
    
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