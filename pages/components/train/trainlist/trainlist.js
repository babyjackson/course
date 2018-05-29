// pages/components/train/trainlist/trainlist.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgurl: app.globalData.imgUrl,
    ibanner: [
      {
        url: "",
        img: "/images/tban-1.jpg"
      },
      {
        url: "",
        img: "/images/tban-1.jpg"
      },
      {
        url: "",
        img: "/images/tban-1.jpg"
      }
    ],
    tnav:[
      {
        img:"/images/tnav-1.png",
        url:"/pages/components/train/product/product",
        text:"美术培训"
      },
      {
        img: "/images/tnav-2.png",
        url: "",
        text: "电脑绘画"
      },
      {
        img: "/images/tnav-3.png",
        url: "",
        text: "沙画课程"
      },
      {
        img: "/images/tnav-4.png",
        url: "",
        text: "语数外启蒙"
      }
    ],
    stick:[
      {
        img:"/images/allimg.jpg",
        tit:"少儿美术课件培训教材儿童创意课件PPT美术教程培训班课程教案育",
        pri:"250",
        url:""
      },
      {
        img: "/images/allimg.jpg",
        tit: "少儿美术课件培训教材儿童创意课件PPT美术教程培训班课程教案育",
        pri: "250",
        url: ""
      }
    ],
    artcourse:{
      bgimg:"/images/coursebg-1.jpg",
      list:[
        {
          img:"/images/allimg.jpg",
          tit:"少儿美术课件培训教材儿童创意课件PPT美术教程",
          pri:"250",
          url:""
        },
        {
          img: "/images/allimg.jpg",
          tit: "少儿美术课件培训教材儿童创意课件PPT美术教程",
          pri: "250",
          url: ""
        },
        {
          img: "/images/allimg.jpg",
          tit: "少儿美术课件培训教材儿童创意课件PPT美术教程",
          pri: "250",
          url: ""
        },
        {
          img: "/images/allimg.jpg",
          tit: "少儿美术课件培训教材儿童创意课件PPT美术教程",
          pri: "250",
          url: ""
        }
      ]
    },
    pccourse: {
      bgimg: "/images/coursebg-2.jpg",
      list: [
        {
          img: "/images/allimg.jpg",
          tit: "少儿美术课件培训教材儿童创意课件PPT美术教程",
          pri: "250",
          url: ""
        },
        {
          img: "/images/allimg.jpg",
          tit: "少儿美术课件培训教材儿童创意课件PPT美术教程",
          pri: "250",
          url: ""
        },
        {
          img: "/images/allimg.jpg",
          tit: "少儿美术课件培训教材儿童创意课件PPT美术教程",
          pri: "250",
          url: ""
        },
        {
          img: "/images/allimg.jpg",
          tit: "少儿美术课件培训教材儿童创意课件PPT美术教程",
          pri: "250",
          url: ""
        }
      ]
    },
    sandcourse: {
      bgimg: "/images/coursebg-3.jpg",
      list: [
        {
          img: "/images/allimg.jpg",
          tit: "少儿美术课件培训教材儿童创意课件PPT美术教程",
          pri: "250",
          url: ""
        },
        {
          img: "/images/allimg.jpg",
          tit: "少儿美术课件培训教材儿童创意课件PPT美术教程",
          pri: "250",
          url: ""
        },
        {
          img: "/images/allimg.jpg",
          tit: "少儿美术课件培训教材儿童创意课件PPT美术教程",
          pri: "250",
          url: ""
        },
        {
          img: "/images/allimg.jpg",
          tit: "少儿美术课件培训教材儿童创意课件PPT美术教程",
          pri: "250",
          url: ""
        }
      ]
    },
    educourse: {
      bgimg: "/images/coursebg-4.jpg",
      list: [
        {
          img: "/images/allimg.jpg",
          tit: "少儿美术课件培训教材儿童创意课件PPT美术教程",
          pri: "250",
          url: ""
        },
        {
          img: "/images/allimg.jpg",
          tit: "少儿美术课件培训教材儿童创意课件PPT美术教程",
          pri: "250",
          url: ""
        },
        {
          img: "/images/allimg.jpg",
          tit: "少儿美术课件培训教材儿童创意课件PPT美术教程",
          pri: "250",
          url: ""
        },
        {
          img: "/images/allimg.jpg",
          tit: "少儿美术课件培训教材儿童创意课件PPT美术教程",
          pri: "250",
          url: ""
        }
      ]
    },
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