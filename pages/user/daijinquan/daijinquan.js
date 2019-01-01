// pages/user/daijinquan/daijinquan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    status:[{
        name:"未使用",
      select:true,
      index:0
    }, {
        name: "已使用",
        select:false,
        index:1
      }, {
        name: "已失效",
        select:false,
        index:2
      }],
    quanList:[{
      prize:2,
      time:"2018.12.20-2018.12.22"
    },
      {
        prize: 2,
        time: "2018.12.20-2018.12.23"
      }, {
        prize: 2,
        time: "2018.12.20-2018.12.27"
      }]
  },
  quanSelect(e){
    // console.log(e.currentTarget.dataset.id)
    var id = e.currentTarget.dataset.id
    var status = this.data.status
    for(let i in status){
      if(i == id){
        status[i].select = true
      }else{
        status[i].select = false
      }
    }
    this.setData({
      status
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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