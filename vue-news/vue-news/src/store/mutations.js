// 定义state数据的修改操作

import * as types from './mutation_types'
import { stat } from 'fs';

export default{
  
  // 增加首页新闻数组和首页新闻id数组
  [types.ADD_NEWS](state,stories){
    state.stories = stories;
  },
  [types.ADD_IDS](state,ids){
    state.ids = ids;
  },
  //改变第一次进入首页状态
  [types.CHANGE_FIRST_LOAD](state){
    state.isFirstLoad = !state.isFirstLoad;
  },
  // 改变首页日期
  [types.ADD_HOMEPAGE_DATE](state,date){
    state.homepageDate = date
  },
  //改变日期和当前字符串
  [types.ADD_DATE](state,date){
    state.date = date
  },
  //增加日期字符串
  [types.ADD_DATE_STR](state,dateStr){
    state.dateStr = dateStr
  }
}