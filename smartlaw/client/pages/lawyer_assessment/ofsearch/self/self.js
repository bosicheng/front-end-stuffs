// pages/lawyer_assessment/ofsearch/self/self.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: '2016-09-01',
    time: '12:01',  
    region: ['广东省', '广州市', '海珠区'],
    customItem: '全部'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },
  showbox:function(){
    console.log(this.data.show);
    this.data.show = !this.data.show;
  },
  app: function () {
    wx.showModal({
      title: '',
      content: '提交成功',
      showCancel: false,
      confirmText: '前往支付',
      // confirmColor:'#ffffff',
      success: function (res) {
        if (res.confirm) {
          // console.log('用户点击确定');
          wx.navigateTo({
            url: '../pay1/pay1'
          })
        }
      }
    })
  }
})