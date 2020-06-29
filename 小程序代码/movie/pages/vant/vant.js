// pages/vant/vant.js
import Notify from '/@vant/weapp/notify/notify';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    show: false,
    cateList: [],
    autoplay: true,
    indicatorDots: true,
    findList: [],
    num: 0,
    count: 0,
    pageId: null,
    pageList: [],
    searchFoo: true,
    historyList: [],
    searchInp: "",
    hotList: [],
    alertFoo: false,
    showLoading: false,
    searchInp: "",
    hasmore: true
  },
  onChange(event) {
    // wx.showToast({
    //   title: `切换到标签 ${event.detail.name}`,
    //   icon: 'none',
    // });
  },
  change(e) {
    //console.log(e.detail.current)
    // wx.createSelectorQuery().selectAll('.text').boundingClientRect(function (rect) {
    //   rect[e.detail.current].height
    // }).exec()
    this.setData({
      num: e.detail.current
    })
  },
  chan(e) {
    this.setData({
      count: e.detail.current
    })
  },

  //发现
  getFindList() {
    var cachedFindList = wx.getStorageSync('findList')
    if (cachedFindList) {
      cachedFindList = JSON.parse(cachedFindList)
    }
    if (cachedFindList.expires > Date.now()) {
      //还没有过期
      this.setData({
        pageId: cachedFindList.data.posts.lastid,
        findList: cachedFindList.data
      })
      this.getPage()

    } else {
      if (!this.data.show) {
        this.setData({
          showLoading: true
        })
      }
      wx.request({
        url: 'https://api.kele8.cn/agent/https://app.vmovier.com/apiv3/index/index',
        success: (res) => {
          if (res.data.data) {
            this.setData({
              findList: res.data.data,
              pageId: res.data.data.posts.lastid
            })
            wx.setStorage({
              data: JSON.stringify({
                expires: Date.now() + 3 * 60 * 60 * 1000,
                data: res.data.data,
              }),
              key: 'findList',
            })
          }
        },
        complete: () => {
          this.getPage()
          this.setData({
            show: false,
            showLoading: false
          })
        }
      })
    }


  },
  //获取下一页
  getPage() {
    if (!this.data.show) {
      this.setData({
        showLoading: true
      })
    }
    wx.request({
      url: 'https://api.kele8.cn/agent/http://app.vmovier.com/apiv3/index/getIndexPosts/lastid/' + this.data.pageId,
      success: (res) => {
        this.setData({
          pageList: this.data.pageList.concat(res.data.data),
        })
        let length = this.data.pageList.length - 1
        if (this.data.pageList[length].next_page_url === null) {
          Notify({
            message: '没有更多了~',
            color: 'rgb(101, 101, 101)',
            background: 'rgb(40, 37, 37)',
          });
          this.setData({
            hasmore: false
          })
        }
      },
      complete: () => {
        this.setData({
          showLoading: false
        })
      }
    })
  },

  // 频道
  routeToPostslist(e) {
    console.log(e.currentTarget.dataset.cateid)
    wx.navigateTo({
      url: '/pages/posts/posts?id=' + e.currentTarget.dataset.cateid,
    })
  },
  showOverlay() {
    this.setData({
      show: true
    })
  },
  hideOverlay() {
    this.setData({
      show: false
    })
  },
  getCateList() {
    //先去拿本地
    var cachedCateList = wx.getStorageSync('cateList')
    if (cachedCateList) {
      cachedCateList = JSON.parse(cachedCateList)
    }
    if (cachedCateList.expires > Date.now()) {
      //还没有过期
      this.setData({
        cateList: cachedCateList.data
      })
    } else {
      this.showOverlay()
      //过期
      wx.request({
        //获取数据
        url: 'https://api.kele8.cn/agent/https://app.vmovier.com/apiv3/cate/getList',
        success: (res) => {
          console.log(res)
          if (res.data.data) {
            this.setData({
              cateList: res.data.data
            })
            wx.setStorage({
              data: JSON.stringify({
                expires: Date.now() + 3 * 60 * 60 * 1000,
                data: res.data.data,
              }),
              key: 'cateList',
            })
          }
        },
        fail: () => {},
        complete: () => {
          this.hideOverlay()
        }
      })
    }
  },
  //路由跳转
  navitorToplay: function (e) {
    wx.navigateTo({
      url: '/pages/play/play?postid=' + e.currentTarget.dataset.postid,
    })
  },
  //点击热门搜索跳转路由
  navitorSearch(e) {

    wx.navigateTo({
      url: '/pages/search/search?kw=' + e.currentTarget.dataset.kw,
    })
    //判断是否重复添加历史记录
    if (this.data.historyList.length == 0) {
      this.setData({
        historyList: this.data.historyList.concat({
          kw: e.currentTarget.dataset.kw
        })
      })
    } else {
      for (let i = 0; i < this.data.historyList.length; i++) {
        if (this.data.historyList[i].kw != e.currentTarget.dataset.kw) {
          this.setData({
            historyList: this.data.historyList.concat({
              kw: e.currentTarget.dataset.kw
            })
          })
        } else {
          return
        }
      }
    }
  },
  //获取热门搜索
  getHot() {
    wx.request({
      url: `https://api.kele8.cn/agent/https://app.vmovier.com/apiv3/search?kw=%E6%B5%8B%E8%AF%95`,
      success: (res) => {

        this.setData({
          hotList: res.data.data.recommend_keywords
        })
      },
      complete: () => {}
    })
  },
  //清空搜索历史
  clearHistory() {
    this.setData({
      alertFoo: true
    })
  },
  //弹出框
  alertTrue() {
    this.setData({
      historyList: [],
      alertFoo: false
    })
  },
  alertFalse() {
    this.setData({
      alertFoo: false
    })
  },
  //获取输入框的值
  inpValue(e) {
    this.setData({
      searchInp: e.detail.value
    })
    console.log(e.detail.value)
  },
  //点击搜索跳转
  navInp() {
    if (this.data.searchInp !== "") {
      wx.navigateTo({
        url: '/pages/search/search?kw=' + this.data.searchInp,
      })
      //判断是否重复添加历史记录
      if (this.data.historyList.length == 0) {
        this.setData({
          historyList: this.data.historyList.concat({
            kw: this.data.searchInp
          }),
          searchInp: ""
        })
      } else {
        for (let i = 0; i < this.data.historyList.length; i++) {
          if (this.data.historyList[i].kw != this.data.searchInp) {
            this.setData({
              historyList: this.data.historyList.concat({
                kw: this.data.searchInp
              }),
              searchInp: ""
            })
          } else {
            this.setData({
              searchInp: ""
            })
            return
          }
        }
      }
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCateList()
    this.getFindList()
    this.getHot()
    if (this.data.findList.length == 0) {
      this.setData({
        show: true
      })
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
    if (this.data.hasmore) {
      var length = this.data.pageList.length - 1
      this.setData({
        pageId: this.data.pageList[length].lastid
      })
      this.getPage()
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})