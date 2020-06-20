<template>
  <div class="box">
    <!-- 返回 -->
    <van-row class="topSearch">
      <van-col class="mi" span="3">
        <a href="#" @click="$router.go(-1)">
          <van-icon name="cross" />
        </a>
      </van-col>
      <van-col span="6">
        <a href="#">歌曲Mv</a>
      </van-col>
    </van-row>
    <!-- 返回end-->

    <!-- 视频播放窗口 -->
    <van-row class="play">
      <van-col span="24">
        <div class="playing">
          <video autoplay ref="video" @ended="end" src controls></video>
        </div>
      </van-col>
    </van-row>
    <!-- 视频播放窗口end -->

    <!-- 推荐MV -->
    <van-row class="playMv">
      <van-col span="22" offset="1">
        <h1>推荐Mv</h1>
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in mvList" :key="index">
              <ul>
                <li>
                  <div
                    :style="{backgroundImage:`url(${item.cover})`,backgroundSize:'auto 100%'}"
                    class="mv"
                  >
                    <div class="mask"></div>
                    <span
                      @click="playList(index)"
                      v-show="!mvList[index].subed"
                      class="iconfont icon-bofang"
                    ></span>
                    <span
                      @click="pauseList(index)"
                      v-show="mvList[index].subed"
                      class="iconfont icon-zantingtingzhi"
                    ></span>
                  </div>
                  <h3>{{item.name}}</h3>
                  <h5>{{item.artistName}}</h5>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </van-col>
    </van-row>
    <!-- 推荐MVend -->

    <!-- 详情 -->

    <van-row class="message">
      <van-col span="22" offset="1">
        <h1>MV详情:</h1>
        <h3>{{desc[count].name}}</h3>
        <h4>
          歌手:
          <i>{{desc[count].artistName}}</i>
          <button>关注</button>
        </h4>
      </van-col>
    </van-row>

    <!-- 详情end -->

    <!-- 评论 -->

    <van-row class="about">
      <van-col span="22" offset="1">
        <h3 class="title">最新评论:</h3>
        <div class="text">
          <ul>
            <li v-for="(item,index) in desc[count].desc" :key="index">
              <van-row>
                <van-col span="4">
                  <div
                    ref="img"
                    class="img"
                    :style="{background:'url('+item.user.avatarUrl+')no-repeat',backgroundSize:'1.25rem 1.25rem'}"
                  ></div>
                </van-col>
                <van-col span="15">
                  <h3>{{item.user.nickname}}</h3>
                  <h5>{{time[index]}}</h5>
                </van-col>
                <van-col span="5">
                  <div class="dian">
                    2
                    <span class="iconfont icon-zan1"></span>
                  </div>
                </van-col>
                <van-col span="20" offset="4">
                  <p>{{item.content}}</p>
                </van-col>
              </van-row>
            </li>
          </ul>
          <div class="bottom"></div>
        </div>
      </van-col>
    </van-row>

    <!-- 评论end -->

    <!-- 发表评论 -->

    <van-row class="talk">
      <van-col span="24">
        <input ref="input" placeholder="期待你的神评论" v-model="inp" type="text" />
        <button @click="takeing">发表</button>
      </van-col>
    </van-row>

    <!-- 发表评论end -->
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  data: function() {
    return {
      mvList: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
      count: 0,
      inp: "",
      takeList: null,
      foo: false,
      time: [],
      mvSrc: [],
      desc: [{}],
      canClick: true
    };
  },
  methods: {
    //点击推荐Mv播放相对应的Mv

    playList(index) {
      //获取推荐MV地址
      if (!this.canClick) {
        return;
      }
      this.canClick = false;
      this.count = index;
      for (let i = 0; i < this.mvList.length; i++) {
        this.mvList[i].subed = false;
      }

      this.mvList[index].subed = true;
      if (this.mvList[this.count].src == undefined) {
        this.axios
          .get("http://music.kele8.cn/mv/url", {
            params: {
              id: this.mvList[index].id
            }
          })
          .then(response => {
            //console.log(response.data.data.url);
            this.mvList[this.count].src = response.data.data.url;
            this.$refs.video.src = this.mvList[this.count].src;
            this.$refs.video.play();
            //console.log(this.mvList);
          })
          .catch(error => {
            console.log(error);
          });
      }
      this.$refs.video.play();

      //获取歌曲评论
      if (this.desc[this.count].desc === null) {
        this.axios
          .get("http://music.kele8.cn/comment/mv", {
            params: {
              id: this.desc[index].id
            }
          })
          .then(response => {
            //console.log(response.data.hotComments);
            this.desc[this.count].desc = response.data.hotComments;
            this.takeTime();
          })
          .catch(error => {
            console.log(error);
          });
      }
      setTimeout(() => {
        this.canClick = true;
      }, 1000);
    },
    // 处理时间
    takeTime() {
      for (let i = 0; i < this.desc[this.count].desc.length; i++) {
        var d = new Date(this.desc[this.count].desc[i].time);
        this.time.push(this.formatDate(d));
      }
    },
    //暂停
    pauseList(index) {
      if (!this.canClick) {
        return;
      }
      this.canClick = false;
      for (let i = 0; i < this.mvList.length; i++) {
        this.mvList[i].subed = false;
      }
      this.mvList[index].subed = false;
      this.$refs.video.pause();
      setTimeout(() => {
        this.canClick = true;
      }, 1000);
    },
    //监听播放状态
    playing() {
      if (this.$refs.video.played) {
        this.mvList[this.count].subed = true;
      } else {
        this.mvList[this.count].subed = false;
      }
    },

    //时间转化
    formatDate(date) {
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var day = date.getDate();
      var hour = date.getHours();
      var minute = date.getMinutes();
      var second = date.getSeconds();
      //  return year+"-"+month+"-"+date+" "+hour+":"+minute+":"+second;
      return (
        year +
        "-" +
        (String(month).length > 1 ? month : "0" + month) +
        "-" +
        (String(day).length > 1 ? day : "0" + day) +
        " " +
        (String(hour).length > 1 ? hour : "0" + hour) +
        ":" +
        (String(minute).length > 1 ? minute : "0" + minute) +
        ":" +
        (String(second).length > 1 ? second : "0" + second)
      );
    },

    //评论方法
    takeing() {
      if (this.inp != "") {
        if (this.$store.state.my.svipshow) {
          this.desc[this.count].desc.unshift({
            content: this.inp,
            user: {
              nickname: this.$store.state.my.username,
              avatarUrl:
                "http://p1.music.126.net/_XT2k6XkoXQgytrq4st8tQ==/19085322835440524.jpg"
            },
            time: new Date().getTime()
          });

          // for (let i = 0; i < this.mvList[this.count].desc.length; i++) {
          //   this.$refs.img[i].style.background =
          //     "url(" + this.mvList[this.count].desc[i].user.avatarUrl + ")";
          //   this.$refs.img[i].style.backgroundSize = "1.25rem 1.25rem";
          // }
          if (this.desc[this.count].desc[0]) {
            var d = new Date(this.desc[this.count].desc[0].time);
            this.time.unshift(this.formatDate(d));
          }

          this.inp = "";
        } else {
          this.$router.push("/my/login/phonelogin");
        }
      }
    },
    //列表顺序播放
    end() {
      this.count += 1;
      if (this.count > this.mvList.length - 1) {
        this.count = 0;
      }
      this.playList();
    }
  },

  beforeCreate() {
    //获取推荐MV数据
    this.axios
      .get("http://music.kele8.cn/mv/first?limit=10", {})
      .then(response => {
        console.log(response.data);
        this.mvList = response.data.data;
        this.desc = response.data.data;
        //console.log(this.mvList);
        if (this.$store.state.mvList.length != 0) {
          this.desc.push(this.$store.state.mvList[0]);
          this.count = this.desc.length - 1;
        }
        console.log("123123132132132", this.$store.state.mvList);
      })
      .catch(error => {
        console.log(error);
      });
  },
  created() {
    this.$store.state.foo = false;
    console.log("1111111", this.$store.state.mvList[0]);
  },
  destroyed() {
    this.$store.state.foo = true;
    if (this.$store.state.mvList[0].desc) {
      this.$store.state.mvList[0].desc = this.desc[this.desc.length - 1].desc;
    }
  },
  beforeUpdate() {
    if (this.$store.state.mvList.length != 0) {
      for (let i = 0; i < this.$store.state.mvList[0].desc.length; i++) {
        var d = new Date(this.$store.state.mvList[0].desc[i].time);
        this.time.push(this.formatDate(d));
      }
    }
  },
  updated() {},
  mounted() {
    new Swiper(".swiper-container", {
      speed: 2500,
      slidesPerView: 2,
      spaceBetween: 10
    });
    if (this.$store.state.mvList.length != 0) {
      this.$refs.video.src = this.$store.state.mvList[0].url;
      console.log(this.$store.state.mvList);
    }
  }
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  background-color: #202020;
}
//返回
.topSearch {
  width: 100%;
  //padding-top: 0.15625rem;
  background-color: #2e2f34;
  height: 1.25rem;
  .van-icon {
    text-align: center;
    display: block;
    font-size: 0.46875rem;
    height: 1.25rem;
    line-height: 1.25rem;
    color: #a2a1a6;
  }
  a {
    color: #a2a1a6;
    font-size: 0.46875rem;
    display: block;
    text-align: left;
    height: 1.25rem;
    letter-spacing: 0.078125rem;
    line-height: 1.25rem;
  }
}

//返回end

//视频播放窗口
.play {
  width: 100%;
  height: 4.6875rem;

  video {
    width: 100%;
    height: 100%;
  }
}
//视频播放窗口end

//推荐MV
.playMv {
  margin-top: 20px;
  color: #cacaca;
  background-color: #202020;
  text-indent: 0.078125rem;
  h1 {
    padding: 0;
    margin: 0;
    font-size: 0.5625rem;
    font-weight: normal;
    letter-spacing: 0.078125rem;
  }
  li {
    color: #a1a0a5;
    letter-spacing: 0.078125rem;
    margin-top: 0.3125rem;
    background-size: cover;
    background-position: center;
    .mv {
      width: 100%;
      height: 3.125rem;
      display: block;
      background-color: orange;
      position: relative;
      line-height: 3.125rem;
      .mask {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 1;
        background: rgba(0, 0, 0, 0.5);
      }
      span {
        position: absolute;
        z-index: 2;
        font-size: 0.78125rem;
        left: 50%;
        width: 0.78125rem;
        margin-left: -0.390625rem;
      }
    }
    h3 {
      padding: 0;
      margin: 0 auto;
      font-size: 0.390625rem;
      color: #a1a0a5;
      text-align: left;
      font-weight: normal;
      margin-top: 0.15625rem;
      width: 4.375rem;
      overflow: hidden;
      height: 0.78125rem;
      line-height: 0.78125rem;
    }
    h5 {
      padding: 0;
      margin: 0 auto;
      font-size: 0.3125rem;
      color: #a1a0a5;
      text-align: left;
      font-weight: normal;
      width: 100%;
      overflow: hidden;
      height: 0.546875rem;
      line-height: 0.546875rem;
    }
  }
  .swiper-container {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    //background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
}

#progressEffect {
  position: absolute;
  z-index: 10;
  top: 20px;
  left: 20px;
}

//详情

.message {
  width: 100%;
  margin-top: 0.46875rem;
  background-color: #212227;
  padding: 0.3125rem 0;
  h1 {
    padding: 0;
    margin: 0;
    color: #a2a1a6;
    font-size: 0.46875rem;
    //font-weight: normal;
    letter-spacing: 0.046875rem;
  }
  h3 {
    padding: 0;
    margin: 0;
    color: #656469;
    font-size: 0.46875rem;
    margin-top: 0.3125rem;
  }

  h4 {
    padding: 0;
    margin: 0;
    color: #656469;
    font-size: 0.4375rem;
    margin-top: 0.3125rem;
    i {
      font-style: normal;
      color: #1f5792;
      margin-left: 0.15625rem;
    }
    button {
      border: none;
      outline: none;
      background-color: #005fbd;
      font-size: 0.390625rem;
      margin-left: 0.3125rem;
      height: 0.703125rem;
      width: 1.40625rem;
      border-radius: 0.703125rem;
      color: white;
    }
  }
}

//详情end

//推荐MVend

//评论

.about {
  //margin-top: 0.3125rem;
  background-color: #2d2e30;
  h3.title {
    margin: 0;
    padding: 0;
    font-size: 0.46875rem;
    font-weight: normal;
    color: #a2a1a6;
  }
  .text {
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      li {
        margin: 0.46875rem 0;
        .img {
          width: 1.25rem;
          height: 1.25rem;
          border-radius: 50%;
          background-color: #ccc;
        }
        h3 {
          margin: 0;
          padding: 0;
          font-size: 0.46875rem;
          color: #0a5cb0;
          font-weight: normal;
        }
        h5 {
          margin: 0;
          padding: 0;
          font-size: 0.375rem;
          margin-top: 0.125rem;
          color: #a1a2a6;
          font-weight: normal;
        }
        .dian {
          text-align: right;
          font-size: 0.46875rem;
          color: #a1a2a6;
          margin-top: 0.390625rem;
          span {
            margin-left: 0.15625rem;
          }
        }
        p {
          margin: 0;
          font-size: 0.390625rem;
          width: 100%;
          color: #a1a2a6;
          //background-color: orange;
          padding: 0.078125rem 0;
          letter-spacing: 0.03125rem;
          margin-top: 0.3125rem;
        }
      }
    }
    .bottom {
      width: 100%;
      height: 2.34375rem;
    }
  }
}

//评论end

//发表评论

.talk {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 1.875rem;
  background-color: #282830;
  input {
    width: 60%;
    height: 1.09375rem;
    float: left;
    border-radius: 0.9375rem;
    outline: none;
    border: none;
    padding: 0 0.3125rem;
    font-size: 0.34375rem;
    margin-top: 0.390625rem;
    margin-left: 0.46875rem;
    background-color: #30333a;
    color: #a2a1a6;
  }
  button {
    width: 1.875rem;
    height: 0.9375rem;
    font-size: 0.390625rem;
    //padding: 0.15625rem 0.3125rem;
    border-radius: 0.9375rem;
    border: none;
    outline: none;
    background-color: #183d67;
    color: #738ba3;
    float: left;
    margin-top: 0.46875rem;
    margin-left: 0.46875rem;
  }
}

//发表评论end
</style>