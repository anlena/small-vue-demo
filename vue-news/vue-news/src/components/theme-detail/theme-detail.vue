<template>
  <div class="themeDetail">
    <v-header @showSide="show"></v-header>
    <sidebar :sidebarShow="sidebarShow" @hideSidebar="hide" ref="sidebar"></sidebar>
    <div class="model" :class="model">
      <div class="editors border-1px" @click="showEditors(id)">
        <span class="editor">主编</span>
        <div class="avatar" v-for="editor in this.$store.state.currentTheme.editors" :key="editor.id"><img
          :src="attachImageUrl(editor.avatar)" width="30" height="30"></div>
        <span class="arrow_right"><img src="./arrow_right.png" width="24" height="24"></span>
      </div>
      <div class="themeNewList" :class="model">
        <ul>
          <li v-for="story in this.$store.state.currentTheme.stories" :key="story.id" class="new border-1px"
              @click="goNew(story.id)">
            <span class="title">{{story.title}}</span>
            <span class="avatar" v-for="(item,index) in story.images" v-if="index<1" :key="index"><img v-lazy="attachImageUrl(item)"></span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../header/header.vue'
import Sidebar from '../sidebar/sidebar'
import axios from 'axios'
import router from '../../router'

export default {
  data(){
    return{
      sidebarShow: false,         //侧边栏显示状态
      id:'',            //当前主题id
      scroll:''
    }
  },
  //观察路由更新数据变化
  watch:{
    '$route'(to,from){
      this.fetchData();
    }
  },
  //生命周期创建数据观察
  created(){
    this.fetchData();
  },
  methods:{
    // 获取当前主题页面数据
    fetchData(){
      if (this.$store.state.currentThemeId != -1) {
        axios.get('api/theme/' + this.$store.state.currentThemeId).then((response) => {
          let theme = response.data;
          let stories = theme.stories;
          let ids = stories.map(story => story.id);
          this.$store.dispatch('addTheme',theme);
          this.$store.dispatch('addAllNews',stories);
          this.$store.dispatch('addThemeIds',ids);
        }).catch((error) => {
          console.log(error);
        })
      }
      this.id = this.$store.state.currentThemeId;
    },
    //显示侧边栏，在其显示时访问他的获取数据方法，从而使better-scroll能够计算出中间主题列表高度
    show(){
      this.$refs.Siderbar.open();
    },
    //对图片进行转换
    attachImageUrl(srcUrl){
      if(srcUrl != undefined){
        return srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p');
      }
    },
    //跳转主题列表路由
    showEditors(id){
      router.push({name:'editorsList',params:{id:id}});
    },
    //前往主题新闻详情页
    goNew(id){
      this.$store.state.id = id;
      router.push({name: 'newDetail', params: {id: id}});
      this.$store.dispatch('judgeCollectState');
      this.$store.dispatch('changeGoType', 3)
      this.$store.dispatch('addThemeNextId', id)
    },
    //显示侧边栏，在其显示时访问他的获取数据方法，从而使better-scroll能够计算出中间主题列表高度
    show() {
      this.sidebarShow = true;
      if (this.sidebarShow) {
        this.$refs.sidebar.fetchData();
      }
    },
    //隐藏侧边栏
    hide() {
      this.sidebarShow = false;
    }
  },
  computed:{
    // 返回当前模式
    model(){
      return this.$store.getters.getModel;
    },
    //获取当前主题id
    currentThemeId(){
      return this.$store.state.currentThemeId;
    },
    //获取当前主题标题
    themeTitle(){
      // return this.$store.currentTheme.name
    }
  },
  components:{
    'v-header':Header,
    Sidebar
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/index.styl"
  .themeDetail
    position:relative
    top:101px;
    overflow scroll
    .modal-open
      width:100%
    .model
      overflow auto
      &.morning
        color rgb(51, 51, 51)
        background-color rgb(255, 255, 255)
      &.night
        color rgb(184, 184, 184)
        background-color rgb(52, 52, 52)
      .editors
        position relative
        top 0px
        width 92%
        height 100px
        line-height 100px
        border-1px(rgba(7, 17, 27, 0.1))
        padding 0 20px
        .editor
          font-size 32px  /*no*/
          color rgb(102, 102, 102)
        .avatar
          display inline-block
          img
            margin-left 20px
            vertical-align middle
            border-radius 50%
        .arrow_right
          position absolute
          top 10px
          right 10px
          padding 0 10px
      .themeNewList
        position relative
        top 0px
        width 100%
        height 100%
        &.morning
          color rgb(51, 51, 51)
          background-color rgb(255, 255, 255)
        &.night
          color rgb(184, 184, 184)
          background-color rgb(52, 52, 52)
        .new
          display flex
          position relative
          left 0px
          padding 30px 20px 30px 20px
          border-1px(rgba(7, 17, 27, 0.1))
          .title
            flex 1
            margin-right 20px
            line-height 40px
            font-size:16px; /*no*/
          .avatar
            flex 0 0 130px
            width 130px
            height 120px
            img
              width 130px
              height 120px
              img[lazy=loading]
                height 120px
                width 130px
                margin auto
</style>
