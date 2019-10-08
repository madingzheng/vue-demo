<template>
  <el-container class="home">
    <el-container>
      <el-aside :width="collapse ? '100px' : '300px'">
        <my-left-menu :collapse="collapse"></my-left-menu>
      </el-aside>
      <el-container>
        <el-header>
          <my-header @isCollapse="isCollapse"></my-header>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import { LeftMenu as myLeftMenu } from "./index.js";
import { Header as myHeader } from "./index.js";

export default {
  data() {
    return {
      collapse: false
    };
  },
  components: {
    myLeftMenu,
    myHeader
  },
  methods: {
    isCollapse(collapse) {
      this.collapse = collapse;
    }
  }
};
</script>

<style lang="less">
.home {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  .el-header,
  .el-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #001529;
    color: #333;
    text-align: center;
    line-height: 200px;
    transition: all 0.3s ease-in-out !important;
    -ms-transition: all 0.3s ease-in-out !important; /* IE 9 */
    -moz-transition: all 0.3s ease-in-out !important; /* Firefox */
    -webkit-transition: all 0.3s ease-in-out !important; /* Safari 和 Chrome */
    -o-transition: all 0.3s ease-in-out !important; /* Opera */
  }

  .el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
}
</style>
