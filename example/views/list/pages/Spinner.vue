<template>
  <list-router-page>
    <div class="spinner-wrapper">
      <div class="spinner-wrapper-item">
        <z-button type="primary" @click="showDefaultSpinner">显示默认Spinner</z-button>
      </div>

      <div class="spinner-wrapper-item">
        <z-button type="primary" @click="showTypeSpinner">修改type</z-button>
      </div>

      <div class="spinner-wrapper-item">
        <z-button type="primary" @click="showColorSpinner">修改color</z-button>
      </div>

      <div class="spinner-wrapper-item">
        <z-button type="primary" @click="showMessageSpinner">添加文案</z-button>
      </div>

      <div class="spinner-wrapper-item">
        <z-button type="primary" @click="showMessageHtmlSpinner">文案支持添加html</z-button>
      </div>
    </div>
  </list-router-page>
</template>

<script>
  import { ListRouterPage } from '../../../components'
  import { Spinner } from '../../../../package/components'

  export default {
    components: {
      ListRouterPage
    },
    methods: {
      showDefaultSpinner() {
        Spinner.open();

        setTimeout(() => Spinner.close(), 2000)
      },
      showTypeSpinner() {
        Spinner.open({
          type: 'react'
        });

        setTimeout(() => Spinner.close(), 2000)
      },
      showColorSpinner() {
        Spinner.open({
          type: 'bounce',
          color: '#333'
        });

        setTimeout(() => Spinner.close(), 2000)
      },
      showMessageSpinner() {
        Spinner.open({
          type: 'round',
          color: 'red',
          message: '正在加载中...'
        });

        setTimeout(() => Spinner.close(), 2000)
      },
      showMessageHtmlSpinner() {
        Spinner.open({
          type: 'round',
          color: 'red',
          message: `正在<font color="#333">加载中</font>...`
        });

        setTimeout(() => Spinner.close(), 2000)
      }
    }
  }
</script>

<style type="text/less" lang="less">
  .spinner-wrapper{
    width: 100%;
    padding: 10px;
    &-item{
      width: 100%;
      margin-bottom: 6px;
    }
  }
</style>
