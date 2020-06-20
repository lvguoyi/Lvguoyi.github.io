<template>
  <div class="pop">
    <div class="box">
      <div class="small">{{content}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["content"]
};
</script>

<style lang="less" scoped>
.box {
  position: fixed;
  width: 188px;
  height: 100px;
  top: 50%;
  margin-top: -50px;
  left: 50%;
  margin-left: -94px;
  z-index: 9999;
  .small {
    //padding: 40px 60px;
    line-height: 100px;
    text-align: center;
    font-size: 16px;
    background: rgba(0, 0, 0, 0.6);
    color: white;
    border-radius: 20px;
    letter-spacing: 1px;
  }
}
</style>