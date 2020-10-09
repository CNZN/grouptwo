<template>
  <div class="play">
    <Back></Back>
    <div id="right">
      <!-- 专辑页面 -->
      <div class="main">
        <img
          id="big"
          :src="picUrl"
          alt=""
          class="cover autoRotate"
          :class="{ pause: isPause }"
        />
        <!-- autoplay:自动播放,controls显示控件 ;@play="play"是自定义方法-->
        <audio
          :src="songUrl"
          loop="true"
          autoplay
          controls
          @play="play"
          @pause="pause"
        ></audio>
      </div>
      <h3>精彩评论</h3>
      <div class="comment">
        <ul class="comments">
          <!-- 遍历数组时,需要动画时才用到key -->
          <li v-for="(item, index) in comments" :key="index">
            <div class="left">
              <img :src="item.user.avatarUrl" alt="" id="small" />
              <a href="#">{{ item.user.nickname }}</a>
            </div>
            <div class="right">
              <p>{{ item.content }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Back from "./Back";
export default {
  name: "Play",
  data() {
    return {
      id: null,
      albumId: null,
      picUrl: null,
      songUrl: null,
      comments: null,
      isPause: false,
    };
  },
  components: {
    Back,
  },
  computed: {
    // id(){
    //   return this.$store.state.id;
    // },
    // albumId(){
    //   return this.$store.state.albumId;
    // }
  },
  created() {
    this.id = this.$route.query.mid;
    this.albumId = this.$route.query.aid;
  },
  mounted() {
    this.playMusic();
  },
  methods: {
    playMusic() {
      //获取歌曲的url
      this.$http
        .get(`https://autumnfish.cn/song/url?id=${this.id}`)
        .then((response) => {
          // console.log(response);
          //将结果添加到musicList中
          this.songUrl = response.data.data[0].url;
        });
      // 获取专辑信息
      this.$http
        .get(`https://autumnfish.cn/album?id=${this.albumId}`)
        .then((res) => {
          this.picUrl = res.data.album.blurPicUrl;
        });
      //获取评论内容接口
      this.$http
        .get(`https://autumnfish.cn/comment/music?id=${this.id}&limit=1`)
        .then((res) => {
          console.log(res);
          this.comments = res.data.hotComments;
        });
    },
    //钩子函数:动画执行完后去除了style属性,不去掉会卡顿
    afterEnter(el) {
      el.style = "";
    },
    // 专辑图片旋转事件
    play() {
      console.log("播放");
      this.isPause = false;
    },
    pause() {
      console.log("暂停");
      this.isPause = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  audio {
    margin: 20px 0;
  }
}
#big {
  width: 200px;
  height: 200px;
  border-radius: 50%;
}
@keyframes autoRotate {
  to {
    transform: rotateZ(360deg);
  }
}

/* 动画播放样式 */
.autoRotate {
  /* 动画名,一直播放iteration(一直重复),匀速(timing)，时间2s(duration),状态(running) */
  animation-name: autoRotate;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-duration: 8s;
  animation-play-state: running;
}

#small {
  width: 25px;
  height: 25px;
  border-radius: 50%;
}
h3 {
  font-weight: 900;
  font-size: 25px;
}
.comments {
  li {
    border-bottom: 1px solid #eeeeee;
  }
}
</style>