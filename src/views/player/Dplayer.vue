<template>
  <div id="dplayer" ref="dplayer"></div>
</template>

<script>
import "dplayer/dist/DPlayer.min.css";
import DPlayer from "dplayer";
export default {
  name: "player",
  methods: {
    initDplayer() {
      console.log("init", document.getElementById("dplayer"));
      const dp = new DPlayer({
        container: document.getElementById("dplayer"),
        video: {
          url: "https://www.runoob.com/try/demo_source/movie.mp4"
        }
      });
      dp.play();
    }
  },
  mounted() {
    this.initDplayer();
  }
};
</script>

<style>
#dplayer {
  width: 500px;
  height: 500px;
}
</style>
