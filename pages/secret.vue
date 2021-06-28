<template>
  <h1 class="ymca">Secret page</h1>
</template>

<script>
  export default {
    middleware: 'authenticated'
  }
</script>

<style lang="scss">
  .ymca {
    @include center; // will be resolved as position:absolute....
    color: $gray; // will be resolved to #333
  }
</style>
