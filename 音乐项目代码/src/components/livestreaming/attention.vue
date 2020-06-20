<template>
  <div>
    
        <!-- 直播分类 -->
        <van-sticky :offset-top="30">
          <van-row class="songnav">
            <van-col span="3" offset="1">
              <a class="con" href="#">全部</a>
            </van-col>
            <van-col span="3" offset="1">
              <a href="#">歌手</a>
            </van-col>
            <van-col span="3" offset="1">
              <a href="#">颜值</a>
            </van-col>
            <van-col span="3" offset="1">
              <a href="#">新秀</a>
            </van-col>
            <van-col span="3" offset="1">
              <a href="#">特色</a>
            </van-col>
            <van-col span="3" offset="1">
              <a href="#">
                <span class="iconfont icon-bang"></span>
              </a>
            </van-col>
          </van-row>
        </van-sticky>
        <!-- 直播分类end -->

        <!-- 直播标题 -->
        <van-row class="searchlist">
          <van-col class="history" span="8" offset="1">推荐主播</van-col>
          <van-col class="del" span="8" offset="6">
            <span class="iconfont icon-kge"></span>
          </van-col>
        </van-row>
        <!-- 直播标题end -->

        <!-- 直播间 -->

        <van-row class="room">
          <van-col span="11" offset="1">
            <a href="#">
              <img src="../../assets/images/zb2.png" alt />
            </a>
            <h3>全能才艺逗乐主播</h3>
            <h5>天皓逗你乐翻天</h5>
          </van-col>
          <van-col span="11">
            <a class="con" href="#">
              <img src="../../assets/images/zb3.png" alt />
            </a>
            <h3 class="aa">颜艺主播了解一下</h3>
            <h5 class="aa">二猫o请多关照</h5>
          </van-col>
        </van-row>

        <van-row class="room">
          <van-col span="11" offset="1">
            <a href="#">
              <img src="../../assets/images/zb4.png" alt />
            </a>
            <h3>新主播求关注</h3>
            <h5>JY班长</h5>
          </van-col>
          <van-col span="11">
            <a class="con" href="#">
              <img src="../../assets/images/zb5.png" alt />
            </a>
            <h3 class="aa">24小时好歌不断</h3>
            <h5 class="aa">321音乐频道</h5>
          </van-col>
        </van-row>
        <!-- 直播间 end-->
    

    <!-- 官方推荐直播 -->

    <van-row class="officialtitle">
      <van-col class="history" span="8" offset="1">官方推荐</van-col>
    </van-row>

    <van-row class="officialswiper">
      <van-col span="22" offset="1">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <a href="#">
                <img src="../../assets/images/gf1.png" alt />
                <h3 class="aa">限时情感咨询</h3>
                <h5 class="aa">
                  <i>521情感频道</i> 火热连麦
                </h5>
              </a>
            </div>
            <div class="swiper-slide">
              <a href="#">
                <img src="../../assets/images/gf2.png" alt />
                <h3 class="aa">在线云蹦迪</h3>
                <h5 class="aa">
                  <i>DJ</i> 一起摇摆不憋坏
                </h5>
              </a>
            </div>
            <div class="swiper-slide">
              <a href="#">
                <img src="../../assets/images/gf3.png" alt />
                <h3 class="aa">酷狗热歌最in现场</h3>
                <h5 class="aa">
                  <i style="background-color:#ff6b57">321</i>24小时嗨唱
                </h5>
              </a>
            </div>
            <div class="swiper-slide">
              <a href="#">
                <img src="../../assets/images/gf4.png" alt />
                <h3 class="aa">红娘牵线相亲</h3>
                <h5 class="aa">
                  <i style="background-color:#ff44ab">牵伴</i> 视频交友
                </h5>
              </a>
            </div>
            <div class="swiper-slide">
              <a href="#">
                <img src="../../assets/images/gf5.png" alt />
                <h3 class="aa">脱口秀&音乐&舞蹈</h3>
                <h5 class="aa">
                  <i style="background-color:#359416">公会频道</i>精彩不断
                </h5>
              </a>
            </div>
            <div class="swiper-slide">
              <a href="#">
                <img src="../../assets/images/gf6.png" alt />
                <h3 class="aa">限时情感咨询</h3>
                <h5 class="aa">
                  <i style="background-color:#6f4496">521情感频道</i> 火热连麦
                </h5>
              </a>
            </div>
            <div class="swiper-slide">
              <a href="#">
                <img src="../../assets/images/gf7.png" alt />
                <h3 class="aa">魅力新星</h3>
                <h5 class="aa">
                  <i style="background-color:#5ad2ed">音乐</i>
                  好歌不断
                </h5>
              </a>
            </div>
            <div class="swiper-slide">
              <a href="#">
                <img src="../../assets/images/gf8.png" alt />
                <h3 class="aa">虚拟主播</h3>
                <h5 class="aa">
                  <i style="background-color:#dea32d">魅力新星</i> 人气新主播
                </h5>
              </a>
            </div>
            <div class="swiper-slide">
              <a href="#">
                <img src="../../assets/images/gf9.png" alt />
                <h3 class="aa">大咖唱见等你来看</h3>
                <h5 class="aa">
                  <i style="background-color:#5beb87">虚拟主播</i> 宅萌奇趣
                </h5>
              </a>
            </div>
          </div>
        </div>
      </van-col>
    </van-row>

    <!-- 官方推荐直播end -->

    <!-- 其他直播 -->
     <van-row class="officialtitle">
      <van-col class="history" span="8" offset="1">大众主播</van-col>
    </van-row>

    <van-row class="room">
      <van-col span="11" offset="1">
        <a href="#">
          <img src="../../assets/images/zb6.png" alt />
        </a>
        <h3>全能才艺逗乐主播</h3>
        <h5>天皓逗你乐翻天</h5>
      </van-col>
      <van-col span="11">
        <a class="con" href="#">
          <img src="../../assets/images/zb3.png" alt />
        </a>
        <h3 class="aa">颜艺主播了解一下</h3>
        <h5 class="aa">二猫o请多关照</h5>
      </van-col>
    </van-row>

    <van-row class="room">
      <van-col span="11" offset="1">
        <a href="#">
          <img src="../../assets/images/zb4.png" alt />
        </a>
        <h3>新主播求关注</h3>
        <h5>JY班长</h5>
      </van-col>
      <van-col span="11">
        <a class="con" href="#">
          <img src="../../assets/images/zb5.png" alt />
        </a>
        <h3 class="aa">24小时好歌不断</h3>
        <h5 class="aa">321音乐频道</h5>
      </van-col>
    </van-row>

    <van-row class="room">
      <van-col span="11" offset="1">
        <a href="#">
          <img src="../../assets/images/zb7.png" alt />
        </a>
        <h3>全能才艺逗乐主播</h3>
        <h5>天皓逗你乐翻天</h5>
      </van-col>
      <van-col span="11">
        <a class="con" href="#">
          <img src="../../assets/images/zb3.png" alt />
        </a>
        <h3 class="aa">颜艺主播了解一下</h3>
        <h5 class="aa">二猫o请多关照</h5>
      </van-col>
    </van-row>

    <van-row class="room">
      <van-col span="11" offset="1">
        <a href="#">
          <img src="../../assets/images/zb4.png" alt />
        </a>
        <h3>新主播求关注</h3>
        <h5>JY班长</h5>
      </van-col>
      <van-col span="11">
        <a class="con" href="#">
          <img src="../../assets/images/zb5.png" alt />
        </a>
        <h3 class="aa">24小时好歌不断</h3>
        <h5 class="aa">321音乐频道</h5>
      </van-col>
    </van-row>

    <van-row class="room">
      <van-col span="11" offset="1">
        <a href="#">
          <img src="../../assets/images/zb7.png" alt />
        </a>
        <h3>全能才艺逗乐主播</h3>
        <h5>天皓逗你乐翻天</h5>
      </van-col>
      <van-col span="11">
        <a class="con" href="#">
          <img src="../../assets/images/zb3.png" alt />
        </a>
        <h3 class="aa">颜艺主播了解一下</h3>
        <h5 class="aa">二猫o请多关照</h5>
      </van-col>
    </van-row>

    <van-row class="room">
      <van-col span="11" offset="1">
        <a href="#">
          <img src="../../assets/images/zb4.png" alt />
        </a>
        <h3>新主播求关注</h3>
        <h5>JY班长</h5>
      </van-col>
      <van-col span="11">
        <a class="con" href="#">
          <img src="../../assets/images/zb5.png" alt />
        </a>
        <h3 class="aa">24小时好歌不断</h3>
        <h5 class="aa">321音乐频道</h5>
      </van-col>
    </van-row>

    <van-row class="room">
      <van-col span="11" offset="1">
        <a href="#">
          <img src="../../assets/images/zb6.png" alt />
        </a>
        <h3>全能才艺逗乐主播</h3>
        <h5>天皓逗你乐翻天</h5>
      </van-col>
      <van-col span="11">
        <a class="con" href="#">
          <img src="../../assets/images/zb3.png" alt />
        </a>
        <h3 class="aa">颜艺主播了解一下</h3>
        <h5 class="aa">二猫o请多关照</h5>
      </van-col>
    </van-row>

    <van-row class="room">
      <van-col span="11" offset="1">
        <a href="#">
          <img src="../../assets/images/zb4.png" alt />
        </a>
        <h3>新主播求关注</h3>
        <h5>JY班长</h5>
      </van-col>
      <van-col span="11">
        <a class="con" href="#">
          <img src="../../assets/images/zb5.png" alt />
        </a>
        <h3 class="aa">24小时好歌不断</h3>
        <h5 class="aa">321音乐频道</h5>
      </van-col>
    </van-row>

    <van-row class="room">
      <van-col span="11" offset="1">
        <a href="#">
          <img src="../../assets/images/zb6.png" alt />
        </a>
        <h3>全能才艺逗乐主播</h3>
        <h5>天皓逗你乐翻天</h5>
      </van-col>
      <van-col span="11">
        <a class="con" href="#">
          <img src="../../assets/images/zb3.png" alt />
        </a>
        <h3 class="aa">颜艺主播了解一下</h3>
        <h5 class="aa">二猫o请多关照</h5>
      </van-col>
    </van-row>

    <van-row class="room">
      <van-col span="11" offset="1">
        <a href="#">
          <img src="../../assets/images/zb4.png" alt />
        </a>
        <h3>新主播求关注</h3>
        <h5>JY班长</h5>
      </van-col>
      <van-col span="11">
        <a class="con" href="#">
          <img src="../../assets/images/zb5.png" alt />
        </a>
        <h3 class="aa">24小时好歌不断</h3>
        <h5 class="aa">321音乐频道</h5>
      </van-col>
    </van-row>

    <van-row class="room">
      <van-col span="11" offset="1">
        <a href="#">
          <img src="../../assets/images/zb7.png" alt />
        </a>
        <h3>全能才艺逗乐主播</h3>
        <h5>天皓逗你乐翻天</h5>
      </van-col>
      <van-col span="11">
        <a class="con" href="#">
          <img src="../../assets/images/zb3.png" alt />
        </a>
        <h3 class="aa">颜艺主播了解一下</h3>
        <h5 class="aa">二猫o请多关照</h5>
      </van-col>
    </van-row>

    <van-row class="room">
      <van-col span="11" offset="1">
        <a href="#">
          <img src="../../assets/images/zb4.png" alt />
        </a>
        <h3>新主播求关注</h3>
        <h5>JY班长</h5>
      </van-col>
      <van-col span="11">
        <a class="con" href="#">
          <img src="../../assets/images/zb5.png" alt />
        </a>
        <h3 class="aa">24小时好歌不断</h3>
        <h5 class="aa">321音乐频道</h5>
      </van-col>
    </van-row>

    <van-row class="room">
      <van-col span="11" offset="1">
        <a href="#">
          <img src="../../assets/images/zb7.png" alt />
        </a>
        <h3>全能才艺逗乐主播</h3>
        <h5>天皓逗你乐翻天</h5>
      </van-col>
      <van-col span="11">
        <a class="con" href="#">
          <img src="../../assets/images/zb3.png" alt />
        </a>
        <h3 class="aa">颜艺主播了解一下</h3>
        <h5 class="aa">二猫o请多关照</h5>
      </van-col>
    </van-row>

    <van-row class="room">
      <van-col span="11" offset="1">
        <a href="#">
          <img src="../../assets/images/zb4.png" alt />
        </a>
        <h3>新主播求关注</h3>
        <h5>JY班长</h5>
      </van-col>
      <van-col span="11">
        <a class="con" href="#">
          <img src="../../assets/images/zb5.png" alt />
        </a>
        <h3 class="aa">24小时好歌不断</h3>
        <h5 class="aa">321音乐频道</h5>
      </van-col>
    </van-row>

    <!-- 其他直播end -->

    <!-- 底部 -->

    <van-row class="bottom">
      <van-col span="24">
        <h3>
          没有更多直播小姐姐了~
          <span class="iconfont icon-weibiaoti-"></span>
        </h3>
      </van-col>
    </van-row>

    <!-- 底部end -->
    </div>
 
</template>

<script>
import Swiper from "swiper";
export default {
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
//直播分类
.songnav {
  margin-top: 10px;
  background-color: #212227;
  a {
    display: block;
    padding: .078125rem .15625rem;
    height: auto;
    border-radius: .3125rem;
    text-align: center;
    font-size: .3125rem;
    color: #a2a1a6;
    cursor: pointer;

    &.con {
      background-color: #2a2b2f;
    }
    span {
      font-size: 0.46875rem;
      color: #fcc824;
    }
  }
}
//直播分类end

//直播标题

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
    color: #005fbd;
    text-align: right;
  }
}

//直播标题end

//直播间

.room {
  margin-top: 20px;
  a {
    display: block;
    width: 96%;
    text-align: left;
    text-align: center;
    &.con {
      margin-left: 4%;
    }
    img {
      width: 85%;
      height: auto;
      //margin: 0 auto;
    }
  }
  h3 {
    width: 100%;
    padding: 0;
    margin: 0 auto;
    font-size: 0.3125rem;
    color: #a1a0a5;
    text-align: center;
    font-weight: normal;
    
  }
  h5 {
    width: 96%;
    padding: 0;
    margin: 0 auto;
    font-size: 0.25rem;
    color: #a1a0a5;
    margin-top: 5px;
    text-align: center;
    font-weight: normal;
    &.aa {
      margin-left: 4%;
    }
  }
}

//直播间end

//官方推荐直播
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
  margin-top: .3125rem;
  margin-left: auto;
  margin-right: auto;
}
.swiper-slide {
  text-align: center;
  font-size: .28125rem;

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
      i {
        display: inline-block;
        font-style: normal;
        background-color: #7849e7;
        padding: 3px 5px;
        border-radius: 10px;
        color: white;
      }
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

.bottom {
  width: 100%;
  height: 300px;
  h3 {
    width: 100%;
    font-size: 0.390625rem;
    padding: 0;
    text-align: center;
    color: #a1a0a5;
    span {
      font-size: 0.390625rem;
      color: #a0d9ee;
    }
  }
}
</style>