// pages/search/search.js
import Notify from '/@vant/weapp/notify/notify';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchList: [],
    keyword: "",
    page: 1,
    show: true,
    showLoading: false,
    hasmore: true
  },
  //获取数据
  getSearchList() {
    if (!this.data.show) {
      this.setData({
        showLoading: true
      })
    }
    wx.request({
      url: `https://api.kele8.cn/agent/https://api.kele8.cn/agent/https://app.vmovier.com/apiv3/search/index/kw/${this.data.keyword}/type/post/order/default/cateid/0/p/${this.data.page}`,

      success: (res) => {
        console.log(res.data.data)
        this.setData({
          searchList: this.data.searchList.concat(res.data.data)
        })
        let length = this.data.searchList.length - 1
        if (this.data.searchList[length].result.next_page_url === null) {
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
          show: false,
          showLoading: false
        })
      }
    })
  },
  //路由跳转
  navitorToplay: function (e) {
    console.log(e)
    wx.navigateTo({
      url: '/pages/play/play?postid=' + e.currentTarget.dataset.postid,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      keyword:options.kw
    })
    this.getSearchList()
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
      this.setData({
        page: this.data.page + 1
      })
      this.getSearchList()
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})