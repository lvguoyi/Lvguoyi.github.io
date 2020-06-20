<template>
  <div class="box">
    <!-- 头部导航 -->
    <van-sticky>
      <van-row class="headnav" style="background-color:#212227">
        <van-col span="4" offset="1">
          <router-link to="/find/recommend" class="con" tag="h3">推荐</router-link>
        </van-col>
        <van-col span="4">
          <router-link to class="con" tag="h3">点歌</router-link>
        </van-col>
        <van-col span="4">
          <router-link to class="con" tag="h3">K房</router-link>
        </van-col>
        <van-col span="4">
          <router-link to class="con" tag="h3">直播</router-link>
        </van-col>
        <van-col span="4">
          <h3>
            <span @click="search" class="iconfont icon-sousuo"></span>
          </h3>
        </van-col>
        <van-col span="3">
          <h3>
            <span @click="$router.push('/menu')" class="iconfont icon-toggle"></span>
          </h3>
        </van-col>
      </van-row>
    </van-sticky>
    <!-- 头部导航end -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    search() {
      this.$router.push("/search");
    }
  }
};
</script>

<style lang="scss" scoped>
// .box {
//   width: 100%;
//   height: 100%;
//   position: fixed;
//   bottom: 0;
//   background-color: #212227;
// }
//  头部导航
.headnav {
  // background-color: #212227;
  height: auto;
  .van-col {
    text-align: left;
    h3 {
      padding: 10px;
      margin: 0;
      color: #a2a1a6;
      font-size: 0.390625rem;
      height: auto;
      line-height: 25px;
      &.con {
        font-size: 0.4375rem;
        position: relative;
        // &::after {
        //   content: "";
        //   display: block;
        //   width: 10px;
        //   height: 3px;
        //   background-color: blue;
        //   position: absolute;
        //   border-radius: 3px;
        //   left: 23%;
        //   bottom: -10px;
        // }
      }
    }
    .iconfont {
      display: block;
      text-align: center;
      height: auto;
      line-height: 25px;
      color: #a2a1a6;
      font-size: 0.3125rem;
    }
  }
}
//  头部导航end
</style>