import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './mock/index.js'
Vue.config.productionTip = false
window.store = store;

router.beforeEach(function(to,from,next){
  if(to.meta && to.meta.needLogin){
    //需要登录的页面
    if(store.state.loginModule.loginUser.data){
      next(); // 已登录 放行
    }else{
      next('/login'); // 滚去登录
    }
  }else{
    next();
  }
})
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
