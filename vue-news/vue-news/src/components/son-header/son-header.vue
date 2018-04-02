<template>
  <div class="sonHeader">
    <div class="model" :class="model">
      <span class="back" @click="back"><i class="icon iconfont icon-back"></i></span><h3>{{title}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  //接受父组件传值
  props:{
    title:{
      type:String
    }
  },
  methods:{
    //向上触发事件
    back(){
      this.$emit('back');
    }
  },
  computed:{
    model(){
      return this.$store.getters.getModel
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/iconfont.css"
  .sonHeader
    position fixed
    width 100%
    height 101px
    text-align center
    z-index 50
    line-height 101px
    background rgb(2,143,214)
    .model
      &.morning
        color rgb(51,51,51)
        background-color rgb(2,143,214)
      &.night
        color rgb(184,184,184)
        background-color rgb(85,85,85)
      & > h3
        display inline-block
        font-size:20px; /*no*/
        color white
      .back
        position absolute
        left 20px
        bottom 3px
        height 101px
        .iconfont
          position relative
          line-height 101px
          top 6px
          font-size:44px; 
          color rgb(255,255,255)
</style>
