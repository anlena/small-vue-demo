<template>
  <div class="comments">
    <son-header @back="back" :title="title"></son-header>
    <div class="commentsArea" :class="model">
      <div class="longComments" :class="model">
        <div class="longCommentsTitle border-1px" @click="showLongComment">{{this.$store.state.long_comments}}条长评<img
          class="thumb" :src="longThumb"></div>
        <div class="longComment border-1px" v-for="item in longComments" v-show="longCommentShow" :key="item.id">
          <span class="avatar"><img :src="attachImageUrl(item.avatar)" width="30" height="30"></span>
          <div class="content">
            <span class="name">{{item.author}}</span>
            <span class="likes"><img src="./thumbup.png" width="20" height="20">{{item.likes}}</span><br>
            <span class="comment">{{item.content}}</span>
          </div>
        </div>
      </div>
      <div class="shortComments" :class="model">
        <div class="shortCommentsTitle border-1px" @click="showShortComment">{{this.$store.state.short_comments}}条短评<img
          class="thumb" :src="shortThumb"></div>
        <div class="shortComment border-1px" v-for="item in shortComments" v-show="shortCommentShow" :key="item.id">
          <span class="avatar"><img :src="attachImageUrl(item.avatar)" width="30" height="30"></span>
          <div class="content">
            <span class="name">{{item.author}}</span>
            <span class="likes"><img src="./thumbup.png" width="20" height="20">{{item.likes}}</span><br>
            <span class="comment">{{item.content}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from '../../router'
import axios from 'axios'
import SonHeader from '../son-header/son-header'
import sonHeaderVue from '../son-header/son-header.vue';
export default {
  data(){
    return{
      longComments: {},                         //初始化长评论
      shortComments: {},                        //初始化短评论
      longCommentShow: true,                   //初始长评论显示状态
      shortCommentShow: false,                 //初始短评论显示状态
      title: ''                                  //初始化头部标题
    }
  },
  created(){
    this.fetchLongData();
     this.fetchShortData();
  },
  // 观察路由跳转更新数据
  watch:{
    '$route'(to, from){
      this.fetchLongData();
      this.fetchShortData();
    }
  },
  methods:{
    //获取长评论数据
    fetchLongData(){
      axios.get('api/story/' + this.$store.state.id + '/long-comments').then((response) => {
        console.log(response)
        this.longComments = response.data.comments;
      })
    },
    //获取短评论
    fetchShortData(){
      axios.get('api/story/' + this.$store.state.id + '/short-comments').then((response) => {
        console.log(response) 
        this.shortComments = response.data.comments;
      })
    },
    //对图片url进行转化
    attachImageUrl(srcUrl){
      if(srcUrl !== undefined){
        return srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p');
      }
    },
    //是否显示长评论
    showLongComment(){
      this.longCommentShow = !this.longCommentShow;
    },
    //是否显示短评论
    showShortComment(){
      this.shortCommentShow = !this.shortCommentShow
    },
    // 返回上一级路由
    back(){
      router.go(-1);
    }
  },
  computed:{
    //计算长评论是否显示
    longThumb(){
      if(this.longCommentShow){
        return require('./down.png')
      }else{
        return require('./up.png')
      }
    },
    //计算短评论是否显示
    shortThumb(){
      if(this.shortCommentShow){
        return require('./down.png')
      }else{
        return require('./up.png')
      }
    },
    //返回当前模式
    model(){
      return this.$store.getters.getModel
    }
  },
  components:{
    SonHeader:SonHeader
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/index.styl";
  .comments
    width 100%
    height 100%
    .commentsArea
      position absolute
      top 101px
      height 100%
      width 100%
      &.morning
        background-color rgb(255, 255, 255)
      &.night
        background-color rgb(85, 85, 85)
      .longComments, .shortComments
        width 100%
        &.morning
          color rgb(51, 51, 51)
          background-color rgb(255, 255, 255)
        &.night
          color rgb(184, 184, 184)
          background-color rgb(85, 85, 85)
        .longCommentsTitle, .shortCommentsTitle
          height 80px
          line-height 80px
          padding-left 20px
          font-weight 700
          color rgb(7, 17, 27)
          border-1px(rgba(7, 17, 27, 0.1))
          .thumb
            position absolute
            top 16px
            right 20px
            width 40px
            height 40px
        .longComment, .shortComment
          display flex
          width 94%
          padding 20px 20px 0 20px
          border-1px(rgba(7, 17, 27, 0.1))
          .avatar
            flex 0 0 60px
            width 60px
            height 60px
            img
              border-radius 50%
          .content
            flex 1
            position relative
            margin-left 20px
            top: -20px
            .name
              left 10px
              line-height 60px
            .likes
              position absolute
              width 40px
              height 40px
              right 10px
              img
                position absolute
                right:45px
                top:10px
            .comment
              font-size 18px
</style>
