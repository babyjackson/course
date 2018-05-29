// pages/components/index.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgurl: app.globalData.imgUrl,
    current:0,
    ibanner:[
      {
        url:"",
        img:"/images/ibanner-1.png"
      },
      {
        url: "",
        img: "/images/ibanner-1.png"
      },
      {
        url: "",
        img: "/images/ibanner-1.png"
      }
    ],
    inav:[
      {
        img:"/images/inav-1.png",
        url:"/pages/components/train/trainlist/trainlist",
        text:"培训课程"
      },
      {
        img: "/images/inav-2.png",
        url: "/pages/components/btob/protocol/protocol",
        text: "招商入驻"
      },
      {
        img: "/images/inav-3.png",
        url: "/pages/components/studio/brand/brand",
        text: "知名画室"
      },
      {
        img: "/images/inav-4.png",
        url: "/pages/components/news/newslist/newslist",
        text: "行业资讯"
      },
      {
        img: "/images/inav-5.png",
        url: "/pages/components/works/show/show",
        text: "作品展示"
      }
    ],
    traincourse:[
      {
        url:"",
        ico:"/images/trainico-1.png",
        cname:"美术培训课",
        tips:"艺术天堂"
      },
      {
        url: "",
        ico: "/images/trainico-2.png",
        cname: "电脑绘画课程",
        tips: "创新绘画教育"
      },
      {
        url: "",
        ico: "/images/trainico-3.png",
        cname: "沙画课程",
        tips: "提升兴趣"
      }
    ],
    rcourse:[
      {
        url:"",
        cname:"儿童沙画班",
        tips:"少儿沙画基础手法、沙瓶画兴趣班"
      },
      {
        url: "",
        cname: "书法班",
        tips: "硬笔书法、软笔书法"
      },
      {
        url: "",
        cname: "少儿电脑绘画班",
        tips: "电脑像素画、儿童动漫画、电脑图形画"
      },
      {
        url: "",
        cname: "新东方语数外幼小启蒙课",
        tips: "小小奥数班、新概念英语、思维导图集训营"
      }
    ],
    fban:[
      {
        logo:"/images/allimg.jpg",
        tit:"新纪元美术培训",
        date:"2018-05-01",
        text:"在这里，您的孩子将学会去欣赏美、发现美、创造美。为了激发儿童学习美术的兴趣，陶冶儿童的艺术性情，挖掘",
        url:""
      },
      {
        logo: "/images/allimg.jpg",
        tit: "新纪元美术培训",
        date: "2018-05-01",
        text: "在这里，您的孩子将学会去欣赏美、发现美、创造美。为了激发儿童学习美术的兴趣，陶冶儿童的艺术性情，挖掘",
        url: ""
      },
      {
        logo: "/images/allimg.jpg",
        tit: "新纪元美术培训",
        date: "2018-05-01",
        text: "在这里，您的孩子将学会去欣赏美、发现美、创造美。为了激发儿童学习美术的兴趣，陶冶儿童的艺术性情，挖掘",
        url: ""
      }
    ],
    famousli:[
      {
        url:"",
        logo:"/images/allimg.jpg",
        tit:"新纪元美术培训",
        text:"为了激发儿童学习美术的兴趣，陶冶儿童的艺术性情，挖掘儿童的绘画潜"
      },
      {
        url: "",
        logo: "/images/allimg.jpg",
        tit: "新纪元美术培训",
        text: "为了激发儿童学习美术的兴趣，陶冶儿童的艺术性情，挖掘儿童的绘画潜"
      },
      {
        url: "",
        logo: "/images/allimg.jpg",
        tit: "新纪元美术培训",
        text: "为了激发儿童学习美术的兴趣，陶冶儿童的艺术性情，挖掘儿童的绘画潜"
      }
    ],
    newsban:[
      {
        img:"/images/newsban.jpg",
        tit:"上海博物馆藏明代艺术珍品展在俄罗斯开幕",
        url:""
      },
      {
        img: "/images/newsban.jpg",
        tit: "上海博物馆藏明代艺术珍品展在俄罗斯开幕",
        url: ""
      },
      {
        img: "/images/newsban.jpg",
        tit: "上海博物馆藏明代艺术珍品展在俄罗斯开幕",
        url: ""
      }
    ],
    newsli:[
      {
        url:"",
        tit:"书画收藏 陷阱何在",
        text:"策展人李裴裴把张小鹿的新展览取名为“甜美的阿司匹林”。如果我们承认阿司匹林是药，那么就意味着艺术家眼中的世界"
      },
      {
        url: "",
        tit: "张小鹿新展：“甜美的阿司匹林”用作品治愈世界",
        text: "策展人李裴裴把张小鹿的新展览取名为“甜美的阿司匹林”。如果我们承认阿司匹林是药，那么就意味着艺术家眼中的世界"
      },
      {
        url: "",
        tit: "鸡蛋：艺术史上浓墨重彩的一笔",
        text: "策展人李裴裴把张小鹿的新展览取名为“甜美的阿司匹林”。如果我们承认阿司匹林是药，那么就意味着艺术家眼中的世界"
      }
    ],
    workban:[
      {
        img:"/images/workban.jpg",
        tit:"鸡蛋：艺术史上浓墨重彩的一笔",
        text:"策展人李裴裴把张小鹿的新展览取名为“甜美的阿司匹林”。如果我们承认阿司匹林是药，那么就意味着艺术",
        url:""
      },
      {
        img: "/images/workban.jpg",
        tit: "鸡蛋：艺术史上浓墨重彩的一笔",
        text: "策展人李裴裴把张小鹿的新展览取名为“甜美的阿司匹林”。如果我们承认阿司匹林是药，那么就意味着艺术",
        url: ""
      },
      {
        img: "/images/workban.jpg",
        tit: "鸡蛋：艺术史上浓墨重彩的一笔",
        text: "策展人李裴裴把张小鹿的新展览取名为“甜美的阿司匹林”。如果我们承认阿司匹林是药，那么就意味着艺术",
        url: ""
      }
    ],
    workli:[
      {
        img:"/images/workban.jpg",
        url:"",
        tit:"史上浓墨重彩的一笔",
        text:"策展人李裴裴把张小鹿的新展览取名为“甜美的阿司匹",
        zan:"150"
      },
      {
        img: "/images/workban.jpg",
        url: "",
        tit: "史上浓墨重彩的一笔",
        text: "策展人李裴裴把张小鹿的新展览取名为“甜美的阿司匹",
        zan: "150"
      },
      {
        img: "/images/workban.jpg",
        url: "",
        tit: "史上浓墨重彩的一笔",
        text: "策展人李裴裴把张小鹿的新展览取名为“甜美的阿司匹",
        zan: "150"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  curchange:function(e){
    let current = e.detail.current;
    this.setData({
      current:current
    });
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