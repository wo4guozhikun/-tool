// pages/calculate/calculate.js
const actionList = require('../../utils/util.js').actionList

Page({
  /**
   * 页面的初始数据
   */
  data: {
    showValue:'',
    iscal:false,
    calmode:'',
    oldValue:'',
    newValue:'',
    result:'',
    reset:false,
    actionList: actionList
  },
  onPullDownRefresh:function(){
    console.log(666)
    this.data.oldValue = '';
    this.data.newValue = '';
    this.data.calmode = '';
    this.data.reset = false;   
    this.setData({ showValue: '', result:''}) 
  },
  /**
   * 自定义事件
   */
  tapItem:function(e){
    let val = e.currentTarget.dataset.value;
    if (this.data.reset) {
      this.data.oldValue = '';
      this.data.newValue = '';
      this.data.calmode = '';
      this.data.showValue = '';
      this.data.reset = false;
    }

    if (isNaN(Number(val.text)) && val.text!='.') {
      if (val.text=="="){
        // 计算结果
        this.data.iscal = false;
        this.data.reset = true;
        let oldValue = Number(this.data.oldValue), newValue = Number(this.data.newValue)
        switch (this.data.calmode) {
          case "+":
            this.setData({ result: oldValue + newValue })
            break;
          case "-":
            this.setData({ result: oldValue - newValue })
            break;
          case "x":
            this.setData({ result: oldValue * newValue })
            break;
          case "÷":
            this.setData({ result: oldValue / newValue })
            break;
        }

      } else {
        if (this.data.iscal){

        }else{
          this.data.calmode = val.text;
          this.data.iscal = true;
        }

      }
    }else{
      if (this.data.iscal) {
        if (val.text == '.' && this.data.newValue.indexOf(".") != -1) {
          return
        }else{
          this.data.newValue += val.text
        }
      } else {
        console.log("cuwu", this.data.oldValue.indexOf("."))
        if (val.text == '.' && this.data.oldValue.indexOf(".") != -1) {
          console.log("cuwu", this.data.oldValue.indexOf("."))
          return
        } else {
          this.data.oldValue += val.text
        }
      }
    }

    this.setData({
      showValue: this.data.oldValue + this.data.calmode + this.data.newValue
    })

  }
})