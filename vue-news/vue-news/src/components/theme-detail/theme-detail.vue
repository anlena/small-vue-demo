<template>
  <div class="themeDetail">
    <div class="model" :class="model">
      <v-header :title="themeTitle" @showSide="show"></v-header>
      <sidebar ref="sidebar"></sidebar> 
      <div class="editors border-1px" @click="showEditors(id)">
        <span class="editor">主编</span>
        <div class="avatar" v-for="editor in this.$store.state.currentTheme.editors" :key="editor.id"><img
          :src="attachImageUrl(editor.avatar)" width="50" height="50"></div>
        <span class="arrow_right"><img src="./arrow_right.png" width="30" height="30"></span>
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
    Header,
    Sidebar
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/index.styl"
  .modal-open
    position:fixed
    width:100%
  .model
    &.morning
      color rgb(51, 51, 51)
      background-color rgb(255, 255, 255)
    &.night
      color rgb(184, 184, 184)
      background-color rgb(52, 52, 52)
    .editors
      position relative
      top 80px
      width 92%
      height 80px
      line-height 80px
      border-1px(rgba(7, 17, 27, 0.1))
      padding 0 20px
      .editor
        font-size 17px  /*no*/
        color rgb(102, 102, 102)
      .avatar
        display inline-block
        img
          margin-left 20px
          border-radius 50%
      .arrow_right
        position absolute
        right 20px
        padding 0 20px
    .themeNewList
      position relative
      top 80px
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
        left -30px
        padding 40px 0 40px 20px
        border-1px(rgba(7, 17, 27, 0.1))
        .title
          flex 1
          margin-right 20px
          line-height 40px
        .avatar
          flex 0 0 140px
          width 140px
          height 110px
          img
            width 140px
            height 110px
            img[lazy=loading]
              height 110px
              width 140px
              margin auto
</style>
