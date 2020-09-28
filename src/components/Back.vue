<template>
  <div class="back">
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

<style scoped>
span {
  font-size: 40px;
  display: block;
}
</style>