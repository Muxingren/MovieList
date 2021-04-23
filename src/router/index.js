import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../pagers/index.vue'
import Movie from '../pagers/moviePage.vue'
import MovieDetail from '../pagers/movieDetail.vue'
import Login from '../pagers/login.vue'

Vue.use(VueRouter)

const routes = [
  {
    name: 'index',
    path: '/',
    component: Index
  },
  {
    name: 'movie',
    path: '/movie',
    component: Movie,
    meta:{ //自定义数据 该数据通常会被导航守卫使用
      needLogin:true
    }
  },
//   动态路由
  {
    name: 'moviedetail',
    path: '/movie/:id',
    component: MovieDetail,
    meta:{ //自定义数据 该数据通常会被导航守卫使用
      needLogin:true
    }
  },
  {
    name: 'login',
    path: '/login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})


export default router
