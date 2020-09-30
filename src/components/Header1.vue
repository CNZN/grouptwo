<template>
  <div class="header1">
    <div class="box">
      <i id="i1" class="el-icon-microphone"></i>
      <div>
        <van-search
          v-model="value"
          shape="round"
          background="#e4463b"
          placeholder="请输入搜索关键词"
          @change="getsearch"
        />
      </div>
      <i id="i2" class="el-icon-s-operation" @click="toPlay" ></i>
    </div>
    <ul>
      <li v-for="item in musicList" :key="item.id"  @click="playMusic(item.id,item.album.id)">
        {{ item.name }}-----演唱者:{{ item.artists[0].name }}
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from "vue";
import { Search } from "vant";

Vue.use(Search);
export default {
  data() {
    return {
      value: "",
      musicList: null,
    };
  },
  methods: {
    toPlay() {
      this.$router.push({
        path: "/play",
      });
    },
    getsearch() {
      this.$http
        .get(`https://autumnfish.cn/search?keywords=${this.value}`)
        .then((response) => {
            this.musicList = response.data.result.songs;
        });
    },
    playMusic(mid,aid){
      this.$router.push({
        path:'/play',
        query:{
          mid,aid
        }
      })
    }
  },
  components: {},
  mounted() {},
};
</script>

<style lang="scss" scoped>
.box {
  color: white;
  background: #e4463b;
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // overflow: hidden;
}
#i1 {
  margin-left: 20px;
}
#i2 {
  margin-right: 20px;
}
ul {
  overflow-y: auto;
  background: white;
  z-index: 1000;
  height: 200px;
  position: absolute;
  top: 45px;
  left: 70px;
  li{
    font-size: 14px;
    margin: 10px;
  }
}
</style>