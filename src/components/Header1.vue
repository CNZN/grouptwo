<template>
  <keep-alive>
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
        <i id="i2" class="el-icon-s-operation" @click="toPlay"></i>
      </div>
      <ul ref="uu">
        <li
          v-for="item in musicList"
          :key="item.id"
          @click="playMusic(item.id, item.album.id,item.name,item.artists[0].name)" 
          
        >
          {{ item.name }}-----演唱者:{{ item.artists[0].name }}
        </li>
      </ul>
    </div>
  </keep-alive>
</template>

<script>
import Vue from "vue";
import { Search } from "vant";
import { mapMutations } from "vuex";
Vue.use(Search);
export default {
  data() {
    return {
      value: "",
      musicList: null,
      obj:{}
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
    playMusic(mid, aid,title,star) {
      this.obj.id= mid
      this.obj.albumId = aid
      this.obj.title = title
      this.obj.star = star
      this.$router.push({
        path: "/play",
        query:{
          mid,aid
        }
      });
      console.log(this.obj)
      this.changes(this.obj)
      // this.$refs.uu.style.display = "none"
    },
    ...mapMutations(['changes'])
    // change(){
    //   this.$store.commit("change", this.obj);
    // }
  },
  components: {

  },
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
  height: 300px;
  position: absolute;
  top: 45px;
  left: 70px;
  li {
    font-size: 14px;
    width: 220px;
    margin: 10px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>