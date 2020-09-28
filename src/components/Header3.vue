<template>
  <div class="header3">
    <div class="box">
      <i id="i1" class="el-icon-user-solid"></i>
      <div>
        <el-switch
          style="display: block"
          v-model="value2"
          active-color="red"
          inactive-color="red"
          active-text="动态"
          inactive-text="附近"
        >
        </el-switch>
      </div>
      <i id="i2" class="el-icon-s-operation" @click="toPlay"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: true,
      value2: true,
    };
  },
  methods: {
    toPlay() {
      this.$router.push({
        path: "/play",
      });
    },
  },
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
}
#i1 {
  margin-left: 20px;
}
#i2 {
  margin-right: 20px;
}
</style>