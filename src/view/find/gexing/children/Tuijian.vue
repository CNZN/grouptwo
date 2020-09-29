<template>
  <div class="tuijian">
    <h3>推荐歌单</h3>

    <div class="list">
      <ul>
        <li @click="showBlack(1001)">
          <van-icon name="service" class="icon"/>
          <span>13万</span>
          <img src="../../../../assets/images/sl1.jpg" alt="">
          <p>Tony老师，做头发时放点R&B听呗</p>
          <div class="black" v-show="showBlackFlag">
            <van-icon name="play-circle" class="bofang" @click="music(1001)"/>
          </div>
        </li>
        <li @click="showBlack(1002)">
          <van-icon name="service" class="icon"/>
          <span>12万</span>
          <img src="../../../../assets/images/sl2.jpg" alt="">
          <p>宝藏音乐观丨舒适旋律渲染微醺夜色</p>
          <div class="black" v-show="showBlackFlag">
            <van-icon name="play-circle" class="bofang" @click="music(1002)"/>
          </div>
        </li>
        <li class="no" @click="showBlack(1003)">
          <van-icon name="service" class="icon"/>
          <span>15万</span>
          <img src="../../../../assets/images/sl3.jpg" alt="">
          <p>温柔是黑暗世界里永恒的光</p>
          <div class="black" v-show="showBlackFlag">
            <van-icon name="play-circle" class="bofang" @click="music(1003)"/>
          </div>
        </li>
        <li @click="showBlack(1004)">
          <van-icon name="service" class="icon"/>
          <span>14万</span>
          <img src="../../../../assets/images/sl4.jpg" alt="">
          <p>草叶集|惠特曼式悠闲</p>
          <div class="black" v-show="showBlackFlag">
            <van-icon name="play-circle" class="bofang" @click="music(1004)"/>
          </div>
        </li>
        <li>
          <van-icon name="service" class="icon"/>
          <span>19万</span>
          <img src="../../../../assets/images/sl5.jpg" alt="">
          <p>温柔是黑暗世界里永恒的光</p>
          <div class="black" v-show="showBlackFlag">
            <van-icon name="play-circle" class="bofang" @click="music()"/>
          </div>
        </li>
        <li  class="no">
          <van-icon name="service" class="icon"/>
          <span>25万</span>
          <img src="../../../../assets/images/sl6.jpg" alt="">
          <p>Tony老师，做头发时放点R&B听呗</p>
          <div class="black" v-show="showBlackFlag">
            <van-icon name="play-circle" class="bofang" @click="music()"/>
          </div>
        </li>
        <li>
          <van-icon name="service" class="icon"/>
          <span>22万</span>
          <img src="../../../../assets/images/sl7.jpg" alt="">
          <p>宝藏音乐观丨舒适旋律渲染微醺夜色</p>
          <div class="black" v-show="showBlackFlag">
            <van-icon name="play-circle" class="bofang" @click="music()"/>
          </div>
        </li>
        <li>
          <van-icon name="service" class="icon"/>
          <span>32万</span>
          <img src="../../../../assets/images/sl8.jpg" alt="">
          <p>温柔是黑暗世界里永恒的光</p>
          <div class="black" v-show="showBlackFlag">
            <van-icon name="play-circle" class="bofang" @click="music()"/>
          </div>
        </li>
        <li  class="no">
          <van-icon name="service" class="icon"/>
          <span>43万</span>
          <img src="../../../../assets/images/sl9.jpg" alt="">
          <p>草叶集|惠特曼式悠闲</p>
          <div class="black" v-show="showBlackFlag">
            <van-icon name="play-circle" class="bofang" @click="music()"/>
          </div>
        </li>
        
      </ul>

    </div>


  </div>
</template>

<script>
export default {
  data(){
    return{
      showBlackFlag:false
    }
  },
  methods:{
    showBlack(){
      this.showBlackFlag = true;
    },
    music(){
      this.$router.push({
        path:"/play"
      });
    }
  }
}
</script>

<style scoped lang="scss">
.tuijian{
  overflow-y: scroll;
}
h3{
  font-weight: bold;
}
.list{
  width:100%;
  margin-top: 20px;
  box-sizing: border-box;
  margin-bottom: 30px;

  ul{
    width: 100%;

    li{
      float: left;
      width: 100px;
      height: 150px;
      // background-color: paleturquoise;
      margin-right: 21px;
      margin-bottom: 20px;
      position: relative;

      .icon{
        position: absolute;
        top: 8px;
        right: 35px;
        color: #fff;
        font-size: 12px;
      }

      span{
        position: absolute;
        top: 8px;
        right: 8px;
        color: #fff;
        font-size: 12px;
      }

      img{
        width: 100px;
        height: 100px;
      }

      p{
        font-size: 12px;
        color: #333;
        line-height: 1.5;
      }

      .black{
        width: 100%;
        height: 100px;
        background-color: rgba($color: #000000, $alpha: .4);
        position: absolute;
        top: 0;
        left: 0;

        .bofang{
          color:#eee;
          font-size: 40px;
          opacity: .8;
          display: block;
          margin-left: 30px;
          margin-top: 30px;
        }


      }
    }

    .no{
      margin-right: 0;
    }

  }
  
}

</style>
