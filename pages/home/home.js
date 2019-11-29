// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLoading: false,
    imagePath: ""
  },

  closeAlbum() {
    wx.chooseImage({
      success: (res) => {
        const path = res.tempFilePaths[0]
        console.log(res)
        this.setData({
          imagePath:path
        })
      },
    })
  },
  handleImg(){
    console.log(333)
  },
  inputBind(event){
    console.log(event)
  },
  //监听滚动
  scrollIt(event){
    console.log(event)
  }
})