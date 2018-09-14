<template>
  <list-router-page>
    <div class="icon-wrapper">
      <div class="icon-wrapper-item" v-for="(item, index) in list" :key="index +''">
        <z-icon :name="item" />
        <div class="icon-wrapper-item-name">{{ item }}</div>
      </div>
    </div>
  </list-router-page>
</template>

<script>
  import { ListRouterPage } from '../../../components'

  export default {
    components: {
      ListRouterPage
    },
    data() {
      return {
        list: [
          'success',
          'warning',
          'arrowLineUp',
          'arrowRight'
        ]
      }
    }
  }
</script>

<style type="text/less" lang="less">
  .icon-wrapper{
    width: 100%;
    &-item{
      display: inline-block;
      width: 33.333333333%;
      text-align: center;
      padding: 4px;
    }
  }
</style>
