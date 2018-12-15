Page({
  data: {
    phone: '',
    password: ''
  },

  // 获取输入账号 
  phoneInput: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },

  // 获取输入密码 
  passwordInput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },

  // 登录 
  login: function () {
    wx.request({
      url: 'http://101.200.58.92/shiyan/index.php/User/admin',
      data: {
        user_data: this.data.phone,
        password_data: this.data.password   
      },
      method: 'GET', 
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        // console.log(res)
       
        }
    })
    // if (this.data.phone.length == 0 || this.data.password.length == 0) {
    //   wx.showToast({
    //     title: '不能为空',
    //     icon: 'loading',
    //     duration: 2000
    //   })
    // } else {
    //   // 这里修改成跳转的页面 
    //   wx.showToast({
    //     title: '登录成功',
    //     icon: 'success',
    //     duration: 2000
    //   })
    // }
  }
})