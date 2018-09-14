<template>
  <component v-if="name" :is="name" />
</template>

<script>
  import {
    arrowLineUp,
    success,
    warning,
    arrowRight,
  } from './Item'

  export default {
    name: 'zIcon',
    components: {
      arrowLineUp,
      success,
      warning,
      arrowRight
    },
    props: {
      name: {
        type: String,
        default: ''
      }
    }
  }
</script>
