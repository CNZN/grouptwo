<template>
  <div class="shipin">
    <van-dropdown-menu>
      <span @click="back">
        <van-icon name="arrow-left" />
      </span>
      <van-dropdown-item v-model="value1" :options="option1" />
    </van-dropdown-menu>
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      history.go(-1);
    },
  },

  data() {
    return {
      value1: 0,
      value2: "a",
      option1: [
        { text: "我喜欢", value: 0 },
        { text: "最近播放", value: 1 },
        { text: "今日推荐", value: 2 },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.van-dropdown-menu__bar {
    position: relative;
}
.shipin {
  span {
      position: absolute;
      top: 20px;
      left: 20px;
  }
}
</style>