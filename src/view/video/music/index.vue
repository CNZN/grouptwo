<!-- 组件说明 -->
<template>
  <div class="music">
    <div class="swipeBox">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item
          ><img src="../../../assets/images/item0.jpg"
        /></van-swipe-item>
        <van-swipe-item
          ><img src="../../../assets/images/item1.jpg"
        /></van-swipe-item>
        <van-swipe-item
          ><img src="../../../assets/images/item2.jpg"
        /></van-swipe-item>
        <van-swipe-item
          ><img src="../../../assets/images/item3.jpg"
        /></van-swipe-item>
        <van-swipe-item
          ><img src="../../../assets/images/item4.jpg"
        /></van-swipe-item>
        <van-swipe-item
          ><img src="../../../assets/images/item5.jpg"
        /></van-swipe-item>
        <van-swipe-item
          ><img src="../../../assets/images/item6.jpg"
        /></van-swipe-item>
      </van-swipe>
    </div>
    <div class="newBox">
      <div class="newTitle">
        <h3>最新上线</h3>
      </div>
      <div class="newCon">
        <div class="newConItem" @click="broadcast">
          <img src="../../../assets/images/kexiMV.jpg" alt="" />
          <p>超级面对面 第221期 等风来不如迎风跑</p>
          <div class="itemBottom">
            <span class="itemCount">
              <van-icon name="service-o" />
              <i>120万</i>
            </span>
            <span class="itemOn" @click="broadcast"
              ><van-icon name="play-circle-o" class="icon"
            /></span>
          </div>
        </div>
        <div class="newConItem">
          <img src="../../../assets/images/yuanzhouMV.jpg" alt="" />
          <p>一周速报 EP20 快来体验吧</p>
          <div class="itemBottom">
            <span class="itemCount">
              <van-icon name="service-o" />
              <i>82万</i>
            </span>
            <span class="itemOn" @click="broadcast"
              ><van-icon name="play-circle-o" class="icon"
            /></span>
          </div>
        </div>
      </div>
      <div class="newCon">
        <div class="newConItem">
          <img src="../../../assets/images/kexiMV.jpg" alt="" />
          <p>超级面对面 第221期 等风来不如迎风跑</p>
          <div class="itemBottom">
            <span class="itemCount">
              <van-icon name="service-o" />
              <i>120万</i>
            </span>
            <span class="itemOn" @click="broadcast"
              ><van-icon name="play-circle-o" class="icon"
            /></span>
          </div>
        </div>
        <div class="newConItem">
          <img src="../../../assets/images/yuanzhouMV.jpg" alt="" />
          <p>一周速报 EP20 快来体验吧</p>
          <div class="itemBottom">
            <span class="itemCount">
              <van-icon name="service-o" />
              <i>82万</i>
            </span>
            <span class="itemOn" @click="broadcast"
              ><van-icon name="play-circle-o" class="icon"
            /></span>
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
.music{
  margin-top:80px;
}
.swipeBox {
  padding: 20px 15px;
}
.my-swipe {
  border-radius: 15px;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
  width: 100%;
  height: 150px;
  img {
    height: 150px;
  }
}

.newBox {
  margin-top: 10px;
  padding: 0 15px 20px;
  .newTitle {
    font-size: 18px;
    font-weight: 600;
  }
}
.newCon {
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  .newConItem {
    width: 160px;
    position: relative;
    img {
      width: 100%;
      border-radius: 5px;
    }
    p {
      margin-top: 10px;
      font-size: 14px;
      line-height: 18px;
    }
    .itemBottom{
        position: absolute;
        top:62px;
        width: 160px;
        height: 30px;
        background: rgba(0,0,0,0.5);
        display: flex;
        color: #fff;
        .itemCount{
            font-size: 14px;
            text-indent: 5px;
            height: 30px;
            line-height: 30px;
        }
        .itemOn{
            margin-left: 60px;
            height: 30px;
            .icon{
                font-size: 22px;
                line-height: 30px;
            }
        }
    }
    
  }
}
</style>
