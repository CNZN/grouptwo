<template>
  <div class="fm">
    <div class="left">
      <img src="../../../../assets/images/sing.jpg" alt="">
      <div class="b">
        <van-icon name="like-o" />
        <van-icon name="play-circle-o" @click="music()"/>
        <van-icon name="down" />
      </div>

    </div>
    <div class="right">
      <h3>他的爱</h3>
      <div class="tit">
        <span>专辑：慢慢懂</span>
        <span>歌手：汪苏泷</span>
      </div>
      <div class="word">
        <p>
          演唱：汪苏泷<br>
          作词：汪苏泷<br>
          作曲：汪苏泷<br>
          我走在街上听着歌<br>
          眼眶也是红的<br>
          想起你昨天对我说<br>
          你和他在拉扯<br>
          电话里的我<br>
          安慰着你别难过<br>
          其实 你不懂我比你更难过<br>
          我是有多么舍不得<br>
          把你交给他了<br>
          但嘴上却要倔强着<br>
          祝福你们快乐<br>
          海边的焰火<br>
          绚烂着我的寂寞<br>
          也把 我的回忆慢慢触痛了<br>
          他的爱如果变成了一种施舍<br>
          就像那蜗牛背上了重重的壳<br>
          你原本就可以看得透彻<br>
          又何必自找 失落<br>
          我的爱只能像微风悄悄掠过<br>
          任你去做那一只扑火的飞蛾<br>
          也不能改变故事的结果<br>
          和你的选择<br>
          我是有多么舍不得<br>
          把你交给他了（你交给他了）<br>
          但嘴上却要倔强着<br>
          祝福你们快乐<br>
          海边的焰火<br>
          绚烂着我的寂寞<br>
          也把 我的回忆慢慢触痛了<br>
          他的爱如果变成了一种施舍<br>
          就像那蜗牛背上了重重的壳<br>
          你原本就可以看得透彻<br>
          又何必自找 失落<br>
        </p>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    methods:{
      music(){
        this.$router.push({
          path:"/play"
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .fm {
    overflow-y: scroll;
  }

  img {
    width: 100px;
    height: 100px;
    margin-top: 20px;
    position: fixed;
  }

  .left {
    float: left;

    .b {
      position: fixed;
      top: 490px;

      i {
        font-size: 20px;
        margin-left: 10px;
      }

    }
  }

  .right {
    width: 200px;
    // height: 100%;
    // background-color: paleturquoise;
    float: left;
    position: absolute;
    // left: 150px;
    margin-left: 140px;


    h3 {
      // text-align: center;
      font-size: 20px;
      font-family: "黑体";
      margin-bottom: 10px;
    }

    .tit {
      span {
        font-size: 13px;
        margin-right: 20px;
        color: #666;

      }
    }

    p {
      margin-top: 20px;
      line-height: 2;
      font-size: 16px;
    }
  }
</style>