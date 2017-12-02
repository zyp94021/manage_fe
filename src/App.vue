<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',

}
</script>

<style lang="scss">
  @import "style/css.css";
  @import "style/common.css";
  #app{
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
  }
</style>
