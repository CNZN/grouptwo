<template>
  <div class="fufei">
      <h3>会员专区</h3>

      <ul>
          <li>
              <div class="l">
                  <img src="../../../../assets/images/sl1.jpg" alt="">
              </div>
              <div class="r">
                  <h4>听歌学英文</h4>
                  <p>用一首歌的时间学英文</p>
                  <p>&gt; Angle - 主讲老师：安琪（附获奖名单）</p>
                  <h5>￥99 / SVIP：￥79</h5>
              </div>
          </li>
          <li>
              <div class="l">
                  <img src="../../../../assets/images/sl3.jpg" alt="">
              </div>
              <div class="r">
                  <h4>度阴山</h4>
                  <p>用一首歌的时间学英文</p>
                  <p>&gt; Angle - 主讲老师：安琪（附获奖名单）</p>
                  <h5>￥99</h5>
              </div>
          </li>
          <li>
              <div class="l">
                  <img src="../../../../assets/images/sl6.jpg" alt="">
              </div>
              <div class="r">
                  <h4>六神磊磊的唐诗果</h4>
                  <p>用一首歌的时间学英文</p>
                  <p>&gt; Angle - 主讲老师：安琪（附获奖名单）</p>
                  <h5>￥99</h5>
              </div>
          </li>
      </ul>
      
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
    .fufei{
        margin-bottom: 330px;
        
        h3{
            line-height: 50px;
            font-size: 20px;
            margin-left: 20px;
        }
        ul{
            margin-left: 10px;
            height: 115px;
            

            li{
                border-bottom: 1px solid #cecece;
                height: 100%;
                margin-bottom: 10px;

                .l{
                    width: 115px;
                    height: 100%;
                    background-color: salmon;
                    float: left;
                    border-radius: 5px;
                    overflow: hidden;
                    margin-right: 15px;
                    
                }

                .r{
                    float: left;

                   h4{
                       font-size: 18px;
                       margin-top: 10px;
                       margin-bottom: 15px;
                   } 
                   p{
                       width: 220px;
                       overflow: hidden;
                       white-space: nowrap;
                       text-overflow: ellipsis;
                       font-size: 14px;
                       color:#999;
                       margin-top: 5px;
                   }
                   h5{
                       font-size: 16px;
                       color:#e4463b;
                       margin-top: 15px;
                       font-weight: bold;
                   }
                }

            }
        }
    }

</style>