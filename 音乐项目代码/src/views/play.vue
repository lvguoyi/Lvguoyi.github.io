
<template>
  <div ref="box" class="box">
    <div
      ref="mask"
      :style="{background:`url(${songlist[count].picUrl})`,backgroundSize:'cover',backgroundPosition:'center'}"
      class="mask"
    ></div>

    <!-- 返回 -->
    <van-sticky :offset-top="-5">
      <van-row class="topSearch">
        <van-col class="mi" span="3">
          <a href="#" @click="$router.go(-1)">
            <van-icon name="arrow-down" />
          </a>
        </van-col>
        <van-col span="15">
          <a href="#">{{this.songlist[this.count].name}}</a>
        </van-col>
        <van-col class="mi" span="3">
          <a href="#" @click="$router.go(-1)">
            <span class="iconfont icon-zhuomian"></span>
          </a>
        </van-col>
        <van-col class="mi" span="3">
          <a href="#" @click="$router.go(-1)">
            <span class="iconfont icon-fenxiang"></span>
          </a>
        </van-col>
        <van-col span="24">
          <h5>
            {{this.songlist[this.count].singerName}}
            <i>关注</i>
          </h5>
        </van-col>
      </van-row>
    </van-sticky>
    <!-- 返回end -->

    <!-- 按钮 -->

    <van-row class="btn">
      <van-col span="4" offset="2">
        <a href="#">标准</a>
      </van-col>
      <van-col span="4">
        <a href="#">视频</a>
      </van-col>
      <van-col span="4">
        <a href="#">音效</a>
      </van-col>
      <van-col span="4">
        <a href="#">封面</a>
      </van-col>
      <van-col span="4">
        <a href="#">串串</a>
      </van-col>
    </van-row>

    <!-- 按钮end -->

    <!-- 写真 -->

    <van-row class="img">
      <van-col span="24">
        <div @click="imgShow" v-show="geciFoo" ref="images" class="images"></div>

        <div @click="geShow" v-show="!geciFoo" ref="ge" class="ge">
          <ul ref="scroll">
            <li
              ref="li"
              :class="{active:index===geciIndex}"
              v-for="(item,index) in songlist[count].songObj"
              :key="index"
            >{{item.text}}</li>
          </ul>
        </div>
      </van-col>
    </van-row>

    <!-- 写真end -->

    <!-- 功能 -->
    <van-row class="icon">
      <van-col span="4" offset="2">
        <a href="#">
          <span @click="songMoveLike" v-show="!songlist[count].like" class="iconfont icon-woxihuan"></span>
          <span
            @click="songLike"
            v-show="songlist[count].like"
            style="color:red"
            class="iconfont icon-xihuan"
          ></span>
        </a>
      </van-col>
      <van-col span="4">
        <a href="#">
          <span class="iconfont icon-shipin"></span>
        </a>
      </van-col>
      <van-col span="4">
        <a href="#">
          <span class="iconfont icon-xiazai"></span>
        </a>
      </van-col>
      <van-col span="4">
        <a href="#">
          <span class="iconfont icon-xinxi"></span>
        </a>
      </van-col>
      <van-col span="4">
        <a href="#">
          <span class="iconfont icon-shenglve"></span>
        </a>
      </van-col>
    </van-row>
    <!-- 功能end -->

    <!-- 进度条 -->

    <van-row class="bar">
      <van-col span="2" offset="1">
        <a ref="currenttime" href="#">{{this.currenttime}}</a>
      </van-col>
      <van-col span="15">
        <div class="time">
          <input
            @input="inputChange"
            ref="input"
            type="range"
            value="0"
            min="0"
            step="0.01"
            max="300"
            v-model="progess"
          />
          <div ref="speed" class="speed"></div>
        </div>
      </van-col>
      <van-col span="2">
        <a ref="totaltime" href="#">{{this.songlist[count].duration}}</a>
      </van-col>
      <van-col span="2" offset="1">
        <a ref="playspeed" @click="playSpeed" class="con" href="#">倍速</a>
      </van-col>
    </van-row>

    <!-- 播放功能 -->

    <van-row class="playsong">
      <van-col span="24">
        <div class="cut">
          <span class="iconfont iconfont icon-shunxubofang1">
            <strong></strong>
          </span>
          <span @click="add" class="iconfont icon-shangyishou-"></span>
          <span
            v-show="!songlist[count].listFoo"
            @click="songPause"
            class="iconfont icon-zantingtingzhi"
          ></span>
          <span v-show="songlist[count].listFoo" @click="playSong" class="iconfont icon-bofang"></span>
          <span @click="subtract" class="iconfont icon-xiayishou-copy"></span>
          <span @click="listMove" class="iconfont icon-caidanzhankai"></span>
        </div>
      </van-col>
    </van-row>

    <!-- 播放功能end -->

    <!-- 播放列表 -->
    <van-row class="playList">
      <van-col span="24">
        <div @click="ulMao" ref="right" class="list">
          <ul ref="ul">
            <li
              ref="lis"
              v-for="(item,index) in songlist"
              :key="index"
              class="right-item-hook"
              :class="{active:index==count}"
            >
              {{xunhao[index]}}. {{item.name}}
              <span
                @click="listDel(index)"
                class="iconfont icon-shanchu"
              ></span>
              <span
                @click="songMoveLike"
                v-show="!songlist[index].like"
                class="iconfont icon-woxihuan"
              ></span>
              <span
                @click="songLike"
                v-show="songlist[index].like"
                style="color:red"
                class="iconfont icon-xihuan"
              ></span>
              <span
                v-show="!songlist[index].listFoo"
                @click="songPause"
                class="iconfont icon-zantingtingzhi"
              ></span>
              <span
                v-show="songlist[index].listFoo"
                @click="listPlay(index)"
                class="iconfont icon-pause"
              ></span>
              <span v-if="songlist[index].mvId != mvIdfoo" class="iconfont icon-zhibo"></span>
            </li>
            <p></p>
          </ul>
        </div>
      </van-col>
    </van-row>
    <!-- 播放列表end -->

    <div @click="listBox" ref="listMask" class="listMask"></div>
    <!-- 进度条end -->

    <audio @timeupdate="time" @ended="end" :src="songlist[count].src" autoplay ref="hh"></audio>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
export default {
  data: function() {
    return {
      songlist: [
        {
          name: "屋顶",
          songId: 5257138,
          singerName: "周杰伦 温岚",
          singerId: 6452,
          duration: "00:00",
          mvId: "",
          src: "",
          listFoo: true,
          songSpeed: false,
          like: false,
          songObj: {},
          picUrl:
            "https://p2.music.126.net/ql3nSwy0XKow_HAoZzRZgw==/109951163111196186.jpg",
          songText:
            "[00:00.000] 作曲 : 周杰伦\n[00:01.000] 作词 : 周杰伦\n[00:23.97]半夜睡不着觉把心情哼成歌\n[00:29.23]只好到屋顶找另一个梦境\n[00:39.99]睡梦中被敲醒我还是不确定\n[00:45.53]怎会有动人弦律在对面的屋顶\n[00:51.00]我悄悄关上门带着希望上去\n[00:56.43]原来是我梦里常出现的那个人\n[01:00.60]那个人不就是我梦里\n[01:03.67]那模糊的人\n[01:05.97]我们有同样的默契\n[01:11.56]用天线\n[01:12.86]用天线排成爱你的形状hoho\n[01:21.20]在屋顶唱着你的歌\n[01:23.95]在屋顶和我爱的人\n[01:26.56]让星星点缀成最浪漫的夜晚\n[01:32.55]拥抱这时刻这一分一秒全都停止\n[01:40.74]爱开始纠结\n[01:42.88]在屋顶唱着你的歌\n[01:45.67]在屋顶和我爱的人\n[01:48.40]将泛黄的的夜献给最孤独的月\n[01:54.44]拥抱这时刻这一分一秒全都停止\n[02:02.50]爱开始纠结\n[02:05.00]梦有你而美\n[02:42.79]半夜睡不着觉把心情哼成歌\n[02:48.41]只好到屋顶找另一个梦境\n[02:59.21]睡梦中被敲醒我还是不确定\n[03:04.73]怎会有动人弦律在对面的屋顶\n[03:10.21]我悄悄关上门带着希望上去\n[03:15.65]原来是我梦里常出现的那个人\n[03:19.79]那个人不就是我梦里\n[03:23.15]那模糊的人\n[03:25.90]我们有同样的默契\n[03:30.59]用天线\n[03:31.99]用天线排成爱你的形状hoho\n[03:40.50]在屋顶唱着你的歌\n[03:42.97]在屋顶和我爱的人\n[03:45.67]让星星点缀成最浪漫的夜晚\n[03:51.70]拥抱这时刻这一分一秒全都停止\n[03:59.90]爱开始纠结\n[04:01.88]在屋顶唱着你的歌\n[04:04.77]在屋顶和我爱的人\n[04:07.51]将泛黄的的夜献给最孤独的月\n[04:13.56]拥抱这时刻这一分一秒全都停止\n[04:21.83]爱开始纠结\n[04:24.15]梦有你而美\n[04:37.50]让我爱你是谁\n[04:40.20]让你爱我是谁\n[04:42.43]怎会有动人弦律环绕在我俩的身边\n[04:48.37]让我爱你是谁\n[04:51.15]让你爱我是谁\n[04:53.91]原来是这屋顶有美丽的邂逅\n[05:03.79]在屋顶唱着你的歌\n[05:07.10]在屋顶和我爱的人\n"
        },
        {
          name: "海阔天空",
          songId: 255660,
          singerName: "林忆莲",
          singerId: 8336,
          duration: "00:00",
          mvId: 5343895,
          src: "",
          listFoo: true,
          songSpeed: false,
          like: false,
          songObj: {},
          picUrl: "",
          songText:
            "[00:13.54]今天我 寒夜里看雪飘过\n[00:20.41]怀着冷却了的心窝漂远方\n[00:26.49]风雨里追赶 雾里分不清影踪\n[00:33.23]天空海阔你与我可会变\n[00:40.06]多少次 迎着冷眼与嘲笑\n[00:47.19]从没有放弃过心中的理想\n[00:53.48]一刹那恍惚 若有所失的感觉\n[01:00.21]不知不觉已变淡心里爱\n[01:07.77]原谅我这一生不羁放纵爱自由\n[01:15.27]也怕会有一天会跌倒\n[01:22.15]背弃了理想 谁人都可以\n[01:28.67]哪会怕有一天只你共我\n[01:36.15]\n[01:43.94]今天我 寒夜里看雪飘过\n[01:50.81]怀着冷却了的心窝漂远方\n[01:56.83]风雨里追赶 雾里分不清影踪\n[02:03.35]天空海阔你与我可会变\n[02:10.30]原谅我这一生不羁放纵爱自由\n[02:17.47]也会怕有一天会跌倒\n[02:23.91]背弃了理想 谁人都可以\n[02:30.38]哪会怕有一天只你共我\n[02:36.44]\n[02:40.25]仍然自由自我\n[02:43.33]永远高唱我歌 走遍千里\n[02:51.75]原谅我这一生不羁放纵爱自由\n[02:58.76]也会怕有一天会跌倒\n[03:05.06]背弃了理想 谁人都可以\n[03:11.54]哪会怕有一天只你共我\n[03:18.16]背弃了理想 谁人都可以\n[03:24.79]哪会怕有一天只你共我\n[03:31.13]原谅我这一生不羁放纵爱自由\n[03:37.72]也会怕有一天会跌倒\n[03:43.83]背弃了理想 谁人都可以\n[03:50.13]哪会怕有一天只你共我\n[03:57.28]\n"
        },

        {
          name: "你的样子",
          songId: 390345,
          singerName: "林志炫",
          singerId: 3692,
          duration: "00:00",
          mvId: 5441245,
          src: "",
          listFoo: true,
          songSpeed: false,
          like: false,
          picUrl: "",
          songObj: {},
          songText:
            "[00:14.200]我听到传来的谁的声音\n[00:17.230]像那梦里呜咽中的小河\n[00:21.150]我看到远去的谁的步伐\n[00:24.500]遮住告别时哀伤的眼神\n[00:28.600]不明白的是为何你情愿\n[00:31.710]让风尘刻画你的样子\n[00:35.400]就向早已忘情的世界\n[00:37.900]曾经拥有你的名字我的声音\n[00:42.290]那悲歌总会在梦中惊醒\n[00:45.430]诉说一定哀伤过的往事\n[00:49.120]那看似满不在乎转过身的\n[00:52.300]是风干泪眼后萧瑟的影子\n[00:56.110]不明白的是为何人世间\n[00:59.720]总不能溶解你的样子\n[01:03.590]是否来迟了命运的预言\n[01:06.800]早已写了你的笑容我的心情\n[01:10.220]不变的你\n[01:13.899]伫立在茫茫的尘世中\n[01:17.690]聪明的孩子\n[01:20.480]提着易碎的灯笼\n[01:24.450]潇洒的你\n[01:27.480]将心事化进尘缘中\n[01:32.390]孤独的孩子\n[01:35.100]你是造物的恩宠\n[01:42.220]\n[02:15.670]我听到传来的谁的声音\n[02:18.840]像那梦里呜咽中的小河\n[02:22.770]我看到远去的谁的步伐\n[02:25.790]遮住告别时哀伤的眼神\n[02:29.700]不明白的是为何你情愿\n[02:33.800]让风尘刻画你的样子\n[02:36.700]就向早已忘情的世界\n[02:39.470]曾经拥有你的名字我的声音\n[02:43.890]那悲歌总会在梦中惊醒\n[02:46.829]诉说一定哀伤过的往事\n[02:50.620]那看似满不在乎转过身的\n[02:54.0]是风干泪眼后萧瑟的影子\n[02:57.510]不明白的是为何人世间\n[03:01.800]总不能溶解你的样子\n[03:04.720]是否来迟了命运的预言\n[03:07.820]早已写了你的笑容我的心情\n[03:12.0]不变的你\n[03:15.500]伫立在茫茫的尘世中\n[03:18.990]聪明的孩子\n[03:22.400]提着心爱的灯笼\n[03:25.890]潇洒的你\n[03:29.700]将心事化进尘缘中\n[03:32.950]孤独的孩子\n[03:36.140]你是造物的恩宠\n[03:43.530]\n"
        },

        {
          name: "断桥残雪",
          songId: 167937,
          singerName: "许嵩",
          singerId: 5771,
          duration: "00:00",
          mvId: "",
          src: "",
          listFoo: true,
          songSpeed: false,
          like: false,
          picUrl: "",
          songObj: {},
          songText:
            "[00:00.000] 作曲 : 许嵩\n[00:01.000] 作词 : 许嵩\n[00:24.380]寻不到花的折翼枯叶蝶\n[00:29.760]永远也看不见凋谢\n[00:36.440]江南夜色下的小桥屋檐\n[00:41.700]读不懂塞北的荒野\n[00:48.100]\n[00:48.530]梅开时节因寂寞而缠绵\n[00:53.720]春归后又很快湮灭\n[01:00.460]独留我赏烟花飞满天\n[01:05.740]摇曳后就随风飘远\n[01:11.850]\n[01:12.700]断桥是否下过雪\n[01:15.450]我望着湖面\n[01:18.410]水中寒月如雪\n[01:21.410]指尖轻点融解\n[01:24.160]\n[01:24.420]断桥是否下过雪\n[01:27.370]又想起你的脸\n[01:30.360]若是无缘再见\n[01:33.320]白堤柳帘垂泪好几遍\n[02:02.140]\n[02:03.600]寻不到花的折翼枯叶蝶\n[02:08.730]永远也看不见凋谢\n[02:15.370]江南夜色下的小桥屋檐\n[02:20.900]读不懂塞北的荒野\n[02:27.390]\n[02:27.450]梅开时节因寂寞而缠绵\n[02:33.500]春归后又很快湮灭\n[02:39.380]独留我赏烟花飞满天\n[02:45.300]摇曳后就随风飘远\n[02:50.780]\n[02:51.440]断桥是否下过雪\n[02:55.870]我望着湖面\n[02:58.580]水中寒月如雪\n[03:01.580]指尖轻点融解\n[03:04.410]\n[03:04.630]断桥是否下过雪\n[03:07.580]又想起你的脸\n[03:10.560]若是无缘再见\n[03:13.570]白堤柳帘垂泪好几遍\n"
        },

        {
          name: "素颜",
          songId: 167827,
          singerName: "许嵩",
          singerId: 5771,
          duration: "00:00",
          mvId: "",
          src: "",
          listFoo: true,
          songSpeed: false,
          like: false,
          songObj: {},
          picUrl: "",
          songText:
            "[by:殇丿灬星空]\n[ti:素颜]\n[00:00.000] 作曲 : 许嵩\n[00:01.000] 作词 : 许嵩\n[00:12.750]又是一个安静的晚上\n[00:15.600]一个人窝在摇椅里乘凉\n[00:18.540]我承认这样真的很安详\n[00:20.870]和楼下老爷爷一样\n[00:24.230]听说你还在搞什么原创\n[00:27.050]搞来搞去好像也就这样\n[00:29.910]不如花点时间想想\n[00:32.000]琢磨一下模样\n[00:35.330]今夜化了美美的妆\n[00:38.150](我相信是很美美的妆)\n[00:41.180]我摇晃在舞池中央\n[00:44.010](那种体态可以想象)\n[00:47.150]我做我的改变 又何必纠结\n[00:51.210]那就拜托别和我碰面\n[00:56.860]如果再看你一眼\n[00:59.570]是否还会有感觉\n[01:02.290]当年素面朝天要多纯洁就有多纯洁\n[01:08.010]不画扮熟的眼线\n[01:10.740]不用抹匀粉底液\n[01:13.770]暴雨天 照逛街\n[01:16.560]偷笑别人花了脸\n[01:19.290]如果再看你一眼\n[01:22.190]是否还会有感觉\n[01:25.060]最真实的喜怒哀乐全都埋葬在昨天\n[01:30.600]不掺任何的表演\n[01:33.280]轰轰烈烈那几年\n[01:36.240]我怀念 别怀念\n[01:39.130]怀念也回不到从前\n[02:00.320]又是一个安静的晚上\n[02:02.680]一个人窝在摇椅里乘凉\n[02:05.580]我承认这样真的很安详\n[02:08.070]和楼下老爷爷一样\n[02:11.350]听说你还在搞什么原创\n[02:14.440]搞来搞去好像也就这样\n[02:17.200]不如花点时间想想\n[02:19.190]琢磨一下模样\n[02:22.730]今夜化了美美的妆\n[02:25.280](我相信是很美美的妆)\n[02:28.410]我摇晃在舞池中央\n[02:30.920](那种体态可以想象)\n[02:34.020]我做我的改变 又何必纠结\n[02:38.410]那就拜托别和我碰面\n[02:44.070]如果再看你一眼\n[02:46.810]是否还会有感觉\n[02:49.590]当年素面朝天要多纯洁就有多纯洁\n[02:55.320]不画扮熟的眼线\n[02:58.030]不用抹匀粉底液\n[03:00.930]暴雨天 照逛街\n[03:03.690]偷笑别人花了脸\n[03:06.550]如果再看你一眼\n[03:09.460]是否还会有感觉\n[03:12.270]最真实的喜怒哀乐全都埋葬在昨天\n[03:17.850]不掺任何的表演\n[03:20.520]轰轰烈烈那几年\n[03:23.500]我怀念 别怀念\n[03:26.140]怀念也回不到从前\n[03:30.570]曾经对上的瞬间\n[03:33.250]难道是一种错觉\n[03:35.790]那些流逝了的就永远不会复现\n[03:40.950]不掺任何的表演\n[03:43.230]轰轰烈烈那几年\n[03:46.090]有遗憾的感觉 为何感觉\n[03:50.190]那消失不见的素颜\n"
        }
      ],
      mvIdfoo: "",
      spanshow: true,
      geciIndex: 0,
      count: 0,
      totaltime: "00:00",
      currenttime: "00:00",
      src: "",
      ulFoo: false,
      scrollY: 0,
      listHeight: [], //存储右边每一项li高度,
      geciFoo: true,
      progess: 0
    };
  },
  methods: {
    //列表滚动
    hh() {
      this.rights = new BScroll(this.$refs.right, {
        click: true,
        probeType: 3 //探针的效果，时时获取滚动高度
      });
    },
    _grtHeight() {
      let rightItems = this.$refs.right.getElementsByClassName(
        "right-item-hook"
      );
      let height = 0; //默认高度
      this.listHeight.push(height); //添加高度数组中

      for (let i = 0; i < rightItems.length; i++) {
        height += rightItems[i].clientHeight; // 对象高度
        this.listHeight.push(height);
      }
    },
    //列表移动
    listMove(e) {
      this.$refs.listMask.classList.add("active");
      this.$refs.right.style.bottom = "6.25rem";
      this.$refs.right.style.opacity = 1;
      e.stopPropagation();
      console.log("xxx");
    },
    //点击盒子列表隐藏
    listBox() {
      this.$refs.listMask.classList.remove("active");
      this.$refs.right.style.bottom = "-7.8125rem";
      this.$refs.right.style.opacity = 0;
    },
    //删除列表数据
    listDel(index) {
      this.songlist.splice(index, 1);
      window.event.stopPropagation();
      this.count = index;
    },

    //去除歌曲列表冒泡事件
    ulMao() {
      window.event.stopPropagation();
    },

    //获取歌曲路径，并且播放
    playSong() {
      //console.log(this.$refs.hh.currentTime);

      if (this.songlist[this.count].src == "") {
        this.axios
          .get("https://music.kele8.cn/song/url", {
            params: {
              id: this.songlist[this.count].songId
            }
          })
          .then(response => {
            this.songlist[this.count].src = response.data.data[0].url;
          })
          .catch(error => {
            console.log(error);
          });
      }

      //获取图片

      this.axios
        .get(
          "https://music.kele8.cn/artist/album?id=" +
            this.songlist[this.count].singerId +
            "&limit",
          {}
        )
        .then(response => {
          console.log(response.data.artist.picUrl);
          this.songlist[this.count].picUrl = response.data.artist.picUrl;
          this.$refs.images.style.background =
            "url(" + this.songlist[this.count].picUrl + ")no-repeat";
          this.$refs.images.style.backgroundSize = "auto 100%";

          this.$refs.right.style.background =
            "url(" + this.songlist[this.count].picUrl + ")no-repeat";
          this.$refs.right.style.backgroundSize = "auto 100%";
        })
        .catch(error => {
          console.log(error);
        });

      for (let i = 0; i < this.songlist.length; i++) {
        this.songlist[i].listFoo = true;
      }
      this.$refs.hh.play();

      setTimeout(() => {
        this.songlist[this.count].listFoo = false;
      }, 200);
      this.$refs.images.classList.add("active");
    },
    //暂停歌曲
    songPause() {
      this.$refs.hh.pause();

      this.$refs.images.classList.remove("active");
      window.event.stopPropagation();
      for (let i = 0; i < this.songlist.length; i++) {
        this.songlist[i].listFoo = true;
      }
      this.songlist[this.count].listFoo = true;
    },
    //歌词显示
    geShow() {
      this.geciFoo = !this.geciFoo;
      window.event.stopPropagation();
    },
    //图片显示
    imgShow() {
      this.geciFoo = !this.geciFoo;
      window.event.stopPropagation();
    },
    //处理歌词
    text() {
      var array = this.songlist[this.count].songText.split("\n");
      this.songlist[this.count].songObj = array.map(function(item) {
        var regex = /\d{2}:\d{2}\.\d+/i;
        if (item.search(regex) !== -1) {
          var time = item.match(regex)[0];
          var m = time.substr(0, 2);
          var s = time.substr(3, 2);
          var n = time.substr(5, 6);
        }
        var t = item.substr(10);
        if (t.includes("]")) {
          t = item.substr(11);
        } else {
          t = item.substr(10);
        }

        return {
          time: Number(m) * 60 + Number(s) + Number(n),
          text: t || "------"
        };
      });

      //console.log(this.songlist[this.count].songObj);
    },
    //当前播放时间
    time() {
      if (isNaN(this.$refs.hh.duration)) {
        return;
      }
      this.songlist[this.count].duration = this.formatime(
        this.$refs.hh.duration
      );
      this.progess = (this.$refs.hh.currentTime / this.$refs.hh.duration) * 300;
      this.$refs.speed.style.width = (this.progess / 300) * 5 + "rem";
      this.currenttime = this.formatime(this.$refs.hh.currentTime);
      this.end();
      this.text();
      if (this.songlist[this.count].songObj.length != 0) {
        var y;
        for (let i = 0; i < this.songlist[this.count].songObj.length; i++) {
          if (
            this.$refs.hh.currentTime + 0.5 <
            this.songlist[this.count].songObj[i].time
          ) {
            // y = this.songlist[this.count].songObj[i - 1];
            y = i - 1;
            break;
          }
        }
        if (y === undefined) {
          y = this.songlist[this.count].songObj.length - 1;
        }
        this.geciIndex = y;

        this.$refs.scroll.style.transform = `translateY(${0.78125 * -y}rem)`;
      }

      //console.log(this.$refs.scroll);
    },
    // 列表顺序播放
    end() {
      var _this = this;
      this.$refs.hh.onended = function() {
        _this.count += 1;
        if (_this.count > _this.songlist.length - 1) {
          _this.count = 0;
        }
        _this.playSong();
      };
    },
    //改变input改变歌曲当前播放
    inputChange() {
      this.$refs.hh.currentTime = (this.progess * this.$refs.hh.duration) / 300;
    },
    //列表切换歌曲
    listPlay(index) {
      window.event.stopPropagation();
      this.count = index;
      this.playSong();
      this.songlist[index].listFoo = false;
    },
    //时间初始化
    formatime(time) {
      let s, m;
      s = Math.floor((time % 3600) / 60);
      m = Math.floor(time % 60);
      s = s < 10 ? "0" + s : s;
      m = m < 10 ? "0" + m : m;
      return s + ":" + m;
    },
    //下一首
    add() {
      this.count++;
      if (this.count > this.songlist.length - 1) {
        this.count = 0;
      }
      this.playSong();
      this.$refs.playspeed.style.color = "#908685";
    },
    //上一首
    subtract() {
      this.count--;
      if (this.count < 0) {
        this.count = this.songlist.length - 1;
      }
      this.playSong();
      this.$refs.playspeed.style.color = "#908685";
    },
    //倍速
    playSpeed() {
      if (!this.songlist[this.count].songSpeed) {
        this.$refs.hh.playbackRate = 2;
        this.songlist[this.count].songSpeed = true;
        this.$refs.playspeed.style.color = "orange";
      } else {
        this.$refs.hh.playbackRate = 1;
        this.songlist[this.count].songSpeed = false;
        this.$refs.playspeed.style.color = "#908685";
      }
    },
    //点击喜欢按钮
    songLike() {
      this.songlist[this.count].like = !this.songlist[this.count].like;
      //this.$store.state.likeList.push(this.songlist[this.count]);
    },
    songMoveLike() {
      this.songlist[this.count].like = !this.songlist[this.count].like;
      // if (this.$store.state.likeList.length != 0) {
      //   this.$store.state.likeList.splice(this.count, 1);
      // }
    }
  },
  computed: {
    xunhao: function() {
      var arr = [];
      for (var i = 0; i < this.songlist.length; i++) {
        arr.push(i < 9 ? "0" + (i + 1) : i + 1);
      }
      return arr;
    }
  },
  created() {
    this.$store.state.foo = false;
    //this.$parent.$refs.audioplay;
    //console.log(this.songlist);
    //console.log(this.$store.state.song.songArr);

    if (this.$store.state.playList.length != 0) {
      var len = this.$store.state.playList.length - 1;
      this.axios
        .get("http://music.kele8.cn/lyric", {
          params: {
            id: this.$store.state.playList[len].id
          }
        })
        .then(response => {
          //console.log(response.data.lrc.lyric);
          this.songlist.push({
            name: this.$store.state.playList[len].name,
            songId: this.$store.state.playList[len].id,
            singerName: this.$store.state.playList[len].ar[0].name,
            singerId: this.$store.state.playList[len].ar[0].id,
            duration: "00:00",
            mvId: "",
            src: "",
            listFoo: true,
            songSpeed: false,
            like: false,
            picUrl: "",
            songObj: {},
            songText: response.data.lrc.lyric
          });
          this.count = this.songlist.length - 1;
          //跳转过来获取图片
          this.axios
            .get(
              "https://music.kele8.cn/artist/album?id=" +
                this.songlist[this.count].singerId +
                "&limit",
              {}
            )
            .then(response => {
              this.songlist[this.count].picUrl = response.data.artist.picUrl;
              this.$refs.images.style.background =
                "url(" + this.songlist[this.count].picUrl + ")no-repeat";
              this.$refs.images.style.backgroundSize = "auto 100%";

              this.$refs.right.style.background =
                "url(" + this.songlist[this.count].picUrl + ")no-repeat";
              this.$refs.right.style.backgroundSize = "auto 100%";
            })
            .catch(error => {
              console.log(error);
            });
        })
        .catch(error => {
          console.log(error);
        });
    }

    if (this.$store.state.song.songArr.length != 0) {
      var le = this.$store.state.song.songArr.length - 1;
      this.axios
        .get("http://music.kele8.cn/lyric", {
          params: {
            id: this.$store.state.song.songArr[le].id
          }
        })
        .then(response => {
          //console.log(response.data.lrc.lyric);
          this.songlist.push({
            name: this.$store.state.song.songArr[le].name,
            songId: this.$store.state.song.songArr[le].id,
            singerName: this.$store.state.song.songArr[le].artists[0].name,
            singerId: this.$store.state.song.songArr[le].artists[0].id,
            duration: "00:00",
            mvId: this.$store.state.song.songArr[le].mvid,
            src: "",
            listFoo: true,
            songSpeed: false,
            like: false,
            picUrl: "",
            songObj: {},
            songText: response.data.lrc.lyric
          });

          this.count = this.songlist.length - 1;

          //跳转过来获取图片
          this.axios
            .get(
              "https://music.kele8.cn/artist/album?id=" +
                this.songlist[this.count].singerId +
                "&limit",
              {}
            )
            .then(response => {
              this.songlist[this.count].picUrl = response.data.artist.picUrl;
              this.$refs.images.style.background =
                "url(" + this.songlist[this.count].picUrl + ")no-repeat";
              this.$refs.images.style.backgroundSize = "auto 100%";

              this.$refs.right.style.background =
                "url(" + this.songlist[this.count].picUrl + ")no-repeat";
              this.$refs.right.style.backgroundSize = "auto 100%";
            })
            .catch(error => {
              console.log(error);
            });
        })
        .catch(error => {
          console.log(error);
        });
    }
    //获取固定的歌单列表
    //http://music.kele8.cn
    // this.axios
    //   .get("https://music.kele8.cn/search/suggest", {
    //     params: {
    //       keywords: "素颜"
    //     }
    //   })
    //   .then(response => {
    //     console.log(response.data);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  },
  mounted() {
    this.$nextTick(() => {
      this.hh(); //调用初始化联动效果
      this._grtHeight(); //获取右边每一项高度
    });
  },

  undated() {},
  beforeDestroy() {
    this.$store.state.foo = true;
    this.songlist.pop();
  }
};
</script>
<style lang="scss" scoped>
.box {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #40382b;
  .mask {
    width: 100%;
    height: 100%;
    position: absolute;
    filter: blur(50px) brightness(0.8);
    z-index: -1;
  }
}

//返回
.topSearch {
  width: 100%;

  margin-top: 0.15625rem;
  .van-icon {
    text-align: center;
    display: block;
    font-size: 0.46875rem;
    height: 0.6875rem;
    line-height: 0.6875rem;
    color: white;
  }
  a {
    color: white;
    font-size: 0.46875rem;
    display: block;
    text-align: center;
    height: 0.6875rem;
    line-height: 0.6875rem;
    width: 100%;
    overflow: hidden;
  }
  h5 {
    padding: 0;
    margin: 0;
    width: 100%;
    text-align: center;
    color: white;
    font-size: 0.390625rem;
    font-weight: normal;
    margin-top: 0.15625rem;
    letter-spacing: 0.078125rem;
    i {
      font-style: normal;
      margin-left: 0.15625rem;
      padding: 0.078125rem 0.15625rem;
      color: white;
      font-size: 0.3125rem;
      background-color: #565044;
      border-radius: 0.3125rem;
    }
  }
}

//返回end

//按钮

.btn {
  margin-top: 0.46875rem;
  a {
    width: 1.25rem;
    height: 0.625rem;
    display: block;
    background-color: #5b5549;
    border-radius: 0.1875rem;
    color: #fffffa;
    font-size: 0.3125rem;
    text-align: center;
    line-height: 0.625rem;
    border: 1px solid #9a958f;
  }
}

//按钮end

//写真

.img {
  margin-top: 1.5625rem;

  .images {
    width: 7.8125rem;
    height: 7.8125rem;
    background-color: pink;
    border-radius: 50%;
    margin: 0 auto;
    border: 1.09375rem solid rgb(32, 32, 32);
    box-sizing: border-box;
    background: url("https://p2.music.126.net/ql3nSwy0XKow_HAoZzRZgw==/109951163111196186.jpg")
      no-repeat;
    background-size: auto 100%;
    animation: changs 6s linear infinite;
    animation-play-state: paused;
    &.active {
      animation-play-state: running;
    }
  }
  .ge {
    width: 100%;
    height: 7.8125rem;
    //background-color: orange;
    overflow: hidden;

    ul {
      padding: 0;
      margin: 0;
      list-style: none;
      position: relative;
      top: 50%;
      transform: translateY(0rem);
      transition: all 0.5s;
      li {
        overflow: hidden;
        width: 100%;
        height: 0.78125rem;
        font-size: 0.3125rem;
        line-height: 0.78125rem;
        text-align: center;
        color: white;
        &.active {
          color: rgb(238, 175, 58);
          transition: all 0.5s;
          font-size: 0.390625rem;
        }
      }
    }
  }
}

@keyframes changs {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

//写真end

//功能

.icon {
  margin-top: 0.3125rem;
  a {
    display: block;
    margin: 0 auto;
    text-align: center;
    color: white;

    span {
      font-size: 0.625rem;
    }
  }
}

//功能end

//进度条

.bar {
  margin-top: 0.46875rem;
  a {
    width: 100%;
    height: 0.46875rem;
    line-height: 0.46875rem;
    display: block;
    text-align: center;
    margin: 0 auto;
    font-size: 0.390625rem;
    color: #dbd6d6;
  }
  .time {
    position: relative;
    width: 5rem;
    height: 0.078125rem;
    background-color: #908685;
    margin: 0 auto;
    margin-top: 0.195313rem;
    z-index: 999;
    input {
      width: 5rem;
      margin: 0;
      height: 0.15625rem;
      display: inline-block;
      position: absolute;
      top: 0;
      left: 0;
    }
    input[type="range"] {
      -webkit-appearance: none;
      width: 5rem;
      border-radius: 10px;
      height: 0.15625rem;
      // margin-top: 12.5px;
      /*这个属性设置使填充进度条时的图形为圆角*/
      outline: none;
      cursor: pointer;
      background-color: #908685;
    }

    input[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 0.46875rem;
      width: 0.46875rem;
      //margin-top:-0.15625rem;
      /*使滑块超出轨道部分的偏移量相等*/
      background: #ffffff;
      border-radius: 50%;
      z-index: 5;
      position: relative;
      //top:-0.234375rem;
    }
    .speed {
      position: absolute;
      width: 0;
      height: 0.15625rem;
      background-color: white;
      z-index: 0;
    }
  }
}

//进度条end

//播放功能

.playsong {
  margin-top: 0.9375rem;
  .cut {
    width: 100%;
    height: 0.78125rem;
    margin-top: 10px;
    color: white;
    text-align: center;
    line-height: 0.78125rem;
    span {
      width: 20%;
      display: block;
      text-align: center;
      font-size: 0.625rem;
      float: left;
      margin: 0 0;
      &:nth-child(3) {
        font-size: 0.859375rem;
      }
      &:nth-child(4) {
        font-size: 0.859375rem;
      }
    }
  }
}

//播放功能end

//播放列表

.playList {
  .list {
    position: relative;
    width: 97%;
    bottom: -7.8125rem;
    height: 7.8125rem;
    z-index: 10000;
    overflow: hidden;
    padding: 0.15625rem;
    border-radius: 0.46875rem;
    background: url("https://p2.music.126.net/ql3nSwy0XKow_HAoZzRZgw==/109951163111196186.jpg");
    background-size: 100% auto;
    transition: all 1s;
    opacity: 0;

    &::after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 7.8125rem;
      background: rgba(0, 0, 0, 0.6);
      z-index: 0;
      border-radius: 0.46875rem;
    }

    ul {
      padding: 0;
      margin: 0;
      list-style: none;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 10;
      border-radius: 0.46875rem;
      li {
        color: #99979a;
        font-size: 0.46875rem;
        margin: 0.15625rem;
        border-bottom: 1px solid #cccccc;
        width: 100%;
        height: 1.25rem;
        line-height: 1.25rem;
        &.active {
          color: #005fbd;
        }
        span {
          margin: 0 0.3125rem;
          float: right;
          color: #99979a;
        }
      }
      p {
        width: 100%;
        height: 0.3125rem;
      }
    }
  }
}

//播放列表end
.listMask {
  width: 100%;
  height: 23.4375rem;
  position: absolute;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: none;
  &.active {
    display: block;
  }
}
</style>