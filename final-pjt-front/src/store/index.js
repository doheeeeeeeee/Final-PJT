import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createPersistedState from 'vuex-persistedstate'
import router from '@/router'

Vue.use(Vuex)

const API_URL = "http://127.0.0.1:8000"

export default new Vuex.Store({
  plugins: [
    createPersistedState(),
  ],
  state: {
    articles: [],
    movies: [
      {
        title: 'a',
        content: 'a',
      }
    ],
    token: null,
  },
  getters: {
    isLogin(state) {
      return state.token ? true : false
    }
  },
  mutations: {
    GET_ARTICLES(state, articles) {
      state.articles = articles
    },
    GET_MOVIES(state, movies) {
      state.movies = movies
    },
    // SIGN_UP(state, token) {
    //   state.token = token
    // },
    SAVE_TOKEN(state, token) {
      state.token = token
      router.push({ name: "ArticleView" })
    }
  },
  actions: {
    getArticles(context) {
      axios({
        method: "get",
        url: `${API_URL}/api/v1/articles/`,
        headers: {
          Authorization: `Token ${context.state.token}`
        }
      })
        .then((res) => {
          context.commit('GET_ARTICLES', res.data)
        })
    },
    getMovies(context) {
      axios({
        method: "get",
        url: `${API_URL}/api/v1/movies`,
        headers: {
          Authorization: `Token ${context.state.token}`
        }
      })
        .then((res) => {
          context.commit('GET_MOVIES', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    signUp(context, payload) {
      axios({
        method: "post",
        url: `${API_URL}/accounts/signup/`,
        data: {
          username: payload.username,
          password1: payload.password1,
          password2: payload.password2,
        }
      })
        .then((res) => {
          context.commit('SAVE_TOKEN', res.data.key)
        })
        .catch((err) => console.log(err))
    },
    logIn(context, payload) {
      axios({
        method: "post",
        url: `${API_URL}/accounts/login/`,
        data: {
          username: payload.username,
          password: payload.password,
        }
      })
        .then((res) => {
          context.commit('SAVE_TOKEN', res.data.key)
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
  modules: {
  }
})
