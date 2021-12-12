import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    news: {},
    filteringWord: ''
  },
  mutations: {
    SET_NEWS (state, news) {
      state.news = news
    },
    SET_FILTERING_WORD (state, event) {
      state.filteringWord = event.target.value
    },
  },
  actions: {
    setNews ({ commit }) {
      axios
        .get('https://newsapi.org/v2/top-headlines?country=fr&apiKey=d6dd977e39dd450da8e57382369a570f')
        .then(res => {
          commit('SET_NEWS', res.data)
        })
    },
    setFilteringWord ({ commit }, event) {
      commit('SET_FILTERING_WORD', event)
    },
  }
})
