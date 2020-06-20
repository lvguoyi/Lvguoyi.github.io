<template>
  <div style="background-color: #212227;">
    <!-- 分类导航 -->
    <van-row class="flnav">
      <van-col span="4">
        <router-link to tag="a">
          <span>
            <img src="../../assets/images/kg1.png" alt />
          </span>
          <h5>我要唱</h5>
        </router-link>
      </van-col>
      <van-col span="4" offset="1">
        <router-link to tag="a">
          <span>
            <img src="../../assets/images/kg2.png" alt />
          </span>
          <h5>我的</h5>
        </router-link>
      </van-col>
      <van-col span="4" offset="1">
        <router-link to tag="a">
          <span>
            <img src="../../assets/images/kg3.png" alt />
          </span>
          <h5>在线K房</h5>
        </router-link>
      </van-col>
      <van-col span="4" offset="1">
        <router-link to tag="a">
          <span>
            <img src="../../assets/images/kg4.png" alt />
          </span>
          <h5>K歌直播</h5>
        </router-link>
      </van-col>
      <van-col span="4" offset="1">
        <router-link to tag="a">
          <span>
            <img src="../../assets/images/kg5.png" alt />
          </span>
          <h5>全部</h5>
        </router-link>
      </van-col>
    </van-row>
    <!-- 分类导航end -->

    <!-- 比赛 -->

    <van-row class="game">
      <van-col span="11" offset="1">
        <a href="#">
          <span class="iconfont icon-jiangbei"></span>
          <h5>定段赛</h5>
          <br />
          <h6>段位PK，强者争霸</h6>
        </a>
      </van-col>
      <van-col span="11">
        <a style="background-color:#4078ff" href="#">
          <span class="iconfont icon-haoyou"></span>
          <h5>友谊赛</h5>
          <br />
          <h6>好友对战，不算段位</h6>
        </a>
      </van-col>
    </van-row>

    <!-- 比赛end -->

    <!-- 列表 -->

    <van-row class="songnav">
      <van-col span="5" offset="1">
        <a class="con" href="#">好友排名</a>
      </van-col>
      <van-col span="5" offset="1">
        <a href="#">热门</a>
      </van-col>
      <van-col span="5" offset="1">
        <a href="#">关注</a>
      </van-col>
      <van-col span="5" offset="1">
        <a href="#">附近</a>
      </van-col>
    </van-row>

    <van-row class="add">
      <van-col span="24">
        <a href="#">
          添加好友，查看好友作品
          <i>></i>
        </a>
      </van-col>
    </van-row>

    <!-- 列表end -->

    <!-- 官方推荐直播 -->

    <van-row class="searchlist">
      <van-col class="history" span="8" offset="1">K房在唱</van-col>
      <van-col class="del" span="8" offset="6">
        全部
        <i>></i>
      </van-col>
    </van-row>

    <van-row class="officialswiper">
      <van-col span="22" offset="1">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <a href="#">
                <img src="../../assets/images/gf1.png" alt />
                <h3 class="aa">想你</h3>
              </a>
            </div>
            <div class="swiper-slide">
              <a href="#">
                <img src="../../assets/images/gf2.png" alt />
                <h3 class="aa">妮妮的小窝</h3>
              </a>
            </div>
            <div class="swiper-slide">
              <a href="#">
                <img src="../../assets/images/gf3.png" alt />
                <h3 class="aa">小玲-红包···</h3>
              </a>
            </div>
            <div class="swiper-slide">
              <a href="#">
                <img src="../../assets/images/gf4.png" alt />
                <h3 class="aa">红娘牵线相亲</h3>
              </a>
            </div>
            <div class="swiper-slide">
              <a href="#">
                <img src="../../assets/images/gf5.png" alt />
                <h3 class="aa">脱口秀&音乐&舞蹈</h3>
              </a>
            </div>
            <div class="swiper-slide">
              <a href="#">
                <img src="../../assets/images/gf6.png" alt />
                <h3 class="aa">限时情感咨询</h3>
              </a>
            </div>
            <div class="swiper-slide">
              <a href="#">
                <img src="../../assets/images/gf7.png" alt />
                <h3 class="aa">魅力新星</h3>
              </a>
            </div>
            <div class="swiper-slide">
              <a href="#">
                <img src="../../assets/images/gf8.png" alt />
                <h3 class="aa">虚拟主播</h3>
              </a>
            </div>
            <div class="swiper-slide">
              <a href="#">
                <img src="../../assets/images/gf9.png" alt />
                <h3 class="aa">大咖唱见等你来看</h3>
              </a>
            </div>
          </div>
        </div>
      </van-col>
    </van-row>

    <!-- 官方推荐直播end -->

    <!-- K歌榜 -->
    <!-- 登录信息 -->
    <van-row class="play">
      <van-col span="4" offset="1">
        <router-link to tag="h3">
          <img src="../../assets/images/e2.png" alt />
        </router-link>
      </van-col>
      <van-col span="13">
        <h3>
          粤嵌娇子
          <i>
            <span class="iconfont icon-qingtong"></span>青铜三
          </i>
          <br />三分钟前
        </h3>
      </van-col>
      <van-col span="6">
        <button>+ 关注</button>
      </van-col>
      <van-col span="16" offset="5">
        <p>唱的不好，大家多多包涵</p>
      </van-col>
    </van-row>

    <van-row class="song">
      <van-col span="6" offset="5">
        <a href="#">
          <img src="../../assets/images/e1.png" alt />
        </a>
      </van-col>
      <van-col span="10">
        <h3>
          伤离别
          <i>SSS</i>
        </h3>
        <h5>3D丽音音效</h5>
      </van-col>
    </van-row>

    <van-row class="textlist">
      <van-col v-for="(item,index) in list[0]" :key="index" span="18" offset="5">
        <a href="#">
          {{item.name}}
          <i>{{item.content}}</i>
        </a>
      </van-col>
    </van-row>

    <van-row class="icon">
      <van-col span="4" offset="5">
        <span @click="good1" class="iconfont icon-zan">&nbsp;{{this.plus1}}</span>
      </van-col>
      <van-col span="4" offset="1">
        <span class="iconfont icon-gift">&nbsp;6</span>
      </van-col>
      <van-col span="4" offset="1">
        <span @click="add(0)" class="iconfont icon-xinxi">&nbsp;{{this.list[0].length}}</span>
      </van-col>
      <van-col span="4" offset="1">
        <span class="iconfont icon-fenxiang"></span>
      </van-col>
    </van-row>

    <!-- 登录信息end -->
    <!-- 登录信息 -->
    <van-row class="play">
      <van-col span="4" offset="1">
        <router-link to tag="h3">
          <img src="../../assets/images/img2.jpeg" alt />
        </router-link>
      </van-col>
      <van-col span="13">
        <h3>
          粤嵌娇子
          <i>
            <span class="iconfont icon-qingtong"></span>青铜三
          </i>
          <br />三分钟前
        </h3>
      </van-col>
      <van-col span="6">
        <button>+ 关注</button>
      </van-col>
      <van-col span="16" offset="5">
        <p>唱的不好，大家多多包涵</p>
      </van-col>
    </van-row>

    <van-row class="song">
      <van-col span="6" offset="5">
        <a href="#">
          <img src="../../assets/images/img7.jpg" alt />
        </a>
      </van-col>
      <van-col span="10">
        <h3>
          伤离别
          <i>SSS</i>
        </h3>
        <h5>3D丽音音效</h5>
      </van-col>
    </van-row>

    <van-row class="textlist">
      <van-col v-for="(item,index) in list[1]" :key="index" span="18" offset="5">
        <a href="#">
          {{item.name}}
          <i>{{item.content}}</i>
        </a>
      </van-col>
    </van-row>

    <van-row class="icon">
      <van-col span="4" offset="5">
        <span @click="good2" class="iconfont icon-zan">&nbsp;{{this.plus2}}</span>
      </van-col>
      <van-col span="4" offset="1">
        <span class="iconfont icon-gift">&nbsp;6</span>
      </van-col>
      <van-col span="4" offset="1">
        <span @click="add(1)" class="iconfont icon-xinxi">&nbsp;{{this.list[1].length}}</span>
      </van-col>
      <van-col span="4" offset="1">
        <span class="iconfont icon-fenxiang"></span>
      </van-col>
    </van-row>

    <!-- 登录信息end -->

    <!-- 登录信息 -->
    <van-row class="play">
      <van-col span="4" offset="1">
        <router-link to tag="h3">
          <img src="../../assets/images/gf9.png" alt />
        </router-link>
      </van-col>
      <van-col span="13">
        <h3>
          粤嵌娇子
          <i>
            <span class="iconfont icon-qingtong"></span>青铜三
          </i>
          <br />三分钟前
        </h3>
      </van-col>
      <van-col span="6">
        <button>+ 关注</button>
      </van-col>
      <van-col span="16" offset="5">
        <p>唱的不好，大家多多包涵</p>
      </van-col>
    </van-row>

    <van-row class="song">
      <van-col span="6" offset="5">
        <a href="#">
          <img src="../../assets/images/img3.jpg" alt />
        </a>
      </van-col>
      <van-col span="10">
        <h3>
          伤离别
          <i>SSS</i>
        </h3>
        <h5>3D丽音音效</h5>
      </van-col>
    </van-row>

    <van-row class="textlist">
      <van-col v-for="(item,index) in list[2]" :key="index" span="18" offset="5">
        <a href="#">
          {{item.name}}
          <i>{{item.content}}</i>
        </a>
      </van-col>
    </van-row>

    <van-row class="icon">
      <van-col span="4" offset="5">
        <span @click="good3" class="iconfont icon-zan">&nbsp;{{this.plus3}}</span>
      </van-col>
      <van-col span="4" offset="1">
        <span class="iconfont icon-gift">&nbsp;6</span>
      </van-col>
      <van-col span="4" offset="1">
        <span @click="add(2)" class="iconfont icon-xinxi">&nbsp;{{this.list[2].length}}</span>
      </van-col>
      <van-col span="4" offset="1">
        <span class="iconfont icon-fenxiang"></span>
      </van-col>
    </van-row>

    <!-- 登录信息end -->

    <!-- 登录信息 -->
    <van-row class="play">
      <van-col span="4" offset="1">
        <router-link to tag="h3">
          <img src="../../assets/images/lbt6.png" alt />
        </router-link>
      </van-col>
      <van-col span="13">
        <h3>
          粤嵌娇子
          <i>
            <span class="iconfont icon-qingtong"></span>青铜三
          </i>
          <br />三分钟前
        </h3>
      </van-col>
      <van-col span="6">
        <button>+ 关注</button>
      </van-col>
      <van-col span="16" offset="5">
        <p>唱的不好，大家多多包涵</p>
      </van-col>
    </van-row>

    <van-row class="song">
      <van-col span="6" offset="5">
        <a href="#">
          <img src="../../assets/images/lbt2.png" alt />
        </a>
      </van-col>
      <van-col span="10">
        <h3>
          伤离别
          <i>SSS</i>
        </h3>
        <h5>3D丽音音效</h5>
      </van-col>
    </van-row>

    <van-row class="textlist">
      <van-col v-for="(item,index) in list[3]" :key="index" span="18" offset="5">
        <a href="#">
          {{item.name}}
          <i>{{item.content}}</i>
        </a>
      </van-col>
    </van-row>
    <van-row class="icon">
      <van-col span="4" offset="5">
        <span @click="good4" class="iconfont icon-zan">&nbsp;{{this.plus4}}</span>
      </van-col>
      <van-col span="4" offset="1">
        <span class="iconfont icon-gift">&nbsp;6</span>
      </van-col>
      <van-col span="4" offset="1">
        <span @click="add(3)" class="iconfont icon-xinxi">&nbsp;{{this.list[3].length}}</span>
      </van-col>
      <van-col span="4" offset="1">
        <span class="iconfont icon-fenxiang"></span>
      </van-col>
    </van-row>

    <!-- 登录信息end -->

    <!-- 登录信息 -->
    <van-row class="play">
      <van-col span="4" offset="1">
        <router-link to tag="h3">
          <img src="../../assets/images/lbt4.png" alt />
        </router-link>
      </van-col>
      <van-col span="13">
        <h3>
          粤嵌娇子
          <i>
            <span class="iconfont icon-qingtong"></span>青铜三
          </i>
          <br />三分钟前
        </h3>
      </van-col>
      <van-col span="6">
        <button>+ 关注</button>
      </van-col>
      <van-col span="16" offset="5">
        <p>唱的不好，大家多多包涵</p>
      </van-col>
    </van-row>

    <van-row class="song">
      <van-col span="6" offset="5">
        <a href="#">
          <img src="../../assets/images/gd8.png" alt />
        </a>
      </van-col>
      <van-col span="10">
        <h3>
          伤离别
          <i>SSS</i>
        </h3>
        <h5>3D丽音音效</h5>
      </van-col>
    </van-row>

    <van-row class="textlist">
      <van-col v-for="(item,index) in list[4]" :key="index" span="18" offset="5">
        <a href="#">
          {{item.name}}
          <i>{{item.content}}</i>
        </a>
      </van-col>
    </van-row>

    <van-row class="icon">
      <van-col span="4" offset="5">
        <span @click="good5" class="iconfont icon-zan">&nbsp;{{this.plus5}}</span>
      </van-col>
      <van-col span="4" offset="1">
        <span class="iconfont icon-gift">&nbsp;6</span>
      </van-col>
      <van-col span="4" offset="1">
        <span @click="add(4)" class="iconfont icon-xinxi">&nbsp;{{this.list[4].length}}</span>
      </van-col>
      <van-col span="4" offset="1">
        <span class="iconfont icon-fenxiang"></span>
      </van-col>
    </van-row>

    <!-- 登录信息end -->

    <!-- K歌榜end -->

    <!-- 底部 -->

    <van-row class="bottom">
      <van-col span="24">
        <a href="#">
          查看更多
          <span class="iconfont icon-you"></span>
        </a>
      </van-col>
    </van-row>

    <!-- 底部end -->

    <!-- 评论框 -->
    <van-row v-show="this.btnshow == true" class="inp">
      <van-col span="20">
        <input type="text" v-model="content" placeholder="点赞都是套路，评论才是真情" />
      </van-col>
      <van-col span="4">
        <button @click="text">发表</button>
      </van-col>
    </van-row>
    <!-- 评论框 -->

    <div class="box11" style="width:100%;height:100px"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  data() {
    return {
      content: "",
      count: 0,
      btnshow: false,
      plus1: 6,
      jiabool1: true,
      plus2: 6,
      jiabool2: true,
      plus3: 6,
      jiabool3: true,
      plus4: 6,
      jiabool4: true,
      plus5: 6,
      jiabool5: true,
      list: [
        [
          { name: "隔壁老王：", content: "一楼是我的666" },
          { name: "神奇海螺：", content: "老哥好稳啊！" },
          { name: "精神小伙：", content: "唱的很好听。。。加油加油加油" }
        ],
        [
          { name: "隔壁老王：", content: "一楼是我的666" },
          { name: "神奇海螺：", content: "老哥好稳啊！" },
          { name: "精神小伙：", content: "唱的很好听。。。加油加油加油" }
        ],
        [
          { name: "隔壁老王：", content: "一楼是我的666" },
          { name: "神奇海螺：", content: "老哥好稳啊！" },
          { name: "精神小伙：", content: "唱的很好听。。。加油加油加油" }
        ],
        [
          { name: "隔壁老王：", content: "一楼是我的666" },
          { name: "神奇海螺：", content: "老哥好稳啊！" },
          { name: "精神小伙：", content: "唱的很好听。。。加油加油加油" }
        ],
        [
          { name: "隔壁老王：", content: "一楼是我的666" },
          { name: "神奇海螺：", content: "老哥好稳啊！" },
          { name: "精神小伙：", content: "唱的很好听。。。加油加油加油" }
        ]
      ]
    };
  },
  methods: {
    add(index) {
      if (this.$store.state.my.svipshow) {
        this.count = index;
        this.$store.state.foo = false;
        this.btnshow = true;
      } else {
        this.$router.push("/my/login/phonelogin");
      }
    },
    text() {
      if (this.content != "") {
        this.list[this.count].push({
          name: this.$store.state.my.username + "：",
          content: this.content
        });
        this.$store.state.foo = true;
        this.btnshow = false;
        this.content = "";
      }
    },
    good1() {
      if (this.jiabool1) {
        this.plus1 += 1;
        this.jiabool1 = false;
      } else {
        this.plus1 -= 1;
        this.jiabool1 = true;
      }
    },
    good2() {
      if (this.jiabool2) {
        this.plus2 += 1;
        this.jiabool2 = false;
      } else {
        this.plus2 -= 1;
        this.jiabool2 = true;
      }
    },
    good3() {
      if (this.jiabool3) {
        this.plus3 += 1;
        this.jiabool3 = false;
      } else {
        this.plus3 -= 1;
        this.jiabool3 = true;
      }
    },
    good4() {
      if (this.jiabool4) {
        this.plus4 += 1;
        this.jiabool4 = false;
      } else {
        this.plus4 -= 1;
        this.jiabool4 = true;
      }
    },
    good5() {
      if (this.jiabool5) {
        this.plus5 += 1;
        this.jiabool5 = false;
      } else {
        this.plus5 -= 1;
        this.jiabool5 = true;
      }
    }
  },
  mounted() {
    new Swiper(".swiper-container", {
      speed: 2500,
      slidesPerView: 3,
      spaceBetween: 10
    });
  }
};
</script>

<style lang="scss" scoped>
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

//比赛

.game {
  margin-top: 0.46875rem;
  a {
    width: 80%;
    display: block;
    height: 1.5625rem;
    background-color: #7f02ff;
    text-align: center;
    line-height: 0.625rem;
    padding: 10px;
    border-radius: 0.3125rem;
    margin: 0 auto;
    color: white;
    span {
      font-size: 0.46875rem;
    }
    h5 {
      padding: 0;
      margin: 0;
      //width: 0.78125rem;
      display: inline-block;
      margin-left: 0.078125rem;
      font-weight: normal;
      font-size: 0.3125rem;
    }
    h6 {
      padding: 0;
      margin: 0;
      //width: 0.78125rem;
      display: inline-block;
      font-weight: normal;
      color: #dae6ff;
      font-size: 0.28125rem;
    }
  }
}

//比赛end

//列表
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
    text-align: center;
    &.con {
      background-color: #2a2b2f;
    }
  }
}
.add {
  margin-top: 0.15625rem;
  a {
    display: block;
    width: 100%;
    text-align: center;
    height: 0.78125rem;
    line-height: 0.78125rem;
    font-size: 0.3125rem;
    color: #a2a1a6;
    &:hover {
      color: #4078ff;
    }
    i {
      font-style: normal;
      font-size: 0.390625rem;
    }
  }
}
//列表end

//官方推荐直播

.searchlist {
  margin-top: 10px;
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
    i {
      font-style: normal;
    }
  }
}

.officialtitle {
  margin-top: 20px;
  .history {
    font-size: 0.390625rem;
    color: #a2a1a6;
    font-weight: bolder;
  }
}
.swiper-container {
  width: 100%;
  height: auto;
  margin-top: 0.3125rem;
  margin-left: auto;
  margin-right: auto;
}
.swiper-slide {
  text-align: center;
  font-size: 0.28125rem;

  width: 100%;
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
  transition-property: all;
  a {
    color: #a1a0a5;
    img {
      width: 100%;
      height: auto;
    }
    h3 {
      padding: 0;
      margin: 0 auto;
      font-size: 0.3125rem;
      color: #a1a0a5;
      text-align: left;
      font-weight: normal;
    }
    h5 {
      padding: 0;
      margin: 0 auto;
      font-size: 0.25rem;
      color: #a1a0a5;
      margin-top: 5px;
      text-align: left;
      font-weight: normal;
    }
  }
}
#progressEffect {
  position: absolute;
  z-index: 10;
  top: 20px;
  left: 20px;
}

//官方推荐直播end

//k歌
.play {
  width: 100%;
  background-color: #212227;
  margin-top: 0.3125rem;
  h3 {
    padding: 0.15625rem 0rem;
    width: 100%;
    height: 1.25rem;
    display: block;
    font-size: 0.25rem;
    font-weight: bolder;
    color: #a2a1a6;
    margin: 0.078125rem 0;
    line-height: 0.625rem;
    font-weight: normal;
    img {
      width: 1.25rem;
      height: 1.25rem;
      display: block;
      border-radius: 50%;
    }
    i {
      padding: 0rem 0.125rem;
      //display:block;

      background-color: #cd9a7f;
      border-radius: 0.15625rem;

      color: #6b4832;
    }
  }

  button {
    font-size: 0.3125rem;
    border: none;
    outline: none;
    background-color: #005fbd;
    height: 0.78125rem;
    width: 1.5625rem;
    border-radius: 0.78125rem;
    line-height: 0.78125rem;
    text-align: center;
    color: white;
  }
  p {
    margin: 0 auto;
    color: #a2a1a6;
    font-size: 0.390625rem;
    margin-top: 0.15625rem;
  }
}

.song {
  width: 100%;
  background-color: #212227;
  margin-top: 0.234375rem;
  h3 {
    width: 100%;
    height: 1.25rem;
    font-size: 0.390625rem;
    color: #a2a2a4;
    margin: 5px 0;
    line-height: 1.25rem;
    font-weight: normal;
    margin-left: 0.15625rem;
    i {
      font-style: normal;
      color: #f05249;
    }
  }
  img {
    width: 2.5rem;
    height: 2.5rem;
    display: block;
    border-radius: 0.15625rem;
  }
  h5 {
    width: 2.5rem;
    //height: 1.25rem;
    padding: 0;
    margin: 0;
    font-size: 0.25rem;
    color: #a2a2a4;
    margin-left: 0.15625rem;
  }
}

.textlist {
  margin-bottom: 0.15625rem;
  a {
    display: block;
    width: 100%;
    //margin: 0 auto;
    font-size: 0.34375rem;
    color: #005fbd;
    margin-top: 0.15625rem;

    i {
      font-style: normal;
      color: #a2a2a4;
    }
  }
}

.icon {
  margin-top: 0.15625rem;
  span {
    color: #a2a2a4;
  }
}
//k歌end

//底部
.bottom {
  width: 100%;
  margin-top: 0.78125rem;
  a {
    display: block;
    margin: 0 auto;
    font-size: 0.3125rem;
    color: #a2a1a6;
    text-align: center;
    span {
      font-size: 0.3125rem;
    }
  }
}
//底部end

// 评论框

.inp {
  position: fixed;
  bottom: 0rem;
  z-index: 999;
  width: 100%;
  height: 1.875rem;
  background-color: #373738;
  input {
    width: 80%;
    //background-color: #a8a8a9;
    height: 0.9375rem;
    font-size: 0.34375rem;
    padding: 0rem 0.3125rem;
    border: none;
    outline: none;
    color: #a2a1a6;
    background-color: transparent;
    border-radius: 1.25rem;
    border: 1px solid #a2a1a6;
    margin: 0 auto;
    display: block;
    margin-top: 0.46875rem;
  }
  button {
    //width: 100%;
    height: 0.9375rem;
    font-size: 0.34375rem;
    line-height: 0.9375rem;
    border: none;
    outline: none;
    background-color: transparent;
    color: #005fbd;
    display: block;
    margin-top: 0.46875rem;
  }
}

//评论框end
</style>