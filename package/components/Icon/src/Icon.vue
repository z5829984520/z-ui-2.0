<template>
  <component v-if="name" :is="name" />
</template>

<script>
  import {
    arrowLineUp
  } from './Item'

  export default {
    name: 'zIcon',
    components: {
      arrowLineUp
    },
    props: {
      name: {
        type: String,
        default: ''
      }
    }
  }
</script>
