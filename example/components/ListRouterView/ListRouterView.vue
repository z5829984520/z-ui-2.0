<template>
  <transition name="list-router-page">
    <router-view class="list-router-page-wrapper"></router-view>
  </transition>
</template>

<style lang="less" type="text/less">
  .list-router-page-wrapper{
    transform: translate(0, 0);
  }

  .list-router-page-enter,
  .list-router-page-leave-active{
    transform: translate(100%, 0);
  }

  .list-router-page-enter-active,
  .list-router-page-leave-active{
    transition: transform 0.3s;
  }
</style>
