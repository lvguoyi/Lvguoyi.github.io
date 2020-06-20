<template>
  <div style="background-color: #212227;">
    <!-- 登录信息 -->
    <van-row class="play">
      <van-col span="4" offset="1">
        <router-link to="/my/login/phonelogin" tag="h3">
          <img v-show="$store.state.my.svipshow==false" src="../../assets/images/tx.png" alt />
          <img
            v-show="$store.state.my.svipshow==true"
            src="http://p1.music.126.net/_XT2k6XkoXQgytrq4st8tQ==/19085322835440524.jpg"
            alt
          />
        </router-link>
      </van-col>
      <van-col span="13">
        <h3>
          {{this.$store.state.my.username}}
          <i v-show="$store.state.my.svipshow">SVIP</i>
          <br />
          <i class="con1">lv.9</i>听歌102969分钟
          <i class="con2">身份认证</i>
        </h3>
      </van-col>

      <van-col span="3">
        <h3>
          <span class="iconfont icon-huatong"></span>
        </h3>
      </van-col>
      <van-col span="3">
        <h3>
          <span class="iconfont icon-gerentianjia"></span>
        </h3>
      </van-col>
    </van-row>

    <!-- 登录信息end -->

    <!-- 会员中心 -->

    <van-row class="member">
      <van-col span="11">
        <a href="#">
          <span class="iconfont icon-huiyuanzhongxin"></span>
          会员中心
        </a>
      </van-col>
      <van-col span="11" offset="2" style="text-align:right">
        <a class="con" href="#">
          会员畅享SQ无损音质
          <span class="iconfont icon-you"></span>
        </a>
      </van-col>
      <van-col class="hr" span="24"></van-col>
      <van-col span="4">
        <a class="img" href="#">
          <img src="../../assets/images/hy1.png" alt />
          <h3>本地</h3>
          <h5>5</h5>
        </a>
      </van-col>
      <van-col span="4" offset="1">
        <a class="img" href="#">
          <img src="../../assets/images/hy2.png" alt />
          <h3>收藏</h3>
          <h5>0</h5>
        </a>
      </van-col>
      <van-col span="4" offset="1">
        <a class="img" href="#">
          <img src="../../assets/images/hy3.png" alt />
          <h3>下载</h3>
          <h5>0</h5>
        </a>
      </van-col>
      <van-col span="4" offset="1">
        <a class="img" href="#">
          <img src="../../assets/images/hy4.png" alt />
          <h3>云盘</h3>
          <h5>0</h5>
        </a>
      </van-col>
      <van-col span="4" offset="1">
        <a class="img" href="#">
          <img src="../../assets/images/hy5.png" alt />
          <h3>最近</h3>
          <h5>5</h5>
        </a>
      </van-col>
    </van-row>

    <!-- 会员中心end -->

    <!-- 自建歌单 -->

    <van-row class="songlist">
      <van-col span="8" offset="1">
        <a href="#">自建歌单 5</a>
      </van-col>
      <van-col span="3" offset="5">
        <a href="#">
          <span class="iconfont icon-hao"></span>
        </a>
      </van-col>
      <van-col span="3">
        <a href="#">
          <span class="iconfont icon-qingdan-copy"></span>
        </a>
      </van-col>
      <van-col span="3">
        <a href="#">
          <span class="iconfont icon-shenglve"></span>
        </a>
      </van-col>
    </van-row>

    <van-row class="song">
      <van-col span="4" offset="1">
        <h3>
          <img src="../../assets/images/gd1.png" alt />
        </h3>
      </van-col>
      <van-col span="10">
        <h3>
          我喜欢
          <br />
          <i class="con1">593首</i>
          <i class="con2">9首已下载</i>
        </h3>
      </van-col>

      <van-col span="6">
        <h3>
          <span class="iconfont icon-yinle con">&nbsp;猜你喜欢</span>
        </h3>
      </van-col>
      <van-col span="3">
        <h3>
          <span class="iconfont icon-shenglve"></span>
        </h3>
      </van-col>
    </van-row>

    <van-row class="song">
      <van-col span="4" offset="1">
        <h3>
          <img src="../../assets/images/gd2.png" alt />
        </h3>
      </van-col>
      <van-col span="10">
        <h3>
          默认收藏
          <br />
          <i class="con1">0首</i>
        </h3>
      </van-col>
      <van-col span="3" offset="6">
        <h3>
          <span class="iconfont icon-shenglve"></span>
        </h3>
      </van-col>
    </van-row>

    <van-row class="song">
      <van-col span="4" offset="1">
        <h3>
          <img src="../../assets/images/gd3.png" alt />
        </h3>
      </van-col>
      <van-col span="10">
        <h3>
          默认收藏
          <br />
          <i class="con1">0首</i>
        </h3>
      </van-col>
      <van-col span="3" offset="6">
        <h3>
          <span class="iconfont icon-shenglve"></span>
        </h3>
      </van-col>
    </van-row>

    <van-row class="song">
      <van-col span="4" offset="1">
        <h3>
          <img src="../../assets/images/gd4.png" alt />
        </h3>
      </van-col>
      <van-col span="10">
        <h3>
          我的歌单1
          <br />
          <i class="con1">9首</i>
        </h3>
      </van-col>
      <van-col span="3" offset="6">
        <h3>
          <span class="iconfont icon-shenglve"></span>
        </h3>
      </van-col>
    </van-row>

    <van-row class="song">
      <van-col span="4" offset="1">
        <h3>
          <img src="../../assets/images/gd5.png" alt />
        </h3>
      </van-col>
      <van-col span="10">
        <h3>
          电音和很high的歌
          <br />
          <i class="con1">33首</i>
        </h3>
      </van-col>
      <van-col span="3" offset="6">
        <h3>
          <span class="iconfont icon-shenglve"></span>
        </h3>
      </van-col>
    </van-row>

    <!-- 自建歌单end -->

    <!-- 收藏歌单 -->
    <van-row class="songlist">
      <van-col span="8" offset="1">
        <a href="#">收藏歌单 2</a>
      </van-col>

      <van-col span="3" offset="11">
        <a href="#">
          <span class="iconfont icon-shenglve"></span>
        </a>
      </van-col>
    </van-row>

    <van-row class="song">
      <van-col span="4" offset="1">
        <h3>
          <img src="../../assets/images/gd7.png" alt />
        </h3>
      </van-col>
      <van-col span="10">
        <h3>
          怀旧粤语:80后一定听过的经典粤语歌
          <br />
          <i class="con1">30首</i>
          <i>by秋月如霜qyrs</i>
        </h3>
      </van-col>
      <van-col span="3" offset="6">
        <h3>
          <span class="iconfont icon-shenglve"></span>
        </h3>
      </van-col>
    </van-row>

    <van-row class="song">
      <van-col span="4" offset="1">
        <h3>
          <img src="../../assets/images/gd8.png" alt />
        </h3>
      </van-col>
      <van-col span="10">
        <h3>
          [70后]聆听逝去的时光故事
          <br />
          <i class="con1">42首</i>
          <i>by雨露xixi</i>
        </h3>
      </van-col>
      <van-col span="3" offset="6">
        <h3>
          <span class="iconfont icon-shenglve"></span>
        </h3>
      </van-col>
    </van-row>

    <!-- 收藏歌单end -->

    <!-- 兴趣歌单 -->

    <van-row class="songlist">
      <van-col span="8" offset="1">
        <a href="#">你可能感兴趣的歌单</a>
      </van-col>

      <van-col span="3" offset="11">
        <a href="#">
          <span class="iconfont icon-xx"></span>
        </a>
      </van-col>
    </van-row>

    <!-- 兴趣歌单end -->

    <!-- 兴趣歌单轮播图 -->

    <van-row class="swiper">
      <van-col span="22" offset="1">
        <!-- Swiper -->
        <div class="swiper-container swiperHomeNav3">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <van-row class="song">
                <van-col span="4" offset="1">
                  <h3>
                    <img src="../../assets/images/lbt1.png" alt />
                  </h3>
                </van-col>
                <van-col span="10">
                  <h3>
                    「单曲循环」总有人教我成长但方...
                    <span class="iconfont icon-xinaixin hh">
                      <i>根据你收藏的《气质隆Sir-出卖》推荐</i>
                    </span>
                  </h3>
                </van-col>
                <van-col span="3" offset="6">
                  <h3>
                    <span class="iconfont icon-shenglve"></span>
                  </h3>
                </van-col>
              </van-row>
              <van-row class="song">
                <van-col span="4" offset="1">
                  <h3>
                    <img src="../../assets/images/lbt2.png" alt />
                  </h3>
                </van-col>
                <van-col span="10">
                  <h3>
                    95后，别不承认你爱过非主流歌曲
                    <br />
                    <span class="iconfont icon-xinaixin hh">
                      <i>根据你收藏的《孙子涵、小5-人生..》推荐</i>
                    </span>
                  </h3>
                </van-col>
                <van-col span="3" offset="6">
                  <h3>
                    <span class="iconfont icon-shenglve"></span>
                  </h3>
                </van-col>
              </van-row>
              <van-row class="song">
                <van-col span="4" offset="1">
                  <h3>
                    <img src="../../assets/images/lbt3.png" alt />
                  </h3>
                </van-col>
                <van-col span="10">
                  <h3>
                    抖音歌曲最火的歌2019 (持续更新...
                    <br />
                    <span class="iconfont icon-xinaixin hh">
                      <i>根据你收藏的《ANU- FLY》推荐</i>
                    </span>
                  </h3>
                </van-col>
                <van-col span="3" offset="6">
                  <h3>
                    <span class="iconfont icon-shenglve"></span>
                  </h3>
                </van-col>
              </van-row>
            </div>
            <div class="swiper-slide">
              <van-row class="song">
                <van-col span="4" offset="1">
                  <h3>
                    <img src="../../assets/images/lbt4.png" alt />
                  </h3>
                </van-col>
                <van-col span="10">
                  <h3>
                    洗脑一刻! 2020年 网络热歌速递
                    <span class="iconfont icon-xinaixin hh">
                      <i>根据你收藏的《牟凡爱的哲学》推荐</i>
                    </span>
                  </h3>
                </van-col>
                <van-col span="3" offset="6">
                  <h3>
                    <span class="iconfont icon-shenglve"></span>
                  </h3>
                </van-col>
              </van-row>
              <van-row class="song">
                <van-col span="4" offset="1">
                  <h3>
                    <img src="../../assets/images/lbt5.png" alt />
                  </h3>
                </van-col>
                <van-col span="10">
                  <h3>
                    华语新歌2019年11月刊[完结]
                    <br />
                    <span class="iconfont icon-xinaixin hh">
                      <i>根据你收藏的《牟凡-不大不小十九岁》推荐</i>
                    </span>
                  </h3>
                </van-col>
                <van-col span="3" offset="6">
                  <h3>
                    <span class="iconfont icon-shenglve"></span>
                  </h3>
                </van-col>
              </van-row>
              <van-row class="song">
                <van-col span="4" offset="1">
                  <h3>
                    <img src="../../assets/images/lbt6.png" alt />
                  </h3>
                </van-col>
                <van-col span="10">
                  <h3>
                    歌手2020回归!历届精彩现场回顾
                    <br />
                    <span class="iconfont icon-xinaixin hh">
                      <i>根据你收藏的《李佳薇-煎熬》推荐</i>
                    </span>
                  </h3>
                </van-col>
                <van-col span="3" offset="6">
                  <h3>
                    <span class="iconfont icon-shenglve"></span>
                  </h3>
                </van-col>
              </van-row>
            </div>
            <div class="swiper-slide">
              <van-row class="song">
                <van-col span="4" offset="1">
                  <h3>
                    <img src="../../assets/images/lbt7.png" alt />
                  </h3>
                </van-col>
                <van-col span="10">
                  <h3>
                    洗脑一刻! 2020年网络热歌速递
                    <span class="iconfont icon-xinaixin hh">
                      <i>根据你收藏的《牟凡-爱的哲学》推荐</i>
                    </span>
                  </h3>
                </van-col>
                <van-col span="3" offset="6">
                  <h3>
                    <span class="iconfont icon-shenglve"></span>
                  </h3>
                </van-col>
              </van-row>
              <van-row class="song">
                <van-col span="4" offset="1">
                  <h3>
                    <img src="../../assets/images/lbt8.png" alt />
                  </h3>
                </van-col>
                <van-col span="10">
                  <h3>
                    华语新歌2019年11月刊[完结]
                    <br />
                    <span class="iconfont icon-xinaixin hh">
                      <i>根据你收藏的《牟凡-不大不小十九岁》推荐</i>
                    </span>
                  </h3>
                </van-col>
                <van-col span="3" offset="6">
                  <h3>
                    <span class="iconfont icon-shenglve"></span>
                  </h3>
                </van-col>
              </van-row>
              <van-row class="song">
                <van-col span="4" offset="1">
                  <h3>
                    <img src="../../assets/images/lbt9.png" alt />
                  </h3>
                </van-col>
                <van-col span="10">
                  <h3>
                    歌手2020回归!历届精彩现场回顾
                    <br />
                    <span class="iconfont icon-xinaixin hh">
                      <i>根据你收藏的《李佳薇-煎熬》推荐</i>
                    </span>
                  </h3>
                </van-col>
                <van-col span="3" offset="6">
                  <h3>
                    <span class="iconfont icon-shenglve"></span>
                  </h3>
                </van-col>
              </van-row>
            </div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
        </div>
      </van-col>
    </van-row>

    <!-- 兴趣歌单轮播图 -->

    <!-- 底部 -->

    <van-row class="bottom">
      <van-col span="24">
        <a href="#">
          发现更多好音乐
          <span class="iconfont icon-you"></span>
        </a>
      </van-col>
    </van-row>

    <!-- 底部end -->
    <div class="box" style="height:200px;width:100%"></div>
  </div>
</template>
<script>
import Swiper from "swiper";
export default {
  methods: {},

  mounted() {
    // 注意：.swiper-container swiper中实例化对象第一值，是swiper显示最外面对象容器。这个类在重复使用swiper容易冲突，重新定义类名解决
    new Swiper(".swiperHomeNav3", {
      slidesPerView: 1,
      centeredSlides: true
    });
  }
};
</script>

<style lang="scss" scoped>
//登录信息
.play {
  width: 100%;
  background-color: #212227;

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

      background-color: #cccccc;
      border-radius: 0.15625rem;

      color: #edffff;

      &.con1 {
        font-style: normal;
        border: 1px solid #7c7d81;
        background-color: transparent;
        color: #7c7d81;
        margin-right: 0.078125rem;
      }
      &.con2 {
        font-style: normal;
        background-color: #0ad3e5;
        color: #edffff;
        margin-left: 0.078125rem;
      }
    }
  }

  span {
    text-align: center;
    line-height: 1.25rem;
    width: 1.25rem;
    height: 1.25rem;
    display: inline-block;
    color: #a2a1a6;
    font-size: 0.3125rem;
  }
}
//登录信息end

//会员中心

.member {
  width: 86%;
  margin: 0 auto;
  padding: 0.3125rem;
  margin-top: 0.15625rem;
  background-color: #272731;
  border-radius: 20px;
  a {
    color: #eeb969;
    font-size: 0.28125rem;
    &.con {
      color: #646567;
    }
    span {
      font-size: 0.34375rem;
    }
  }
  .hr {
    border-top: 2px solid #2a2a34;
    width: 100%;
    height: 0.28125rem;
    margin-top: 0.3125rem;
  }
  .img {
    width: 100%;
    text-align: center;

    img {
      width: 50%;
      height: auto;
      margin: 0 auto;
      display: block;
    }
    h3 {
      width: 100%;
      color: #a2a1a6;
      font-weight: normal;
    }
    h5 {
      width: 100%;
      color: #65666b;
      font-weight: normal;
      margin-bottom: 0;
    }
  }
}

//会员中心end

//自建歌单

.songlist {
  margin-top: 0.46875rem;
  a {
    display: block;
    width: 100%;
    height: 0.46875rem;
    line-height: 0.46875rem;
    color: #a2a2a4;
    font-size: 0.28125rem;
    font-weight: bolder;
    span {
      display: block;
      width: 100%;
      text-align: right;
      height: 0.46875rem;
      line-height: 0.46875rem;
      color: #555557;
      font-size: 0.421875rem;
    }
  }
}
.song {
  width: 100%;
  background-color: #212227;
  margin-top: 0.234375rem;
  h3 {
    width: 100%;
    height: 1.25rem;
    display: block;
    font-size: 0.25rem;
    font-weight: bolder;
    color: #a2a2a4;
    margin: 5px 0;
    line-height: 0.625rem;
    font-weight: normal;
    img {
      width: 1.25rem;
      height: auto;
      display: block;
      border-radius: 0.15625rem;
    }
    i {
      font-style: normal;
      color: #7c7d81;
      padding-right: 0.234375rem;
    }
  }
  span {
    text-align: center;
    line-height: 1.25rem;
    width: 1.25rem;
    height: 1.25rem;
    display: block;
    color: #a2a1a6;
    font-size: 0.421875rem;
    color: #555557;
    &.con {
      width: 90%;
      border: 1px solid #005fbd;
      height: 0.625rem;
      line-height: 0.625rem;
      margin-top: 0.1rem;
      border-radius: 0.625rem;
      font-size: 0.28125rem;
      color: #005fbd;
    }
  }
}

//自建歌单end

//兴趣歌单轮播图
.swiper {
  h3 {
    width: 7.8125rem;
  }
  span.hh {
    width: 100%;
    height: 0.46875rem;
    font-size: 0.234375rem;
    line-height: 0.625rem;
    text-align: left;
    color: #fe759c;
  }
}

//兴趣歌单轮播图end

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
</style>