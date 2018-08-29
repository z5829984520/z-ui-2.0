<template>
  <list-router-page>

    <div class="button-wrapper-item">
      <z-button @click="showToast('我是Toast')">默认调用</z-button>
    </div>

    <div class="button-wrapper-item">
      <z-button @click="showLoadingToast">显示loading</z-button>
    </div>

    <div class="button-wrapper-item">
      <z-button @click="showPositionToast">改变位置</z-button>
    </div>

  </list-router-page>
</template>

<script>
  import { ListRouterPage } from '../../../components'
  import { Toast } from '../../../../package/components'

  export default {
    components: {
      ListRouterPage
    },
    methods: {
      showToast(msg) {
        Toast(msg)
      },
      showLoadingToast() {
        Toast({
          message: '我是Toast',
          type: 'lineRound'
        })
      },
      showPositionToast() {
        Toast({
          top: '5%',
          message: '我在顶部'
        })
      }
    }
  }
</script>

<style type="text/less" lang="less">
  .button-wrapper-item{
    margin: 10px auto;
    padding: 0 10px;
  }
</style>
