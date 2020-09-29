<!-- 组件说明 -->
<template>
  <div class="mvplay">
    <div class="playTitle">
      <van-icon class="icon" name="arrow-left" @click="goback" />
      <p>播放MV</p>
      <van-icon class="icon" name="shrink" />
    </div>
    <div class="conVideo">
      <div class="video">
        <video controls>
          <source src="../../assets/data/mvs/pa.mp4" />
        </video>
        <div class="videoDesc">
          <p class="videoTitle">
            超级面对面 第221期 等风来不如迎风跑
          </p>
          <p class="ftime">发布：2020-06-12</p>
          <div class="mvRecommend">
            <p>春风十里</p>
            <p>鹿先森乐队</p>
            <p>民谣</p>
            <p>中文翻唱</p>
            <p>音乐</p>
            <p>民谣</p>
            <p>中文翻唱</p>
            <p>音乐</p>
          </div>
        </div>
        <div class="comment">
            <p class="likeIt">
                <van-icon name="like-o" class="icon"/>
                <span>5686</span>
            </p>
            <p class="likeIt"><van-icon name="star-o" class="icon" />
            <span>3255</span>
            </p>
            <p class="likeIt"><van-icon name="comment-o" class="icon" />
            <span>3255</span>
            </p>
            <p class="likeIt">
                <van-icon name="more-o" class="icon" />
                <span>256</span>
            </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    goback() {
      history.go(-1);
    },
  },
  created() {},
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>

<style lang="scss" scoped>
.playTitle {
  height: 40px;
  background: #e4463b;
  color: #fff;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 600;
  line-height: 40px;
  padding: 0 20px;
  .icon {
    margin-top: 10px;
  }
}
.conVideo {
  padding: 5px;
  height: 290px;

  .video {
    width: 100%;
    height: 200px;
    video {
      width: 100%;
    }
  }
  .videoTitle {
    height: 40px;
    border-bottom: 1px solid #cecece;
    line-height: 40px;
    color: #666;
    text-indent: 8px;
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .ftime {
    font-size: 12px;
    color: #999;
    text-indent: 8px;
    margin-top: 15px;
  }
  .mvRecommend{
      margin-top:10px;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      p{
          margin-top:10px;
          padding: 0 10px;
          height: 30px;
          color: #666;
          border:1px solid #cecece;
          line-height: 30px;
          border-radius: 15px;
          margin-left: 10px;
          font-size: 14px;
      }
  }
  .comment{
      margin-top:20px;
      display: flex;
      justify-content: space-around;
      border-bottom: 1px solid #cecece;
      height: 55px;
      .likeIt{
          direction: flex;
          flex-direction: column;
          justify-content: center;
          span{
              display: block;
              font-size: 12px;
              color: #999;
              text-indent: 2px;
          }
          .icon{
              font-size: 30px;
              color: #666;
          }
      }
  }
}
</style>
