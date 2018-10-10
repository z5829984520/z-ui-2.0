<template>
  <list-router-page>
    <z-tag>普通使用</z-tag>
    <z-tag size="small" type="primary">small</z-tag>
    <z-tag size="mini" type="warning">mini</z-tag>
    <z-tag size="large" type="danger">large</z-tag>
    <z-tag type="primary" plain>镂空</z-tag>
    <z-tag border-radius="30px" font-size="12px">自定义</z-tag>
    <z-tag disabled>禁用</z-tag>
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
