<template>
  <div class="home-page">
    <!-- <div class="slider-wrapper">
      <div class="slider-content"></div>
    </div>
    <div class="newList">
      <div class="model">
        <ul>
          <li class="new border-1px"><img src="" alt=""></li>
        </ul>
      </div>
    </div> -->
    <div class="top"></div>
    <div class="center">
      <dl></dl>
      <dl></dl>
      <dl></dl>
      <dl></dl>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import axios from 'axios'
import {getSlider, getNews} from 'api/homePage'
import {attachImageUrl} from 'common/js/dom'
export default {
  data (){
    return{

    }
  },
  created() {
    if (this.isFirstLoad) {
      this.fetchData();
    }
  },
  methods:{
      //获取最新消息
      fetchData() {
        getNews().then((response) => {
          let stories = response.data.stories;
          let ids = stories.map(story => story.id)
          this.addNews({
            stories: stories,
            ids: ids
          })
        }).catch((error) => {
          console.log(error)
        })
      },
  }
}
</script>

<style lang="stylus" scoped>
  @import "home-page.styl"
    .top{
      width 750px
      height 488px
      background-color red
    }
    .center
      display flex
      box-sizing border-box
      flex-wrap wrap
      justify-content space-between
      padding 20px
      dl
        height 188px
        flex 0 0 48%
        margin 10px 0
        background-color blue
</style>

