<template>
  <div class="header-bg">
    <div class="header-content">
      <div class="header-left">
        <span>Learn Note</span>
      </div>
      <div class="header-right">
        <el-dropdown @command="handleCommand">
          <span class="pointer">
            {{adminInfo.adminName}}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="logout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState,mapActions} from 'vuex'

  export default {
    name:'my-header',
    computed: {
      ...mapState(['adminInfo']),
    },
    methods: {
      ...mapActions(['logout']),
      handleCommand(command) {
        if (command == 'logout') {
          this.logout();
          this.$router.push('/login');
        }
      }
    }
  }
</script>
<style lang="scss">
  .header-bg{
    position: absolute;
    left: 0px;
    right: 0px;
    background-color: #eff2f7;
    .header-content {
      display: flex;
      justify-content: space-between;
      max-width: 1200px;
      margin: 0 auto;
      .header-left {
        line-height: 60px;
      }
      .header-right {
        line-height: 60px;
      }
    }
  }

</style>
