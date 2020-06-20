<template>
  <div class="hh">
    <!-- 头部 -->
    <van-row class="head">
      <van-col span="22" offset="1">
        <a class="clear" href="#">
          <span class="iconfont icon-back-copy-copy fl" @click="goDetails"></span>
        </a>
      </van-col>
    </van-row>
    <!-- 头部end -->

    <van-row class="con">
      <van-col span="24">
        <h3>{{content.chapter.title}}</h3>
        <p v-show="!content.chapter.isVip">{{content.chapter.cpContent}}</p>
        <p v-show="content.chapter.isVip">很抱歉，你还不是会员！</p>
      </van-col>
    </van-row>

    <!-- loading -->

    <div v-if="loadingShow" class="loading">
      <img src="../assets/images/load.gif" alt />
    </div>

    <!-- loading end -->

    <!-- 遮罩 -->
    <div v-show="content.chapter.title != ''" ref="mask" class="mask" :class="{bto:foo}">
      <div class="btn">
        <span @click="down" v-if="foo" class="iconfont icon-Down fr"></span>
        <span @click="up" v-if="!foo" class="iconfont icon-shangla1 fr"></span>
        <button @click="prev">上一章</button>
        <button @click="show" class="mu">目录</button>
        <button @click="next">下一章</button>
      </div>
    </div>
    <div ref="box" class="box" :class="{active:addClass}">
      <span @click="s" class="iconfont icon-fenye-shangyiye1 left"></span>
      <span @click="x" class="iconfont icon-fenye-shangyiye right"></span>
      <span ref="move" v-show="maskShow" class="move">已为你跳转第{{pages}}页</span>
      <ul>
        <li
          @click="getCon(index)"
          class="item"
          v-for="(item,index) in bookList"
          :key="index"
        >{{item.title}}</li>
      </ul>
      <div class="nav">
        共{{page}}页
        <input ref="inp" maxlength="5" v-model="inp" type="text" />
        <button @click="toPage">go</button>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from "@better-scroll/core";
export default {
  data() {
    return {
      bookId: this.$route.query.id,
      content: {
        chapter: {
          title: "",
          cpContent: ""
        }
      },
      list: [],
      index: 0,
      foo: true,
      count: 0,
      c: 12,
      bookList: [],
      addClass: false,
      loadingShow: false,
      page: 0,
      inp: "",
      pages: 0,
      maskShow: false,
      keyword: this.$route.query.keyword,
      name: this.$route.query.name,
      router: this.$route.query.router
    };
  },
  created() {
    this.$store.state.titleShow = false;
    console.log(this.$route.query.id);
    this.loadingShow = true;
    this.getBookRoot();
  },
  mounted() {},

  methods: {
    //获取书源
    getBookRoot() {
      this.axios
        .get(
          "https://api.kele8.cn/agent/http://novel.kele8.cn/book-sources?view=summary&book=" +
            this.bookId,
          {}
        )
        .then(res => {
         
          this.getBookList(res.data[0]._id);
        })
        .catch(error => {
          console.log(error);
        });
    },
    //获取章节
    getBookList(id) {
      this.axios
        .get(
          "https://api.kele8.cn/agent/http://novel.kele8.cn/book-chapters/" +
            id,
          {}
        )
        .then(res => {
          
          this.list = res.data.chapters;
          if (this.list.length != 0) {
            this.aa(this.count);
            this.getBookContent(this.list[this.index].link);
            this.page = Math.floor(this.list.length / this.c) + 1;
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    //获取章节内容
    getBookContent(link) {
      this.loadingShow = true;
      this.axios
        .get(
          "https://api.kele8.cn/agent/http://novel.kele8.cn/chapters/" +
            encodeURIComponent(link),
          {}
        )
        .then(res => {
          console.log(res.data);
          this.content = res.data;
          this.loadingShow = false;
        })
        .catch(error => {
          console.log(error);
        });
    },
    //上一章
    prev() {
      this.index -= 1;
      if (this.index <= 0) {
        this.index = 0;
      }
      this.getBookContent(this.list[this.index].link);
      window.scroll(0, 0);
    },
    //下一章
    next() {
      this.index += 1;
      if (this.index >= this.list.length - 1) {
        this.index = this.list.length - 1;
      }
      this.getBookContent(this.list[this.index].link);

      window.scroll(0, 0);
    },
    //上拉
    up() {
      this.$refs.mask.style.bottom = "-46px";
      this.foo = true;
      if (this.addClass) {
        this.addClass = false;
      }
    },
    //下拉
    down() {
      this.$refs.mask.style.bottom = "-1px";
      this.foo = false;
    },
    //截取
    aa(count) {
      var a = this.list.slice(count, this.c + this.count);
      this.bookList = a;
    },
    //改变章节数
    s() {
      this.count -= 12;
      if (this.count <= 0) {
        this.count = 0;
      }
      this.aa(this.count);
    },
    x() {
      this.count += 12;
      if (this.count >= this.list.length - 1) {
        this.count = this.list.length - 1;
      }
      this.aa(this.count);
    },
    //获取相对应章节内容
    getCon(num) {
      this.index = this.count + num;
      this.getBookContent(this.bookList[num].link);
    },
    //控制章节列表的显隐
    show() {
      if (this.addClass) {
        this.addClass = false;
      } else {
        this.addClass = true;
      }
    },
    //跳转页数
    toPage() {
      let reg = /^\d*[0-9]/;
      this.inp = this.$refs.inp.value;
      this.pages = this.inp;
      if (this.inp != "" && reg.test(this.inp)) {
        this.count = (this.inp - 1) * this.c;
        this.maskShow = true;
        setTimeout(() => {
          this.maskShow = false;
        }, 1000);
        if (this.count > this.list.length - 1) {
          this.$refs.move.innerText = "已经超出页数!";
          this.inp = "";
          return;
        } else if (this.count < 0) {
          this.$refs.move.innerText = "页数不存在!";
          this.inp = "";
        } else {
          this.aa(this.count);
          this.$refs.move.innerText = "已为你跳转第" + this.pages + "页!";
          this.inp = "";
        }
      }
    },
    //返回详情页
    goDetails() {
      this.$router.push({
        name: "details",
        query: {
          id: this.bookId,
          keyword: this.keyword,
          name: this.name,
          router: this.router
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.hh {
  overflow-x: hidden;
}
.con {
  width: 100%;
  h3 {
    width: 100%;
    text-align: center;
    margin-top: 40px;
  }
  p {
    width: 90%;
    padding: 0 5%;
    line-height: 30px;
    text-indent: 20px;
    letter-spacing: 1px;
    margin-bottom: 50px;
    font-family: "Microsoft Yahei Fon";
  }
}

//遮罩
.mask {
  width: 100%;
  height: 45px;
  position: fixed;
  z-index: 999;
  bottom: -1px;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  transition: bottom 0.5s;
  &.bto {
    bottom: -46px;
  }
  .btn {
    width: 100%;
    text-align: center;
    button {
      width: 32%;
      height: 45px;
      line-height: 30px;
      border: none;
      outline: none;
      color: rgb(77, 75, 75);
      &.mu {
        margin: 0 3px;
      }
    }
    span {
      position: absolute;
      top: -25px;
      left: 0;
      font-size: 28px;
      color: rgb(77, 75, 75);
    }
  }
}
.box {
  position: fixed;
  height: 500px;
  width: 70%;
  background-color: #cccccc;
  overflow: hidden;
  bottom: -590px;
  left: 15%;
  z-index: 900;
  pointer-events: auto;
  padding: 20px;
  padding-right: 10px;
  padding-left: 30px;
  padding-top: 0;
  margin-left: -20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  transition: bottom 0.5s;
  &.active {
    bottom: 43px;
  }
  ul {
    width: 100%;
    height: 500px;
    li {
      width: 100%;
      height: 40px;
      line-height: 40px;
      font-size: 15px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  span {
    position: absolute;
    height: 50px;
    top: 50%;
    line-height: 50px;
    margin-top: -25px;
    font-size: 30px;
    &.left {
      left: 0;
    }
    &.right {
      right: 0;
    }
    &.move {
      display: block;
      width: 200px;
      height: 80px;
      border-radius: 10px;
      left: 50%;
      margin-left: -100px;
      background: rgba(0, 0, 0, 0.6);
      font-size: 15px;
      color: white;
      line-height: 80px;
      text-align: center;
      margin-top: -40px;
      letter-spacing: 1px;
    }
  }
  .nav {
    width: 100%;
    margin-top: -10px;
    input {
      width: 80px;
      outline: none;
      border: none;
      height: 18px;
      padding: 2px 10px;
      background-color: white;
    }
    button {
      border: none;
      outline: none;
      margin-left: 5px;
      height: 22px;
      line-height: 22px;
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
  background: rgba(0, 0, 0, 0.3);
  img {
    width: 50px;
    height: 50px;
  }
}

//loading end

//头部
.head {
  width: 100%;
  height: 30px;
  border-bottom: 1px solid #cccccc;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
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
</style>