<template>
  <section id="header">
    <i
      :class="
        collapse ? 'el-icon-s-unfold header-icon' : 'el-icon-s-fold header-icon'
      "
      @click="changeCollapse"
    ></i>
  </section>
</template>

<script>
export default {
  data() {
    return {
      collapse: false
    };
  },
  methods: {
    changeCollapse() {
      this.collapse = !this.collapse;
      this.$emit("isCollapse", this.collapse);
    }
  }
};
</script>
<style lang="less">
#header {
  height: 100%;
  display: flex;
  align-items: center;
  .header-icon {
    font-size: 25px;
    cursor: pointer;
  }
}
</style>
