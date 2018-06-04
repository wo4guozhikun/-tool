//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    placeholder:'请输入查找内容',
    background: [{
      className: 'demo-text-1',
      text: '点击功能按钮可使用相应功能'
    }, {
      className: 'demo-text-2',
      text: '本程序旨在快速便捷的提供日常小工具'
      }, {
        className: 'demo-text-3',
        text: '如果喜欢可以分享给好友哦'
      }]
  },
  //事件处理函数
  onLoad: function () {
    
  },
  clear:function(){
    wx.chooseLocation({

    })
  },
  scanCode:function(){
    wx.scanCode({
      onlyFromCamera:true
    })
  },
  focus:function(){
    this.setData({
      placeholder:''
    })
  },
  blur:function(){
    this.setData({
      placeholder: '请输入查找内容'
    })
  }
})
