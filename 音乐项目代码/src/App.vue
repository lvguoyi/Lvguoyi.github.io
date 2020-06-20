<template>
  <div id="myapp">
    <van-row class="bottomnav" v-show="this.$store.state.foo">
      <van-col span="23" offset="1">
        <router-link class="con" to="/find/recommend" tag="a">
          <span class="iconfont icon-yinle"></span>发现
        </router-link>
        <router-link to="/livestreaming/attention" tag="a">
          <span class="iconfont icon-zhibo"></span>
          直播
        </router-link>
        <router-link to="/play" tag="a"></router-link>
        <!-- <span @click="$router.push('/play')" class="play"></span> -->
        <router-link to="/ksong/recommend" tag="a">
          <span class="iconfont icon-kge"></span>
          K歌
        </router-link>
        <router-link to="/my/music" tag="a">
          <span class="iconfont icon-home"></span>
          我的
        </router-link>
      </van-col>
    </van-row>
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  methods: {}
};
</script>

<style lang="scss" scoped>
#myapp {
  overflow: hidden;
}
.v-enter,
.v-leave-to {
  opacity: 0.1;
  //transform: translateX(-30px);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.2s ease;
}

.bottomnav {
  position: fixed;
  bottom: 0;
  background-color: #272731;
  width: 100%;
  z-index: 999;
  .van-col {
    text-align: center;
    font-size: 0.3125rem;
    color: #58595e;
    a {
      display: block;
      width: 20%;
      height: 1.5625rem;
      color: #58595e;
      float: left;
      //background-color: orange;
      text-align: left;
      &.router-link-active {
        color: #005fbd;
      }
      &:nth-child(3) {
        width: 1.5625rem;
        height: 1.5625rem;
        border-radius: 50%;
        margin: 5px auto;
        background-image: url("./assets/images/e1.png");
        background-size: 1.5625rem 1.5625rem;
      }
      &:nth-child(4) {
        text-align: right;
      }
      &:nth-child(5) {
        text-align: right;
      }
    }
    span {
      display: block;
      margin: 0.234375rem 0 0 0;
      height: 0.78125rem;
      line-height: 0.78125rem;
      font-size: 0.46875rem;
      .iconfont {
        font-size: 0.46875rem;
      }
    }
    .play {
      width: 1.5625rem;
      height: 1.5625rem;
      margin: 0.078125rem 0px;
      border-radius: 50%;
      margin: 5px auto;
      background-image: url("./assets/images/e1.png");
      background-size: 1.5625rem 1.5625rem;
    }
  }
}
</style>