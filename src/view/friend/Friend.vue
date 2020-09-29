<template>
  <div class="video">
    <Header3></Header3>
    <router-view></router-view>
    <div style="height:50px">

    </div>
  </div>
</template>

<script>
import Header3 from "../../components/Header3";

export default {
  name: "Video",
  components: {
    Header3,
  },
};
</script>

<style>
</style>