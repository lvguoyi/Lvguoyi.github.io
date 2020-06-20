<template>
  <div class="my">
    <!-- 详情头部 -->
    <van-row v-if="$store.state.myList.length != 0" class="book">
      <van-col span="22" offset="1">
        <div v-for="(item,index) in $store.state.myList" :key="index" class="top clear">
          <div @click="navRead(index)" class="left fl">
            <img :src="imgKey(item.cover)" alt />
          </div>
          <div class="right fl">
            <h5>{{item.title}}</h5>
            <span>
              {{item.author}} |
              <i>{{item.copyright}}</i>
            </span>
            <span>
              5书币/千字 |
              <i>{{item.chaptersCount}}万字</i>
            </span>
            <span>
              <i v-for="(item,index) in item.tags" :key="index">{{item}}</i>
            </span>
            <span @click="del(index)" class="iconfont icon-delete button"></span>
          </div>
        </div>
      </van-col>
    </van-row>

    <!-- 详情头部end -->

    <!-- 添加 -->

    <van-row v-show="$store.state.myList.length == 0" class="add">
      <van-col span="24">
        <span class="iconfont icon-tushu"></span>
        <span @click="nav" class="iconfont icon-jiashang">&nbsp;去添加</span>
      </van-col>
    </van-row>
    <!-- 添加end -->

    <!-- 弹出框-->

    <van-row class="big">
      <van-col span="24">
        <div class="box clear" :class="{active:addClass}">
          <h5>确定删除这本书吗?</h5>
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
      addClass: false,
      index: null
    };
  },
  created() {
    
    this.$store.state.titleShow = true;
  },
  methods: {
    //解密图片
    imgKey(value) {
      return unescape(value).slice(7);
    },
    //删除数据
    del(index) {
      this.index = index;
      this.addClass = true;
    },
    //取消
    no() {
      this.addClass = false;
    },
    //确定
    yes() {
      this.addClass = false;
      setTimeout(() => this.$store.state.myList.splice(this.index, 1), 300);
    },
    //跳转页面
    nav() {
      this.$router.push({
        name: "homePage"
      });
      
    },
    //跳转阅读页
    navRead(index) {
      this.$router.push({
        name: "details",
        query: {
          id: this.$store.state.myList[index]._id,
          router: "my"
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
//详情头部
.book {
  //margin-top: 15px;
  width: 100%;
  padding: 10px 0;

  .top {
    width: 100%;

    .left {
      width: 35%;
      height: 150px;
      img {
        width: 90%;
        height: 130px;
        border-radius: 5px;
      }
    }
    .right {
      width: 60%;
      margin-left: 5%;
      position: relative;
      .button {
        font-size: 10px;
        outline: none;
        border: none;
        position: absolute;
        right: -10px;
        top: -10px;
        border-radius: 2px;
        font-size: 25px;
        z-index: 999;
      }

      h5 {
        margin: 0;
        font-size: 15px;
        margin-top: 5px;
        color: rgb(161, 161, 161);
        font-weight: normal;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 165px;
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

//弹出框

.big {
  width: 180px;
  height: 100px;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-left: -90px;
  margin-top: -50px;
  z-index: 999;
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

//添加

.add {
  width: 100%;
  text-align: center;
  height: 93%;
  position: fixed;
  bottom: 0;
  justify-content: center;
  align-items: center;
  display: flex;
  left: 0;
  z-index: 1000;

  span {
    font-size: 60px;
    color: #cccccc;
    &:nth-child(2) {
      font-size: 20px;
      display: block;
      margin-top: 10px;
    }
  }
}

//添加end
</style>