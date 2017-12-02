<template>
  <!--<div>
    <el-row>
      <el-col :span="4" style="min-height: 100% ;background-color: #324157;">
        <el-menu :default-active="defaultActive" style="min-height: 100%;" theme="dark" :router="true">
          <el-menu-item index="/"><i class="el-icon-menu"></i>首页</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20" style="height: 100%;overflow: auto;">
        <my-header></my-header>
        <div class="content-box">
          <router-view></router-view>
        </div>
      </el-col>
    </el-row>
  </div>-->
  <el-container class="main-body">
    <el-header>
      <my-header></my-header>
    </el-header>
    <el-container class="main-content">
      <el-aside>侧栏</el-aside>
      <el-main>主体
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
      </el-main>
    </el-container>
    <el-footer>
      <my-footer></my-footer>
    </el-footer>
  </el-container>
</template>
<script>
  import MyHeader from "../components/my-header";
  import MyFooter from "../components/my-footer";

  export default {
    components: {
      MyFooter,
      MyHeader},

  }
</script>
<style lang="scss" scoped>
  .main-body {
    max-width: 1300px;
    margin: 0 auto;
    height: 100%;
    .main-content {
      //height: 100%;
    }
  }

</style>
