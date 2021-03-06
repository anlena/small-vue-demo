// 就是获取state中的状态，仅单向的获取数据，不做任何修改

import state from './state'

export const isFirstLoad = state => state.isFirstLoad

export const stories = state => state.stories

export const homepageDate = state => state.homepageDate

export const isNight = isNight => state.isNight

export const homepageDateStr = state => state.homepageDateStr

export const id = state => state.id

export const currentThemeId = state => state.currentThemeId


export function getModel (state) {
  return state.isNight ? 'night' : 'morning'
}

export function getCollect (state){
  state.isCollect = false;
  state.isCollectIds.forEach(id => {
    if(state.id == id){
      state.isCollect = true;
    }
  });
  return state.isCollect ? '取消收藏':'收藏'
}