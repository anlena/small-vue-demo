<template>
  <div class="header" ref="header">
    <div class="model" :class="model">
      <span class="navigation" @click="showSidebar"></span>
      <h2>{{title}}</h2>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  props:{
    title:{
      type:String,
      default:'亚华意诺斯'
    }
  },
  methods:{
    showSidebar(){
      // 显示侧边栏，向上派发事件
      this.$emit('showSide');
    }
  },
  computed:{
    //返回当前模式
    model(){
      return this.isNight ? 'night' : 'morning'
    },
    ...mapGetters([
      'isNight'
    ])
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "v-header.styl"
</style>

