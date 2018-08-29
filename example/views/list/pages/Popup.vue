<template>
  <list-router-page>
    <div class="popup-wrapper">
      <div class="popup-wrapper-item">
        <z-button @click="visible1 = true">底部弹出</z-button>
      </div>
      <div class="popup-wrapper-item">
        <z-button @click="visible2 = true">顶部弹出</z-button>
      </div>
      <div class="popup-wrapper-item">
        <z-button @click="visible3 = true">左侧弹出</z-button>
      </div>
      <div class="popup-wrapper-item">
        <z-button @click="visible4 = true">右侧弹出</z-button>
      </div>
      <div class="popup-wrapper-item">
        <z-button @click="visible5 = true">顶部全屏弹出</z-button>
      </div>
      <div class="popup-wrapper-item">
        <z-button @click="visible6 = true">底部全屏弹出</z-button>
      </div>
      <div class="popup-wrapper-item">
        <z-button @click="visible7 = true">左侧全屏弹出</z-button>
      </div>
      <div class="popup-wrapper-item">
        <z-button @click="visible8 = true">右侧全屏弹出</z-button>
      </div>
    </div>

    <z-popup v-model="visible1">
      <div class="popup-item-wrapper-transverse">我从底部弹出</div>
    </z-popup>

    <z-popup v-model="visible2" position="top">
      <div class="popup-item-wrapper-transverse">我从顶部弹出</div>
    </z-popup>

    <z-popup v-model="visible3" position="left">
      <div class="popup-item-wrapper-vertical">我从左侧弹出</div>
    </z-popup>

    <z-popup v-model="visible4" position="right">
      <div class="popup-item-wrapper-vertical">我从右侧弹出</div>
    </z-popup>

    <z-popup v-model="visible5" screen>
      <div class="popup-item-wrapper-screen" @click="visible5 = false">点我关闭</div>
    </z-popup>

    <z-popup v-model="visible6" position="top" screen>
      <div class="popup-item-wrapper-screen" @click="visible6 = false">点我关闭</div>
    </z-popup>

    <z-popup v-model="visible7" position="left" screen>
      <div class="popup-item-wrapper-screen" @click="visible7 = false">点我关闭</div>
    </z-popup>

    <z-popup v-model="visible8" position="right" screen>
      <div class="popup-item-wrapper-screen" @click="visible8 = false">点我关闭</div>
    </z-popup>
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
        visible1: false,
        visible2: false,
        visible3: false,
        visible4: false,
        visible5: false,
        visible6: false,
        visible7: false,
        visible8: false
      }
    }
  }
</script>

<style lang="less" type="text/less">
  .popup-wrapper{
    width: 100%;
    &-item{
      width: 100%;
      padding: 0 12px;
      margin: 10px 0;
    }
  }
  .popup-item-wrapper-transverse{
    background-color: #fff;
    width: 100%;
    text-align: center;
    height: 200px;
  }
  .popup-item-wrapper-vertical{
    background-color: #fff;
    height: 100%;
  }
  .popup-item-wrapper-screen{
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
</style>
