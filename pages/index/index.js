// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    pageName: '图像标签'
  },
  // 事件处理函数
  changePage() {
    this.setData({
      pageName: '智能裁剪'
    })
  }

})