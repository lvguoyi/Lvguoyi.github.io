<template>
  <div class="home">
    <!-- loading -->

    <div v-if="loadingShow" class="loading">
      <img src="../assets/images/loading.gif" alt />
    </div>

    <!-- loading end -->

    <!-- 书籍分类 -->

    <van-row class="bookList">
      <van-col span="24">
        <h1>书籍分类</h1>
      </van-col>
      <van-col span="4">
        <div class="left" ref="left">
          <ul>
            <li :class="{addcolor:addClass==index}" v-for="(item,index) in listLeft" :key="index">
              <span @click="sideMove(index)" class="left-item">{{item}}</span>
            </li>
          </ul>
          <div ref="tab" class="tab"></div>
        </div>
      </van-col>
      <van-col span="20">
        <div class="right" ref="right">
          <ul class="active">
            <!-- 循环嵌套 -->
            <li
              :class="{active:addClass==index}"
              v-for="(item,index) in bookList"
              :key="index"
              class="right-item right-item-hook"
            >
              <span class="s">{{item.name}}</span>
              <div
                @click="goBook(count.name,item.major,addClass)"
                v-for="(count,num) in item.data"
                :key="num"
                class="content"
              >
                <span>
                  {{count.name}}
                  <i>{{count.monthlyCount}}本</i>
                </span>

                <img :src="imgKey(count.bookCover[0])" alt />
              </div>
            </li>
          </ul>
        </div>
      </van-col>
    </van-row>
    <!-- 书籍分类end -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      listLeft: ["男生", "女生", "出版", "标签"],
      bookList: [],
      addClass: 0,
      loadingShow: false
    };
  },
  methods: {
    //获取数据
    add() {
      this.loadingShow = true;
      this.axios
        .get("https://api.kele8.cn/agent/http://novel.kele8.cn/categories", {})
        .then(res => {
          console.log(res.data);

          this.bookList.push({
            name: "男生",
            major: "male",
            data: res.data.male
          });
          this.bookList.push({
            name: "女生",
            major: "female",
            data: res.data.female
          });
          this.bookList.push({
            name: "出版",
            major: "picture",
            data: res.data.picture
          });
          this.bookList.push({
            name: "标签",
            major: "press",
            data: res.data.press
          });

          this.loadingShow = false;
        })
        .catch(error => {
          console.log(error);
        });
    },
    //解密图片
    imgKey(value) {
      return unescape(value).slice(7);
    },
    //滑块
    sideMove(index) {
      this.addClass = index;
      this.$refs.tab.style.top = this.addClass * 40 + "px";
      this.$refs.tab.style.transition = "all 0.3s";
    },
    //跳转书籍页
    goBook(value, name, index) {
      this.$router.push({
        name: "book",
        query: {
          keyword: value,
          name,
          index
        }
      });
      this.$store.state.titleShow = false;
    }
  },
  mounted() {
    if (this.$route.query.index) {
      this.addClass = this.$route.query.index;
      this.$refs.tab.style.top = this.addClass * 40 + "px";
      this.$refs.tab.style.transition = "all 0s";
    }
  },
  created() {
    if (this.bookList.length === 0) {
      this.add();
    }
  }
};
</script>

<style lang="less" scoped>
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

//书籍分类
.bookList {
  width: 100%;
  margin: 0 auto;
  height: 540px;

  h1 {
    margin-top: 15px;
    font-size: 1.09375rem;
    margin-left: 15px;
    padding: 0;
    color: rgb(168, 166, 166);
    font-weight: normal;
  }
  .left {
    position: relative;
    width: 100%;
    background-color: white;
    float: left;
    text-align: center;
    height: 540px;
    border-right: 1.5px solid #cccccc;
    box-sizing: border-box;
    .tab {
      position: absolute;
      width: 3px;
      height: 18px;
      background-color: tomato;
      top: 0px;
      left: 0;
      transition: top 0.3s;
      border-radius: 3px;
    }
    ul {
      width: 100%;

      li {
        width: 100%;
        margin-bottom: 20px;
        height: 20px;
        transition: all 0.3s;
        color: rgb(168, 166, 166);
        &.addcolor {
          color: tomato;
        }
      }
    }
  }
  .right {
    width: 100%;
    background-color: orchid;
    height: 540px;
    ul {
      position: relative;
      width: 100%;
      background-color: white;
      height: 540px;
      li {
        position: absolute;
        width: 100%;
        opacity: 0;
        transition: all 0.3s;
        margin-bottom: 0.78125rem;
        height: 540px;
        &.active {
          opacity: 1;
          z-index: 999;
        }
        span.s {
          display: block;
          width: 100%;
          text-align: center;
          margin-bottom: 0.78125rem;
          color: rgb(126, 126, 126);
          height: 20px;
          position: relative;
          &::after,
          &::before {
            content: "";
            display: block;
            width: 110px;
            height: 1px;
            background-color: rgb(216, 214, 214);
            position: absolute;
            top: 9.5px;
            font-size: 0;
          }
          &::after {
            left: 10px;
          }
          &::before {
            right: 10px;
          }
        }
        .content {
          width: 40%;
          background-color: rgb(238, 238, 238);
          display: inline-block;
          margin-left: 7%;
          height: 50px;
          margin-bottom: 0.78125rem;
          padding: 5px 0;
          color: rgb(126, 126, 126);

          span {
            width: 50%;
            display: block;
            float: left;
            line-height: 25px;
            font-size: 0.78125rem;
            height: 60px;
            margin-left: 5px;

            i {
              display: block;
              font-style: normal;
              font-size: 0.703125rem;
            }
          }
          img {
            width: 40px;
            height: 50px;
            display: inline-block;
            margin-left: 10px;
          }
        }
      }
    }
  }
}
//书籍分类 end
</style>