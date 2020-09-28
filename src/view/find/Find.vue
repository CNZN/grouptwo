<template>
  <div class="friend">
    <Header1 class="h"></Header1>
    <div class="con">
      <ul>
        <router-link to="/find/gexing" tag="li">个性推荐</router-link>
        <router-link to="/find/zhubo" tag="li">主播电台</router-link>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Header1 from "../../components/Header1"
  export default {
    name: 'Friend',
    components: {
      Header1
    }
  }
</script>

<style scoped lang="scss">
  .h{
    position: fixed;
    z-index: 1;
    width: 100%;
  }
  .con{
    width: 100%;
    height: 2.5rem;
    
    position: absolute;
    top: 2.8rem;

    ul{
      width: 100%;
      height: 2.5rem;
      position: fixed;
      z-index: 1;
      background-color:  #e4463b;

      li{
        width: 50%;
        height: 100%;
        color:#fff;
        float: left;
        text-align: center;
        line-height: 2.5rem;
        box-sizing: border-box;
      }
    }
  }

  .active{
    border-bottom: .3rem solid rgb(177, 32, 32);
  }
</style>