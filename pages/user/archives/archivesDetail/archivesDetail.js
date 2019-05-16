  var url = require('../../../../config.js')
  const sendAjax = require('../../../../utils/sendAjax.js')
  const util = require('../../../../utils/util.js')

var app = getApp();
  Page({

    /**
     * 页面的初始数据
     */
    data: {
      archiveList:[],
      year:'', //获取当前年份
      nameData:[],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

      wx.setNavigationBarTitle({
        title: options.title
      })
      var patientInfolist = JSON.parse(options.patientInfolist)
      var infoList =[]
      for (let i in patientInfolist){
        infoList.unshift(patientInfolist[i])
      }
      var key = 0
      for (let i in infoList) {
        if (infoList[i].length == 0) {
          key++
        }
      }
      if (key == infoList.length) {
        this.setData({
          infoList: []
        })
        return
      }
      var time = util.formatTime(new Date());
      var year = time.substring(0, 4)
      // console.log(year)
      this.setData({
        infoList,
        year,
        patientInfolist
      })
      this.getArchivesList()
    },
    getArchivesList:function(){
      
      var that = this
      var infoList = that.data.infoList

      for (let j in infoList){
      // console.log(infoList[j])
      for (let i = 0; i < infoList[j].length; i++) {
          // console.log(infoList[j][i])
          if (infoList[j][i].type == "constitution") {
            // console.log(i)
            var nameData = infoList[j][i].results["标准"]
            // console.log(nameData)
            infoList[j][i]['name'] = nameData[0].name

          }
        // infoList[j][i].isshow = false
        }
        that.setData({
          infoList
        })
        console.log(infoList)
      }
      
      },
    zizhendetailBtn(e){
      var that = this
      // console.log(e.currentTarget.dataset.index)
      var id = e.currentTarget.dataset.index

      let infoOpt = {
        url: '/archive/getArchiveInfo',
        type: 'POST',
        data: {
          archive_id: id
        }
      }
      let infoCb = {}
      infoCb.success = function (res) {
        console.log(res)
        wx.setStorageSync('symptomInfo', res.symptomList.body)
        wx.setStorageSync('tongueList', res.symptomList)
        wx.setStorageSync('matchedMedicineList', res.matchedMedicineList)
        wx.navigateTo({
          url: '../../../autognosis/tongue/tongueDetail/tongueDetail?hide=' + true
        })
        
      }
      infoCb.beforeSend = () => { }
      infoCb.complete = () => {

      }
      sendAjax(infoOpt, infoCb, () => {
      });
      
    },
    ganmaodetailBtn(e) {
      var that = this
      var id = e.currentTarget.dataset.symptoms
      var mblist = e.currentTarget.dataset.symptomlist
      var list = that.data.infoList
      console.log(list, mblist,e)
        wx.navigateTo({
          url: '/pages/cold/coldDetail/coldDetail?id=' + id + '&&show=false&&list=' + JSON.stringify(mblist)
        })
    },
    todetailBtn:function(e){
      var that = this
      // console.log(e.currentTarget.dataset.index)
      var id = e.currentTarget.dataset.index
      console.log(id)
      let infoOpt = {
        url: '/archive/getArchiveInfo',
        type: 'POST',
        data: {
          archive_id: id
        }
      }
      let infoCb = {}
      infoCb.success = function (res) {
        console.log(res)
        console.log(res.matchedConstitutionList["标准"])
        var rate = res.matchedConstitutionList["标准"]

        var rateList = []
        var nameList = []
        var constitutionId = []
        for (var o in rate) {
          rateList.push(rate[o].rate)
          nameList.push(rate[o].name)
          constitutionId.push(rate[o].constitution_id)
        }
        // console.log(constitutionId)
        wx.setStorageSync("rateList", rateList)
        wx.setStorageSync("nameList", nameList)
        wx.setStorageSync("firstList", rateList[0])
        wx.setStorageSync("constitutionId", constitutionId)
        // console.log(rateList[0])
        wx.navigateTo({
          url: '../../../radar/index?hide=' + true
        })

      }
      infoCb.beforeSend = () => { }
      infoCb.complete = () => {

      }
      sendAjax(infoOpt, infoCb, () => {
      });
    },
    delectBtn:function(e){
      var that = this
      var infoList = that.data.infoList
      var id = e.currentTarget.dataset.id
      var isshow = e.currentTarget.dataset.isshow
      var patientInfolist = wx.getStorageSync('patientInfolist')
      var time = util.formatTime(new Date());
      var year = parseInt(time.substring(0, 4))
      for (let i in infoList){
        for(let j in infoList[i]){
          if (infoList[i][j].archive_id == id){
            infoList[i][j].isshow =true
          }
        }
      }
      for (let k in patientInfolist) {
        for (let l in patientInfolist[k]) {
          for (let m in patientInfolist[k][l]) {

            if (patientInfolist[k][l][m].archive_id == id) {
              patientInfolist[k][l][m].isshow = true

            } else if (patientInfolist[k][l][m].isshow==true){
              patientInfolist[k][l][m].isshow = true
            }else{
              patientInfolist[k][l][m].isshow = false
            }
            if(l==year){
              patientInfolist[k][l][m].showNmlgb = true

            }else{
              patientInfolist[k][l][m].showNmlgb = false

            }

          }

        }
      }
      console.log(patientInfolist)
      wx.setStorageSync('patientInfolist', patientInfolist)
      that.setData({
        infoList
      })
      let infoOpt = {
        url: '/archive/deleteArchive',
        type: 'POST',
        data: {
          archive_id: id
        }
      }
      let infoCb = {}
      infoCb.success = function (res) {
        console.log(res)
        // wx.showToast({
        //   title: '删除成功！',
        //   icon: 'success',
        //   duration: 1000
        // })
      }
      infoCb.beforeSend = () => { }
      infoCb.complete = () => {

      }
      sendAjax(infoOpt, infoCb, () => {
      });
      
    },
    showNmlgb(e){
      var id = e.currentTarget.dataset.index
      var infoList = this.data.infoList
      for (let i in infoList){
        for(let j in infoList[i]){
          if(i == id){
            infoList[i][j].showNmlgb = !infoList[i][j].showNmlgb
          }
        }
      }
      this.setData({
        infoList
      })
      console.log(infoList)
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