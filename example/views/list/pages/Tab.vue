<template>
  <list-router-page>
    <div class="tab-wrapper">
      <div class="tab-wrapper-main">
        <h3>普通内容切换</h3>
        <z-tab v-model="activeIndex1">
          <z-tab-item v-for="(item, index) in 4" :key="index" :title="`标题${item}`">
            <div class="tab-wrapper-main-content">
              {{ `内容${item}` }}
            </div>
          </z-tab-item>
        </z-tab>
      </div>

      <div class="tab-wrapper-main">
        <h3>超过屏幕宽度</h3>
        <z-tab v-model="activeIndex2">
          <z-tab-item v-for="(item, index) in 12" :key="index" :title="`标题${item}`">
            <div class="tab-wrapper-main-content">
              {{ `内容${item}` }}
            </div>
          </z-tab-item>
        </z-tab>
      </div>

      <div class="tab-wrapper-main">
        <h3>可左右touch切换(移动端测试)</h3>
        <z-tab v-model="activeIndex3" lock>
          <z-tab-item v-for="(item, index) in 20" :key="index" :title="`标题${item}`">
            <div class="tab-wrapper-main-content">
              {{ `内容${item}` }}
            </div>
          </z-tab-item>
        </z-tab>
      </div>
    </div>
  </list-router-page>
</template>

<script>
  import { ListRouterPage } from '../../../components'

  export default {
    components: {ListRouterPage},
    data() {
      return {
        activeIndex1: 2,
        activeIndex2: 3,
        activeIndex3: 1,
        activeIndex4: 0,
      }
    }
  }
</script>

<style lang="less" type="text/less">
  .tab-wrapper{
    width: 100%;
    height: 100%;
    overflow-y: auto;
    &-main{
      width: 100%;
      margin-bottom: 6px;
      h3{
        width: 100%;
        font-size: 14px;
        margin-bottom: 4px;
      }
      &-content{
        width: 100%;
        height: 100px;
      }
    }
  }
</style>
