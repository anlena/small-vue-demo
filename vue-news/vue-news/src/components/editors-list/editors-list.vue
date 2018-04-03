<template>
  <div class="editorsList">
    <son-header :title="title" @back="back"></son-header>
    <div class="list">
      <ul>
        <li class="editor border-1px" v-for="editor in this.$store.state.currentTheme.editors" :key="editor.id" @click="goEditor(editor.id,editor.name)">
          <div class="avatar">
            <img :src="attachImageUrl(editor.avatar)" height="70" width="70">
          </div>
          <div class="description">
            <div class="name">{{editor.name}}</div>
            <div class="bio">{{editor.bio}}</div>
          </div>
          <div class="arrow_right"><img src="./arrow_right.png" width="30" height="30"></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import axios from 'axios'
  import router from '../../router'
  import SonHeader from '../son-header/son-header'
  export default {
    data() {
      return {
        title: '主编'                   //主编列表头部标题
      }
    },
    methods: {
      //返回上一级路由
      back() {
        router.push({name: 'themeDetail', params: {id: this.$store.state.currentThemeId}})
      },
      //对图片url进行转化
      attachImageUrl(srcUrl) {
        if (srcUrl !== undefined) {
          return srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
        }
      },
      //跳转主编个人主页路由
      goEditor(id, name) {
        router.push({name: 'editor', params: {id: id}});
        this.$store.dispatch('addEditorId', {
          id: id,
          name: name
        });
      }
    },
    //注册组件
    components: {
      SonHeader
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/index.styl"
  .list
    position relative
    top 80px
    ul
      padding-left 0
      .editor
        display flex
        height 120px
        border-1px(rgba(7, 17, 27, 0.1))
        .avatar
          flex 0 0 50px
          height 120px
          line-height 120px
          padding-left 20px
          margin-right 30px
          img
            border-radius 50%
        .description
          flex 1
          height 120px
          .name
            font-size:14px; /*no*/
            margin-top 20px
          .bio
            font-size:11px; /*no*/
            margin-top 16px
            color rgb(153, 153, 153)
        .arrow_right
          flex 0 0 50px
          line-height 1200px
          padding-right 20px
</style>