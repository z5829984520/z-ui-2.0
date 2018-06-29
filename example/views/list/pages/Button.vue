<template>
  <list-router-page>
    <div class="button-wrapper">
      <div class="button-wrapper-item">
        <z-button>default</z-button>
      </div>

      <div class="button-wrapper-item">
        <z-button type="primary">primary</z-button>
      </div>

      <div class="button-wrapper-item">
        <z-button type="success">success</z-button>
      </div>

      <div class="button-wrapper-item">
        <z-button type="warning">warning</z-button>
      </div>

      <div class="button-wrapper-item">
        <z-button type="danger">danger</z-button>
      </div>

      <div class="button-wrapper-item">
        <z-button size="mini">mini</z-button>
      </div>

      <div class="button-wrapper-item">
        <z-button type="primary" size="small">small</z-button>
      </div>

      <div class="button-wrapper-item">
        <z-button type="success" size="large">large</z-button>
      </div>

      <div class="button-wrapper-item">
        <z-button type="warning" plain>warning</z-button>
      </div>

      <div class="button-wrapper-item">
        <z-button type="danger" disabled>disabled</z-button>
      </div>

      <div class="button-wrapper-item">
        <z-button :showRadius="false">showRadius</z-button>
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
  .button-wrapper{
    width: 100%;
    padding: 10px;
    &-item{
      width: 100%;
      margin-bottom: 6px;
    }
  }
</style>
