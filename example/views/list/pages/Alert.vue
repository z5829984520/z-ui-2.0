<template>
  <list-router-page>
    <div class="alert-wrapper">
      <div class="alert-wrapper-item">
        <z-button @click="showNormalAlert">弹出普通alert</z-button>
      </div>

      <div class="alert-wrapper-item">
        <z-button @click="showNormalIconAlert">弹出带icon alert</z-button>
      </div>

      <div class="alert-wrapper-item">
        <z-button @click="showConfirm">弹出带取消的</z-button>
      </div>

      <div class="alert-wrapper-item">
        <z-button @click="showConfirmIcon">弹出带取消的的icon</z-button>
      </div>
    </div>
  </list-router-page>
</template>

<script>
  import { ListRouterPage } from '../../../components'
  import { Alert, Toast } from '../../../../package/components'

  export default {
    components: {
      ListRouterPage
    },
    methods: {
      showNormalAlert() {
        Alert({
          message: '我是一个普通的alert',
          callback: () => {
          }
        })
      },
      showNormalIconAlert() {
        Alert({
          iconName: 'success',
          message: '我是一个普通的alert',
          callback: () => {
          }
        })
      },
      showConfirm() {
        Alert({
          type: 'confirm',
          message: '确认删除吗?',
          callback: (boolean) => {
            Toast(boolean ? '确认' : '取消')
          }
        })
      },
      showConfirmIcon() {
        Alert({
          type: 'confirm',
          iconName: 'warning',
          message: `确认<font color="red">删除</font/>吗?`,
          callback: (boolean) => {
            Toast(boolean ? '确认' : '取消')
          }
        })
      }
    }
  }
</script>

<style lang="less" type="text/less">
  .alert-wrapper{
    width: 100%;
    height: 100%;
    &-item{
      padding: 0 20px;
      width: 100%;
      margin: 10px 0;
    }
  }
</style>
