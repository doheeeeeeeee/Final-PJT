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
        "adult": false,
        "genre_ids": [
            28,
            12,
            878
        ],
        "original_language": "en",
        "original_title": "Black Panther: Wakanda Forever",
        "overview": "\uad6d\uc655\uc774\uc790 \ube14\ub799 \ud32c\uc11c\uc778 \ud2f0\ucc30\ub77c\uc758 \uc8fd\uc74c \uc774\ud6c4 \uc218\ub9ce\uc740 \uac15\ub300\uad6d\uc73c\ub85c\ubd80\ud130 \uc704\ud611\uc744 \ubc1b\uac8c \ub41c \uc640\uce78\ub2e4. \ub77c\ubaac\ub2e4, \uc288\ub9ac \uadf8\ub9ac\uace0 \ub098\ud0a4\uc544, \uc624\ucf54\uc608, \uc74c\ubc14\ucfe0\ub294 \uac01\uc790 \uc0ac\uba85\uac10\uc744 \uac16\uace0 \uc640\uce78\ub2e4\ub97c \uc9c0\ud0a4\uae30 \uc704\ud574 \uc678\ub85c\uc6b4 \uc2f8\uc6c0\uc744 \uc774\uc5b4\uac04\ub2e4. \ud55c\ud3b8, \ube44\ube0c\ub77c\ub284\uc758 \ud328\uad8c\uc744 \ub458\ub7ec\uc2fc \ubbf8\uc2a4\ud130\ub9ac\ud55c \uc74c\ubaa8\uc640 \ud568\uaed8 \uae4a\uc740 \ud574\uc800\uc5d0\uc11c \ubaa8\uc2b5\uc744 \ub4dc\ub7ec\ub0b8 \ucd5c\uac15\uc758 \uc801 \ub124\uc774\uba38\uc640 \ud0c8\ub85c\uce78\uc758 \uc804\uc0ac\ub4e4\uc740 \uc640\uce78\ub2e4\ub97c \ud5a5\ud574 \ubb34\ucc28\ubcc4 \uacf5\uaca9\uc744 \ud37c\ubd93\uae30 \uc2dc\uc791\ud558\ub294\ub370\u2026",
        "popularity": 4392.866,
        "poster_path": "/3PCRWLeqp5y20k6XVzcamZR3BWF.jpg",
        "release_date": "2022-11-09",
        "title": "\ube14\ub799 \ud32c\uc11c: \uc640\uce78\ub2e4 \ud3ec\uc5d0\ubc84",
        "vote_average": 7.6,
        "vote_count": 597,
        "like_users": []
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
      router.push({ name: "HomeView" })
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
