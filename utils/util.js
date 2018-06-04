const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const actionList = [{
  text: '7'
}, {
  text: '8'
}, {
  text: '9'
}, {
  text: '÷'
}, {
  text: '4'
}, {
  text: '5'
}, {
  text: '6'
}, {
  text: 'x'
}, {
  text: '1'
}, {
  text: '2'
}, {
  text: '3'
}, {
  text: '-'
}, {
  text: '0'
}, {
  text: '.'
}, {
  text: '='
}, {
  text: '+'
},]

const randomStr = len => {
  　　len = len || 32;
  　　let $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
  　　let maxPos = $chars.length;
  　　let pwd = '';
  　　for (let i = 0; i < len; i++) {
    　　　　pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
  　　}
  　　return pwd;
}

module.exports = {
  formatTime: formatTime,
  actionList: actionList,
  randomStr: randomStr
}
