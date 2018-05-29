// pages/components/train/detail/detail.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgurl: app.globalData.imgUrl,
    tabArr:{cur:0},
    dban:[
      {
        img:"/images/allimg.jpg",
        url:""
      },
      {
        img: "/images/allimg.jpg",
        url: ""
      },
      {
        img: "/images/allimg.jpg",
        url: ""
      },
      {
        img: "/images/allimg.jpg",
        url: ""
      },
      {
        img: "/images/allimg.jpg",
        url: ""
      }
    ],
    detailImg: ["/images/detail-1.jpg", "/images/detail-1.jpg", "/images/detail-1.jpg", "/images/detail-1.jpg"],
    evaluate: [
      {
        imgUserUrl: "/images/allimg.jpg",
        userName: "13358588888",
        userDescribe: "好吃，好吃。真的好吃啊，草莓干很好吃！",
        certeauImg: ["/images/allimg.jpg", "/images/allimg.jpg", "/images/allimg.jpg"],
        time: "2017-07-04 10:27:37"
      },
      {
        imgUserUrl: "/images/allimg.jpg",
        userName: "13358588888",
        userDescribe: "好吃，好吃。真的好吃啊，草莓干很好吃！",
        certeauImg: ["/images/allimg.jpg", "/images/allimg.jpg", "/images/allimg.jpg"],
        time: "2017-07-04 10:27:37"
      },
      {
        imgUserUrl: "/images/allimg.jpg",
        userName: "13358588888",
        userDescribe: "好吃，好吃。真的好吃啊，草莓干很好吃！",
        certeauImg: ["/images/allimg.jpg", "/images/allimg.jpg"],
        time: "2017-07-04 10:27:37"
      },
      {
        imgUserUrl: "/images/allimg.jpg",
        userName: "13358588888",
        userDescribe: "好吃，好吃。真的好吃啊，草莓干很好吃！",
        certeauImg: ["/images/allimg.jpg"],
        time: "2017-07-04 10:27:37"
      }
    ],
    goodslist: [
      {
        imgsrc: "/images/allimg.jpg",
        url: "/pages/components/train/detail/detail",
        tit: "少儿美术课件培训教材儿童创意课件PPT美术教程培训",
        price: "250"
      },
      {
        imgsrc: "/images/allimg.jpg",
        url: "",
        tit: "少儿美术课件培训教材儿童创意课件PPT美术教程培训",
        price: "250"
      },
      {
        imgsrc: "/images/allimg.jpg",
        url: "",
        tit: "少儿美术课件培训教材儿童创意课件PPT美术教程培训",
        price: "250"
      },
      {
        imgsrc: "/images/allimg.jpg",
        url: "",
        tit: "少儿美术课件培训教材儿童创意课件PPT美术教程培训",
        price: "250"
      },
      {
        imgsrc: "/images/allimg.jpg",
        url: "",
        tit: "少儿美术课件培训教材儿童创意课件PPT美术教程培训",
        price: "250"
      },
      {
        imgsrc: "/images/allimg.jpg",
        url: "",
        tit: "少儿美术课件培训教材儿童创意课件PPT美术教程培训",
        price: "250"
      },
      {
        imgsrc: "/images/allimg.jpg",
        url: "",
        tit: "少儿美术课件培训教材儿童创意课件PPT美术教程培训",
        price: "250"
      },
      {
        imgsrc: "/images/allimg.jpg",
        url: "",
        tit: "少儿美术课件培训教材儿童创意课件PPT美术教程培训",
        price: "250"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  tabFun: function (e) {   //获取触发事件组件的dataset属性 
    let that = this;
    let _datasetId = e.target.dataset.id;
    let tabArr = this.data.tabArr;
    if(_datasetId){
      tabArr.cur = _datasetId;
      that.setData({
        tabArr: tabArr
      });
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
  
  }
})