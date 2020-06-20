<template>
  <div>
    <!-- Swiper -->
    <div class="swiper-container swiperHomeNav2">
      <div class="swiper-wrapper" >
        <div class="swiper-slide" v-for="(item,index) in imglist" :key="index"><img :src="item.img" alt=""></div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  //注意： swiper 必须要在页面渲染到浏览器后mounted钩子函数中才能执行
  mounted() {
    // 注意：.swiper-container swiper中实例化对象第一值，是swiper显示最外面对象容器。这个类在重复使用swiper容易冲突，重新定义类名解决
    new Swiper(".swiperHomeNav2", {
      slidesPerView: 1,
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  },
  props:["imglist"]

};
</script>

<style lang="scss" scoped>
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  transition: 300ms;
  transform: scale(0.8);
}
.swiper-slide-active,
.swiper-slide-duplicate-active {
  transform: scale(1);
}
</style>