<template>
  <component v-if="name" :is="name" />
</template>

<script>
  import {
    arrowLineUp,
    success,
    warning,
    arrowRight,
    notice,
    close,
  } from './Item'

  export default {
    name: 'zIcon',
    components: {
      arrowLineUp,
      success,
      warning,
      arrowRight,
      notice,
      close,
    },
    props: {
      name: {
        type: String,
        default: ''
      }
    }
  }
</script>
