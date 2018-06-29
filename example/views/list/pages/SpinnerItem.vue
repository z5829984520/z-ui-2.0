<template>
  <list-router-page>
    <div class="spinner-item-wrapper">
      <div class="spinner-item-wrapper-item">
        <z-spinner-item color="#ccc"></z-spinner-item>
      </div>

      <div class="spinner-item-wrapper-item">
        <z-spinner-item color="#666" type="react"></z-spinner-item>
      </div>

      <div class="spinner-item-wrapper-item">
        <z-spinner-item color="#e5e5e5" type="round"></z-spinner-item>
      </div>

      <div class="spinner-item-wrapper-item">
        <z-spinner-item color="#333" type="bounce"></z-spinner-item>
      </div>

      <div class="spinner-item-wrapper-item">
        <z-spinner-item color="#ccc" :size="64"></z-spinner-item>
      </div>
    </div>
  </list-router-page>
</template>

<script>
  import { ListRouterPage } from '../../../components'

  export default {
    components: {
      ListRouterPage
    }
  }
</script>

<style type="text/less" lang="less">
  .spinner-item-wrapper{
    width: 100%;
    padding: 10px;
    &-item{
      width: 100%;
      margin-bottom: 6px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
