<template>
  <div id="app">
    <v-header></v-header>
    <!-- <sidebar></sidebar> -->
    <router-view/>
  </div>
</template>

<script>
import VHeader  from './components/v-header/v-header'
import Sidebar from './components/sidebar/sidebar'
export default {
  name: 'App',
  components:{
    VHeader,
    Sidebar
  }
}
</script>
<style lang="scss" scoped="" type="text/css">

</style>
