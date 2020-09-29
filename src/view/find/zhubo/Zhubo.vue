<template>
  <div class="zhibo">
        <div class="banner">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img src="../../../assets/images/item0.jpg" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../../assets/images/item1.jpg" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../../assets/images/item2.jpg" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../../assets/images/item3.jpg" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>

    <div class="list">
      <ul>
        <router-link to="/diantaifenlei" tag="li">
          <div class="t">
            <van-icon name="cluster-o" />
          </div>
          <p>电台分类</p>
        </router-link>
        <router-link to="/find/zhubo/paihang" tag="li">
          <div class="t">
            <van-icon name="award-o" />
          </div>
          <p>电台排行</p>
        </router-link>
        <router-link to="/find/zhubo/fufei" tag="li">
          <div class="t">
            <van-icon name="good-job-o" />
          </div>
          <p>付费精品</p>
        </router-link>
        <router-link to="/find/zhubo/vip" tag="li">
          <div class="t">
            <van-icon name="vip-card-o" />
          </div>
          <p>会员专区</p>
        </router-link>
      </ul>
    </div>

    <router-view class="show"></router-view>


  </div>
  
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
  .zhibo{
    width: 100%;
    position: absolute;
    top: 0px;
  }

  .banner {
    width: 95%;
    height: 9rem;
    margin-left: 2.5%;
    margin-top: 3.2rem;
    border-radius: .5rem;
  }

  .my-swipe {
    height: 100%;
  }

  .my-swipe .van-swipe-item {
    height: 100%;
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    // background-color: #39a9ed;
  }

  .list {
    width: 100%;
    height: 4.8rem;
    position: absolute;
    top: 13.5rem;
    left: 0;
    border-bottom: 1px solid #cecece;

    ul {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-around;

      li {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .t {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          background-color: #e4463b;
          text-align: center;
          line-height: 3rem;
          color: #fff;
          font-size: 1.6rem;
        }

        p {
          margin-top: .3rem;
          font-size: .35rem;
        }
      }
    }
  }

  img{
    width: 100%;
    height: 100%;
  }

  .show{
    margin-top: 100px;

  }

  .active p{
    color:#e4463b
  }

</style>