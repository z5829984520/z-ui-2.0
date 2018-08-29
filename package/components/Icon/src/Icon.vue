<template>
  <component v-if="name" :is="name" />
</template>

<script>
  import {
    arrowLineUp,
    success,
    warning
  } from './Item'

  export default {
    name: 'zIcon',
    components: {
      arrowLineUp,
      success,
      warning
    },
    props: {
      name: {
        type: String,
        default: ''
      }
    }
  }
</script>
