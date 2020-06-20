<template>
  <div class="box" style>
    <!-- 头部 -->
    <van-sticky :offset-top="-5">
      <van-row class="topSearch">
        <van-col class="mi" span="3">
          <a href="#" @click="$router.push('/my/music')">
            <van-icon name="cross" />
          </a>
        </van-col>
        <van-col span="3">
          <a href="#">登录</a>
        </van-col>
      </van-row>
    </van-sticky>
    <!-- 头部end -->

    <!-- 登录 -->

    <van-row class="loginnav">
      <van-col span="12">
        <router-link to="/my/login/phonelogin" tag="a">账号登录</router-link>
      </van-col>
      <van-col span="12">
        <router-link to="/my/login/numberlogin" tag="a">手机号登录</router-link>
      </van-col>
    </van-row>

    <!-- 登录end -->

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  
  created() {
    this.$store.state.foo = false;
  },
  beforeDestroy() {
    this.$store.state.foo = true;
  }
};
</script>

<style lang="scss" scoped>
.box {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #212227;
}

//头部
.topSearch {
  background-color: #212227;
  width: 100%;

  margin-top: 0.15625rem;
  .van-icon {
    text-align: center;
    display: block;
    font-size: 0.46875rem;
    height: 0.6875rem;
    line-height: 0.6875rem;
    color: #a2a1a6;
  }
  a {
    color: #a2a1a6;
    font-size: 0.46875rem;
    display: block;
    text-align: center;
    height: 0.6875rem;
    line-height: 0.6875rem;
  }
}

//头部end

//登录

.loginnav {
  font-size: 0.46875rem;
  font-weight: bolder;
  color: #a2a1a6;
  text-align: center;
  padding: 0.234375rem;
  margin-top: 0.3125rem;
  a {
    color: #a2a1a6;
    &.link-router-active {
      color: #005fbd;
    }
  }
}

//登录end
</style>