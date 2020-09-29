<!-- 组件说明 -->
<template>
  <div class="mv">
    <div class="mvBox">
      <div class="mvTitle">
        <h3>MV精选</h3>
        <p>更多MV</p>
      </div>
      <div class="mvCon">
        <div class="mvItem" @click="broadcast">
          <img src="../../../assets/images/yeziMV.jpg" />
          <p class="itemCount">
              <van-icon name="service-o" class="icon" />
              9480
          </p>
          <p class="mvDesc">云上LIVE 魏如萱</p>
        </div>
        <div class="mvItem" @click="broadcast">
          <img src="../../../assets/images/kexiMV.jpg" />
          <p class="itemCount">
              <van-icon name="service-o" class="icon"/>
              17090
          </p>
          <p class="mvDesc">云上LIVE 魏如萱</p>
        </div>
      </div>
       <div class="mvCon">
        <div class="mvItem" @click="broadcast">
          <img src="../../../assets/images/yeziMV.jpg" />
          <p class="itemCount">
              <van-icon name="service-o" class="icon" />
              9480
          </p>
          <p class="mvDesc">云上LIVE 魏如萱</p>
        </div>
        <div class="mvItem" @click="broadcast">
          <img src="../../../assets/images/kexiMV.jpg" />
          <p class="itemCount">
              <van-icon name="service-o" class="icon"/>
              17090
          </p>
          <p class="mvDesc">云上LIVE 魏如萱</p>
        </div>
      </div>
      <div class="mvTitle">
        <h3>更多精彩MV</h3>
        <p>MV分类</p>
      </div>
      <div class="mvMore" @click="broadcast">
        <img src="../../../assets/images/pianaiMV.jpg" alt="">
        <div class="mvup">
          <p class="topRight">mv</p>
          <p class="center"><van-icon name="play-circle-o" /></p>
          <p class="bottomRight"><van-icon name="service-o" />330万</p>
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
    broadcast() {
     this.$router.push({
       path:'/mvplay'
     }).catch(err=>{
       console.log(err)
     })
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
.mv{
    margin-top:80px;
    overflow-y:auto;
}
.mvBox {
  padding: 0px 15px;
}
.mvTitle {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top:30px;
  h3 {
    font-size: 18px;
    font-weight: 600;
    margin-top: 3px;
  }
  p {
    width: 60px;
    height: 20px;
    font-size: 12px;
    border: 1px solid #cecece;
    border-radius: 10px;
    text-align: center;
    line-height: 20px;
    color: #666;
  }
}
.mvCon {
    display: flex;
    justify-content: space-around;
    .mvItem{
        margin-top: 20px;
        width: 160px;
        position: relative;
        img{
            border-radius: 5px;
        }
        .itemCount{
            position: absolute;
            background: rgba(0,0,0,0.3);
            color: #fff;
            top:5px;
            right: 8px;
            width: 60px;
            height: 18px;
            font-size: 12px;
            border-radius: 9px;
            text-align: center;
        }
    }
    .mvDesc{
        font-size: 14px;
        margin-top:10px;
    }
    
}
.mvMore{
      width: 100%;
      margin-top:20px;
      margin-bottom:50px;
      position: relative;
      img{
        width: 100%;
        border-radius: 10px;
        height: 200px;
      }
      .mvup{
        width: 100%;
        height: 200px;
        border-radius: 10px;
        background: rgba(0,0,0,0.2);
        position: absolute;
        top:0;
        .topRight{
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
          top:10px;
          right: 10px;
        }
        .bottomRight{
          color: #fff;
          position: absolute;
          bottom:10px;
          right: 10px;
          font-size: 12px;
        }
        .center{
          position: absolute;
          top:70px;
          left: 150px;
          font-size: 50px;
          color: #d8d8d4;
        }
      }
    }
</style>
