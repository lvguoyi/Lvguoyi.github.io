<template>
  <div>
    <!-- 账号密码输入 -->
    <van-row class="inp">
      <van-col span="24" >
        <router-link to tag="a" class="con">
          <img src="../../assets/images/tx.png" alt />
          <span>+86 187****5056</span>
        </router-link>
      </van-col>
    </van-row>
    <!-- 账号密码输入end-->

    <!-- 登录按钮 -->

    <van-row class="btn">
      <van-col span="24">
        <router-link to tag="button">本机号码一键登录</router-link>
      </van-col>
    </van-row>

    <!-- 登录按钮end -->

    <!-- 忘记密码 -->
    <van-row class="pass">
      <van-col span="24">
        <router-link to tag="a">其他号码登录</router-link>
      </van-col>
    </van-row>
    <!-- 忘记密码end -->
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
//账号密码输入

.inp {
  width: 100%;
  text-align: center;
  margin-top: 0.15625rem;
  //padding: .3125rem 0rem;
  a {
    color: #a2a1a6;
    font-size: 0.390625rem;
    
    display: block;
    img {
      display: block;
      width: 1.5625rem;
      height:1.5625rem;
      margin: 0 auto;
    }
    span {
      display: block;
      width: 100%;
      margin: 20px auto;

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