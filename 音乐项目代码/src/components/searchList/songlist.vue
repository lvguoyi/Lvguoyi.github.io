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
        <a href="#">歌曲详情</a>
      </van-col>
    </van-row>
    <!-- 返回end -->

    <!-- 歌手图片 -->
    <van-row class="img">
      <van-col span="24">
        <span ref="span1"></span>
      </van-col>
    </van-row>
    <!-- 歌手图片end -->

    <!-- 歌曲内容 -->
    <van-row class="top">
      <van-col span="22" offset="2">歌手 :</van-col>
      <van-col span="5" offset="2">
        <span ref="span2"></span>
      </van-col>
      <van-col span="17">
        <h4>歌手: {{singername}}</h4>
        <h5>歌曲: 2051 MV:832 专辑:{{C}}</h5>
      </van-col>
    </van-row>
    <!-- 歌曲内容end -->

    <!-- 歌曲mv -->
    <van-row class="mv">
      <van-col span="22" offset="2">MV :</van-col>
      <van-col span="10" offset="2">
        <ul>
          <li ref="li1">
            <span @click="songMv" v-show="playMv" class="iconfont icon-zhibo"></span>
            <span class="text" v-show="!playMv">暂时没有视频哦!</span>
          </li>
        </ul>
      </van-col>
      <van-col span="12">
        <h4>视频MV: {{songname}}</h4>
        <h5>歌手: {{singername}}</h5>
      </van-col>
    </van-row>
    <!-- 歌曲mvend -->

    <!-- 单曲 -->
    <van-row class="song">
      <van-col span="20" offset="2">单曲 :</van-col>
      <van-col span="20" offset="2">
        <ul>
          <li @click="songPlay">
            <span class="iconfont icon-hao"></span>
            {{filename}} --- {{singername}}
            <span ref="show" class="msg">{{msg}}</span>
          </li>
        </ul>
      </van-col>
    </van-row>

    <!-- 单曲end -->

    <!-- 歌手详情 -->

    <van-row class="song">
      <van-col span="20" offset="2">歌手详情 :</van-col>
      <van-col span="20" offset="2">
        <ul>
          <li v-for="(item,index) in introduction[0].intr" :key="index">{{item.ti}} : {{item.txt}}。</li>
          <p>{{introduction[0].briefDesc}}</p>
        </ul>
      </van-col>
    </van-row>

    <!-- 歌手详情end -->
    <div class="box"></div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      introduction: [
        {
          intr: [
            { ti: "乐队成员", txt: "富妍，格非" },
            {
              ti: "音乐专辑",
              txt:
                "你不能爱我\n2012-10-07 ；Lost & Found 去寻找(EP)\n2011-07-15\n给你点儿颜色(EP)\n2010-09-27；习惯了寂寞\n2009-11-26 \n越长大越孤单\n2008-03-18 ；燃烧吧!小宇宙\n2005-12-22"
            },
            {
              ti: "代表作品",
              txt: "《越长大越孤单》《明天，你好》《你不能爱我》《城市的天空》"
            },
            { ti: "主要成就", txt: "2008年北京流行音乐典礼年度金曲" }
          ],
          briefDesc:
            "内地流行组合。由Kiki和格非组成。“牛奶@咖啡”的成立充满了传奇色彩，主唱 KiKi(富妍) 念高中的时候通过 QQ 认识了格非，二人通过网络交流音乐创作。而他们创作音乐的目的仅仅是出于他们对生活的热爱和随意的幽默感，没想到意外"
        }
      ],
      filename: "刘德华",
      songname: "刘德华",
      singername: "刘德华",
      album: "刘德华",
      ti: "",
      txt: "",
      C: 0,
      msg: "亲爱的,暂无版权",
      playMv: true
    };
  },
  methods: {
    songPlay() {
      //获取歌曲路径
      this.axios
        .get("https://music.kele8.cn/check/music", {
          params: {
            id: this.$store.state.song.songArr[
              this.$store.state.song.songArr.length - 1
            ].id
          }
        })
        .then(response => {
          console.log(response.data.success);
          if (response.data.success) {
            this.axios
              .get("https://music.kele8.cn/song/url", {
                params: {
                  id: this.$store.state.song.songArr[
                    this.$store.state.song.songArr.length - 1
                  ].id
                }
              })
              .then(response => {
                console.log(response);
                this.$store.state.songUrl.url = response.data.data[0].url;
              })
              .catch(error => {
                console.log(error);
              });
            this.$router.push("/play");
          }
        })
        .catch(error => {
          console.log(error);
          this.$refs.show.style.opacity = 1;
          setTimeout(() => {
            this.$refs.show.style.opacity = 0;
          }, 3000);
        });

      // 判断是否有版权
    },
    //获取mv
    songMv() {
      if (
        this.$store.state.song.songArr[
          this.$store.state.song.songArr.length - 1
        ].mvid != ""
      ) {
        this.axios
          .get("http://music.kele8.cn/mv/url", {
            params: {
              id: this.$store.state.song.songArr[
                this.$store.state.song.songArr.length - 1
              ].mvid
            }
          })
          .then(response => {
            console.log(response.data.data, "1111111111111111");
            // if (this.$store.state.mvList.length != 0) {
            //   for (let i = 0; i < this.$store.state.mvList.length; i++) {
            //     if (this.$store.state.mvList[i].id != response.data.data.id) {
            //       this.$store.state.mvList.splice(
            //         1,
            //         this.$store.state.mvList.length - 1
            //       );
            //     }
            //   }
            // }

            if (this.$store.state.mvList.length != 0) {
              this.$store.state.mvList.splice(
                0,
                this.$store.state.mvList.length
              );
              this.$store.state.mvList.push({
                id: response.data.data.id,
                url: response.data.data.url,
                artistName: this.$store.state.song.songArr[
                  this.$store.state.song.songArr.length - 1
                ].artists[0].name,
                name: this.$store.state.song.songArr[
                  this.$store.state.song.songArr.length - 1
                ].name
              });
            } else {
              this.$store.state.mvList.push({
                id: response.data.data.id,
                url: response.data.data.url,
                artistName: this.$store.state.song.songArr[
                  this.$store.state.song.songArr.length - 1
                ].artists[0].name,
                name: this.$store.state.song.songArr[
                  this.$store.state.song.songArr.length - 1
                ].name
              });
            }

            //获取评论
            this.axios
              .get("http://music.kele8.cn/comment/mv", {
                params: {
                  id: this.$store.state.mvList[0].id
                }
              })
              .then(response => {
                console.log(response.data.hotComments);
                this.$store.state.mvList[0].desc = response.data.hotComments;
              })
              .catch(error => {
                console.log(error);
              });
          })
          .catch(error => {
            console.log(error);
          });
        if (this.$store.state.playList.length != 0) {
          this.$store.state.playList.splice(0);
        }
        this.$router.push("/videoPlay");
      }
    }
  },

  beforeCreate() {
    //获取专辑数
    this.axios
      .get(
        "https://music.kele8.cn/artist/album?id=" +
          this.$store.state.song.songArr[
            this.$store.state.song.songArr.length - 1
          ].artists[0].id +
          "&limit",
        {}
      )
      .then(response => {
        console.log(response.data, response.data.hotAlbums.length);
        this.C = response.data.hotAlbums.length;
        this.$refs.span1.style.background =
          "url(" + response.data.artist.picUrl + ") no-repeat";
        this.$refs.span1.style.backgroundSize = "100%";
        this.$refs.span1.style.backgroundPosition = "center";

        this.$refs.span2.style.background =
          "url(" + response.data.artist.picUrl + ") no-repeat";
        this.$refs.span2.style.backgroundSize = "auto 100%";
        this.$refs.span2.style.backgroundPosition = "center";

        this.$refs.li1.style.background =
          "url(" + response.data.artist.picUrl + ") no-repeat";
        this.$refs.li1.style.backgroundSize = "100%";
        this.$refs.li1.style.backgroundPosition = "center";
      })
      .catch(error => {
        console.log(error);
      });
  },
  created() {
    if (
      this.$store.state.song.songArr[this.$store.state.song.songArr.length - 1]
        .mvid === "" ||
      this.$store.state.song.songArr[this.$store.state.song.songArr.length - 1]
        .mvid === 0
    ) {
      this.playMv = false;
    } else {
      this.playMv = true;
    }
    this.$store.state.foo = false;
    if (this.$store.state.song.songArr.length != 0) {
      this.songname = this.$store.state.song.songArr[
        this.$store.state.song.songArr.length - 1
      ].name;
      this.filename = this.$store.state.song.songArr[
        this.$store.state.song.songArr.length - 1
      ].name;
      this.singername = this.$store.state.song.songArr[
        this.$store.state.song.songArr.length - 1
      ].artists[0].name;
      this.album = this.$store.state.song.songArr[
        this.$store.state.song.songArr.length - 1
      ].album.name;
    }
    this.axios
      .get("https://music.kele8.cn/artist/desc", {
        params: {
          id: this.$store.state.song.songArr[
            this.$store.state.song.songArr.length - 1
          ].artists[0].id
        }
      })
      .then(response => {
        console.log(response.data);
        this.introduction[0].intr = response.data.introduction;
        this.introduction[0].briefDesc = response.data.briefDesc;
      })
      .catch(error => {
        console.log(error);
      });
    console.log(this.$store.state.song.songArr);
  },
  beforeMount() {},
  destroyed() {
    this.$store.state.foo = true;
    if (this.$store.state.song.songArr.length > 1) {
      this.$store.state.song.songArr.unshift();
    }
  }
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  background-color: #323338;
  // position: fixed;
}

// 歌手图片
.img {
  width: 100%;
  height: 4.6875rem;
  opacity: 0.5;
  span {
    display: block;
    width: 100%;
    height: 4.6875rem;

    background-color: #ccc;
  }
}
// 歌手图片end

h4,
h5 {
  font-weight: normal;
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
    line-height: 1.25rem;
  }
}

//返回end

//歌曲内容
.top {
  width: 100%;

  height: 2.8125rem;
  font-size: 0.390625rem;
  color: #a2a1a6;
  margin-top: 0.3125rem;
  span {
    display: inline-block;
    width: 1.875rem;
    height: 1.875rem;
    // background-color: red;
    border-radius: 50%;
    margin-top: 0.15625rem;
    background-color: #ccc;
  }
  h4 {
    padding: 0;
    margin: 0;
    margin-top: 0.546875rem;
  }
  h5 {
    padding: 0;
    margin: 0;
    margin-top: 0.15625rem;
  }
}
//歌曲内容end

//歌曲mv

.mv {
  width: 100%;
  margin-top: 0.3125rem;
  height: 3.28125rem;
  font-size: 0.390625rem;
  color: #a2a1a6;
  line-height: 0.625rem;
  li {
    width: 90%;
    height: 2.34375rem;
    border-radius: 0.15625rem;
    background-color: pink;
    line-height: 2.34375rem;
    text-align: center;
    margin-top: 0.15625rem;
    background-color: #ccc;
    span {
      font-size: 0.78125rem;
      color: white;
      &.text {
        font-size: 0.46875rem;
        color: #a2a1a6;
      }
    }
  }
  h4 {
    padding: 0;
    margin: 0;
    margin-top: 0.78125rem;
  }
  h5 {
    padding: 0;
    margin: 0;
  }
}

//歌曲mvend

//单曲
.song {
  font-size: 0.390625rem;
  color: #a2a1a6;
  margin-top: 0.3125rem;
  position: relative;
  li {
    margin-top: 0.15625rem;
    margin-bottom: 0.15625rem;
    span {
      margin-right: 0.3125rem;
      transition: all 1s;
      &.msg {
        display: block;
        position: absolute;
        top: 0;
        left: 50%;
        margin-left: -1.5625rem;
        width: 3.125rem;
        text-align: center;
        opacity: 0;
        border: 1px solid #cccccc;
        padding: 0.078125rem 0.15625rem;
        border-radius: 0.625rem;
        font-size: 0.3125rem;
        letter-spacing: 0.078125rem;
        height: 0.46875rem;
      }
    }
  }
}
//单曲end

//歌手详情
.song {
  width: 100%;
  background-color: #323338;
}

//歌手详情end
.box {
  width: 100%;
  height: 1000px;
  background-color: #323338;
}
</style>