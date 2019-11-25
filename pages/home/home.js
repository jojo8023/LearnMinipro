const app = getApp()
const name = app.globalData.name
console.log(name)
// 注册一个页面
Page({
  // 2.初始化数据
  data: {
    name: 'DuckKing',
    age: 18,
    counter: 0,
    students: [{
      name: 'DuckKing'
    }, {
      name: 'CaiKing'
    }]
  },
  // 1.监听页面生命周期
  // 页面被加载出来
  onload() {
    wx.request({
      url: '',
      success: (res) => {

      }
    })
  },
  // 页面显示出来时候
  onShow() {},
  //页面初次渲染完成
  onReady() {},
  onHide() {},
  onUnload() {},
  // 3.监听wxml相关事件
  addClick() {
    this.setData({
      counter: this.data.counter + 1
    })
    // this.data.counter += 1;
    // console.log(2222)
  },
  getUser(event) {
    console.log(event)
  },
  // 4.监听其他事件
  onPageScroll(obj) {
    console.log(obj)
  },
  onPullDownRefresh() {
    console.log('下拉刷新')
  },
  onTabItemTap(){
    console.log('bar')
  }
})