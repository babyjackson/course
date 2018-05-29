const app = getApp();
Page({
  data: {
    imgurl: app.globalData.imgUrl,
    active: false,
    selectedNav: 0,
    listData: [
      {
        nav: '综合',
        hasalt: null,
      },
      {
        nav: '销量',
        selectedItem: '',
        hasalt: null,
        data: [
          {
            title: '标题文字2'
          },
          {
            title: '标题图片',
          },
          {
            title: '标题文字',
          }
        ]
      },
      {
        nav: '类别',
        selectedItem: '',
        hasalt: null,
        data: [
          {
            title: '标题文字3'
          },
          {
            title: '标题图片',
          },
          {
            title: '标题文字',
          }
        ]
      },
      {
        nav: '价格',
        selectedItem: '',
        hasalt: null,
        data: [
          {
            title: '标题文字4'
          },
          {
            title: '标题图片',
          },
          {
            title: '标题文字',
          }
        ]
      },
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
  onLoad() {
    let listData = this.data.listData;
    console.log(listData.length)
    for (let i = 0; i < listData.length; i++) {
      let data = listData[i].data;
      if (data) {
        if (data.length > 0) {
          listData[i].hasalt = 1;
        }
      }
    }
    this.setData({
      listData: listData
    })
  },

  /**点击出现下拉**/
  _onNavItemTap(e) {
    let listData = this.data.listData;
    const index = e.currentTarget.dataset.index;
    let data = listData[index];
    if (data.data) {
      if (this.onDropdownNavItemTap) {
        this.onDropdownNavItemTap(e, index);
      } else {
        console.warn('no onDropdownNavItemTap method');
      }
    } else {
      console.log('选中第' + index);
      this.catchDropdownBgTap(e);
    }
  },
  /**点击值***/
  _catchListItemTap(e) {
    const { index, parentindex, title } = e.currentTarget.dataset;
    if (this.catchDropdownNavItemTap) {
      this.catchDropdownNavItemTap(e, parentindex, index, title);
    } else {
      console.warn('no catchDropdownNavItemTap method');
    }
  },
  /***点击空白处隐藏**/
  _catchBgTap(e) {
    if (this.catchDropdownBgTap) {
      this.catchDropdownBgTap(e);
    } else {
      console.warn('no catchDropdownBgTap method');
    }
  },
  /***设置active和selected**/
  onDropdownNavItemTap(e, index) {
    const { selectedNav, active } = this.data;
    let nextactive = !active;
    if (selectedNav != index) {
      nextactive = true;
    }
    this.setData({
      active: nextactive,
      selectedNav: index
    });
  },
  /****获取值 */
  catchDropdownNavItemTap(e, parentindex, index, title) {
    const { listData } = this.data;
    const data = listData[parentindex];
    console.log('第'+parentindex+'个tab'+index+'个元素');
    this.setData({
      active: false,
      listData
    });
  },
  /***隐藏下拉**/
  catchDropdownBgTap(e) {
    this.setData({
      active: false
    });
  }
});
