// pages/lawyer_assessment/ofsearch/pay1/pay1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg1: 'XXX元',
    items: [
      {
        img: '../../images/of2.png',
        logo: '微信支付',
        name: 'weixin',
        checked: 'true'
      },
      {
        img: '../../images/of3.png',
        logo: '银联支付',
        name: 'card'
      }
    ]

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
  showtip: function () {
    wx.showModal({
      content: '付费成功，系统将为您预约律师',
      showCancel: false,
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
          wx.redirectTo({
            url: '../finish/finish'
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }

})