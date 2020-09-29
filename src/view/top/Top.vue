<template>
  <div class="top">
    <van-nav-bar title="排行榜" left-text="返回" left-arrow @click-left="onClickLeft" />

    <div class="list">
      <ul class="one">
        <li class="li_1">
          <div class="l">
            <h1>飙升榜</h1>
            <p>每天更新</p>
          </div>
          <div class="r">
            <ul class="two">
              <li>1.平凡的一天 - 毛不易</li>
              <li>2.像我这样的人 - 毛不易</li>
              <li>3.消愁 - 毛不易</li>
            </ul>
          </div>
        </li>
        <li class="li_2">
          <div class="l">
            <h1>新歌榜</h1>
            <p>每天更新</p>
          </div>
          <div class="r">
            <ul class="two">
              <li>1.成全 - 林宥嘉</li>
              <li>2.纸短情长 - 花粥</li>
              <li>3.往后余生 - 马良</li>
            </ul>
          </div>
        </li>
        <li class="li_3">
          <div class="l">
            <h1>原创榜</h1>
            <p>每天更新</p>
          </div>
          <div class="r">
            <ul class="two">
              <li>1.大城市 - 陈小熊</li>
              <li>2.可能否 - 木小雅</li>
              <li>3.我向往远在天涯的梦想 - 夏小虎</li>
            </ul>
          </div>
        </li>
        
        <li class="li_4">
          <div class="l">
            <h1>热歌榜</h1>
            <p>每天更新</p>
          </div>
          <div class="r">
            <ul class="two">
              <li>1.云烟成雨 - 房东的猫</li>
              <li>2.纸短情长（完整版）- 烟把儿</li>
              <li>3.喜欢 - 阿肆</li>
            </ul>
          </div>
        </li>
        <li class="li_5">
          <div class="l">
            <h1>赞赏榜</h1>
            <p>每天更新</p>
          </div>
          <div class="r">
            <ul class="two">
              <li>1.从前的歌 - 任柯/金鑫/羽上好</li>
              <li>2.面茶大海 春暖花开 - 任我行</li>
              <li>3.消愁 - 毛不易</li>
            </ul>
          </div>
        </li>
        <li class="li_6">
          <div class="l">
            <h1>歌手榜</h1>
            <p>每天更新</p>
          </div>
          <div class="r">
            <ul class="two">
              <li>1.张国荣</li>
              <li>2.周杰伦</li>
              <li>3.林俊杰</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
  export default {
    methods: {
      onClickLeft() {
        this.$router.push({
          path: "/find"
        })
      }
    },
  };
</script>

<style lang="scss" scoped>
  .van-nav-bar {
    background-color: rgb(241, 129, 129);
    position: fixed;
    width: 100%;
  }

  .list{
    overflow: hidden;
    .one{
      margin-top: 50px;
      padding: 10px;
      margin-bottom: 40px;

      li{
        width: 100%;
        height: 115px;
        border-bottom: 1px solid #cecece;
        margin-bottom: 10px;

        .l{
          float: left;
          width: 115px;
          height: 115px;
          border-radius: 5px;
          background-color: plum;
          position: relative;

          h1{
            font-size: 30px;
            text-align: center;
            line-height: 115px;
            color:#fff;
          }

          p{
            color:#fff;
            position: absolute;
            bottom: 10px;
            left: 30px;
            font-size: 14px;
          }
        }

        .r{
          float: left;
          padding-top: 15px;
          margin-left: 20px;
        }

        .two{
          li{
            height: 22px;
            border-bottom: none;
            font-size: 14px;
            color:#888
          }
        }
      }

      .li_2 .l{
        background-color: peru;
      }

      .li_3 .l{
        background-color: rgb(245, 185, 132)
      }

      .li_4 .l{
        background-color: rgb(93, 134, 139);
      }

      .li_5 .l{
        background-color: rgb(185, 73, 97);
      }

      .li_6 .l{
        background-color: rgb(6, 126, 36);
      }
    }
  }


</style>