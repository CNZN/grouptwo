<template>
  <div class="play">
    <Back></Back>
    <div class="music">
      <h1>播放界面</h1>
      <img src="../assets/images/songbackground.png" alt="" />
      <audio src="../assets/data/musics/pa.mp3" controls></audio>
    </div>
  </div>
</template>

<script>
import Back from "./Back";
export default {
  name: "Play",
  components: {
    Back,
  },
};
</script>

<style lang="scss" scoped>
.music {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>