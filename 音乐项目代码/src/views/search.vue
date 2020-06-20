<template>
  <div style="background-color:#212227">
    <!-- 头部搜索 -->
    <van-sticky :offset-top="-5">
      <van-row class="topSearch">
        <van-col class="mi" span="3">
          <a href="#" @click="$router.go(-1)">
            <van-icon name="arrow-left" />
          </a>
        </van-col>
        <van-col class="search" span="16" offset="2">
          <input v-model="value" type="text" @input="search" placeholder="林志炫--从未离开" />
        </van-col>
        <van-col span="3">
          <a href="#">搜索</a>
        </van-col>
      </van-row>
    </van-sticky>
    <!-- 头部搜索end -->

    <!-- 搜索列表 -->
    <van-sticky :offset-top="50">
      <van-row class="searchList">
        <van-col span="22" offset="1">
          <div ref="right" class="list">
            <ul>
              <li
                @click="toList(index)"
                v-for="(item,index) in listArr"
                :key="index"
                :class="{active:count==index}"
                class="right-item-hook"
              >
                <span class="iconfont icon-sousuo1"></span>
                {{item.name}} --- {{item.artists[0].name}}
              </li>
            </ul>
          </div>
        </van-col>
      </van-row>
    </van-sticky>
    <!-- 搜索列表end -->

    <!-- 分类 -->

    <van-row class="flist">
      <van-col span="11">
        <span class="iconfont icon-geshou">
          <i>歌手分类</i>
        </span>
      </van-col>
      <van-col span="2">
        <span class="border">|</span>
      </van-col>
      <van-col span="11">
        <span class="iconfont icon-leimupinleifenleileibie--">
          <i>音乐分类</i>
        </span>
      </van-col>
    </van-row>

    <!-- 分类end -->

    <!-- 搜索列表 -->

    <van-row class="searchlist">
      <van-col class="hr" span="24"></van-col>
      <van-col class="history" span="8" offset="1">搜索历史</van-col>
      <van-col class="del" span="8" offset="6">
        <span class="iconfont icon-shanchu"></span>
      </van-col>
    </van-row>

    <!-- 搜索列表emd -->

    <!-- 搜索记录 -->

    <van-row class="searchhistory">
      <van-col span="4" offset="1">
        <a href="#">张岳震</a>
      </van-col>
      <van-col span="4" offset="1">
        <a href="#">林志炫</a>
      </van-col>
      <van-col span="6" offset="1">
        <a href="#">对不起谢谢你</a>
      </van-col>
      <van-col span="4" offset="1">
        <a href="#">还爱你</a>
      </van-col>
    </van-row>
    <van-row class="ck">
      <van-col span="8" offset="1">
        <a href="#">刺客伍六七第二季</a>
      </van-col>
      <van-col span="4" offset="1">
        <a href="#">fly</a>
      </van-col>
      <van-col span="4" offset="1">
        <a class="xia" href="#">
          <van-icon class="icon" name="arrow-down" />
        </a>
      </van-col>
    </van-row>

    <!-- 搜索记录end -->

    <!-- 搜索导航栏 -->
    <van-sticky :offset-top="25">
      <van-row class="searchnav">
        <van-col span="24">
          <div class="swiper-container searchswiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <a class="con" href="#">热搜歌曲</a>
              </div>
              <div class="swiper-slide">
                <a href="#">最火英文歌</a>
              </div>
              <div class="swiper-slide">
                <a href="#">情歌</a>
              </div>
              <div class="swiper-slide">
                <a href="#">国风好歌曲</a>
              </div>
              <div class="swiper-slide">
                <a href="#">轻音乐</a>
              </div>
              <div class="swiper-slide">
                <a href="#">特色专区</a>
              </div>
            </div>
          </div>
        </van-col>
      </van-row>
    </van-sticky>
    <!-- 搜索导航栏end -->

    <!-- 搜索歌单列表 -->

    <van-row class="songlist">
      <van-col span="1" offset="1">
        <a class="a1" style="color: #e03e33;" href="#">1</a>
      </van-col>
      <van-col span="10" offset="1">
        <a class="a2" href="#">下山</a>
      </van-col>
      <van-col span="21" offset="3">
        <a class="a3" href="#">不知小落何时才能完成他的心愿</a>
      </van-col>
    </van-row>
    <van-row class="songlist">
      <van-col span="1" offset="1">
        <a class="a1" style="color:#fd7d1a" href="#">2</a>
      </van-col>
      <van-col span="10" offset="1">
        <a class="a2" href="#">桥边姑娘</a>
      </van-col>
      <van-col span="21" offset="3">
        <a class="a3" href="#">你还记得家乡桥头.上那个会唱歌的姑娘吗?</a>
      </van-col>
    </van-row>
    <van-row class="songlist">
      <van-col span="1" offset="1">
        <a class="a1" style="color:#f9cb16" href="#">3</a>
      </van-col>
      <van-col span="10" offset="1">
        <a class="a2" href="#">你的答案</a>
      </van-col>
      <van-col span="21" offset="3">
        <a class="a3" href="#">面对疫情，我们的答案就是勇敢面对，加油!</a>
      </van-col>
    </van-row>
    <van-row class="songlist">
      <van-col span="1" offset="1">
        <a class="a1" href="#">4</a>
      </van-col>
      <van-col span="10" offset="1">
        <a class="a2" href="#">处处吻</a>
      </van-col>
      <van-col span="21" offset="3">
        <a class="a3" href="#">只需一个吻，便能迷倒众生</a>
      </van-col>
    </van-row>
    <van-row class="songlist">
      <van-col span="1" offset="1">
        <a class="a1" href="#">5</a>
      </van-col>
      <van-col span="10" offset="1">
        <a class="a2" href="#">冬眠</a>
      </van-col>
      <van-col span="21" offset="3">
        <a class="a3" href="#">一个人的冬天 ，心早 已开始冬眠</a>
      </van-col>
    </van-row>
    <van-row class="songlist">
      <van-col span="1" offset="1">
        <a class="a1" href="#">6</a>
      </van-col>
      <van-col span="10" offset="1">
        <a class="a2" href="#">你是我唯一的执着</a>
      </van-col>
      <van-col span="21" offset="3">
        <a class="a3" href="#">倘若有一天突然离去，那一定是不想托累你</a>
      </van-col>
    </van-row>
    <van-row class="songlist">
      <van-col span="1" offset="1">
        <a class="a1" href="#">7</a>
      </van-col>
      <van-col span="10" offset="1">
        <a class="a2" href="#">别知己</a>
      </van-col>
      <van-col span="21" offset="3">
        <a class="a3" href="#">就算后生再无交集，也祝你余生晴空万里</a>
      </van-col>
    </van-row>
    <van-row class="songlist">
      <van-col span="1" offset="1">
        <a class="a1" href="#">8</a>
      </van-col>
      <van-col span="10" offset="1">
        <a class="a2" href="#">今生相爱</a>
      </van-col>
      <van-col span="21" offset="3">
        <a class="a3" href="#">好一首美丽的爱情藏歌!</a>
      </van-col>
    </van-row>
    <van-row class="songlist">
      <van-col span="1" offset="1">
        <a class="a1" href="#">9</a>
      </van-col>
      <van-col span="10" offset="1">
        <a class="a2" href="#">无期</a>
      </van-col>
      <van-col span="21" offset="3">
        <a class="a3" href="#">我喜欢你，不问归期</a>
      </van-col>
    </van-row>
    <van-row class="songlist">
      <van-col span="1" offset="1">
        <a class="a1" href="#">10</a>
      </van-col>
      <van-col span="10" offset="1">
        <a class="a2" href="#">你笑起来真好看</a>
      </van-col>
      <van-col span="21" offset="3">
        <a class="a3" href="#">你的笑容，就是世间最美的风景</a>
      </van-col>
    </van-row>
    <van-row class="songlist">
      <van-col span="1" offset="1">
        <a class="a1" href="#">11</a>
      </van-col>
      <van-col span="10" offset="1">
        <a class="a2" href="#">口是心非</a>
      </van-col>
      <van-col span="21" offset="3">
        <a class="a3" href="#">你的笑容，就是世间最美的风景</a>
      </van-col>
    </van-row>
    <van-row class="songlist">
      <van-col span="1" offset="1">
        <a class="a1" href="#">12</a>
      </van-col>
      <van-col span="10" offset="1">
        <a class="a2" href="#">火红的萨日朗</a>
      </van-col>
      <van-col span="21" offset="3">
        <a class="a3" href="#">乌兰托娅的歌一秒钟把你带进草原</a>
      </van-col>
    </van-row>
    <van-row class="songlist">
      <van-col span="1" offset="1">
        <a class="a1" href="#">13</a>
      </van-col>
      <van-col span="10" offset="1">
        <a class="a2" href="#">野狼disco</a>
      </van-col>
      <van-col span="21" offset="3">
        <a class="a3" href="#">陈伟霆把蹦迪现场带到了维多利亚湾</a>
      </van-col>
    </van-row>
    <van-row class="songlist">
      <van-col span="1" offset="1">
        <a class="a1" href="#">14</a>
      </van-col>
      <van-col span="10" offset="1">
        <a class="a2" href="#">爱情堡垒</a>
      </van-col>
      <van-col span="21" offset="3">
        <a class="a3" href="#">2020年希望我们都能遇到我们的爱情</a>
      </van-col>
    </van-row>
    <van-row class="songlist">
      <van-col span="1" offset="1">
        <a class="a1" href="#">15</a>
      </van-col>
      <van-col span="10" offset="1">
        <a class="a2" href="#">忘情牛肉面</a>
      </van-col>
      <van-col span="21" offset="3">
        <a class="a3" href="#">如果真的有“忘情牛肉面” 您是否 愿意吃?</a>
      </van-col>
    </van-row>
    <van-row class="songlist">
      <van-col span="1" offset="1">
        <a class="a1" href="#">16</a>
      </van-col>
      <van-col span="10" offset="1">
        <a class="a2" href="#">关键词</a>
      </van-col>
      <van-col span="21" offset="3">
        <a class="a3" href="#">有一种踏实是你心中有我的名字</a>
      </van-col>
    </van-row>
    <van-row class="songlist">
      <van-col span="1" offset="1">
        <a class="a1" href="#">17</a>
      </van-col>
      <van-col span="10" offset="1">
        <a class="a2" href="#">谁</a>
      </van-col>
      <van-col span="21" offset="3">
        <a class="a3" href="#">粗狂沧桑的噪音，开口就能把你带进情绪里</a>
      </van-col>
    </van-row>
    <van-row class="songlist">
      <van-col span="1" offset="1">
        <a class="a1" href="#">18</a>
      </van-col>
      <van-col span="10" offset="1">
        <a class="a2" href="#">炸山姑娘</a>
      </van-col>
      <van-col span="21" offset="3">
        <a class="a3" href="#">山:我招谁惹谁了?</a>
      </van-col>
    </van-row>
    <van-row class="songlist">
      <van-col span="1" offset="1">
        <a class="a1" href="#">19</a>
      </van-col>
      <van-col span="10" offset="1">
        <a class="a2" href="#">听我说谢谢你</a>
      </van-col>
      <van-col span="21" offset="3">
        <a class="a3" href="#">暖心歌曲，向抗疫一线的英雄们致谢!</a>
      </van-col>
    </van-row>
    <van-row class="songlist">
      <van-col span="1" offset="1">
        <a class="a1" href="#">20</a>
      </van-col>
      <van-col span="10" offset="1">
        <a class="a2" href="#">小苹果</a>
      </van-col>
      <van-col span="21" offset="3">
        <a class="a3" href="#">筷子兄弟的神曲再听依然这么欢快，-起跳起来!!</a>
      </van-col>
    </van-row>

    <!-- 搜索歌单列表end -->

    <!-- 搜索结尾 -->

    <van-row class="bottom">
      <van-col span="24">亲，没有更多内容了哦~</van-col>
    </van-row>

    <!-- 搜索结尾end -->

    <!-- 播放 -->
    <!-- 
    <van-row class="play">
      <van-col span="4" offset="1">
        <a href="#">
          <img src="../assets/images/e2.png" alt />
        </a>
      </van-col>
      <van-col span="9">
        <a class="con" href="#">黎明前的黑暗(Live)</a>
        <h5>周杰伦</h5>
      </van-col>
      <van-col span="2" offset="1">
        <a href="#">
          <span class="iconfont icon-bofang"></span>
        </a>
      </van-col>
      <van-col span="2">
        <a href="#">
          <span class="iconfont icon-xiayishou"></span>
        </a>
      </van-col>
      <van-col span="2">
        <a href="#">
          <span class="iconfont icon-caidanzhankai"></span>
        </a>
      </van-col>
    </van-row>-->

    <!-- 播放end -->
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  data: function() {
    return {
      listArr: [],
      count: 0,
      value: "",
      canClick: true
    };
  },
  methods: {
    //获取搜索列表
    search() {
      if (this.value != "") {
        if (!this.canClick) {
          return;
        }
        this.canClick = false;
        this.axios
          .get("https://music.kele8.cn/search", {
            params: {
              keywords: this.value
            }
          })
          .then(response => {
            console.log(response.data.result.songs);
            this.listArr = response.data.result.songs;
            if (this.listArr.length > 25) {
              this.listArr.splice(25);
            }
            this.add();
          })
          .catch(error => {
            console.log(error);
          });
        setTimeout(() => {
          this.canClick = true;
        }, 100);
      } else {
        this.listArr = [];
        this.count = 0;
      }
    },
    add() {
      onkeydown = event => {
        //console.log(event.keyCode);
        if (event.keyCode == 38) {
          this.count -= 1;

          if (this.count < 0) {
            this.count = this.listArr.length - 1;
          }
        } else if (event.keyCode == 40) {
          this.count += 1;
          if (this.count > this.listArr.length - 1) {
            this.count = 0;
          }
        }
      };
    },
    toList(index) {
      this.count = index;
      this.$store.state.song.songArr.push(this.listArr[index]);
      if (this.$store.state.song.songArr.length === 0) {
        return;
      } else {
        this.$router.push("/songlist");
      }
    }
  },
  created() {
    this.$store.state.foo = false;
  },
  destroyed() {
    this.$store.state.foo = true;
  },
  mounted() {
    new Swiper(".searchswiper", {
      slidesPerView: 4,
      spaceBetween: 0
      // pagination: {
      //   el: ".swiper-pagination",
      //   clickable: true
      // }
    });
  }
};
</script>

<style lang="scss" scoped>
//头部搜索
.topSearch {
  background-color: #212227;
  width: 100%;
  padding-top: 0.3125rem;
  height: 0.78125rem;
  padding-bottom: 0.15625rem;
  .icon-mi {
    text-align: center;
    display: block;
    height: 0.6875rem;
    line-height: 0.6875rem;
    color: #ff6b00;
    font-size: 0.3125rem;
    .van-icon {
      height: 0.6875rem;
    }
  }
  .search {
    input {
      background-color: #2e2f34;
      font-size: 0.1875rem;
      height: 0.46875rem;
      border: none;
      outline: none;
      width: 80%;
      padding: 0.15625rem 0.15625rem;
      border-radius: 0.3125rem;
      display: block;
      color: #a2a1a6;
    }
  }

  .van-icon {
    text-align: center;
    display: block;
    font-size: 0.546875rem;
    height: 0.78125rem;
    line-height: 0.78125rem;
    color: #484848;
  }
  a {
    color: #a2a1a6;
    font-size: 0.3125rem;
    display: block;
    text-align: center;
    height: 0.78125rem;
    line-height: 0.78125rem;
  }
}
//头部搜索end

//头部搜索列表
.searchList {
  .list {
    width: 100%;
    position: relative;
    left: 0;
    top: 0;
    ul {
      padding: 0;
      margin: 0;
      width: 100%;
      position: absolute;
      top: 0;
      background-color: #212122;
      opacity: 0.8;
    }
    ul li {
      width: 100%;
      font-size: 0.3125rem;
      color: #abaaad;
      margin-top: 0.3125rem;
      &.active {
        color: #265589;
      }
      span {
        margin-right: 0.46875rem;
        font-size: 0.3125rem;
      }
    }
  }
}
//头部搜索列表end

//分类

.flist {
  margin-top: 10px;
  padding: 10px;
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

//分类end

//搜索列表

.searchlist {
  .hr {
    width: 100%;
    height: 20px;
    border-top: 1px solid #2a2b2f;
  }
  .history {
    font-size: 0.390625rem;
    color: #a2a1a6;
    font-weight: bolder;
  }
  .del {
    font-size: 0.390625rem;
    color: #a2a1a6;
    text-align: right;
  }
}

//搜索列表end

//搜索记录

.searchhistory {
  a {
    display: block;
    height: 0.3125rem;
    padding: 0.234375rem 0.15625rem;
    color: #a2a1a6;
    font-size: 0.234375rem;
    background-color: #26272c;
    text-align: center;
    border-radius: 0.46875rem;
    margin-top: 0.390625rem;
    line-height: 0.3125rem;
  }
}
.ck {
  a {
    display: block;
    height: 0.3125rem;
    padding: 0.234375rem 0.15625rem;
    color: #a2a1a6;
    font-size: 0.234375rem;
    background-color: #26272c;
    text-align: center;
    border-radius: 0.46875rem;
    margin-top: 0.390625rem;
    line-height: 0.3125rem;
  }
}

//搜索记录end

//搜索导航栏

.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  font-weight: normal;
  background: #212227;
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

.searchnav {
  margin-top: 0.3125rem;
  overflow: hidden;
  a {
    display: block;
    padding: 5px 0px;
    width: 100%;
    color: #a2a1a6;
    font-size: 0.3125rem;
    font-weight: bolder;
    position: relative;
    z-index: 100;
    // text-align: left;
    &.con {
      &::after {
        position: absolute;
        content: "";
        display: block;
        width: 0.25rem;
        height: 0.078125rem;
        background-color: #005fbd;
        left: 50%;
        margin-left: -0.125rem;
        border-radius: 0.125rem;
      }
    }
  }
}

//搜索导航栏end

//搜索歌单列表

.songlist {
  margin-top: 0.46875rem;
  a {
    display: block;
    width: 100%;
    height: 0.5rem;
    line-height: 0.5rem;
    &.a1 {
      color: #a2a1a6;
      font-size: 0.3125rem;
      font-weight: bolder;
    }
    &.a2 {
      color: #a2a1a6;
      text-align: left;
      font-size: 0.3125rem;
    }
    &.a3 {
      color: #5f6064;
      font-size: 0.203125rem;
    }
  }
}

//搜索歌单列表end

//搜索结尾
.bottom {
  width: 100%;
  height: 120px;
  margin-top: 50px;
  color: #a2a1a6;
  font-size: 0.3125rem;
  text-align: center;
  font-weight: bolder;
}
//搜索结尾end

//播放

.play {
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: #262630;
  a {
    display: block;
    width: 1.5625rem;
    height: 1.5625rem;
    height: auto;
    font-size: 0.25rem;
    font-weight: bolder;
    color: #a2a1a6;
    margin: 5px 0;
    &.con {
      width: 100%;
      line-height: 0.78125rem;
    }
    img {
      width: 100%;
      height: auto;
      display: block;
      border-radius: 50%;
    }
  }
  h5 {
    padding: 0;
    margin: 0;
    font-size: 0.203125rem;
    color: #a2a1a6;
  }
  span {
    display: block;
    color: #0a84ff;
    font-size: 0.3125rem;
    height: 1.5625rem;
    line-height: 1.5625rem;
  }
}

//播放end
</style>
