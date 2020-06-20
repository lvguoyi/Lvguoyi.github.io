<template>
  <div>
    <Popbox v-if="popShow" :content="content">
      <slot></slot>
    </Popbox>
    <!-- 头部 -->
    <van-sticky>
      <van-row class="head">
        <van-col span="22" offset="1">
          <a class="clear" href="#">
            <span class="iconfont icon-back-copy-copy fl" @click="go"></span>
            <span class="fl">详情</span>
          </a>
        </van-col>
      </van-row>
    </van-sticky>
    <!-- 头部end -->

    <!-- loading -->

    <div v-if="loadingShow" class="loading">
      <img src="../assets/images/loading.gif" alt />
    </div>

    <!-- loading end -->

    <!-- 详情头部 -->
    <van-row v-if="bookDetails.length != 0" class="book">
      <van-col span="22" offset="1">
        <div class="top clear">
          <div class="left fl">
            <img :src="imgKey(bookDetails.cover)" alt />
          </div>
          <div class="right fl">
            <h5>{{bookDetails.title}}</h5>
            <span>
              {{bookDetails.author}} |
              <i>{{bookDetails.copyright}}</i>
            </span>
            <span>
              5书币/千字 |
              <i>{{bookDetails.chaptersCount}}万字</i>
            </span>
            <span>
              <i v-for="(item,index) in bookDetails.tags" :key="index">{{item}}</i>
            </span>
          </div>
        </div>
      </van-col>
    </van-row>

    <!-- 详情头部end -->

    <!-- 简介 -->

    <van-row v-if="bookDetails.length != 0" class="about">
      <van-col span="22" offset="1">
        <h3>简介</h3>
        <div class="content" :class="{show:addClass}">{{bookDetails.longIntro}}</div>
        <span v-if="addClass" @click="iconDown" class="iconfont icon-Down fr"></span>
        <span v-if="!addClass" @click="iconUp" class="iconfont icon-shangla1 fr"></span>
      </van-col>
    </van-row>

    <!-- 简介end -->

    <!-- 相关推荐 -->

    <van-row v-if="bookDetails.length != 0" class="more">
      <van-col span="22" offset="1">
        <h3>相关推荐</h3>
        <div class="swiper-container">
          <div v-if="recommendation.length != 0" class="swiper-wrapper">
            <div v-for="(item,index) in recommendation" :key="index" class="swiper-slide">
              <div @click="navRecommendation(index)" class="about">
                <img :src="imgKey(item.cover)" alt />
                <span>{{item.title}}</span>
              </div>
            </div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
        </div>
      </van-col>
    </van-row>

    <!-- 相关推荐end -->

    <!-- 热门短评 -->

    <van-row v-if="bookTake.length != 0" class="take">
      <van-col span="22" offset="1">
        <h3>热门短评</h3>
        <div class="box">
          <ul>
            <li v-for="(item,index) in bookTake" :key="index">
              <div class="top">
                <img class="fl" :src="imgKey(bookDetails.cover)" alt />
                <span>{{item.author.nickname}}</span>
              </div>
              <div class="content">{{item.content ? item.content : item.title}}</div>
            </li>
          </ul>
        </div>
      </van-col>
    </van-row>

    <!-- 热门短评end -->
    <!-- 底部按钮end -->

    <!-- 底部按钮 -->

    <div v-if="bookDetails.length != 0" class="btn">
      <button :class="{success:addFoo}" @click="add(bookDetails)">{{addText}}</button>
      <button @click="navRead">开始阅读</button>
    </div>
  </div>
</template>

<script>
//引入弹出框组件
import Popbox from "../components/Popbox.vue";
import Swiper from "swiper";
export default {
  data() {
    return {
      bookId: "",
      bookDetails: [],
      addClass: true,
      bookTake: [],
      loadingShow: true,
      popShow: false,
      content: "",
      keyWord: this.$route.query.title,
      recommendation: [],
      keyword: this.$route.query.keyword,
      name: this.$route.query.name,
      router: this.$route.query.router,
      addFoo: false,
      addText: "+ 书架"
    };
  },
  beforeCreate() {},
  mounted() {},
  updated() {
    new Swiper(".swiper-container", {
      speed: 2500,
      slidesPerView: 3,
      spaceBetween: 10
    });
  },
  created() {
    console.log(this.$route.query);
    this.bookId = this.$route.query.id;
    this.$store.state.titleShow = false;
    this.getBookDetails();
    this.getRecommendation();
    if (this.$store.state.myList.length !== 0) {
      console.log(this.$store.state.myList[0]._id, "myList");
      var el = this.$store.state.myList;
      for (let i = 0; i < el.length; i++) {
        if (el[i]._id === this.$route.query.id) {
          this.addFoo = true;
          this.addText = "已添加";
        }
      }
    }
  },
  beforeDestroy() {},
  // watch: {
  //   bookId: {
  //     immediate: true,
  //     handler(newValue, oldValue) {
  //       this.addFoo = false;
  //       this.addText = "+ 书架";
  //       console.log(newValue, "我是新值");
  //       console.log(oldValue, "我是旧值");
  //     }
  //   }
  // },
  methods: {
    //获取数据
    getBookDetails() {
      this.loadingShow = true;
      this.axios
        .get(
          "https://api.kele8.cn/agent/http://novel.kele8.cn/book-info/" +
            this.bookId,
          {}
        )
        .then(res => {
          console.log(res.data);
          this.bookDetails = res.data;
          this.getTake();
        })
        .catch(error => {
          console.log(error);
        });
    },

    //获取评论
    getTake() {
      this.axios
        .get(
          "https://api.kele8.cn/agent/http://novel.kele8.cn/book/discussions?book=" +
            this.bookId,
          {}
        )
        .then(res => {
          console.log(res.data);
          this.bookTake = res.data.posts;
          this.loadingShow = false;
        })
        .catch(error => {
          console.log(error);
        });
    },
    //获取相关推荐
    getRecommendation() {
      this.axios
        .get("http://novel.kele8.cn/recommend/" + this.bookId, {})
        .then(res => {
          console.log(res.data);
          this.recommendation = res.data.books;
        })
        .catch(error => {
          console.log(error);
        });
    },

    //点击相关推荐
    navRecommendation(index) {
      window.scroll(0, 0);
      this.bookId = this.recommendation[index]._id;
      this.getBookDetails();

      if (this.$store.state.myList.length !== 0) {
        var el = this.$store.state.myList;
        for (let i = 0; i < el.length; i++) {
          if (el[i]._id === this.recommendation[index]._id) {
            this.addFoo = true;
            this.addText = "已添加";
          } else {
            this.addFoo = false;
            this.addText = "+ 书架";
          }
        }
      }
    },

    //解密图片
    imgKey(value) {
      return unescape(value).slice(7);
    },
    //上拉
    iconUp() {
      this.addClass = true;
    },

    //下拉
    iconDown() {
      this.addClass = false;
    },

    //跳转阅读页
    navRead() {
      this.$router.push({
        name: "read",
        query: {
          id: this.bookId,
          keyword: this.keyword,
          name: this.name,
          router: this.router
        }
      });
    },
    //弹出框
    pop() {
      this.popShow = true;
      setTimeout(() => {
        this.popShow = false;
      }, 1000);
    },

    //加入书架
    add() {
      this.addFoo = true;
      this.addText = "已添加";
      if (this.$store.state.myList.length == 0) {
        this.$store.state.myList.push(this.bookDetails);
        this.content = "添加成功!";
        this.pop();
      } else {
        let list = this.$store.state.myList;
        let i = this.$store.state.myList.length - 1;
        if (list[i]._id == this.bookDetails._id) {
          this.content = "已经添加过了!";
          this.pop();
          return;
        } else {
          this.$store.state.myList.push(this.bookDetails);
          this.content = "添加成功!";
          this.pop();
        }
      }
    },
    //返回上一个路由
    go() {
      this.$store.state.foo = true;
     
      this.$router.push({
        name: this.router,
        query: {
          keyword: this.keyword,
          name: this.name
        }
      });
      // this.$router.go(-2);
    }
  },
  components: {
    Popbox
  }
};
</script>

<style lang="less" scoped>
//头部
.head {
  width: 100%;
  height: 30px;
  border-bottom: 1px solid #cccccc;
  background-color: white;
  a {
    width: 100%;
    height: 30px;
    span {
      display: block;
      height: 30px;
      line-height: 30px;
      color: rgb(224, 28, 28);
      &:nth-child(2) {
        margin-left: 10px;
        font-size: 18px;
      }
      &:nth-child(1) {
        font-size: 30px;
        font-weight: bold;
      }
    }
  }
}

//loading

.loading {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
}

//loading end

//详情头部
.book {
  margin-top: 15px;
  width: 100%;
  padding: 10px 0;
  background-color: rgb(245, 244, 244);
  .top {
    width: 100%;
    .left {
      width: 35%;
      height: 150px;
      img {
        width: 100%;
        height: 150px;

        border-radius: 5px;
      }
    }
    .right {
      width: 60%;
      margin-left: 5%;
      h5 {
        margin: 0;
        font-size: 15px;
        margin-top: 10px;
        color: rgb(161, 161, 161);
        font-weight: normal;
      }
      span {
        display: block;
        color: #e2b331;
        margin: 10px 0;
        font-size: 13px;
        &:nth-child(4) {
          height: 43px;
          overflow: hidden;
          i {
            font-style: normal;
            font-size: 8px;
            background-color: rgb(250, 183, 194);
            color: tomato;
            display: inline-block;
            padding: 2px 10px;
            margin-right: 5px;
            border-radius: 16px;
            margin-top: 5px;
            line-height: 12px;
          }
        }
        i {
          font-style: normal;
          color: #868d93;
        }
      }
    }
  }
}
//详情头部end

//简介

.about {
  width: 100%;
  h3 {
    margin: 10px 0;
    font-weight: normal;
  }
  .content {
    font-size: 15px;
    line-height: 25px;
    color: #77767c;
    &.show {
      height: 50px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
  }
}

//简介end

//相关推荐

.more {
  width: 100%;
  h3 {
    margin: 0;
    padding: 0;
    margin-bottom: 10px;
    font-weight: normal;
  }
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
  }

  .about {
    height: 160px;
    width: 100%;
    img {
      width: 100%;
      height: 130px;
      border-radius: 5px;
    }
    span {
      font-size: 15px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;
      height: 20px;
      display: inline-block;
      color: rgb(161, 161, 161);
    }
  }
}

//相关推荐end

////详情头部

.take {
  width: 100%;
  margin-bottom: 70px;
  h3 {
    margin: 10px 0;
    font-weight: normal;
  }
  .box {
    width: 100%;

    ul {
      li {
        margin: 10px 0;
        .top {
          width: 100%;
          img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
          }
          span {
            height: 50px;
            line-height: 50px;
            font-size: 16px;
            margin-left: 10px;
            color: #bebdc2;
          }
        }
        .content {
          text-align: left;
          margin-top: 5px;
          margin-left: 50px;
          color: rgb(94, 93, 93);
        }
      }
    }
  }
}

//热门短评end

//底部按钮

.btn {
  width: 100%;
  height: 70px;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: pink;
  z-index: 10000;
  button {
    width: 50%;
    height: 70px;
    line-height: 70px;
    text-align: center;
    border: none;
    outline: none;
    font-size: 20px;
    color: white;
    background-color: rgb(74, 230, 113);
    &:nth-child(2) {
      background-color: #ef4746;
    }
    &.success {
      background-color: #cccccc;
    }
  }
}

//底部按钮end
</style>