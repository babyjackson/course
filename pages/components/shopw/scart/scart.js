// pages/components/shopw/scart/scart.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgurl:app.globalData.imgUrl,
    carts:[],
    totalPrice:0,
    selectAllStatus:'1',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      carts:[
        {
          sname:"阿玛尼",
          storeselect:"1",
          storeurl:"",
          list:[
            {
              gurl:"",
              select:"1",
              img:"/images/allimg.jpg",
              gname:"欧莱雅男士洗面奶水能保湿补水控油深层清洁爽肤水化妆护",
              price:158,
              num:2
            },
            {
              gurl: "",
              select: "1",
              img: "/images/allimg.jpg",
              gname: "欧莱雅男士洗面奶水能保湿补水控油深层清洁爽肤水化妆护",
              price: 158,
              num: 4
            }
          ]
        },
        {
          sname: "SK-II",
          storeselect: "1",
          storeurl: "",
          list: [
            {
              gurl: "",
              select: "1",
              img: "/images/allimg.jpg",
              gname: "欧莱雅男士洗面奶水能保湿补水控油深层清洁爽肤水化妆护",
              price: 158,
              num: 2
            }
          ]
        }
      ]
    })
    this.getTotalPrice();
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
   * 合计
   */
  getTotalPrice:function(){
    let carts = this.data.carts;
    let total = 0;
    for(let i=0;i<carts.length;i++){
      let list = carts[i].list;
      for(let j=0;j<list.length;j++){
        if(list[j].select == '1'){
          total += parseInt(list[j].num) * parseFloat(list[j].price);
        }
      }
    }
    this.setData({
      totalPrice: total.toFixed(2) //
    })
  },

  /**
   * storeselectAll
   */
  storeselectAll:function(e){
    let parentindex = e.currentTarget.dataset.parentindex;
    let carts = this.data.carts;
    let storeselect = carts[parentindex].storeselect;
    carts[parentindex].storeselect = storeselect == 1 ? "0" : "1";
    let list = carts[parentindex].list;
    for (let j = 0; j < list.length; j++) {
      list[j].select = storeselect == 1 ? "0" : "1";;
    }
    if (carts[parentindex].storeselect == '0'){
      this.setData({
        selectAllStatus: '0',
      });
    }
    let storearr = [];
    for(let i=0;i<carts.length;i++){
      let storeture = carts[i].storeselect;
      if(storeture == "1"){
        storearr.push(storeture);
      }
    }
    if(carts.length == storearr.length){
      this.setData({
        selectAllStatus: "1"
      })
    }
    this.setData({
      carts:carts
    })
    this.getTotalPrice();
  },
  /**
   * selectList
   */
  selectList:function(e){
    const {index,parentindex} = e.currentTarget.dataset;
    let carts = this.data.carts;
    let list = carts[parentindex].list;
    let selected = list[index].select;
    list[index].select = selected == '1' ? '0' : '1';
    if (list[index].select == '0'){
      carts[parentindex].storeselect = "0";
      this.setData({
        selectAllStatus: "0"
      })
    }
    let selecttrue = [];
    for(let i=0;i<list.length;i++){
      let allture = list[i].select;
      if(allture == "1"){
        selecttrue.push(allture);
      }
    }
    if(list.length == selecttrue.length){
      carts[parentindex].storeselect = "1";
    }
    let parentselecttrue = [];
    for (let i = 0; i < carts.length; i++) {
      let parrture = carts[i].storeselect;
      if (parrture == '1') {
        parentselecttrue.push(parrture);
      }
    }
    console.log(parentselecttrue)
    if (carts.length === parentselecttrue.length) {
      this.setData({
        selectAllStatus: 1
      })
    }
    this.setData({
      carts:carts
    });
    this.getTotalPrice();
  },
  /**
   * allselect
   */
  selectAll:function(e){
    let selectAll= this.data.selectAllStatus;
    selectAll = selectAll == '1' ? '0' : '1';
    let carts = this.data.carts;
    for (let i = 0; i < carts.length; i++) {
      let list = carts[i].list;
      carts[i].storeselect = selectAll;
      for (let j = 0; j < list.length; j++) {
        list[j].select = selectAll;
      }
    }
    this.setData({
      selectAllStatus: selectAll,
      carts: carts
    });
    // console.log(carts)
    this.getTotalPrice(e);
  },
  /**
   * addCount
   */
  addCount:function(e){
    const { index, parentindex } = e.currentTarget.dataset;
    let carts = this.data.carts;
    let list = carts[parentindex].list;
    let num = list[index].num;
    num +=1;
    list[index].num = num;
    this.setData({
      carts: carts
    });
    this.getTotalPrice(e);  
  },
  /**
   * minusCount
   */
  minusCount:function(e){
    const { index, parentindex } = e.currentTarget.dataset;
    let carts = this.data.carts;
    let list = carts[parentindex].list;
    let num = list[index].num;
    if(num>1){
      num -=1;
      list[index].num = num;
      this.setData({
        carts: carts
      });
    }
    this.getTotalPrice(e);  
  },
  deleteList:function(e){
    let that = this;
    const {index,parentindex} = e.currentTarget.dataset;
    let carts = this.data.carts;
    let list = carts[parentindex].list;
    let selected = list[index].select;
    if (selected == '0'){
      wx.showToast({
        title: '您还没有选择商品哦',
        icon: 'none',
        duration: 2000
      })
    }else{
      wx.showModal({
        title: '提示',
        content: '确认要删除此商品吗？',
        success: function (res) {
          if (res.confirm) {
            list.splice(index, 1);
            if (carts.length > 0) {
              if (list.length <= 0) {
                carts.splice(parentindex, 1)
              }
            }
            that.getTotalPrice(e);
            that.setData({
              carts: carts
            });
          } 
        }
      })
    }

  }
})