// pages/components/btob/protocol/protocol.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selected: true,
    active: false,
    time: 4
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  sureRead: function (e) {
    let selected = this.data.selected;
    selected = !selected;
    this.setData({
      selected: selected
    })
  },
  catchBgTap: function (e) {
    let active = this.data.active;
    active = false;
    this.setData({
      active: active
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  /**
   * enter
   */
  enterJump: function (e) {
    let time = this.data.time;
    let select = this.data.selected;
    console.log(select)
    if (time > 10) {
      this.setData({
        active: true
      })
    } else {
      if (select) {
        wx.navigateTo({
          url: '/pages/components/btob/invite/invite',
        })
      } else {
        wx.showToast({
          icon: "none",
          title: '请同意招商加盟协议',
          duration: 2000,
        })
      }
    }
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

  }
})