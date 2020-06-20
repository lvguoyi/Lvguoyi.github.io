<template>
  <div>
    <!-- 头部导航 -->
    <van-sticky>
      <van-row class="headnav" v-show="this.$store.state.foo">
        <van-col span="4" offset="1">
          <router-link to class="con" tag="h3">音乐</router-link>
        </van-col>
        <van-col span="4">
          <router-link to class="con" tag="h3">动态</router-link>
        </van-col>
        <van-col span="4">
          <router-link to class="con" tag="h3">关注</router-link>
        </van-col>
        <van-col span="4">
          <router-link to class="con" tag="h3">消息</router-link>
        </van-col>
        <van-col span="3" offset="1">
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
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  methods: {
    search() {
      this.$router.push("/search");
      console.log(111);
    }
  }
};
</script>

<style lang="scss" scoped>
.v-enter,
.v-leave-to {
  opacity: 0.1;
  //transform: translateX(-30px);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.2s ease;
}
//  头部导航
.headnav {
  height: auto;
  background-color: #212227;
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