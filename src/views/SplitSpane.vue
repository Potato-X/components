<template>
  <div class="split-box">
    <split-spane>
      <template slot="left">left</template>
      <template slot="right">right</template>
    </split-spane>
  </div>
</template>
<script>
import SplitSpane from "_c/split-spane.vue";
export default {
  components: {
    SplitSpane
  }
};
</script>
<style lang="scss">
.split-box {
  width: 400px;
  height: 200px;
  background-color: burlywood;
}
</style>
