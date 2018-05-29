// pages/component/gywm/gywm.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgurl:app.globalData.imgUrl,
    lxfs:[
      {
        fsz:"电话",
        fs:" 15647853210",
        imgUrl:"/images/about-1.png"
      },
      {
        fsz: "微信",
        fs: " 15879413310",
        imgUrl: "/images/about-2.png"
      },
      {
        fsz: "QQ",
        fs: " 24587952",
        imgUrl: "/images/about-3.png"
      },
      {
        fsz: "邮箱",
        fs: " 1548364445@qq.con",
        imgUrl: "/images/about-4.png"
      },
      {
        fsz: "联系人",
        fs: " 王某某",
        imgUrl: "/images/about-5.png"
      },
      {
        fsz: "地址",
        fs: " 临翔区旗山路452号面临小吃城45号商铺",
        imgUrl: "/images/about-6.png"
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
  
  }
})