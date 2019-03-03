// pages/medicine/medicine.js

var url = require('../../config.js')
const sendAjax = require('../../utils/sendAjax.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    property:"",
    flavor:"",
    effect:"",
    propertyText:"",
    flavorText:"",
    effectText:"",
    list:[],
    noMore:"",
    titleList: [{ name: "性味", select: false, id: 0 }, { name: "功效", select: false, id: 1 }],
    navId :0,
    material_id:"",
    pagecount: 1,
    curpage:1,
    wheight:0,
    mbList: [{ "性": [
      { name: "寒", isshow: false,type:"property", option_id:0}, 
      { name: "凉", isshow: false,type:"property",option_id:1},
      { name: "平", isshow: false,type:"property",option_id:2},
      { name: "温", isshow: false,type:"property",option_id:3},
      { name: "热", isshow: false,type:"property",option_id:4}],"味": [
        { name: "酸", isshow: false,type:"flavor", option_id: 0 },
        { name: "涩", isshow: false,type:"flavor", option_id: 1 },
        { name: "甘", isshow: false,type:"flavor", option_id: 2 },
        { name: "苦", isshow: false,type:"flavor", option_id: 3 },
        { name: "辛", isshow: false,type:"flavor", option_id: 4 },
        { name: "咸", isshow: false,type:"flavor", option_id: 5 },
        { name: "淡", isshow: false,type:"flavor", option_id: 6 }]}]
  },
  clickSelect: function (e) {
    var that = this;
    var mbList = that.data.mbList
    var navId = that.data.navId
    var option_id = e.currentTarget.dataset.id
    if(navId ==0){
      var type = e.currentTarget.dataset.type
      // console.log(mbList[navId])
      for (var i in mbList[navId]) {
        for (var j = 0; j < mbList[navId][i].length; j++) {
          if (mbList[navId][i][j].type == type) {
            if (mbList[navId][i][j].option_id == option_id) {
              mbList[navId][i][j].isshow = !mbList[navId][i][j].isshow;
            }
          }
        }
      }
      that.setData({
        mbList
      })
    }else{
      for(var i =0;i<mbList[navId].length;i++){
        if (parseInt(mbList[navId][i].effect_id) == option_id){
          mbList[navId][i].isshow = ! mbList[navId][i].isshow
        }
      }
      that.setData({
        mbList
      })
    }
   
  },
  click: function (e) {
    var that = this
    var navId = 0
    var wheight = that.data.wheight
    var titleList = that.data.titleList
    var id = e.currentTarget.dataset.index
      for (let j = 0; j < titleList.length; j++) {
        if (titleList[j].id == id) {
          titleList[j].select = !titleList[j].select;
          }else{
          titleList[j].select = false
          }
        
    }
    that.setData({
      titleList
    })
    var key = 0
    for(let i =0 ;i<titleList.length;i++){
      if(!titleList[i].select){
        key++
      }else{
        navId = titleList[i].id
      }
    }
    console.log(key)
    if(key == 2){
      var animation = wx.createAnimation({
        duration: 1000,
        timingFunction: 'ease',
        delay: 100
      });
      animation.opacity(0).translate(0, -100).step()
      that.setData({
        ani: animation.export()
      })
    }else{
      var animation = wx.createAnimation({
        duration: 1000,
        timingFunction: 'ease',
        delay: 100
      });
      animation.opacity(1).translate(0, wheight).step()
      that.setData({
        ani: animation.export(),
        navId

      })
    }
   
   
  },
  geteffect(){
    var that = this
    let infoOpt = {
      url: '/material/effect',
      type: 'GET',
      data: {
      },
    }
    let infoCb = {}
    infoCb.success = function (res) {
        for(let i=0;i<res.effect.length;i++){
          res.effect[i].isshow=false
        }
        var mbList = that.data.mbList
        mbList.push(res.effect)
        that.setData({
          mbList
        })
    }
    infoCb.beforeSend = () => { }
    infoCb.complete = () => {

    }
    sendAjax(infoOpt, infoCb, () => {
    });
  },
  getList: function () {
    var that = this
    let infoOpt = {
      url: '/material',
      type: 'POST',
      data: {
        curpage: that.data.curpage,
        property:that.data.property,
        flavor: that.data.flavor,
        effect: that.data.effect
      },
    }
    let infoCb = {}
    infoCb.success = function (res) {
      if (res.materialList.length == 0) {
        that.setData({
          noMore: "暂无内容"
        })
      }
      wx.hideToast();
      console.log(res)
      if (that.data.curpage <= res.pagecount) {

        that.setData({
          list: that.data.list.concat(res.materialList),
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
  toMedicine: function (e) {

    var that = this
    var index = e.currentTarget.dataset.openlist;
    var list = this.data.list;
    var material_id = parseInt(list[index].material_id)
    var name = list[index].name
    wx.navigateTo({
      url: 'medicineDetail/medicineDetail?id=' + material_id + "&title=" + name
    });
  },
  bindKeyInput: function (e) {
    var that = this

    var inputValue = e.detail.value
    // console.log(e.detail.value)
    if (inputValue != "") {
      let infoOpt = {
        url: '/material',
        type: 'POST',
        data: {
          keywords: inputValue
        },
      }
      let infoCb = {}
      infoCb.success = function (res) {
        if (res.materialList.length == 0) {
        that.setData({
          noMore: "暂无内容"
        })
      }
        // console.log(res)
        that.setData({
          list: res.materialList
        })
      }
      infoCb.beforeSend = () => { }
      infoCb.complete = () => {

      }
      sendAjax(infoOpt, infoCb, () => {
      });

    } else {
      that.setData({
        list: [],
        curpage: 1,
        medicine_id: "",
        pagecount: 1
      })
      that.getList();
    }

  },
  subBtn(){
    var that = this
    var titleList = that.data.titleList
    var mbList = that.data.mbList
    var property =""
    var flavor =""
    var effect =""
    var propertyText = ""
    var flavorText = ""
    var effectText = ""
    for(let i in mbList){
      for(let j in mbList[i]){
        if (mbList[i][j].length){
          for (let m in mbList[i][j]){
            if (mbList[i][j][m].type=="property"){
              if (mbList[i][j][m].isshow) {
                if (property!=""){
                  property += "," + mbList[i][j][m].name
                  propertyText += "、" + mbList[i][j][m].name
                }else{
                  property = mbList[i][j][m].name
                  propertyText = mbList[i][j][m].name
                }
              }
            }else{
              if (mbList[i][j][m].isshow) {
                if (flavor!=""){
                  flavor += "," + mbList[i][j][m].name
                  flavorText += "、" + mbList[i][j][m].name
                }else{
                  flavor = mbList[i][j][m].name
                  flavorText =mbList[i][j][m].name
                }
              }
            }
            
          }
        }else{
          if(mbList[i][j].isshow){
            if (effect != "") {
              effect += "," + mbList[i][j].effect_id
              effectText += "、" + mbList[i][j].effect_title
            } else {
              effect = mbList[i][j].effect_id
              effectText = mbList[i][j].effect_title
            }
          }
        }

      }
    }
    console.log(property, flavor, effect)
    if (property != "" || flavor != "" || effect!=""){
      that.setData({
        list: [],
        property,
        flavor,
        effect,
        propertyText,
        flavorText,
        effectText,
        showBox:true
        
      })
      that.getList()
    }
      titleList[that.data.navId].select= false
      var animation = wx.createAnimation({
        duration: 1000,
        timingFunction: 'ease',
        delay: 100
      });
      animation.opacity(0).translate(0, -100).step()
      that.setData({
        ani: animation.export(),
        titleList
      })
    
    
  },
  close(){
    var mbList = this.data.mbList
    for (let i in mbList) {
      for (let j in mbList[i]) {
        if (mbList[i][j].length) {
          for (let m in mbList[i][j]) {
            mbList[i][j][m].isshow = false
          }
        } else {
          mbList[i][j].isshow = false
        }

      }
    }
    this.setData({
      property: "",
      propertyText: "",
      flavor: "",
      flavorText: "",
      effect: "",
      effectText:"",
      showBox:false,
      mbList,
      noMore:"",
      list:[]
    })
    this.getList()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getList();
    this.geteffect();
    this.setData({
      wheight : wx.getSystemInfoSync().windowHeight
    })
    console.log(this.data.mbList)
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