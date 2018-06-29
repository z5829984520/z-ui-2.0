<template>
  <component :is="type" :color="color" :size="size" />
</template>

<script>
  import { react, round, bounce, lineRound } from './Item'

  /*
  * @params type  loading类型
  * @params color 颜色
  * @params size  尺寸
  * */
  export default {
    name: 'zSpinnerItem',
    components: {
      react,
      round,
      bounce,
      lineRound,
    },
    props: {
      type: {
        type: String,
        default: 'lineRound'
      },
      color: {
        type: String,
        default: '#fff'
      },
      size: {
        type: Number,
        default: 32
      }
    }
  }
</script>
