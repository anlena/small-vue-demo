<template>
  <div id="app">
    <v-header @showSide="show"></v-header>
    <!-- <sidebar></sidebar> -->
    <router-view/>
  </div>
</template>

<script>
import VHeader  from './components/v-header/v-header'
import Sidebar from './components/sidebar/sidebar'
export default {
  name: 'App',
  methods:{
    //显示侧边栏，在其显示时访问他的获取数据方法，从而使better-scroll能够计算出中间主题列表高度
    show(){
      this.$refs.slidebar.open();
    }
  },
  components:{
    VHeader,
    Sidebar
  }
}
</script>
<style lang="scss" scoped="" type="text/css">
  #app{
    height: 100%;
  }
</style>
