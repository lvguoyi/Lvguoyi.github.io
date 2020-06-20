<template>
  <div id="app">
    <van-row v-show="this.$store.state.titleShow" class="title">
      <van-col span="24">
        <router-link to="/homePage" tag="a">首页</router-link>
        <router-link to="/my" tag="a">我的书架</router-link>
        <span @click="add" class="iconfont icon-sousuo"></span>
      </van-col>
    </van-row>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookList: []
    };
  },
  created() {},
  methods: {
    add() {
      this.$router.push({
        name: "search"
      });
      this.$store.state.titleShow = false;
    }
  }
};
</script>

<style lang="less">
.fl {
  float: left;
}
.fr {
  float: right;
}
.clear {
  content: "";
  display: block;
  clear: both;
}

.title {
  width: 100%;
  height: 3.125rem;
  background-color: orange;
  text-align: center;
  a {
    display: inline-block;
    width: 20%;
    text-align: center;
    height: 2.8125rem;
    line-height: 2.8125rem;
    color: white;
    position: relative;
    font-size: 0.9375rem;
    transition: font-size 0.3s;
    &.router-link-active {
      font-size: 1.09375rem;
      color: rgb(233, 233, 233);
      &::after {
        content: "";
        position: absolute;
        width: 1.09375rem;
        border-radius: 0.15625rem;
        height: 0.15625rem;
        background-color: white;
        bottom: 0.15625rem;
        left: 50%;
        margin-left: -0.390625rem;
      }
    }
  }
  span {
    width: 20%;
    text-align: center;
    height: 2.8125rem;
    line-height: 2.8125rem;
    color: white;
    display: inline-block;
    font-size: 22px;
  }
}
</style>
