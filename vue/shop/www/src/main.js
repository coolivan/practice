import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './stores'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  // 鉴权
  if (to.matched.some(_ => _.meta.requiresAuth)) {
    //some: 二级里如果有一个要鉴权就true
    // store.state.user = {
    //   ...JSON.parse(sessionStorage.getItem('user'))
    // };
    let {isLogin} = store.state.user;
    !isLogin && next({
      name: 'login'
    })
  }

  next()
});

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
