import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let homeListNameStr = ''
let homeListImgSrcStr = ''
try {
  if (localStorage.homeListName) {
    homeListNameStr = localStorage.homeListName || 'Lee'
    homeListImgSrcStr = localStorage.homeListImgSrc || 'http://demo.zmblogs.com/vue/vuexDemo/images/lee.jpg'
  }
} catch (e) {}

export default new Vuex.Store({
  state: {
    homeList: {
      name: homeListNameStr,
      imgSrc: homeListImgSrcStr
    }
  },
  actions: {
    seleteName (ctx, data) {
      ctx.commit('updateHomeList', data)
    }
  },
  mutations: {
    updateHomeList (state, data) {
      state.homeList.name = data.name
      state.homeList.imgSrc = data.imgSrc
      try {
        localStorage.homeListName = data.name
        localStorage.homeListImgSrc = data.imgSrc
      } catch (e) {}
    }
  }
})
