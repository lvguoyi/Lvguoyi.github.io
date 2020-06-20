<template>
  <div>
    <!-- 分类导航 -->
    <van-row class="flnav">
      <van-col span="4">
        <router-link to="/songList" tag="a">
          <span>
            <img src="../../assets/images/nav1.png" alt />
          </span>
          <h5>乐库</h5>
        </router-link>
      </van-col>
      <van-col span="4" offset="1">
        <router-link to tag="a">
          <span>
            <img src="../../assets/images/nav2.png" alt />
          </span>
          <h5>猜你喜欢</h5>
        </router-link>
      </van-col>
      <van-col span="4" offset="1">
        <router-link to tag="a">
          <span>
            <img src="../../assets/images/nav3.png" alt />
          </span>
          <h5>歌单</h5>
        </router-link>
      </van-col>
      <van-col span="4" offset="1">
        <router-link to tag="a">
          <span>
            <img src="../../assets/images/nav4.png" alt />
          </span>
          <h5>排行榜</h5>
        </router-link>
      </van-col>
      <van-col span="4" offset="1">
        <router-link to tag="a">
          <span>
            <img src="../../assets/images/nav5.png" alt />
          </span>
          <h5>更多</h5>
        </router-link>
      </van-col>
    </van-row>
    <!-- 分类导航end -->

    <!-- 列表头部 -->

    <van-row class="listtop">
      <van-col class="time" span="12" offset="1">
        <span class="con1">09</span>
        <span class="con2">MAR</span>
        <span class="con3">周一</span>
      </van-col>
      <van-col class="more" span="8" offset="3">
        <span>
          歌单广场
          <van-icon class="morenav" name="arrow" />
        </span>
      </van-col>
    </van-row>
    <!-- 列表头部end -->

    <!-- 列表内容 -->
    <van-row class="listcontent">
      <van-col class="more" span="22" offset="1">
        <h1>热门歌单</h1>
      </van-col>

      <van-col span="22" offset="1">
        <ul>
          <li @click="skip(index)" v-for="(item,index) in songArr" :key="index">
            <a href="#" :style="{background:`url(${item.coverImgUrl})`,backgroundSize:'100% auto'}">
              <span class="iconfont icon-pause">&nbsp;&nbsp; {{item.playCount / 10000}}万</span>
              <h3></h3>
            </a>
            <h5>{{item.name}}</h5>
          </li>
        </ul>
      </van-col>
    </van-row>
    <!-- 列表内容end -->

    <!-- 列表歌单 -->

    <van-row class="songnav">
      <van-col span="3" offset="1">
        <a class="con" href="#">全部</a>
      </van-col>
      <van-col span="3" offset="1">
        <a href="#">新歌</a>
      </van-col>
      <van-col span="3" offset="1">
        <a href="#">歌单</a>
      </van-col>
      <van-col span="3" offset="1">
        <a href="#">直播</a>
      </van-col>
      <van-col span="3" offset="1">
        <a href="#">视频</a>
      </van-col>
      <van-col span="3" offset="1">
        <a href="#">
          <van-icon class="nav" name="arrow-down" />
        </a>
      </van-col>
    </van-row>

    <van-row class="songlist">
      <van-col span="3" offset="1">
        <span>
          <img src="../../assets/images/img3.jpg" alt />
        </span>
      </van-col>
      <van-col span="11" offset="1">
        <h2>动辄得咎(言重了粤语版)</h2>
        <h3>若心一动辄得咎</h3>
      </van-col>
      <van-col span="3" offset="1">
        <span class="iconfont icon-xinxi"></span>
      </van-col>
      <van-col span="3">
        <span class="iconfont icon-shenglve"></span>
      </van-col>
    </van-row>
    <van-row class="songlist">
      <van-col span="3" offset="1">
        <span>
          <img src="../../assets/images/img3.jpg" alt />
        </span>
      </van-col>
      <van-col span="11" offset="1">
        <h2>动辄得咎(言重了粤语版)</h2>
        <h3>若心一动辄得咎</h3>
      </van-col>
      <van-col span="3" offset="1">
        <span class="iconfont icon-xinxi"></span>
      </van-col>
      <van-col span="3">
        <span class="iconfont icon-shenglve"></span>
      </van-col>
    </van-row>
    <van-row class="songlist">
      <van-col span="3" offset="1">
        <span>
          <img src="../../assets/images/img3.jpg" alt />
        </span>
      </van-col>
      <van-col span="11" offset="1">
        <h2>动辄得咎(言重了粤语版)</h2>
        <h3>若心一动辄得咎</h3>
      </van-col>
      <van-col span="3" offset="1">
        <span class="iconfont icon-xinxi"></span>
      </van-col>
      <van-col span="3">
        <span class="iconfont icon-shenglve"></span>
      </van-col>
    </van-row>
    <van-row class="songlist">
      <van-col span="3" offset="1">
        <span>
          <img src="../../assets/images/img3.jpg" alt />
        </span>
      </van-col>
      <van-col span="11" offset="1">
        <h2>动辄得咎(言重了粤语版)</h2>
        <h3>若心一动辄得咎</h3>
      </van-col>
      <van-col span="3" offset="1">
        <span class="iconfont icon-xinxi"></span>
      </van-col>
      <van-col span="3">
        <span class="iconfont icon-shenglve"></span>
      </van-col>
    </van-row>
    <van-row class="songlist">
      <van-col span="3" offset="1">
        <span>
          <img src="../../assets/images/img3.jpg" alt />
        </span>
      </van-col>
      <van-col span="11" offset="1">
        <h2>动辄得咎(言重了粤语版)</h2>
        <h3>若心一动辄得咎</h3>
      </van-col>
      <van-col span="3" offset="1">
        <span class="iconfont icon-xinxi"></span>
      </van-col>
      <van-col span="3">
        <span class="iconfont icon-shenglve"></span>
      </van-col>
    </van-row>

    <div class="songbottom">
      <span class="iconfont icon-leimupinleifenleileibie--">
        <i>查看更多</i>
      </span>
    </div>

    <!-- 列表歌单end -->

    <div class="box"></div>
  </div>
</template>
 

   

<script>
export default {
  data() {
    return {
      songArr: []
    };
  },
  methods: {
    skip(index) {
      this.$router.push({
        path: "/song",
        query: {
          id: this.songArr[index].id,
          nickname: this.songArr[index].subscribers[0].nickname
        }
      });
      this.$store.state.songList.push({
        songArr: this.songArr[index]
      });
    }
  },
  beforeCreate() {
    //获取热门歌单
    this.axios
      .get("http://music.kele8.cn/top/playlist?limit=9&order=hot", {})
      .then(response => {
        console.log(response.data);
        this.songArr = response.data.playlists;
        console.log(this.songArr[0].subscribers[0].province);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 500px;
}
ul,
ol,
h1,
h2,
h3,
h4,
h5,
h6 {
  padding: 0;
  margin: 0;
}
//分类导航
.flnav {
  .van-col {
    //background-color: orange;
    height: auto;
    margin-top: 10px;
    a {
      color: #a2a1a6;
      text-align: center;
      margin-left: 5px;
      display: block;
      span {
        width: 50%;

        display: block;
        margin: 0 auto;

        img {
          width: 100%;
          height: auto;
        }
      }
      h5 {
        padding: 0;
        margin: 0;
        margin-top: 10px;
        font-size: 0.28125rem;
      }
    }
  }
}
//分类导航end

// 列表头部

.listtop {
  margin-top: 30px;
  .time {
    span {
      color: #a2a1a6;
      font-size: 0.3125rem;
      &.con1 {
        font-size: 0.9375rem;
      }
      &.con2 {
        margin-left: 15px;
      }
      &.con3 {
        margin-left: 30px;
        font-size: 0.546875rem;
      }
    }
  }
  .more {
    span {
      display: block;
      height: 100%;
      margin-top: 25px;
      position: relative;
      text-align: center;
      font-size: 0.3125rem;
      color: #a2a1a6;
      .morenav {
        position: absolute;
        right: 22px;
        top: 4px;
      }
    }
  }
}

// 列表头部end

// 列表内容

.listcontent {
  margin-top: 0.3125rem;
  h1 {
    color: #cccccc;
    font-size: 0.46875rem;
    padding: 0;
    margin: 0;
    margin-bottom: 0.3125rem;
  }
  ul {
    width: 100%;
    //background-color: orange;
    li {
      width: 2.8125rem;
      //background-color: orchid;
      float: left;
      text-align: center;
      margin-left: 0.3125rem;
      color: white;
      height: 4.375rem;
      margin-top: 0.3125rem;
      overflow: hidden;
      &:nth-child(1) {
        margin-left: 0;
      }
      &:nth-child(4) {
        margin-left: 0;
      }
      &:nth-child(7) {
        margin-left: 0;
      }
      a {
        display: block;
        width: 2.8125rem;
        background-color: palegreen;
        color: white;
        border-radius: 0.15625rem;
        height: 2.8125rem;
        line-height:4.0625rem;
        span {
          font-size: 0.3125rem;
        }
        h3 {
          font-size: 0.34375rem;
          letter-spacing: 0.078125rem;
        }
      }
      h5 {
        font-size: 0.3125rem;
        font-weight: normal;
        text-align: left;
        margin-top: 0.15625rem;
        letter-spacing: 0.078125rem;
        color: rgb(145, 142, 142);
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
      }
    }
  }
}

// 列表内容end

//列表歌单

.songnav {
  height: 30px;
  margin-top: 20px;
  a {
    display: block;
    padding: 5px 10px;
    border-radius: 20px;
    // line-height: 20px;
    text-align: center;
    font-size: 0.234375rem;
    color: #a2a1a6;
    cursor: pointer;
    &.con {
      background-color: #2a2b2f;
    }
    &.nav {
      height: 20px;
      line-height: 30px;
      font-size: 0.28125rem;
      font-weight: bolder;
      padding: 0;
    }
  }
}

.songlist {
  margin-top: 30px;
  span {
    display: block;
    width: 100%;
    height: auto;

    border-radius: 10px;
    img {
      width: 100%;
      height: auto;
      display: block;
      border-radius: 10px;
    }
  }
  h2 {
    font-size: 0.3125rem;
    font-weight: normal;
    margin-top: 10px;
    color: #a2a1a6;
  }
  h3 {
    font-size: 0.25rem;
    font-weight: normal;
    margin-top: 5px;
    color: #a2a1a6;
  }
  .iconfont {
    font-size: 0.3125rem;
    color: #a2a1a6;
    line-height: 60px;
    text-align: right;
  }
}

.songbottom {
  margin-top: 50px;
  width: 100%;
  text-align: center;
  span {
    color: #005fbd;
    display: block;
    width: 100%;
    font-size: 0.3125rem;
    &.border {
      color: #a2a1a6;
      font-size: 0.25rem;
    }
    i {
      font-style: normal;
      color: #a2a1a6;
      font-size: 0.25rem;
      margin-left: 0.3125rem;
    }
  }
}

//列表歌单end
</style>