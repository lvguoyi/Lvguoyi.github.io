// pages/posts/posts.js
import Notify from '/@vant/weapp/notify/notify';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    cateid: null,
    posts: [],
    page: 1,
    mask: true,
    hasmore: true,
    show: false
  },

  getPostsByCateId(id) {
    this.setData({
      show: true
    })
    wx.request({
      url: `https://api.kele8.cn/agent/https://app.vmovier.com/apiv3/post/getpostInCate?p=${this.data.page}&size=10&cateid=${id}`,
      success: (res) => {
        console.log(res)
        this.setData({
          posts: [...this.data.posts, ...res.data.data]
        })
        if (res.data.msg !== "OK") {
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
          show: false
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log(options)
    this.setData({
      cateid: options.id
    })
    this.getPostsByCateId(this.data.cateid)
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
      this.getPostsByCateId(this.data.cateid)
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})