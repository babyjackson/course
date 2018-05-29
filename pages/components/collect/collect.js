// pages/component/wdsc/wdsc.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgurl:app.globalData.imgUrl,
    tabArr:{current:0},
    collect1: [
      {
        url:"",
        img: "/images/allimg.jpg",
        tit: "韩国新款个性铁环画家帽子女秋冬季潮英伦风甜美可爱贝雷帽原宿风1",
        price: 120.20
      },
      {
        url: "",
        img: "/images/allimg.jpg",
        tit: "韩国新款个性铁环画家帽子女秋冬季潮英伦风甜美可爱贝雷帽原宿风1",
        price: 120.20
      },
      {
        url: "",
        img: "/images/allimg.jpg",
        tit: "韩国新款个性铁环画家帽子女秋冬季潮英伦风甜美可爱贝雷帽原宿风1",
        price: 120.20
      }
    ],
    collect2: [
      {
        url: "",
        img: "/images/allimg.jpg",
        tit: "韩国新款个性铁环",
        time: "2018/12/15"
      },
      {
        url: "",
        img: "/images/allimg.jpg",
        tit: "韩国新款个性铁环画家帽",
        time: "2018/12/15"
      },
      {
        url: "",
        img: "/images/allimg.jpg",
        tit: "韩国新款个性铁环画家帽子",
        time: "2018/12/15"
      }
    ],
    collect3: [
      {
        url: "",
        img: "/images/allimg.jpg",
        tit: "韩国新款个性铁环画家帽子",
        time: "2018/12/15"
      },
      {
        url: "",
        img: "/images/allimg.jpg",
        tit: "韩国新款个性铁环画家帽子",
        time: "2018/12/15"
      },
      {
        url: "",
        img: "/images/allimg.jpg",
        tit: "韩国新款个性铁环画家帽子",
        time: "2018/12/15"
      }
    ],
    collect4: [
      {
        url: "",
        img: "/images/allimg.jpg",
        tit: "韩国新款个性铁环画家帽子",
        time: "2018/12/15"
      },
      {
        url: "",
        img: "/images/allimg.jpg",
        tit: "韩国新款个性铁环画家帽子",
        time: "2018/12/15"
      },
      {
        url: "",
        img: "/images/allimg.jpg",
        tit: "韩国新款个性铁环画家帽子",
        time: "2018/12/15"
      }
    ],
    likeclass: [
      {
        img: "/images/allimg.jpg",
        url: "",
        tit: "今之逸品抽取式美之逸品抽取式美容，美容",
        price: "250",
      },
      {
        img: "/images/allimg.jpg",
        url: "",
        tit: "今之逸品抽取式之逸品抽取式美之逸品抽取式美之逸品抽取式美美容，美容",
        price: "250",
      },
      {
        img: "/images/allimg.jpg",
        url: "",
        tit: "今之逸品抽取式美容，美容",
        price: "250",
      },
      {
        img: "/images/allimg.jpg",
        url: "",
        tit: "今之逸品抽取式美容，美容",
        price: "250",
      }
    ],
    likenews:[
      {
        img:"/images/allimg.jpg",
        url:"",
        tit:"书画收藏 陷阱何在",
        text:"策展人李裴裴把张小鹿的新展",
        coll:"150",
        glance:"1500"
      },
      {
        img: "/images/allimg.jpg",
        url: "",
        tit: "书画收藏 陷阱何在",
        text: "策展人李裴裴把张小鹿的新展",
        coll: "150",
        glance: "1500"
      },
      {
        img: "/images/allimg.jpg",
        url: "",
        tit: "书画收藏 陷阱何在",
        text: "策展人李裴裴把张小鹿的新展",
        coll: "150",
        glance: "1500"
      },
      {
        img: "/images/allimg.jpg",
        url: "",
        tit: "书画收藏 陷阱何在",
        text: "策展人李裴裴把张小鹿的新展",
        coll: "150",
        glance: "1500"
      }
    ],
    likeworks: [
      {
        img: "/images/allimg.jpg",
        url: "",
        tit: "书画收藏 陷阱何在",
        text: "策展人李裴裴把张小鹿的新展",
        coll: "150",
        glance: "1500"
      },
      {
        img: "/images/allimg.jpg",
        url: "",
        tit: "书画收藏 陷阱何在",
        text: "策展人李裴裴把张小鹿的新展",
        coll: "150",
        glance: "1500"
      },
      {
        img: "/images/allimg.jpg",
        url: "",
        tit: "书画收藏 陷阱何在",
        text: "策展人李裴裴把张小鹿的新展",
        coll: "150",
        glance: "1500"
      },
      {
        img: "/images/allimg.jpg",
        url: "",
        tit: "书画收藏 陷阱何在",
        text: "策展人李裴裴把张小鹿的新展",
        coll: "150",
        glance: "1500"
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
  /***删除**/
  scdeleted:function(e){
    let that = this;
    let idx = e.currentTarget.dataset.index;
    let thisname = e.currentTarget.dataset.name;
    if(thisname == 'delect1'){
      let collect1 = that.data.collect1;
      wx.showModal({
        title: '',
        content: '确认要删除此收藏吗？',
        success:function(res){
          if(res.confirm){
            collect1.splice(idx, 1);
            that.setData({
              collect1: collect1
            })
          }
        }
      })
    } 
    if (thisname == 'delect2') {
      let collect2 = that.data.collect2;
      wx.showModal({
        title: '',
        content: '确认要删除此收藏吗？',
        success: function (res) {
          if (res.confirm) {
            collect2.splice(idx, 1);
            that.setData({
              collect2: collect2
            })
          }
        }
      })
    } 
    if (thisname == 'delect3') {
      let collect3 = that.data.collect3;
      wx.showModal({
        title: '',
        content: '确认要删除此收藏吗？',
        success: function (res) {
          if (res.confirm) {
            collect3.splice(idx, 1);
            that.setData({
              collect3: collect3
            })
          }
        }
      })
    } 
    if (thisname == 'delect4') {
      let collect4 = that.data.collect4;
      wx.showModal({
        title: '',
        content: '确认要删除此收藏吗？',
        success: function (res) {
          if (res.confirm) {
            collect4.splice(idx, 1);
            that.setData({
              collect4: collect4
            })
          }
        }
      })
    } 
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },
  /****
   * 点击切换
   */
  navFun:function(e){
    var _datasetId = e.target.dataset.index;
    var _obj = {};
    _obj.current = _datasetId;
    if (_datasetId){
      this.setData({
        tabArr: _obj
      });
    }
   
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