App({
  // 在后台存活两小时
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   * 获取用户信息
   */
  onLaunch: function() {
    // 异步调用-> 拿到数据再回调
    wx.getUserInfo({
      success: function(res) {
        console.log(res)
      }
    })
    // setTimeout(function() {
    //   const err = new Error;
    //   throw err
    // }, 3000)
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   * 界面显示出来
   */
  onShow: function(options) {
    // 1.判断小程序进入场景
    switch (options.scene) {
      case 1001:
        break;
      case 1011:
        break;
    }
    // 2.获取用户信息，将用户信息传递给服务器
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   * 界面被隐藏时
   */
  onHide: function() {

  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function(msg) {
    console.log('err')
  },
  globalData: {
    name: 'kitten'
  }
})