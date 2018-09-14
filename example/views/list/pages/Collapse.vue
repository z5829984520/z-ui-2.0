<template>
  <list-router-page>
    <div class="collapse-title">普通用法</div>
    <div class="collapse-info">
      <z-collapse>
        <z-collapse-item v-for="(item, index) in 3" :key="index + ''" :title="`标题${item}`">
          {{ `内容${item}` }}
        </z-collapse-item>
      </z-collapse>
    </div>

    <div class="collapse-title">默认展开几个</div>
    <div class="collapse-info">
      <z-collapse :defaultIndex="[0, 2]">
        <z-collapse-item v-for="(item, index) in 3" :key="index + ''" :title="`标题${item}`">
          {{ `内容${item}` }}
        </z-collapse-item>
      </z-collapse>
    </div>

    <div class="collapse-title">手风情模式</div>
    <div class="collapse-info">
      <z-collapse accordion>
        <z-collapse-item v-for="(item, index) in 3" :key="index + ''" :title="`标题${item}`">
          {{ `内容${item}` }}
        </z-collapse-item>
      </z-collapse>
    </div>
  </list-router-page>
</template>

<script>
  import { ListRouterPage } from '../../../components'

  export default {
    components: {ListRouterPage}
  }
</script>

<style lang="less" type="text/less">
  .collapse-title{
    width: 100%;
    font-size: 16px;
    text-align: center;
  }

  .collapse-info{
    margin-bottom: 14px;
  }
</style>
