import Vue from 'vue'
import VueRouter from 'vue-router'
// import ArticleView from '@/views/ArticleView'
// import CreateView from '@/views/CreateView'
// import DetailView from '@/views/DetailView'
import SignUpView from '@/views/SignUpView'
import LogInView from '@/views/LogInView'
import HomeView from '@/views/HomeView'
import store from '@/store'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  // {
  //   path: '/create',
  //   name: 'CreateView',
  //   component: CreateView
  // },
  {
    path: '/signup',
    name: 'SignUpView',
    component: SignUpView
  },
  {
    path: "/login",
    name: "LogInView",
    component: LogInView,
    beforeEnter(to, from, next) {
      const isLogIn = store.getters.isLogin
      if (isLogIn) {
        next({ name: "HomeView" })
      } else {
        next()
      }
    }
  },
  // {
  //   path: "/:id",
  //   name: "DetailView",
  //   component: DetailView,
  // },
  // {
  //   path: '/article',
  //   name: "ArticleView",
  //   component: ArticleView
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
