var url = require('../../config.js')
const sendAjax = require('../../utils/sendAjax.js')

var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    symptomList:[],
    index:0, //获取下标
    contentList:[],
    imgId:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    this.getBodyPartList()
      
  },
  getBodyPartList: function () {
    var that = this
    
    let infoOpt = {
      url: '/selfDiagnosis/getBodyPartList',
      type: 'GET',
      data: {
      }
    }
    let infoCb = {}
    infoCb.success = function (res) {
      app.getPatientId()
      console.log(res)
      var bodyId = res[0].body_part_id
      var contentList = []
      for(let i in res){
        if(res[i]!=200){
          if(i == 0){
            res[0]['select'] = true
          }
          contentList.push(res[i])
          // console.log(contentList)
          let infoOpt = {
            url: '/selfDiagnosis/getBodySymptomList',
            type: 'POST',
            data: {
              body_part_id: res[i].body_part_id,
              patient_id: wx.getStorageSync("patient_id")
            }
          }
          let infoCb = {}
          infoCb.success = function (res) {
            //  console.log(res)
            var subSymptomList = res.subSymptomList
            var symptomList = res.symptomList
            for (let i in symptomList) {
              var groupList = subSymptomList[symptomList[i].group_name]
              // console.log(groupList)
              if (groupList != undefined) {
                symptomList[i]["group_list"] = groupList
                var groupList = symptomList[i]["group_list"]
                for (let j in groupList) {
                  groupList[j]["open"] = false
                }
              }

              symptomList[i]["open"] = false

            }
            contentList[i]['symptomList'] = symptomList
            // console.log(contentList)
            that.setData({
              contentList
            })
          }
          infoCb.beforeSend = () => { }
          infoCb.complete = () => {

          }
          sendAjax(infoOpt, infoCb, () => {
          });
        }


      }



    }
    infoCb.beforeSend = () => { }
    infoCb.complete = () => {

    }
    sendAjax(infoOpt, infoCb, () => {
    });
    
  },
  imageSelect:function(e){
    console.log(e)
    var that = this
    var id = e.currentTarget.dataset.id
    var imgId = that.data.imgId
    that.setData({
      imgId:id
    })
    var bodyId = e.currentTarget.dataset.bodyid
    // console.log(id)
    var contentList = that.data.contentList
    console.log(contentList)

    for (let c in contentList){
      if(c == id){
        contentList[c]['select'] = true
      }else{
        contentList[c]['select']= false
      }
    }
    that.setData({
      contentList
    })

  }, 
  kindToggle(e) {
    // console.log(e)
    var index = e.currentTarget.dataset.openlist;
    this.setData({
      index
    })
    var imgId = this.data.imgId
    // console.log(imgId)
    let contentList = this.data.contentList;
    // console.log(contentList[imgId].symptomList)
    var symptomList = contentList[imgId].symptomList
    symptomList[index].open = !symptomList[index].open;
    this.setData({
      contentList
    })
  },
  groupList(e) {
    var index = e.currentTarget.dataset.id;
    var id = this.data.index
    var imgId = this.data.imgId
    let contentList = this.data.contentList;
    // console.log(contentList[imgId].symptomList[id].group_list[index])
    var gList = contentList[imgId].symptomList[id].group_list
    gList[index].open = !gList[index].open;
    this.setData({
      contentList
    })
  },

  subBtn(){
    var contentList = this.data.contentList
    var symptomInfo = []
    var infoId = ""
    // console.log(contentList)
    for (let i in contentList){
      var symptomList = contentList[i].symptomList
      for (let j in symptomList){
        // console.log(symptomList[j])
      if (symptomList[j].name){
        if (symptomList[j].open){
          // console.log(symptomList[j])
          infoId = infoId + "," + symptomList[j].symptom_id
          symptomInfo.push({ 'name': symptomList[j].name, 'symptom_id': symptomList[j].symptom_id })
        }
      } else if (symptomList[j].group_name){
        var group_list = symptomList[j].group_list
        for (var o in group_list)
        if (group_list[o].open){
          // console.log(group_list[o])
          infoId = infoId + "," + group_list[o].symptom_id
          symptomInfo.push({ 'name': group_list[o].name, 'symptom_id': group_list[o].symptom_id })
        }
      }
      }
    }
    if (infoId == "") {
      wx.showToast({
        title: '请选择至少一项',
        icon: 'none',
        duration: 1000
      })
    }else{
      
      wx.setStorageSync('symptomInfo', symptomInfo)
      wx.navigateTo({
        url: 'tongue/tongue?infoId=' + infoId,
      })
    }

    
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