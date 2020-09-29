<template>
  <div class="video">
    <div class="login" A>
      <router-link class="left" tag="div" to="/fabu">发动态</router-link>
      <div class="bottom"></div>
      <router-link class="right" tag="div" to="/shipin"> 发布视频</router-link>
    </div>
    <div class="frienden">
      <div class="nav-one">
        <div class="top">
          <div class="top-l">
            <img src="../../../assets/images/sl1.jpg" alt="" />
          </div>
          <div class="top-m">
            <p>网易云小秘书 分享歌单:</p>
            <span>06：28</span>
          </div>
          <div class="top-b">
            <p>+关注</p>
          </div>
        </div>
        <div class="middle">
          <div class="middle-t" @click="dag">
            <p>
              <i>#早安世界#</i>
              知道劝你们玩手机是没有用的，那就只能给你们加油鼓励了，早，今天也要努力学习哦！
            </p>
            <img src="../../../assets/images/item3.jpg" alt="" />
            <span>优质动态推荐</span>
          </div>
          <div class="middle-b">
            <el-badge :value="12" class="item">
              <el-button size="small">评论</el-button>
            </el-badge>
            <el-badge :value="3" class="item">
              <el-button size="small">回复</el-button>
            </el-badge>
            <el-badge :value="1" class="item" type="primary">
              <el-button size="small">评论</el-button>
            </el-badge>
            <el-badge :value="2" class="item" type="warning">
              <el-button size="small">回复</el-button>
            </el-badge>
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                点我查看<i class="el-icon-caret-bottom el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item class="clearfix">
                  评论
                  <el-badge class="mark" :value="12" />
                </el-dropdown-item>
                <el-dropdown-item class="clearfix">
                  回复
                  <el-badge class="mark" :value="3" />
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </div>
    </div>
    <div class="frienden">
      <div class="nav-one">
        <div class="top">
          <div class="top-l">
            <img src="../../../assets/images/sl2.jpg" alt="" />
          </div>
          <div class="top-m">
            <p>网易云小秘书 分享歌单:</p>
            <span>06：28</span>
          </div>
          <div class="top-b">
            <p>+关注</p>
          </div>
        </div>
        <div class="middle">
          <div class="middle-t">
            <p>
              <i>#早安世界#</i>
              知道劝你们玩手机是没有用的，那就只能给你们加油鼓励了，早，今天也要努力学习哦！
            </p>
            <img src="../../../assets/images/item1.jpg" alt="" />
            <span>优质动态推荐</span>
          </div>
          <div class="middle-b">
            <el-badge :value="12" class="item">
              <el-button size="small">评论</el-button>
            </el-badge>
            <el-badge :value="3" class="item">
              <el-button size="small">回复</el-button>
            </el-badge>
            <el-badge :value="1" class="item" type="primary">
              <el-button size="small">评论</el-button>
            </el-badge>
            <el-badge :value="2" class="item" type="warning">
              <el-button size="small">回复</el-button>
            </el-badge>
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                点我查看<i class="el-icon-caret-bottom el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item class="clearfix">
                  评论
                  <el-badge class="mark" :value="12" />
                </el-dropdown-item>
                <el-dropdown-item class="clearfix">
                  回复
                  <el-badge class="mark" :value="3" />
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </div>
    </div>
    <div class="frienden">
      <div class="nav-one">
        <div class="top">
          <div class="top-l">
            <img src="../../../assets/images/sl4.jpg" alt="" />
          </div>
          <div class="top-m">
            <p>网易云小秘书 分享歌单:</p>
            <span>06：28</span>
          </div>
          <div class="top-b">
            <p>+关注</p>
          </div>
        </div>
        <div class="middle">
          <div class="middle-t">
            <p>
              <i>#早安世界#</i>
              知道劝你们玩手机是没有用的，那就只能给你们加油鼓励了，早，今天也要努力学习哦！
            </p>
            <img src="../../../assets/images/item4.jpg" alt="" />
            <span>优质动态推荐</span>
          </div>
          <div class="middle-b">
            <el-badge :value="12" class="item">
              <el-button size="small">评论</el-button>
            </el-badge>
            <el-badge :value="3" class="item">
              <el-button size="small">回复</el-button>
            </el-badge>
            <el-badge :value="1" class="item" type="primary">
              <el-button size="small">评论</el-button>
            </el-badge>
            <el-badge :value="2" class="item" type="warning">
              <el-button size="small">回复</el-button>
            </el-badge>
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                点我查看<i class="el-icon-caret-bottom el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item class="clearfix">
                  评论
                  <el-badge class="mark" :value="12" />
                </el-dropdown-item>
                <el-dropdown-item class="clearfix">
                  回复
                  <el-badge class="mark" :value="3" />
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 
<script>
export default {
   methods: {
    dag() {
      this.$router.replace('/personal')
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.login {
  display: flex;
  justify-content: space-around;
  border: 1px solid #eee;
  .left {
    width: 49.9%;
    height: 40px;
    text-align: center;
    line-height: 40px;
  }
  .bottom {
    width: 0.2%;
    border: solid 1px #eeeeee;
  }
  .right {
    width: 49.9%;
    height: 40px;
    text-align: center;
    line-height: 40px;
  }
}
.frienden {
  min-height: 360px;
  .nav-one {
    height: 360px;
    width: 100%;
    border-bottom: solid 1px #eeeeee;
    .top {
      width: 100%;
      height: 50px;
      display: flex;
      align-items: center;
      padding: 25px 0 15px 0;
      .top-l {
        width: 50px;
        height: 50px;
        border-radius: 100px;
        margin-right: 15px;
        padding-left: 15px;
        img {
          width: 50px;
          height: 50px;
          border-radius: 100px;
        }
      }
      .top-m {
        width: 215px;
        height: 50px;
        p {
          color: rgba(122, 157, 182, 100);
          font-size: 14px;
          margin: 5px;
        }
        span {
          color: rgba(164, 165, 167, 100);
          font-size: 12px;
          margin: 5px;
        }
      }
      .top-b {
        width: 58px;
        height: 25px;
        border: 1px solid rgba(228, 70, 59, 100);
        background-color: rgba(228, 70, 59, 100);
        border-radius: 100px;
        p {
          color: rgba(255, 255, 255, 100);
          font-size: 14px;
          text-align: center;
          line-height: 25px;
        }
      }
    }
    .middle {
      min-height: 200px;
      .middle-t {
        height: 195px;
        width: 290px;
        margin-left: 65px;
        margin-right: 20px;
        p {
          width: 290px;
          height: 65px;
          line-height: 20px;
          color: rgba(16, 16, 16, 100);
          font-size: 14px;
          i {
            color: rgba(122, 157, 182, 100);
          }
        }
        span {
          width: 80px;
          height: 17px;
          line-height: 17px;
          color: rgba(117, 117, 119, 100);
          font-size: 12px;
          text-align: center;
        }

        img {
          width: 290px;
          height: 130px;
          border-radius: 5px;
        }
      }
      .middle-b {
        height: 50px;
        width: 290px;
        margin-right: 20px;
        margin-left: 65px;
        margin-top: 20px;
        .item {
          margin-top: 10px;
          margin-right: 25px;
        }
      }
    }
  }
}
</style>