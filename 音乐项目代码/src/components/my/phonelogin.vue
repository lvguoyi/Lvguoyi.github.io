<template>
  <div>
    <!-- 账号密码输入 -->
    <van-row class="inp">
      <van-col span="23" offset="1">
        <router-link to tag="a" class="con">
          用户名
          <input type="text" v-model="username" placeholder="手机/邮箱/用户名/酷狗ID" />
        </router-link>
      </van-col>
      <van-col span="23" offset="1">
        <router-link to tag="a">
          密码
          <input type="text" v-model="password" placeholder="请填写密码" />
        </router-link>
      </van-col>
    </van-row>
    <!-- 账号密码输入end-->

    <!-- 登录按钮 -->

    <van-row class="btn">
      <van-col span="24">
        <button @click="onsubmit">登录</button>
      </van-col>
    </van-row>

    <!-- 登录按钮end -->

    <!-- 忘记密码 -->
    <van-row class="pass">
      <van-col span="24">
        <router-link to tag="a">忘记密码?</router-link>
      </van-col>
    </van-row>
    <!-- 忘记密码end -->

    <!-- 注册 -->
    <van-row class="pass">
      <van-col span="24">
        <router-link to="/my/register" tag="a">没有账号，去注册</router-link>
      </van-col>
    </van-row>
    <!-- 注册end -->
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    onsubmit() {
      let _this = this;
      // this.$axios
      //   .get("login", {
      //     params
      //   })
      //   .then(res => {
      //     // 请求数据成功后提示
      //     if (res.data == "200") {
      //       Toast({
      //         message: "登陆成功",
      //         // 提示后回调
      //         onOpened() {
      //           // 设置store中添加用户名
      //           _this.$store.state.my.username = _this.username;
      //           _this.$store.state.my.svipshow = true;

      //           // 跳转登陆路由
      //           _this.$router.push("/my/music");
      //         }
      //       });
      //     } else {
      //       Toast("登陆失败");
      //     }
      //   });

      this.axios
        .get("http://127.0.0.1:3000/login", {
          params: {
            username: this.username + "&",
            password: this.password
          }
        })
        .then(response => {
          console.log(response);
          Toast({
            message: "登陆成功",
            // 提示后回调
            onOpened() {
              _this.$store.state.my.username = _this.username;
              _this.$store.state.my.svipshow = true;
              // 跳转登陆路由
              _this.$router.go(-1);
            }
          });
        })
        .catch(error => {
          console.log(error);
          Toast("登陆失败");
        });
    }
  }
};
</script>

<style lang="scss" scoped>
//账号密码输入

.inp {
  width: 100%;
  background-color: #2a2b2f;
  margin-top: 0.15625rem;
  //padding: .3125rem 0rem;
  a {
    color: #a2a1a6;
    font-size: 0.390625rem;
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

//忘记密码

.pass {
  margin-top: 0.3125rem;
  a {
    display: block;
    text-align: center;
    width: 100%;
    font-size: 0.3125rem;
    color: #005fbd;
  }
}

//忘记密码end
</style>