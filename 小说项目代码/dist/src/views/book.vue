<template>
  <div>
    <!-- 头部 -->
    <van-sticky>
      <van-row class="head">
        <van-col span="22" offset="1">
          <a class="clear" href="#">
            <span class="iconfont icon-back-copy-copy fl" @click="gohomePage(index)"></span>
            <span class="fl">{{keyword}}</span>
            <span class="fr">书单</span>
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
    <!-- 内容 -->
    <van-row class="book">
      <van-col span="22" offset="1">
        <div class="list">
          <ul>
            <li @click="goDetails(item._id)" v-for="(item,index) in bookList" :key="index">
              <div class="left">
                <!-- :src="imgKey(item.cover)" -->
                <img :src="imgKey(item.cover)" alt />
              </div>
              <div class="right">
                <h5>{{item.title}}</h5>
                <p>{{item.shortIntro}}</p>
                <div class="bottom clear">
                  <span class="iconfont icon-zuozhe fl">&nbsp;&nbsp;{{item.author}}</span>
                  <span class="fr">{{item.retentionRatio}}万人气</span>
                  <span
                    v-if="item.minorCate != '' && item.majorCate != ''"
                    class="fr"
                  >{{item.minorCate}}</span>
                  <span
                    v-if="item.majorCate != '' && item.minorCate == ''"
                    class="fr"
                  >{{item.majorCate}}</span>
                </div>
              </div>
            </li>
            <div v-show="this.bookList.length !=0" @click="check" class="more">
              {{tiggle}}
              <span v-show="moreShow" class="iconfont icon-shangla1"></span>
            </div>
          </ul>
        </div>
      </van-col>
    </van-row>
    <!-- 内容end -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: this.$route.query.keyword,
      major: this.$route.query.name,
      index: this.$route.query.index,
      book: [],
      loadingShow: false,
      imgShow: false,
      bookList: [],
      tiggle: "查看更多",
      i: 10,
      count: 10,
      moreShow: true
    };
  },
  methods: {
    //获取书籍
    getBookList() {
      this.loadingShow = true;
      this.axios
        .get(
          "https://api.kele8.cn/agent/http://novel.kele8.cn/category-info?gender=" +
            this.major +
            "&type=hot&major=" +
            this.keyword +
            "&minor=&start=0&limit=50",
          {}
        )
        .then(res => {
          console.log(res.data.books);
          this.book.push(res.data.books);
          this.loadingShow = false;
          this.bookList = this.book[0].slice(this.index, this.count);
        })
        .catch(error => {
          console.log(error);
        });
    },
    //查看更多
    check() {
      this.moreShow = true;
      this.tiggle = "查看更多";
      this.count += 10;
      this.i = this.count - 10;
      let arr = this.book[0].slice(this.i, this.count);
      // this.bookList = this.book[0].slice(this.i, this.count);
      this.bookList = this.bookList.concat(arr);
     
      if (this.count >= this.book[0].length) {
        this.tiggle = "没有更多了~";
        this.moreShow = false;
        return;
      }
    },
    //解密图片
    imgKey(value) {
      return unescape(value).slice(7);
    },
    //解决图片加载缓慢
    imgLoad() {
      if (this.$refs.img.src !== "") {
        this.imgShow = true;
      }
    },
    //跳转homePage
    gohomePage(index) {
      this.$router.push({
        name: "homePage",
        query: {
          index
        }
      });
      this.$store.state.titleShow = true;
    },

    //跳转书籍详情页
    goDetails(id) {
      this.$router.push({
        name: "details",
        query: {
          id,
          name: this.major,
          keyword: this.keyword,
          router: "book"
        }
      });
    }
  },
  created() {
    this.getBookList();
    this.$store.state.titleShow = false;
   
  },
  mounted() {},
  updated() {},
  beforeDestroy() {}
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
//头部end

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

//内容
.book {
  width: 100%;
  margin-top: 10px;
  background-color: rgb(252, 252, 252);
  .more {
    width: 100%;
    text-align: center;
    margin-bottom: 10px;
    color: rgb(136, 135, 135);
  }
  .list {
    width: 100%;
    ul {
      width: 100%;
      padding: 0;
      margin: 0;
      li {
        width: 100%;
        height: 100px;
        margin-bottom: 15px;

        .left {
          width: 25%;
          float: left;

          height: 100px;
          img {
            width: 100%;
            height: 100%;
            display: block;
          }
        }
        .right {
          width: 71%;
          float: left;

          margin-left: 4%;
          height: 100px;
          h5 {
            margin: 0;
            padding: 0;
            font-size: 15px;
            font-weight: normal;
          }
          p {
            font-size: 12px;
            margin: 6px 0;
            //height: 32px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            line-height: 20px;
            color: rgb(136, 135, 135);
          }
          .bottom {
            span {
              font-size: 11px;
              height: 15px;
              line-height: 15px;
              border-radius: 19px;
              padding: 2px 10px;
              color: rgb(136, 135, 135);
              &:nth-child(1) {
                padding-left: 0;
                padding-right: 0;
              }
              &:nth-child(2) {
                font-size: 8px;
                background-color: rgb(250, 183, 194);
                color: tomato;
              }
              &:nth-child(3) {
                font-size: 8px;
                margin-right: 10px;
                background-color: rgb(216, 214, 214);
              }
            }
          }
        }
      }
    }
    &::after {
      content: "";
      display: block;
      clear: both;
    }
  }
}
//内容end
</style>