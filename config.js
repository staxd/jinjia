/**
 * 小程序配置文件
 */

//测试
// var host = "http://test.jinjiazy.com/applet"

//正式
var host = "https://jinjiazy.com/applet"

//本地
var config = {
  host,
  // 登录地址，用于建立会话
  loginUrl: `${host}/user/login`,

  bindingUrl: `${host}/user/binding`,

  //第三方平台登录
  plantLoginUrl: `${host}/user/account/platform/login`,

  //头像上传
  avatarurl: host + "/upload/avatar",

  // 通用上传
  picurl: host + "/upload/pic",

  // 绑定账号
  bindurl: host + "/user/account/weixinapp/bind"
};

module.exports = config
