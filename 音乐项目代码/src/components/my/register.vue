<template>
  <div class="box">
    <!-- 头部 -->
    <van-sticky :offset-top="-5">
      <van-row class="topSearch">
        <van-col class="mi" span="3">
          <a href="#" @click="$router.push('/my/login/phonelogin')">
            <van-icon name="cross" />
          </a>
        </van-col>
        <van-col span="3">
          <a href="#">注册</a>
        </van-col>
      </van-row>
    </van-sticky>
    <!-- 头部end -->

    <!-- 账号密码输入 -->
    <van-row class="inp">
      <van-col span="23" offset="1">
        <router-link to tag="a" class="con">
          用户名
          <input type="text" v-model="username" placeholder="用户名/酷狗ID" />
        </router-link>
      </van-col>
      <van-col span="23" offset="1">
        <router-link to tag="a">
          密码
          <input type="text" v-model="password" placeholder="6位数字加字母" />
        </router-link>
      </van-col>
      <van-col span="23" offset="1">
        <router-link to tag="a">
          确认密码
          <input type="text" v-model="password2" placeholder="6位数字加字母" />
        </router-link>
      </van-col>
    </van-row>
    <!-- 账号密码输入end-->

    <!-- 登录按钮 -->
    <!-- ="/my/login/phonelogin" -->
    <van-row class="btn">
      <van-col span="24">
        <button @click="onsubmit">注册</button>
      </van-col>
    </van-row>

    <!-- 登录按钮end -->
    <!-- 提示框 -->
    <!-- <van-row class="txt">
      <van-col span="24">
        <span v-show="show==true">你还没有注册!</span>
      </van-col>
    </van-row>-->
    <!-- 提示框end -->
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      username: "",
      password: "",
      password2: ""
    };
  },

  methods: {
    onsubmit() {
      let _this = this;
      // this.$axios.get("register", { params }).then(res => {
      //   if (res.data == "200") {
      //     Toast({
      //       message: "注册成功",
      //       // 提示后回调
      //       onOpened() {
      //         // 跳转登陆路由
      //         _this.$router.push("/my/login/phonelogin");
      //       }
      //     });
      //   } else {
      //     Toast("注册失败");
      //   }
      // });
      this.axios
        .get("http://127.0.0.1:3000/register", {
          params: {
            username: this.username + "&",
            password: this.password + "&",
            password2: this.password2
          }
        })
        .then(response => {
          console.log(response);
          Toast({
            message: "注册成功",
            // 提示后回调
            onOpened() {
              // 跳转登陆路由
              _this.$router.push("/my/login/phonelogin");
            }
          });
        })
        .catch(error => {
          console.log(error);
          Toast("注册失败");
        });
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

//账号密码输入

.inp {
  width: 100%;
  background-color: #2a2b2f;
  margin-top: 0.15625rem;
  //padding: .3125rem 0rem;
  a {
    color: #a2a1a6;
    font-size: 0.3125rem;
    //font-weight: bolder;
    line-height: 1.5625rem;
    height: 1.5625rem;
    display: block;
    &.con {
      border-bottom: 1px solid #4d4e52;
    }
    input {
      display: inline-block;
      width: 80%;
      height: 0.78125rem;
      outline: none;
      border: none;
      background-color: transparent;
      padding: 0rem 0.15625rem;
      line-height: 0.78125rem;
      margin: 0.15625rem 0rem;
      font-weight: normal;
      font-size: 0.34375rem;
    }
  }
}

//账号密码输入end

//登录按钮

.btn {
  margin-top: 0.46875rem;
  button {
    display: block;
    width: 85%;
    margin: 0 auto;
    background-color: #005fbd;
    outline: none;
    border: none;
    height: 1.25rem;
    border-radius: 0.78125rem;
    //padding: .15625rem 0rem;
    line-height: 1.25rem;
    font-size: 0.390625rem;
    color: white;
  }
}

//登录按钮end
</style>