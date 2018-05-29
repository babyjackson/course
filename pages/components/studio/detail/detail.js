// pages/components/studio/detail/detail.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgurl:app.globalData.imgUrl,
    tabArr:{
      cur:0
    },
    ban:[
      {
        img:"/images/brandban1.jpg",
        url:"",
      },
      {
        img: "/images/brandban1.jpg",
        url: "",
      }
    ],
    recom:[
      {
        img:"/images/allimg.jpg",
        tit:"少儿美术课件培训教材儿童创意课件PPT美术教程培训班课程教案育",
        url:"",
        price:"250"
      },
      {
        img: "/images/allimg.jpg",
        tit: "少儿美术课件培训教材儿童创意课件PPT美术教程培训班课程教案育",
        url: "",
        price: "250"
      }
    ],
    hotcourse:[
      {
        img:"/images/allimg.jpg",
        url:"",
        tit:"少儿美术课件培训教材儿童创",
        price:"250"
      },
      {
        img: "/images/allimg.jpg",
        url: "",
        tit: "少儿美术课件培训教材儿童创",
        price: "250"
      },
      {
        img: "/images/allimg.jpg",
        url: "",
        tit: "少儿美术课件培训教材儿童创",
        price: "250"
      },
      {
        img: "/images/allimg.jpg",
        url: "",
        tit: "少儿美术课件培训教材儿童创",
        price: "250"
      },
      {
        img: "/images/allimg.jpg",
        url: "",
        tit: "少儿美术课件培训教材儿童创",
        price: "250"
      },
      {
        img: "/images/allimg.jpg",
        url: "",
        tit: "少儿美术课件培训教材儿童创",
        price: "250"
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
  /**
   * 导航切换
   */
  tabChange:function(e){
    let that = this;
    let index = parseInt(e.target.dataset.index);
    let tabArr = this.data.tabArr;
    tabArr.cur = index;
    this.setData({
      tabArr: tabArr
    });
  }
})