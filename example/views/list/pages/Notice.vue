<template>
  <list-router-page>
    <div class="notice-wrapper">
      <div class="notice-wrapper-title">普通使用</div>
      <div class="notice-wrapper-main">
        <z-notice>
          我是notice组件!我是notice组件!我是notice组件!我是notice组件!我是notice组件!我是notice组件!我是notice组件!我是notice组件!
        </z-notice>
      </div>
    </div>
    <div class="notice-wrapper">
      <div class="notice-wrapper-title">长度不超过</div>
      <div class="notice-wrapper-main">
        <z-notice>
          我是notice组件!
        </z-notice>
      </div>
    </div>
    <div class="notice-wrapper">
      <div class="notice-wrapper-title">自定义左右</div>
      <div class="notice-wrapper-main">
        <z-notice>
          <div slot="left">
            左
          </div>
          我是notice组件!
          <div slot="right">
            右
          </div>
        </z-notice>
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

<style lang="less" type="text/less">
  .notice-wrapper{
    width: 100%;
    padding-bottom: 14px;
    &-title{
      width: 100%;
      font-size: 16px;
      padding-bottom: 14px;
    }
    &-main{
      width: 100%;
    }
  }
</style>
