<template>
  <div class="personal">
  <span @click="back">
        <van-icon name="arrow-left" />
    </span>
  </div>
</template>

<script>
import Vue from "vue";
import { Icon } from "vant";
Vue.use(Icon);
export default {
  methods: {
    back() {
      history.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>

</style>