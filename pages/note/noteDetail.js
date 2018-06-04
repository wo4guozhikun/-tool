// pages/note/noteDetail.js
Page({
  data: {
    title:"111",
    content:"",
    show:true,
    dataList:[],
    id:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    if (options.id){
      wx.getStorage({
        key: 'noteList',
        success: res => {
          this.setData({
            show: false,
            title: res.data[options.id].title,
            content: res.data[options.id].content,
            dataList: res.data,
            id: options.id,
          })
        }
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
  onShareAppMessage: function () {
  
  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    wx.getStorage({
      key: 'noteList',
      success: function (res) {
        let arr = res.data;
        arr.push(e.detail.value)
        wx.setStorage({
          key: 'noteList',
          data: arr,
        })
      },
      fail:function(){
        let arr = [e.detail.value];
        wx.setStorage({
          key: 'noteList',
          data: arr,
        })
      },
      complete:function(){
        wx.navigateBack({
          delta: 1
        })
      }
    })
  },
  delete:function(){
    this.data.dataList.splice(this.data.id, 1)
    wx.setStorage({
      key: 'noteList',
      data: this.data.dataList,
      success:()=>{
        wx.navigateBack({
          delta: 1
        })
      }
    })
  }
})