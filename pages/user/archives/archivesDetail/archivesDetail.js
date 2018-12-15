  var url = require('../../../../config.js')
  const sendAjax = require('../../../../utils/sendAjax.js')
  const util = require('../../../../utils/util.js')
  Page({

    /**
     * 页面的初始数据
     */
    data: {
      archiveList:[],
      year:'', //获取当前年份
      nameData:[]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      wx.setNavigationBarTitle({
        title: options.title+'的档案'
      })
      var time = util.formatTime(new Date());
      var year = time.substring(0, 4)
      // console.log(year)
      this.setData({
        year
      })
      this.getArchivesList()
    },
    getArchivesList:function(){
      
      var that = this
      var archiveList = wx.getStorageSync("archiveList")
      
      // console.log(archiveList)
      for (let i = 0; i < archiveList.length;i++){
        // console.log(archiveList[i])
        if (archiveList[i].type == "constitution"){
          // console.log(i)
          var nameData = archiveList[i].results["标准"]
          // console.log(nameData)
          archiveList[i]['name'] = nameData[0].name
            archiveList[i]['isshow'] = false
            that.setData({
              archiveList
            })
        }

      }
      console.log(archiveList)
      },
    zizhendetailBtn(e){
      var that = this
      // console.log(e.currentTarget.dataset.index)
      var index = e.currentTarget.dataset.index
      var archiveList = that.data.archiveList
      console.log(archiveList[index].archive_id)
      var id = archiveList[index].archive_id

      let infoOpt = {
        url: '/archive/getArchiveInfo',
        type: 'POST',
        data: {
          archive_id: id
        }
      }
      let infoCb = {}
      infoCb.success = function (res) {
        console.log(res.symptomList)
        wx.setStorageSync('symptomInfo', res.symptomList.body)
        wx.setStorageSync('tongueList', res.symptomList)
      wx.setStorageSync('matchMedicinesName', archiveList[index].results)
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
    todetailBtn:function(e){
      var that = this
      var index = e.currentTarget.dataset.index
      var archiveList = that.data.archiveList
      // console.log(archiveList[index].results["标准"])
      var rate = archiveList[index].results["标准"]
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
      
      
    },
    delectBtn:function(e){
      var that = this
      var archiveList = that.data.archiveList
      var id = e.currentTarget.dataset.id
      console.log(e)
      var isshow = e.currentTarget.dataset.isshow
      for (var i = 0; i < archiveList.length; i++) {

        if (archiveList[i].archive_id == id) {
          archiveList[i].isshow = !archiveList[i].isshow;
          // console.log(mbList[i][j])
        }
      }
      console.log(archiveList)
      that.setData({
        archiveList
      })
      console.log(id)
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