// pages/components/category/category.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgurl:app.globalData.imgUrl,
    navArr:{
      cur:0
    },
    classifynav:[
      {
        name:"美术培训课程"
      },
      {
        name: "电脑绘画"
      },
      {
        name: "沙画课程"
      },
      {
        name: "语数外幼小启蒙"
      }
    ],
    classlist:[
      {
        tit:"书法班",
        list:[
          {
            img:"/images/allimg.jpg",
            name:"硬笔书法",
            url:""
          },
          {
            img: "/images/allimg.jpg",
            name: "硬笔书法",
            url: ""
          },
          {
            img: "/images/allimg.jpg",
            name: "硬笔书法",
            url: ""
          },
          {
            img: "/images/allimg.jpg",
            name: "硬笔书法",
            url: ""
          }
        ]
      },
      {
        tit: "绘画班",
        list: [
          {
            img: "/images/allimg.jpg",
            name: "萌宝班",
            url: ""
          },
          {
            img: "/images/allimg.jpg",
            name: "创想启智班",
            url: ""
          },
          {
            img: "/images/allimg.jpg",
            name: "未来大师班",
            url: ""
          },
          {
            img: "/images/allimg.jpg",
            name: "硬笔书法",
            url: ""
          }
        ]
      },
      {
        tit: "专业班",
        list: [
          {
            img: "/images/allimg.jpg",
            name: "基础素描班",
            url: ""
          },
          {
            img: "/images/allimg.jpg",
            name: "水彩水粉班",
            url: ""
          },
          {
            img: "/images/allimg.jpg",
            name: "国画班",
            url: ""
          },
          {
            img: "/images/allimg.jpg",
            name: "硬笔书法",
            url: ""
          }
        ]
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
   *点击
   */
  changeNav:function(e){
    let index = e.target.dataset.index;
    let navArr = this.data.navArr;
    navArr.cur = index;
    this.setData({
      navArr:navArr
    });
  }
})