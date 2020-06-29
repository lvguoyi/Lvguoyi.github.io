// pages/play/play.js
const app = getApp()
Page({
  // 58023
  /**
   * 页面的初始数据
   */
  data: {
    postId: null,
    postView: null,
    inpValue: "",
    comment: [],
    addText: [],
    aa: [{
      num: 2
    }],
    b: false,
    count: [],
    userInfo: {},
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  getPostView(id) {
    wx.request({
      url: 'https://api.kele8.cn/agent/https://app.vmovier.com/apiv3/post/view?postid=' + id,
      success: (res) => {
        console.log(res)
        console.log(res.data.data.comment.list)
        if (res.data.data.comment.list) {
          this.setData({
            comment: res.data.data.comment.list
          })

          for (let i = 0; i < this.data.comment.length; i++) {
            this.setData({
              count: this.data.count.concat({
                foo: false,
                num: Number(this.data.comment[i].count_approve)
              })
            })
          }


        }
        this.setData({
          postView: res.data.data,
        })
      },
      complete: () => {

      }
    })
  },
  //点赞
  add(e) {
    var i = e.currentTarget.dataset.i
    let a = 'count[' + i + '].foo'
    let b = 'count[' + i + '].num'
    let c = this.data.count[i].num + 1
    let d = this.data.count[i].num - 1
    if (!this.data.count[i].foo) {
      this.setData({
        [a]: true,
        [b]: c
      })

    } else {
      this.setData({
        [a]: false,
        [b]: d
      })

    }
  },

  addText() {
    if (this.data.inpValue != "") {
      this.setData({
        addText: [{
          userinfo: {
            avatar: 'https://oss-xpc0.xpccdn.com/Upload/user/2020/02/145e4614b28a1b0.jpeg',
            username: '好的名字可以让你的好朋友更容易记住你'
          },
          content: this.data.inpValue,
          count_approve: 0,
          isAdministrator: false,
          addtime: new Date().getTime()
        }],
      })
      if (this.data.addText.length != 0) {
        this.setData({
          comment: this.data.addText.concat(this.data.comment)
        })
      }
    }
    this.setData({
      inpValue: ""
    })
  },
  inpValue(e) {
    this.setData({
      inpValue: e.detail.value
    })
    console.log(e.detail.value)
  },

  //模态框
  // hh:function(){
  //   wx.showModal({
  //     title: '提示',
  //     content: '这是一个模态弹窗',
  //     success (res) {
  //       if (res.confirm) {
  //         console.log('用户点击确定')
  //       } else if (res.cancel) {
  //         console.log('用户点击取消')
  //       }
  //     }
  //   })
  // },



  //路由跳转
  navitorToplay: function (e) {
    console.log(e.currentTarget.dataset.postid)
    this.setData({
      postId: e.currentTarget.dataset.postid
    })
    this.getPostView(this.data.postId)
    // wx.navigateTo({
    //  url:'/pages/play/play?postid=' + e.currentTarget.dataset.postid,
    // })
  },





  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.postid)
    this.setData({
      postId: options.postid
    })
    this.getPostView(options.postid)

    //加载
    // wx.showLoading({
    //   title: '加载中',
    // })
    // setTimeout(function () {
    //   wx.hideLoading()
    // }, 2000)

  
    
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