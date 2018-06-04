// pages/mine/mine.js
var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    hasLogin:'',
    userInfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("app",app)
    if (app.globalData.hasLogin){
      this.setData({
        hasLogin: app.globalData.hasLogin
      })
      this.getInfo()
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
  onShareAppMessage: function () {
  
  },
  login:function(){
    wx.login({
      success:res=>{
        app.globalData.hasLogin = true
        this.setData({
          hasLogin: true
        })
        console.log(app)
        this.getInfo()
      }
    })
  },
  getInfo:function(){
    wx.getUserInfo({
      withCredentials: true,
      lang: 'zh_CN',
      success: res=> {
        console.log("xinxi",res.userInfo)
        this.setData({
          userInfo: res.userInfo
        })
       }
    })
  }
})