<template>
  <div>
    <!-- <div v-if="$nuxt.isOffline">You are offline</div> -->
    <header>
      <Header />
    </header>
    <Nuxt />
    <footer>
      <Footer />
    </footer>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default Vue.extend({
  // middleware: ['auth'],
  components: {
    Header,
    Footer
  }
})
</script>
<style>

</style>
