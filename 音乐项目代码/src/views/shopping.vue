<template>
  <div>
    <!-- 返回 -->
    <van-sticky :offset-top="-5">
      <van-row class="topSearch">
        <van-col class="mi" span="3">
          <a href="#" @click="$router.go(-1)">
            <van-icon name="cross" />
          </a>
        </van-col>
        <van-col span="6">
          <a href="#">酷狗商城</a>
        </van-col>
      </van-row>
    </van-sticky>
    <!-- 返回end -->

    <!-- 商品列表 -->

    <van-row class="list">
      <van-col class="hh" span="6">
        <div class="left" ref="left">
          <ul>
            <li
              v-for="(item,index) in left"
              :key="index"
              :class="{con:index==currentIndex}"
              @click="selectItem(index,$event)"
            >
              <img :src="item.src" alt />
              {{item.name}}
            </li>
            <!-- <li>
              <img src="../assets/images/sc1.png" alt />
              蓝牙耳机
            </li>
            <li>
              <img src="../assets/images/sc2.png" alt />
              颈挂耳机
            </li>
            <li>
              <img src="../assets/images/sc3.png" alt />
              有线耳机
            </li>
            <li>
              <img src="../assets/images/sc4.png" alt />
              智能音箱
            </li>
            <li>
              <img src="../assets/images/sc5.png" alt />
              K歌机
            </li>
            <li>
              <img src="../assets/images/sc6.png" alt />
              全职高手
            </li>-->
          </ul>
        </div>
      </van-col>
      <van-col class="jj" span="18">
        <div class="right" ref="right">
          <ul>
            <li v-for="(item,index) in right" :key="index" class="right-item right-item-hook">
              <img :src="item.src" alt />
              {{item.price}}
              <br />
              <router-link class="btn1" to tag="button">{{item.b1}}</router-link>
              <router-link class="btn2" to tag="button">{{item.b2}}</router-link>
            </li>
            <!-- <li>
              <img src="../assets/images/sc9.png" alt />
              ￥179
              <br />
              <router-link class="btn1" to tag="button">加入购物车</router-link>
              <router-link class="btn2" to tag="button">立即购买</router-link>
            </li>
            <li>
              <img src="../assets/images/sc13.png" alt />
              ￥179
              <br />
              <router-link class="btn1" to tag="button">加入购物车</router-link>
              <router-link class="btn2" to tag="button">立即购买</router-link>
            </li>
            <li>
              <img src="../assets/images/sc11.png" alt />
              ￥179
              <br />
              <router-link class="btn1" to tag="button">加入购物车</router-link>
              <router-link class="btn2" to tag="button">立即购买</router-link>
            </li>
            <li>
              <img src="../assets/images/sc12.png" alt />
              ￥179
              <br />
              <router-link class="btn1" to tag="button">加入购物车</router-link>
              <router-link class="btn2" to tag="button">立即购买</router-link>
            </li>
            <li>
              <img src="../assets/images/sc10.png" alt />
              ￥179
              <br />
              <router-link class="btn1" to tag="button">加入购物车</router-link>
              <router-link class="btn2" to tag="button">立即购买</router-link>
            </li>-->
          </ul>
        </div>
      </van-col>
    </van-row>

    <!-- 商品列表end -->
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
export default {
  data: function() {
    return {
      left: [
        {
          src: require("../assets/images/sc1.png"),
          name: "蓝牙耳机"
        },
        {
          src: require("../assets/images/sc2.png"),
          name: "颈挂耳机"
        },
        {
          src: require("../assets/images/sc3.png"),
          name: "有线耳机"
        },
        {
          src: require("../assets/images/sc4.png"),
          name: "智能音箱"
        },
        {
          src: require("../assets/images/sc5.png"),
          name: "K歌机"
        },
        {
          src: require("../assets/images/sc6.png"),
          name: "全职高手"
        }
      ],
      right: [
        {
          src: require("../assets/images/sc7.png"),
          price: "￥179",
          b1: "加入购物车",
          b2: "立即购买"
        },
        {
          src: require("../assets/images/sc9.png"),
          price: "￥459",
          b1: "加入购物车",
          b2: "立即购买"
        },
        {
          src: require("../assets/images/sc13.png"),
          price: "￥149",
          b1: "加入购物车",
          b2: "立即购买"
        },
        {
          src: require("../assets/images/sc11.png"),
          price: "￥89",
          b1: "加入购物车",
          b2: "立即购买"
        },
        {
          src: require("../assets/images/sc12.png"),
          price: "￥13800",
          b1: "加入购物车",
          b2: "立即购买"
        },
        {
          src: require("../assets/images/sc10.png"),
          price: "￥389",
          b1: "加入购物车",
          b2: "立即购买"
        }
      ],
      scrollY: 0,
      listHeight: [] //存储右边每一项li高度
    };
  },
  created() {
    this.$store.state.foo = false;
    //console.log(this.listHeight);
  },
  methods: {
    _initScroll() {
      // 联动实例化插件对象
      this.lefts = new BScroll(this.$refs.left, {
        click: true, //拥有触发事件，
        probeType: 3 //探针的效果，时时获取滚动高度
      });
      this.rights = new BScroll(this.$refs.right, {
        click: true, //拥有触发事件，
        probeType: 3 //探针的效果，时时获取滚动高度
      });

      // right这个对象监听滚动事件，
      this.rights.on("scroll", pos => {
        this.scrollY = Math.abs(Math.round(pos.y));
        console.log((this.scrollY = Math.abs(Math.round(pos.y))));
      });
    },
    _getHeight() {
      let rightItems = this.$refs.right.getElementsByClassName(
        "right-item-hook"
      );
      console.log(rightItems);
      let height = 0; //默认高度
      this.listHeight.push(height); //添加高度数组中
      // 循环对象
      for (let i = 0; i < rightItems.length; i++) {
        let item = rightItems[i];
        height += item.clientHeight; // 对象高度
        this.listHeight.push(height);
        console.log(item.clientHeight);
      }
    },
    // 左侧点击效果
    // index 下标
    // event 点击对象事件
    selectItem(index, event) {
      console.log(index);
      // 在better-scroll指派事件的event和普通浏览器的点击事件event有个属性区别_constructed
      // 浏览器原生点击事件没有_constructed所以当时浏览器监听到该属性时候return掉
      if (!event._constructed) {
        return;
      } else {
        // 联动效果
        let rightItems = this.$refs.right.getElementsByClassName(
          "right-item-hook"
        );
        let el = rightItems[index];
        // scrollToElement()//滚动到指定的目标元素
        this.rights.scrollToElement(el);

        // 左边联动
        let leftItems = this.$refs.left.getElementsByTagName("li");
        let elLi = leftItems[index];
        this.lefts.scrollToElement(elLi);
      }
    }
  },
  // 生命周期函数
  mounted() {
    //页面渲染到浏览器时候
    // 生命周期函数执行代码速度比页面渲染浏览器执行速度快。html代码没有渲染成功？
    // 保证页面代码浏览器正常执行后，在执行当前生命周期函数代码段
    // $nextTick() 让所有DOM执行完后，回调执行方法

    this.$nextTick(() => {
      this._initScroll(); //调用初始化联动效果
      this._getHeight(); //获取右边每一项高度
      console.log(this.listHeight);
      // 跳转效果
      if ("id" in this.$route.query) {
        // 联动效果
        let rightItems = this.$refs.right.getElementsByClassName(
          "right-item-hook"
        );
        let el = rightItems[this.$route.query.id];
        this.rights.scrollToElement(el);
      }
    });
  },
  // 计算属性
  computed: {
    currentIndex() {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height = this.listHeight[i];
        let height2 = this.listHeight[i + 1];
        // height2不存在时候，或落在height和height2之间时候，直接放回索引值
        if (!height2 || (this.scrollY >= height && this.scrollY < height2)) {
          // 左边联动
          let leftItems = this.$refs.left.getElementsByTagName("li");
          let elLi = leftItems[i];
          this.lefts.scrollToElement(elLi);
          return i;
        }
      }
      // 如果this.listHeight没有值，返回0
      return 0;
    }
  }
};
</script>

<style lang="scss" scoped>
//返回
.topSearch {
  width: 100%;
  //padding-top: 0.15625rem;
  background-color: #0091fe;
  height: 1.25rem;
  .van-icon {
    text-align: center;
    display: block;
    font-size: 0.46875rem;
    height: 1.25rem;
    line-height: 1.25rem;
    color: white;
  }
  a {
    color: white;
    font-size: 0.46875rem;
    display: block;
    text-align: center;
    height: 1.25rem;
    line-height: 1.25rem;
  }
}

//返回end

//商品列表
.list {
  padding-top: 0.3125rem;
  background-color: #f2f2f2;
  .hh {
    .left {
      width: 100%;
      // background-color: #f2f2f2;
      ul {
        width: 85%;
        padding: 0;
        margin: 0;
        list-style: none;
        margin: 0 auto;
        li {
          text-align: center;
          width: 100%;
          font-size: 0.390625rem;
          border: 1px solid #ccc;
          height: 3.125rem;
          border-radius: 0.3125rem;
          line-height: 1.5625rem;
          margin: 0.15625rem 0rem;
          color: #adadad;
          &.con {
            border: 1px solid black;
          }
          img {
            width: 1.5625rem;
            height: 1.5625rem;
            display: block;
            margin: 0 auto;
            margin-top: 0.15625rem;
          }
        }
      }
    }
  }
  .jj {
    .right {
      width: 100%;
      ul {
        padding: 0;
        margin: 0;
        width: 90%;
        margin: 0 auto;
        //border-radius: 1.25rem;
        li {
          background-color: white;
          width: 100%;
          text-align: center;
          color: #ff4349;
          font-size: 0.46875rem;
          border-radius: 0.3125rem;
          border: 1px solid #ccc;
          margin: 0.15625rem 0rem;
          img {
            width: 100%;
            height: auto;
            border-radius: 1.25rem;
          }
          button {
            border: none;
            outline: none;
            margin-top: 0.3125rem;
            width: 2.8125rem;
            height: 1.25rem;
            font-size: 0.390625rem;
            border-radius: 1.25rem;
            color: white;
            margin-bottom: 0.78125rem;
            &.btn1 {
              margin-right: 0.15625rem;
              background-image: linear-gradient(90deg, #ff8b04, #ffb42b);
            }
            &.btn2 {
              margin-left: 0.15625rem;
              background-image: linear-gradient(90deg, #ee190b, #f85326);
            }
          }
        }
      }
    }
  }
}

//商品列表end
</style>

