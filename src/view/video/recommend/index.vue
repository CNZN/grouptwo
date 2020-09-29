<!-- 组件说明 -->
<template>
  <div class="recommend">
    <div class="conVideo">
      <div class="video">
          <video controls>
              <source src='../../../assets/data/mvs/pa.mp4'/>
          </video>
          <div class="videoDesc">
              <p class="videoTitle">仙剑奇侠传三影视原声</p>
              <div class="likeIt">
                  <van-icon class="icon" name="like-o" />
                  <p>88</p>
              </div>
              <div class="commentIt">
                  <van-icon class="icon" name="comment-o" />
                  <p>22</p>
              </div>
              <div class="lookMore">
                  <van-icon class="icon" name="more-o" />
              </div>
          </div>
      </div>
    </div>
    <div class="conVideo">
      <div class="video">
          <video controls>
              <source src='../../../assets/data/mvs/yz.mp4'/>
          </video>
          <div class="videoDesc">
              <p class="videoTitle">仙剑奇侠传三影视原声</p>
              <div class="likeIt">
                  <van-icon class="icon" name="like-o" />
                  <p>66</p>
              </div>
              <div class="commentIt">
                  <van-icon class="icon" name="comment-o" />
                  <p>11</p>
              </div>
              <div class="lookMore">
                  <van-icon class="icon" name="more-o" />
              </div>
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
  methods: {},
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
.recommend{
    margin-top:80px;
}
.conVideo {
  padding: 5px;
  height: 290px;
  
  .video{
      width: 100%;
      height: 200px;
      video{
          width:100%;
      }
  }
  .videoDesc{
      width: 100%;
      height: 40px;
      border-top:1px solid #cecece;
      border-bottom:1px solid #cecece;
      display: flex;
      .videoTitle{
          line-height: 40px;
          text-indent: 5px;
          font-size: 14px;
          width: 150px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          margin-right: 10px;
      }
      .likeIt{
          display: flex;
          font-size: 14px;
          margin-left: 20px;
          .icon{
              line-height: 40px;
          }
          p{
              font-size: 12px;
              line-height: 40px;
              margin-left: 5px;
          }
      }
      .commentIt{
         @extend .likeIt
      }
      .lookMore{
          @extend .likeIt
      }
      
  }
}

</style>
