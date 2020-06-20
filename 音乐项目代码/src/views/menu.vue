<template>
  <div class="box">
    <!-- 返回 -->
    <van-sticky :offset-top="-5">
      <van-row class="topSearch">
        <van-col class="mi" span="3">
          <a href="#" @click="$router.go(-1)">
            <van-icon name="cross" />
          </a>
        </van-col>
        <van-col span="3">
          <a href="#">登录</a>
        </van-col>
      </van-row>
    </van-sticky>
    <!-- 返回end -->

    <!-- 头部 -->

    <van-row class="top">
      <van-col span="6">
        <a href="#">
          <span class="iconfont icon-icon-test"></span>
          扫一扫
        </a>
      </van-col>
      <van-col span="6">
        <a href="#">
          <span class="iconfont icon-wodeerweima"></span>
          我的二维码
        </a>
      </van-col>
      <van-col span="6">
        <a href="#">
          <span class="iconfont icon-wodehaoyou"></span>
          我的好友
        </a>
      </van-col>
      <van-col span="6">
        <a href="#">
          <span class="iconfont icon-zhanghaodakaijiashimoshi"></span>
          驾驶模式
        </a>
      </van-col>
    </van-row>
    <!-- 头部end -->

    <!-- 听歌识曲，音乐工具 -->

    <van-row class="listensong">
      <van-col span="11" offset="1">
        <a href="#">
          <span class="iconfont icon-tinggeshiqu"></span>
          听歌识曲
        </a>
      </van-col>
      <van-col span="11">
        <a href="#">
          <span class="iconfont icon-gongju"></span>
          音乐工具
        </a>
      </van-col>
    </van-row>

    <!-- 听歌识曲，音乐工具end -->

    <!-- 菜单列表 -->

    <van-row class="menulist">
      <van-col span="22" offset="2">
        <a href="#">
          <span class="iconfont icon-gerentianjia"></span>
          创作者平台
        </a>
      </van-col>
      <van-col span="22" offset="2">
        <a href="#">
          <span class="iconfont icon-xinxizhongxin"></span>
          创作者平台
        </a>
      </van-col>
      <van-col span="22" offset="2">
        <a href="#">
          <span class="iconfont icon-gongju"></span>
          消息中心
        </a>
      </van-col>
      <van-col span="22" offset="2">
        <a href="#">
          <span class="iconfont icon-huiyuan"></span>
          会员中心
        </a>
      </van-col>
      <van-col span="22" offset="2">
        <a href="#">
          <span class="iconfont icon-liuliangbaoyue"></span>
          流量包月
        </a>
      </van-col>
      <van-col span="22" offset="2">
        <a href="#">
          <span class="iconfont icon-sirenyunpan"></span>
          私人云盘
        </a>
      </van-col>

      <van-col span="22" offset="2">
        <a href="#">
          <span class="iconfont icon-dingshiguanbi"></span>
          定时关闭
        </a>
      </van-col>

      <van-col span="22" offset="2">
        <a href="#">
          <span class="iconfont icon-huisheyinxiao"></span>
          蝰蛇音效
        </a>
      </van-col>
      <van-col span="22" offset="2">
        <a href="#">
          <span class="iconfont icon-taopiaopiao"></span>
          胖旺淘票
        </a>
      </van-col>
      <van-col span="22" offset="2">
        <a href="#">
          <span class="iconfont icon-paobu"></span>
          跑步听歌
        </a>
      </van-col>
      <van-col span="22" offset="2">
        <a href="#">
          <span class="iconfont icon-lingsheng"></span>
          铃声彩铃
        </a>
      </van-col>
      <van-col span="22" offset="2">
        <a @click.prevent="$router.push('/shopping')" href="#">
          <span class="iconfont icon-shop"></span>
          酷狗商城
        </a>
      </van-col>
      <van-col span="22" offset="2">
        <a href="#">
          <span class="iconfont icon-cebianlan_qingshaonianmoshi_"></span>
          青少年模式
        </a>
      </van-col>
    </van-row>

    <!-- 菜单列表end -->

    <!-- 底部 -->

    <van-row class="bottom">
      <van-col span="8">
        <a href="#">
          <span class="iconfont icon-shezhi"></span>
          设置
        </a>
      </van-col>
      <van-col span="8">
        <a @click.prevent="hh" href="#">
          <span  class="iconfont icon-Group"></span>
          退出登录
        </a>
      </van-col>
      <van-col span="8">
        <a href="#">
          <span class="iconfont icon-tuichudenglu"></span>
          关闭
        </a>
      </van-col>
    </van-row>
    <!-- 底部end -->
  </div>
</template>

<script>
export default {
  methods: {
    hh(){
      this.$store.state.my.svipshow = false
      this.$store.state.my.username = "未登录"
      this.$router.push("/my/music")
    }
  },
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
  background-color: #1a1b1f;
}
//返回
.topSearch {
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

//返回end

//头部

.top {
  margin-top: 0.234375rem;
  a {
    text-align: center;
    display: block;
    width: 100%;
    color: #a2a1a6;
    font-size: 0.34375rem;
    span {
      width: 0.78125rem;
      height: 0.78125rem;
      border-radius: 50%;
      display: block;
      color: white;
      padding: 0.078125rem;
      font-size: 0.46875rem;
      background-color: #232428;
      line-height: 0.78125rem;
      margin: 0 auto;
      margin-bottom: 0.15625rem;
    }
  }
}

//头部end

//听歌识曲，音乐工具

.listensong {
  margin-top: 0.46875rem;
  a {
    width: 85%;
    display: block;
    margin: 0 auto;
    background-color: #232428;
    color: white;
    height: 1.875rem;
    border-radius: 0.3125rem;
    line-height: 1.875rem;
    text-align: center;
    font-size: 0.34375rem;
    span {
      font-size: 0.46875rem;
      margin-right: 0.3125rem;
    }
  }
}

//听歌识曲，音乐工具end

//菜单列表

.menulist {
  a {
    display: block;
    width: 100%;
    color: white;
    font-size: 0.34375rem;
    margin: 0.1875rem 0rem;
    span {
      font-size: 0.46875rem;
      margin-right: 0.3125rem;
    }
  }
}

//菜单列表end

//底部

.bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height:1.25rem;
  background-color: #232428;
  line-height:1.25rem;
  a {
    display: block;
    width: 100%;
    text-align: center;
    color: white;
    font-size: 0.34375rem;
    height: 1.25rem;
    margin: 0 auto;
    span {
      font-size: 0.46875rem;
      margin-right: .078125rem;
    }
  }
}

//底部end
</style>