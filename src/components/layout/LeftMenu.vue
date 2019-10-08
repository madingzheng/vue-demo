<template>
  <el-menu
    :default-active="$route.path"
    router
    class="el-menu-vertical-demo"
    @open="handleOpen"
    text-color="#fff"
    active-text-color="#fff"
    @close="handleClose"
    :collapse="collapse"
  >
    <el-menu-item index="/home">
      <i class="my_icon home_icon"></i>
      <span>{{ $t("nav.home") }}</span>
    </el-menu-item>
    <el-menu-item index="/about">
      <i class="my_icon about_icon"></i>
      <span>{{ $t("nav.about") }}</span>
    </el-menu-item>
    <el-menu-item index="/echarts">
      <i class="my_icon echarts_icon"></i>
      <span>{{ $t("nav.echarts") }}</span>
    </el-menu-item>
    <el-menu-item index="/dplayer">
      <i class="my_icon echarts_icon"></i>
      <span>{{ $t("nav.player") }}</span>
    </el-menu-item>
  </el-menu>
</template>
<script>
export default {
  props: ["collapse"],
  watch: {
    collapse(newVal) {
      console.log("collapse", newVal);
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style lang="less">
.el-menu-vertical-demo {
  background-color: #001529;
  border-right: none;
  .home_icon {
    width: 24px;
    height: 24px;
    background-position: -3px -75px;
    margin-right: 4px;
  }
  .about_icon {
    width: 24px;
    height: 24px;
    background-position: -75px -75px;
    margin-right: 4px;
  }
  .echarts_icon {
    width: 24px;
    height: 24px;
    background-position: -270px -75px;
    margin-right: 4px;
  }
  .el-menu-item {
    &:hover,
    &:focus {
      opacity: 1;
      background-color: #344058;
    }
    &.is-active {
      opacity: 1;
      background-color: #1e9fff;
    }
  }
  &:not(.el-menu--collapse) {
    width: 300px;
  }
  &.el-menu--collapse {
    width: 100px;
  }
}
</style>
