<template>
  <div>
    <div class="swiper-container guide">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../../../assets/images/yd1.jpg" alt />
        </div>
        <div class="swiper-slide">
          <img src="../../../assets/images/yd2.jpg" alt />
        </div>
        <div class="swiper-slide">
         
            <button class="btn" @click="$router.push('/find/recommend')">立即体验</button>
         
          <img src="../../../assets/images/yd3.jpg" alt />
        </div>
      </div>
      <!-- Add Pagination -->

      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  created() {
    this.$store.state.foo = false;
  },
  destroyed() {
    this.$store.state.foo = true;
  },
  mounted() {
    new Swiper(".guide", {
      slidesPerView: 1,
      //spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  }
};
</script>

<style lang="scss" scoped>

.guide {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
}
.swiper-slide {
  width: 100%;
  height: 100%;
  .btn {
    padding: 10px 0px;
    bottom: 200px;
    position: absolute;
    z-index: 999;
    border-radius: 10px;
    border: 1px solid #cccccc;
    outline: none;
    font-size: 0.3125rem;
    background-color: transparent;
    color: white;
    left: 50%;
    margin-left: -53px;
    width: 108px;
  }
}
.swiper-pagination {
  position: absolute;
  bottom: 100px;
}
img {
  width: 100%;
  height: 100%;
}
</style>