<!-- 组件说明 -->
<template>
  <div class="erciyuan">
    <div class="erciyuanCon">
      <div class="mvMore" @click="broadcast">
        <img src="../../../assets/images/pianaiMV.jpg" alt="" />
        <div class="mvup">
          <p class="topRight">mv</p>
          <p class="center"><van-icon name="play-circle-o" /></p>
          <p class="bottomRight"><van-icon name="service-o" />330万</p>
        </div>
        <p class="mvDsc">
          仙剑奇侠传原生大碟
        </p>
      </div>
    </div>
     <div class="erciyuanCon">
      <div class="mvMore" @click="broadcast">
        <img src="../../../assets/images/pianaiMV.jpg" alt="" />
        <div class="mvup">
          <p class="topRight">mv</p>
          <p class="center"><van-icon name="play-circle-o" /></p>
          <p class="bottomRight"><van-icon name="service-o" />330万</p>
        </div>
        <p class="mvDsc">
          仙剑奇侠传原生大碟
        </p>
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
      broadcast(){
          this.$router.push({
       path:'/mvplay'
     }).catch(err=>{
       console.log(err)
     })
      }
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
.erciyuan {
  margin-top: 90px;
}
.erciyuanCon {
  padding: 0 10px;
}
.mvMore {
  width: 100%;
  position: relative;
  margin-bottom: 10px;
  img {
    width: 100%;
    border-radius: 10px;
    height: 200px;
  }
  border-bottom: 1px solid #efefef;
  .mvup {
    width: 100%;
    height: 200px;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 0;
    .topRight {
      width: 40px;
      height: 20px;
      color: #fff;
      border: 1px solid #e4e2e2;
      font-size: 18px;
      line-height: 20px;
      text-align: center;
      border-radius: 10px;
      background: rgba(134, 131, 131, 0.3);
      position: absolute;
      top: 10px;
      right: 10px;
    }
    .bottomRight {
      color: #fff;
      position: absolute;
      bottom: 10px;
      right: 10px;
      font-size: 12px;
    }
    .center {
      position: absolute;
      top: 70px;
      left: 150px;
      font-size: 50px;
      color: #d8d8d4;
    }
  }
  .mvDsc {
    height: 40px;
    line-height: 40px;
    text-indent: 5px;
    border-bottom: 1px solid #efefef;
    color: #666;
  }
}
</style>
