<template>
  <div class="mine">
    <Header2></Header2>
    <div class="content">
      <van-cell title="本地音乐" icon="play" value="21" is-link></van-cell>
      <van-cell title="最近播放" icon="play" value="65" is-link></van-cell>
      <van-cell title="我的电台" icon="play" value="0" is-link></van-cell>
      <van-cell title="我的收藏" icon="play" value="专辑/歌手/视频/专" is-link></van-cell>
      <div class="song-list">
        <van-collapse v-model="activeNames">
          <van-collapse-item title="我创建的歌单(1)" name="1">
            <van-swipe-cell>
              <van-card @click.native="gomusic" desc="37首，已下载21首" title="我喜欢的音乐" class="goods-card"
                thumb="https://img.yzcdn.cn/vant/cat.jpeg" />
            </van-swipe-cell>
          </van-collapse-item>
        </van-collapse>
      </div>
      
    </div>
  </div>

</template>

<script>
  import Header2 from "../../components/Header2"
  export default {
    name: 'Mine',
    components: {
      Header2
    },
    data() {
      return {
        activeNames: ['1']
      }
    },
    methods: {
      gomusic() {
        this.$router.push({
          path: '/mine/music'
        })
      }
    }
  }
</script>

<style>
  .song-list .van-cell {
    height: 33px;
    line-height: 17px;
    background-color: rgba(238, 239, 241, 100);
    color: rgba(143, 144, 146, 100);
    font-size: 12px;
  }
</style>