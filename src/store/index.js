import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    homeList: {
      name: 'Lee',
      imgSrc: 'http://demo.zmblogs.com/vue/vuexDemo/images/lee.jpg'
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
    }
  }
})
