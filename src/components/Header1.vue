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
        />
      </div>
      <i id="i2" class="el-icon-s-operation" @click="toPlay"></i>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Search } from "vant";

Vue.use(Search);
export default {
  data() {
    return {
      value: "搜索",
    };
  },
  methods: {
    toPlay() {
      this.$router.push({
        path: "/play",
      });
    },
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
  overflow: hidden;
}
#i1 {
  margin-left: 20px;
}
#i2 {
  margin-right: 20px;
}
</style>