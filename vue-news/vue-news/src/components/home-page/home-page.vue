<template>
  <div class="homepage" ref="homepage">
    <v-header @showSide="show"></v-header>
    <sidebar :sidebarShow="sidebarShow" @hideSidebar="hide" ref="sidebar"></sidebar>
    <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :topDistance="topDistance"
                 :bottomDistance="bottomDistance"
                 @top-status-change="handleTopChange"
                 @bottom-status-change="handleBottomChange" ref="loadmore">
      <swipe></swipe>
      <!-- <homepageDetail @hideSidebar="hide" ref="homePageDetail"></homepageDetail> -->


    </mt-loadmore>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from '../header/header.vue'
  import sidebar from '../sidebar/sidebar.vue'
  import swipe from  '../swipe/swipe.vue'
  import homepageDetail from '../home-page-detail/home-page-detail.vue'
  import axios from 'axios'

  export default {
    data() {
      return {
        sidebarShow: false,                   //侧边栏初始状态
        data: [],                               //初始化首页新闻数据
        topDistance: 50,                       //下拉刷新最小距离
        bottomDistance: 70,                    //上拉加载最小距离
        bottomStatus: '',                      //底部状态
        topStatus: '',                           //顶部状态
        scroll: ''
      }
    },
    methods: {
      //获取底部更新状态
      handleBottomChange(status){
        this.bottomStatus = status;
      },
      //获取顶部更新状态
      handleTopChange(status) {
        this.topStatus = status;
      },
      //下拉刷新，触发向子组件派发方法
      loadTop() {
        // this.$refs.homePageDetail.$emit('refresh')
        // this.$refs.loadmore.onTopLoaded()
      },
      //上拉加载，触发向子组件派发方法
      loadBottom() {
        // this.$refs.homePageDetail.$emit('loadMore')
        // this.$refs.loadmore.onBottomLoaded()
      },
      //显示侧边栏，在其显示时访问他的获取数据方法，从而使better-scroll能够计算出中间主题列表高度
      show() {
        this.scroll = document.scrollingElement.scrollTop
        this.sidebarShow = true;
        if (this.sidebarShow) {
          this.$nextTick(() => {
            this.$refs.sidebar.fetchData();
          })
          document.body.className = 'modal-open'
          document.body.style.top = -this.scroll + 'px'
        }

      },
      //隐藏侧边栏
      hide() {
        this.sidebarShow = false;
        document.body.className = ""
        document.scrollingElement.scrollTop = this.scroll
      }
    },
    //注册组件
    components: {
      'v-header': header,
      sidebar, swipe, homepageDetail
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "home-page.styl"
    .mint-loadmore-top
      position relative
      top 0px

    .mint-loadmore-bottom
      position relative
      bottom 30px

    .modal-open
      position:fixed
      width:100%
</style>