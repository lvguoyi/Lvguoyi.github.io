<template>
  <div class="box">
    <div
      class="mask"
      :style="{background:`url(${songArr.coverImgUrl})`,backgroundSize:'1.25rem 1.25rem'}"
    ></div>

    <!-- 返回 -->
    <van-row class="topSearch">
      <van-col class="mi" span="3">
        <a href="#" @click="hui">
          <van-icon name="cross" />
        </a>
      </van-col>
      <van-col span="6">
        <a href="#">歌单</a>
      </van-col>
    </van-row>
    <!-- 返回end-->

    <!-- 歌单信息 -->
    <van-row class="message">
      <van-col span="9" offset="1">
        <a
          href="#"
          class="img"
          :style="{background:`url(${songArr.coverImgUrl})`,backgroundSize:'3.125rem 3.125rem'}"
        >
          <span class="iconfont icon-pause">&nbsp;&nbsp;{{songArr.playCount / 10000}}万</span>
        </a>
      </van-col>
      <van-col span="13">
        <h3>{{songArr.name}}</h3>
        <a href="#" class="content">
          <span
            :style="{background:`url(${songArr.coverImgUrl})`,backgroundSize:'1.25rem 1.25rem'}"
          ></span>
          <h5>{{nickname}}</h5>
        </a>
      </van-col>
    </van-row>

    <!-- 歌单信息end -->

    <!-- 歌单详情 -->

    <van-row class="particulars">
      <van-col span="22" offset="1">
        <h1>详情:</h1>
        <div class="content">
          <p ref="p">{{songArr.description}}</p>
          <span @click="up" v-show="spanShow" class="iconfont icon-up"></span>
          <span @click="zhankai" v-show="!spanShow" class="iconfont icon-zhankai"></span>
        </div>
      </van-col>
    </van-row>

    <!-- 歌单详情end -->

    <!-- 歌曲列表 -->

    <van-row class="songList">
      <van-col span="22" offset="1">
        <h1>歌曲列表</h1>
        <!-- 加载 -->
        <div v-show="loading" class="loading">
          <img src="../../assets/images/loading.gif" alt />
        </div>
        <!-- 加载 -->
        <ul>
          <li @click="listPlay(index)" v-for="(item,index) in playList" :key="index">
            <span class="iconfont icon-hao"></span>
            <a href="#">
              <h3>{{item.name}}</h3>
              <h5>{{item.ar[0].name}}</h5>
            </a>
            <span class="iconfont icon-shenglve1"></span>
          </li>
        </ul>
      </van-col>
    </van-row>

    <!-- 歌曲列表end -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      spanShow: true,
      songArr: {},
      playList: [],
      nickname: this.$route.query.nickname,
      loading: true
    };
  },
  methods: {
    up() {
      this.spanShow = !this.spanShow;
      this.$refs.p.classList.add("active");
    },
    zhankai() {
      this.spanShow = !this.spanShow;
      this.$refs.p.classList.remove("active");
    },
    listPlay(index) {
      this.axios
        .get("http://music.kele8.cn/lyric", {
          params: {
            id: this.playList[index].id
          }
        })
        .then(response => {
          if (response.data.lrc.lyric) {
            if (this.$store.state.song.songArr.length != 0) {
              this.$store.state.song.songArr.splice(0);
            }
            this.$router.push({
              path: "/play"
            });
            this.$store.state.playList.push(this.playList[index]);
          }
        })
        .catch(error => {
          console.log(error);
        });
      window.event.stopPropagation();
    },
    hui() {
      this.$router.go(-1);
      window.event.stopPropagation();
    }
  },
  beforeCreate() {},
  created() {
    this.$store.state.foo = false;
    var len = this.$store.state.songList.length - 1;
    this.songArr = this.$store.state.songList[len].songArr;
    //console.log(this.$route.query.songArr);
    //console.log(this.$route.query.songArr.name);
    console.log(this.$store.state.songList[len].songArr);
    // console.log(this.$route.query.nickname);

    //获取歌单歌曲
    this.axios
      .get("http://music.kele8.cn/playlist/detail", {
        params: {
          id: this.$route.query.id
        }
      })
      .then(response => {
        console.log(response.data.playlist.tracks);
        this.playList = response.data.playlist.tracks;
        if (this.playList.length !== 0) {
          this.loading = false;
        } else {
          this.loading = true;
        }
      })
      .catch(error => {
        console.log(error);
      });
  },
  destroyed() {
    this.$store.state.foo = true;
  }
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  position: relative;
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(#606970, #434039);
    z-index: -1;
    background-image: url("http://p1.music.126.net/FHLl0OyZmwavDxOvhFVx0Q==/109951164780831837.jpg");
    background-size: cover;
    background-position: center;
    filter: blur(20px) brightness(0.6);
    transform: scale(1);
  }
}

//返回
.topSearch {
  width: 100%;
  //padding-top: 0.15625rem;
  //background-color: #2e2f34;
  height: 1.25rem;
  .van-icon {
    text-align: center;
    display: block;
    font-size: 0.46875rem;
    height: 1.25rem;
    line-height: 1.25rem;
    color: rgb(199, 195, 195);
  }
  a {
    color: rgb(199, 195, 195);
    font-size: 0.46875rem;
    display: block;
    text-align: left;
    height: 1.25rem;
    letter-spacing: 0.078125rem;
    line-height: 1.25rem;
  }
}
//返回end
//歌单信息
.message {
  margin-top: 0.3125rem;
  width: 100%;

  .img {
    width: 3.125rem;
    height: 3.125rem;
    //background-color: pink;
    display: block;
    line-height: 3.125rem;
    border-radius: 0.3125rem;
    span {
      margin-left: 0.15625rem;
      font-size: 0.3125rem;
      color: rgb(255, 245, 245);
    }
  }
  h3 {
    padding: 0;
    margin: 0;
    text-align: left;
    color: rgb(199, 195, 195);
    font-size: 0.390625rem;
    margin-top: 0.3125rem;
    font-weight: normal;
  }
  .content {
    width: 4.6875rem;
    //background-color: yellow;
    height: 1.5625rem;
    line-height: 1.5625rem;
    margin-top: 0.3125rem;
    display: block;
    span {
      display: block;
      width: 1.25rem;
      height: 1.25rem;
      // background-color: violet;
      float: left;
      margin-top: 0.15625rem;
      border-radius: 1.25rem;
    }
    h5 {
      padding: 0;
      margin: 0;
      float: left;
      font-size: 0.390625rem;
      margin-left: 0.234375rem;
      color: rgb(219, 217, 217);
      font-size: 0.390625rem;
      letter-spacing: 0.046875rem;
    }
  }
}

//歌单信息end

//歌单详情

.particulars {
  margin-top: 0.3125rem;

  h1 {
    font-size: 0.46875rem;
    padding: 0;
    margin: 0;
    color: rgb(199, 195, 195);
  }
  .content {
    width: 100%;
    //background-color: orange;
    position: relative;
    p {
      margin: 0;
      margin-top: 0.15625rem;
      font-size: 0.390625rem;
      color: rgb(199, 195, 195);
      &.active {
        height: 3.125rem;
        overflow: hidden;
      }
    }
    span {
      position: absolute;
      right: 0.15625rem;
      bottom: -0.625rem;
      font-size: 0.46875rem;
      color: rgb(255, 245, 245);
    }
  }
}

//歌单详情end

//歌曲列表

.songList {
  margin-top: 0.46875rem;
  .loading {
    width: 100%;
    height: 12.5rem;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      display: block;
      margin: 0 auto;
      width: 0.46875rem;
      height: 0.46875rem;
    }
  }
  h1 {
    font-size: 0.46875rem;
    padding: 0;
    margin: 0;
    color: rgb(199, 195, 195);
  }
  ul {
    width: 100%;
    //background-color: pink;
    li {
      width: 100%;
      height: 1.25rem;
      margin-top: 0.234375rem;
      margin-bottom: 0.234375rem;
      span {
        display: block;
        float: left;
        height: 1.25rem;
        line-height: 1.25rem;
        color: rgb(199, 195, 195);
        &:nth-child(3) {
          float: right;
        }
      }
      a {
        display: block;
        float: left;
        width: 85%;
        margin-left: 5%;
        line-height: 0.625rem;
        height: 1.25rem;
        h3 {
          padding: 0;
          margin: 0;
          font-size: 0.390625rem;
          color: rgb(199, 195, 195);
          letter-spacing: 0.046875rem;
          overflow: hidden;
          width: 100%;
          height: 0.625rem;
        }
        h5 {
          padding: 0;
          margin: 0;
          font-size: 0.34375rem;
          color: rgb(199, 195, 195);
          font-weight: normal;
          letter-spacing: 0.046875rem;
          margin-top: 0.15625rem;
        }
      }
    }
  }
}

//歌曲列表end
</style>