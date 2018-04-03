// 调用mutation方法对数据进行操作

import * as types from './mutation_types'

// 改变第一次进入首页状态
function changeFirstLoad ({ commit,state }){
  commit(types.CHANGE_FIRST_LOAD);
}

// 改变日期字符串
export function addDateStr({commit}, dateStr) {
  commit(types.ADD_DATE_STR, dateStr)
  commit(types.ADD_HOMEPAGE_DATE_STR, dateStr)
}

// 改变日期
export function addDate ({commit},date){
  commit(types.ADD_DATE,date)
  commit(types.ADD_HOMEPAGE_DATE, date)
}
//改变首页日期
function addHomePageDate ({commit},date){
  commit(types.ADD_HOMEPAGE_DATE,date)
}

//改变首页日期字符串
export function addHomePageDateStr({commit},dateStr){
  commit(types.ADD_HOMEPAGE_DATE_STR,dateStr)
}

//改变模式
function changeModel ({commit}) { 
  commit(types.CHANGE_MODEL);
}

//添加详情页底部状态到数组
export function changeStoryExtra({commit},extra){
  commit(types.STORY_EXTRA,extra)
}

//改变跳转详情页的路由状态，判断是从里跳入
export function changeGoType({commit},id){
  commit(types.CHANGE_GO_TYPES,id);
}

//改变收藏状态
export function changeCollectState({commit}){
  commit(types.CHANGE_COLLECT_STATE);
}

//添加下一篇新闻id
export function addNextId({commit},id){
  commit(types.ADD_NEXT_ID,id);
}

//增加id数组到ids
export function addMoreIds({commit},ids){
  commit(types.ADD_MORE_IDS,ids);
}

//添加主题新闻下一篇新闻id
export function addThemeNextId({commit},id){
  commit(types.ADD_THEME_NEXT_ID,id);
}

//增加主题新闻数据
export  function addTheme({commit},payload){
  commit(types.ADD_THEME,payload)
}

export function addThemeIds({commit},ids){
  commit(types.ADD_THEME_NEWID,ids)
}

//增加全部加载过的新闻到数组
export function addAllNews({commit},stories) {  
  commit(types.ADD_ALL_NEWS,stories);
}

// 改变内容点赞数
export function changePopularity({commit},popularity){
  commit(types.CHANGE_POPLARITY,popularity);
}

//判断收藏状态
export function judgeCollectState({commit}){
  commit(types.JUDGE_COLLECT_STATE);
}

export function addNews({commit, state}, {stories, ids}) {
  let nStories = state.stories.slice()
  let nIds = state.ids.slice()

  let newStories = nStories.concat(stories)
  let newIds = nIds.concat(ids)

  commit(types.ADD_NEWS, newStories)
  commit(types.ADD_IDS, newIds)
}

export function setGoType({commit,state},{id,type}){
  commit(types.ADD_NEW_ID,id);
  commit(types.CHANGE_GO_TYPES,type);
}