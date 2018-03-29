<template>
  <div class="home-page">
    <div  class="slider-wrapper">
      <div class="slider-content">
        <slider>
          <div v-for="item in sliders" >
            <img src="item.image" alt="">
          </div>
        </slider>
      </div>
    </div>
    <div class="newList">
      <div class="model">
        <ul>
          <li class="new border-1px"><img src="" alt=""></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import axios from 'axios'
import Slider from '../../base/slider/slider'
import {getSlider, getNews} from 'api/homePage'
import {attachImageUrl} from 'common/js/dom'
import {mapGetters,mapMutations,mapActions} from 'vuex'
export default {
  data (){
    return{
      sliders:[],
      date: Date,
      dateStr:''
    }
  },
  created() {
    if (this.isFirstLoad) {
      this.fetchData();
      this.setFirstLoad();
      this.initDate();
    }
  },
  mounted(){
    setTimeout(() => {
      this.__getSlider();
    },20)
  },
  methods:{
      __getSlider(){
        getSlider().then((res) => {
          this.sliders = this.initImage(res.data.top_stories);
          console.log(this.sliders);
        })
      },
      initImage(data){
        data.map((item) => {
          item.image = attachImageUrl(item.image);
        })
        return data
      },
      //获取最新消息
      fetchData() {
        getNews().then((response) => {
          let stories  = response.data.stories;
          let ids = stories.map(story => story.id);
          this.addNews({
            stories: stories,
            ids: ids
          })

        }).catch((error) => {
          console.log(error)
        })
      },
      // 转换图片
      attachImageUrl(srcUrl){
        if(srcUrl != undefined){
          return srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p');
        }
      },
      // 获取第一次数据加载当前日期
      initDate(){
        this.date = new Date();
        this.addDate(new Date(this.date.getTime()))
        console.log(new Date(this.date.getTime()))
        this.changeDateStr();
      },
      // 把日期改为字符串形式
      changeDateStr(){
        let nowDate = new Date(this.homepageDate.getTime());
        let year = nowDate.getFullYear() + '';
        let month = nowDate.getMonth() + 1;
        let date = nowDate.getDate();
        month = month < 10 ? '0' + month : month + '';
        date = date < 10 ? '0' + date : date + '';

        this.dateStr = year + month + date;
        this.addDateStr(this.dateStr)
      },
      ...mapMutations({
        setFirstLoad:'CHANGE_FIRST_LOAD'
      }),
      ...mapActions([
        'addNews',
        'addDate',
        'addDateStr'
      ])
  },
  computed:{
    ...mapGetters([
      'stories',
      'isFirstLoad',
      'homepageDate'
    ])
  },
  components:{
    Slider
  }
}
</script>

<style lang="stylus" scoped>
  @import "home-page.styl"

</style>

