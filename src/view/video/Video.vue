<template>
  <div class="video">
    <Header1></Header1>
     <div class="content">
      <ul class="conNav">
        <li><router-link tag="span" to="/video/recommend">推荐</router-link></li>
        <li><router-link tag="span" to="/video/music">音乐</router-link></li>
        <li><router-link tag="span" to="/video/showtime">Showtime</router-link></li>
        <li><router-link tag="span" to="/video/mv">MV</router-link></li>
        <li><router-link tag="span" to="/video/erciyuan">二次元</router-link></li>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header1 from "../../components/Header1";
export default {
  name: "Video",
  components: {
    Header1,
  },
};
</script>

<style lang='scss' scoped>
.header1{
  position: fixed;
  top:0%;
  width: 100%;
  z-index: 10;
}
.conNav{
        display: flex;
        width: 100%;
        border-top: 1px solid #E9665C;
        background-color: #e4463b;
        position: fixed;
        top:40px;
        z-index: 10;
      }
      .conNav li{
        flex:0.2;
        font-size: 14px;
        text-align: center;
        color: #fff;
        height: 40px;
        line-height: 40px;
      }
      .conNav li span{
          display: inline-block;
          height: 32px;
      }
      .active{
          border-bottom: 2px solid #fff;
          font-weight: 600;
      }
     
</style>