// 调用mutation方法对数据进行操作

import * as types from './mutation_types'

// 改变第一次进入首页状态
function changeFirstLoad ({ commit,state }){
  commit(types.CHANGE_FIRST_LOAD);
}

// 改变日期字符串
export function addDateStr({commit},dateStr){
  commit(types.ADD_DATE_STR,dateStr);
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

export function addNews({commit, state}, {stories, ids}) {
  let nStories = state.stories.slice()
  let nIds = state.ids.slice()

  let newStories = nStories.concat(stories)
  let newIds = nIds.concat(ids)

  commit(types.ADD_NEWS, newStories)
  commit(types.ADD_IDS, newIds)
}