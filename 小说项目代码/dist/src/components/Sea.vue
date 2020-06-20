<template>
  <div>
    <!-- 搜索框 -->
    <van-row class="searchInp">
      <van-col span="22" offset="1">
        <div class="inp">
          <span class="iconfont icon-back-copy-copy fl" @click="gohomePage"></span>
          <input @input="inp" type="text" v-model="value" />
          <span @click="del" v-show="delShow" class="iconfont icon-shanchu del"></span>
          <button @click="search">搜索</button>
        </div>
      </van-col>
    </van-row>
    <!-- 搜索框end -->

    <!-- hot -->
    <van-row v-if="searchList.length == 0" class="hot">
      <van-col span="22" offset="1">
        <h5>搜索热词</h5>
        <span @click="goHot(index)" v-for="(item,index) in hot" :key="index">{{item}}</span>
      </van-col>
    </van-row>
    <!-- hot end-->

    <!-- 搜索记录 -->

    <van-row v-if="searchList.length == 0" class="history">
      <van-col class="top" span="22" offset="1">
        <h5 class="fl">搜索记录</h5>
        <span
          @click="delHistory"
          v-show="$store.state.historyList.length != 0"
          class="iconfont icon-shanchu1 fr"
        >&nbsp;清空记录</span>
      </van-col>
      <van-col class="center" v-show="$store.state.historyList.length != 0" span="22" offset="1">
        <span
          @click="his(index)"
          v-for="(item,index) in $store.state.historyList"
          :key="index"
        >{{item}}</span>
      </van-col>
      <van-col class="bottom" v-show="$store.state.historyList.length == 0" span="22" offset="1">
        <span class="none">还没有任何搜索记录</span>
      </van-col>
    </van-row>

    <!-- 搜索记录end -->

    <!-- 搜索列表 -->
    <van-row v-if="searchList.length != 0" class="searchList">
      <van-col span="22" offset="1">
        <p class="word">
          搜索:
          <i>'{{value}}'</i>
        </p>
        <ul>
          <li @click="toDetails(index)" v-for="(item,index) in searchList[0]" :key="index">
            <span class="iconfont icon-shu fl"></span>
            {{item.title}}
          </li>
          <p>没有更多了~</p>
        </ul>
      </van-col>
    </van-row>
    <!-- 搜索列表 -->

    <!-- 弹出框-->

    <van-row class="big">
      <van-col span="24">
        <div class="box clear" :class="{active:addClass}">
          <h5>确定清空搜索记录吗?</h5>
          <span @click="no" class="n fl">取消</span>
          <span @click="yes" class="y fr">确定</span>
        </div>
      </van-col>
    </van-row>

    <!-- 弹出框end-->
  </div>
</template>


<script>
export default {
  data() {
    return {
      searchList: [],
      delShow: false,
      value: "",
      foo: true,
      hot: [
        "第一狂妃",
        "后娘",
        "穿越",
        "三生三世枕上书",
        "穿越之细水长流",
        "掌中之物",
        "我家师父超凶的",
        "混在古代的厨子"
      ],
      addClass: false
    };
  },
  methods: {
    //获取搜索内容
    getSearchList(word) {
      this.axios
        .get(
          "https://api.kele8.cn/agent/http://novel.kele8.cn/search?keyword=" +
            word +
            "",
          {}
        )
        .then(res => {
          console.log(res.data);
          if (this.searchList.length == 0) {
            this.searchList.push(res.data.books.slice(0, 20));
            this.$store.state.list.push(res.data.books.slice(0, 20));
          } else {
            this.searchList.splice(0, this.searchList.length);
            this.searchList.push(res.data.books.slice(0, 20));
            this.$store.state.list.splice(0, this.$store.state.list.length);
            this.$store.state.list.push(res.data.books.slice(0, 20));
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    //获取输入框的值
    inp() {
      if (this.value != "") {
        this.delShow = true;
        if (!this.foo) {
          return;
        }
        this.getSearchList(this.value);
        setTimeout(() => {
          this.foo = true;
        }, 100);
      } else {
        this.delShow = false;
        this.searchList.splice(0, this.searchList.length);
      }
    },
    //删除输入框的值
    del() {
      this.value = "";
      this.delShow = false;
      this.searchList.splice(0, this.searchList.length);
    },
    //数组去重
    goArr(arr) {
      for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[i] == arr[j]) {
            arr.splice(j, 1);
            j--;
          }
        }
      }
      return arr;
    },

    //点击搜索
    search() {
      if (this.value != "") {
        this.$store.state.historyList.push(this.value);
        this.goArr(this.$store.state.historyList);
      } else {
        this.searchList.splice(0, this.searchList.length);
      }
    },
    //点击搜索列表跳转详情页
    toDetails(index) {
      this.$router.push({
        name: "details",
        query: {
          id: this.searchList[0][index]._id,
          router: "search"
        }
      });

      this.$store.state.historyList.push(this.searchList[0][index].title);
      this.goArr(this.$store.state.historyList);
    },
    //跳转homePage
    gohomePage() {
      this.$router.push({
        name: "homePage"
      });
      this.$store.state.titleShow = true;
      this.$store.state.foo = false;
    },
    //点击Hot跳转
    goHot(index) {
      this.value = this.hot[index];
      this.delShow = true;
      this.getSearchList(this.value);
      // this.$router.push({
      //   name: "details"
      // });
      this.$store.state.historyList.push(this.value);
      this.goArr(this.$store.state.historyList);
      
    },
    //点击搜索历史
    his(index) {
      this.delShow = true;
      this.value = this.$store.state.historyList[index];
      this.getSearchList(this.value);
      
    },
    //清空搜索记录
    delHistory() {
      this.addClass = true;
    },
    //取消
    no() {
      this.addClass = false;
    },
    //确定
    yes() {
      this.addClass = false;
      setTimeout(() => {
        this.$store.state.historyList.splice(
          0,
          this.$store.state.historyList.length
        );
      }, 300);
    }
  },
  created() {
    if (this.$store.state.foo) {
      var len = this.$store.state.historyList.length - 1;
      var key = this.$store.state.historyList[len];
      this.getSearchList(key);
      this.value = key;
      if (key) {
        this.delShow = true;
      } else {
        this.delShow = false;
      }

      this.searchList = this.$store.state.list;
    }
   

    this.$store.state.titleShow = false;
  },
  beforeDestroy() {}
};
</script>

<style lang="less" scoped>
//搜索框

.searchInp {
  width: 100%;
  padding-top: 10px;
  position: fixed;
  height: 33px;
  top: 0;
  left: 0;
  background-color: white;
  .inp {
    width: 100%;
    position: relative;
    color: rgb(168, 167, 167);
    input {
      width: 60%;
      height: 24px;
      padding: 2px 8px;
      padding-right: 22px;
      border: 1px solid #ccc;
      border-radius: 34px;
      font-size: 13px;
      line-height: 24px;
    }
    button {
      width: 15%;
      margin-left: 5px;
      height: 33px;
      border: none;
      outline: none;
      background-color: white;
    }
    span {
      height: 33px;
      width: 13%;
      line-height: 33px;
      font-size: 22px;
      font-weight: bold;
      &.del {
        position: absolute;
        top: 50%;
        right: 35px;
        font-size: 16px;
        color: rgb(184, 184, 184);
        display: inline-block;
        height: 33px;
        margin-top: -16px;
      }
    }
  }
}

//搜索框end

//hot

.hot {
  width: 100%;
  font-size: 12px;
  color: rgb(138, 138, 138);
  margin-top: 43px;
  h5 {
    margin: 15px 0;
    font-size: 16px;
    font-weight: normal;
  }
  span {
    display: inline-block;
    height: 25px;
    border: 1px solid #cccccc;
    box-sizing: border-box;
    line-height: 25px;
    padding: 0 15px;
    border-radius: 25px;
    margin-bottom: 12px;
    margin-right: 10px;
  }
}

//hot end

//搜索记录

.history {
  width: 100%;
  color: rgb(138, 138, 138);
  margin-top: 10px;
  h5 {
    margin: 0;
    font-size: 16px;
    font-weight: normal;
    height: 50px;
    line-height: 50px;
  }
  .top {
    span {
      font-size: 13px;
      height: 50px;
      line-height: 50px;
    }
  }
  .center {
    span {
      display: inline-block;
      height: 25px;
      border: 1px solid #cccccc;
      box-sizing: border-box;
      line-height: 25px;
      padding: 0 15px;
      border-radius: 25px;
      margin-bottom: 10px;
      margin-right: 10px;
      font-size: 12px;
    }
  }
  .bottom {
    .none {
      width: 100%;
      text-align: center;
      margin-top: 25px;
      font-size: 13px;
      display: inline-block;
    }
  }
}

//搜索记录end

//搜索列表

.searchList {
  width: 100%;
  margin-bottom: 10px;
  margin-top: 43px;
  .word {
    width: 100%;
    text-align: left;
    margin: 0;
    margin-top: 5px;
    i {
      font-style: normal;
      color: rgb(146, 221, 240);
    }
  }
  ul {
    width: 100%;
    margin: 0;
    padding: 0;
    li {
      width: 100%;
      height: 35px;
      border-bottom: 1px solid #ccc;
      line-height: 40px;
      color: rgb(168, 167, 167);
      font-size: 14px;
      span {
        font-size: 22px;
        display: block;
        height: 35px;
        width: 30px;
        margin-right: 8px;
      }
    }
  }
  p {
    width: 100%;
    text-align: center;
    color: rgb(168, 167, 167);
    font-size: 14px;
  }
}

//搜索列表end

//弹出框

.big {
  width: 180px;
  height: 100px;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-left: -90px;
  margin-top: -50px;
  z-index: -1;
  .box {
    width: 180px;
    height: 100px;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 10px;
    transition: all 0.3s;
    transform: scale(0);
    color: rgb(211, 203, 203);
    &.active {
      transform: scale(1);
    }
    h5 {
      font-weight: normal;
      margin-left: 15px;
      line-height: 40px;
    }
    span {
      display: block;
      font-size: 13px;
      margin-top: 5px;
      &.n {
        margin-left: 40px;
      }
      &.y {
        margin-right: 40px;
      }
    }
  }
}

//弹出框end
</style>