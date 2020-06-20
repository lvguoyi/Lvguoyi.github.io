<template>
  <div class="gg">
    <img src="../../../assets/images/gg.jpg" alt />
    <span>{{num}}</span>
    <button @click="$router.push('/find/recommend')">跳过</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      num: 3,
      timer: null
    };
  },
  created() {
    this.$store.state.foo = false;

    this.timer = setInterval(() => {
      this.num--;
      if (this.num == 0) {
        this.$router.push("/find/recommend");
      }
    }, 1000);
  },
  destroyed() {
    this.$store.state.foo = true;
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
};
</script>

<style lang="scss" scoped>
.gg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
  }
  span {
    width: .15625rem;
    height: .15625rem;
    line-height: .15625rem;
    position: absolute;
    display: block;
    padding: .15625rem;
    z-index: 999;
    top: .203125rem;
    text-align: center;
    right: .3125rem;
    color: #005fbd;
    font-size: 0.421875rem;
    border-radius: 50%;
    //border: 1px solid #a2a1a6;
    //font-weight: bolder;
  }
  button {
    position: absolute;
    z-index: 999;
    right: .3125rem;
    bottom: .9375rem;
    padding: .078125rem .234375rem;
    font-size: 0.421875rem;
    font-weight: bolder;
    color: #005fbd;
    background-color: transparent;
    outline: none;
    border: 1px solid #a2a1a6;
  }
}
</style>