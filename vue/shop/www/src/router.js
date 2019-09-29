import Vue from 'vue'
import VueRouter from 'vue-router'


import NProgress from 'nprogress'
import 'nprogress/nprogress.css';
// import store from './stores';

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'home',
      component: ()=>import('./views/Home.vue')   
    },

    {
      path: '/about',
      name: 'about',
      component: ()=>import('./views/About')
    },
    {
      path: '/item/:itemId',
      name: 'item',
      component: () => import('./views/Item'),
      props: true, //路由传参，把params参数:itemId放到props里
      beforeEnter(to, from, next) {
        NProgress.start();
        next();
      }
    },

    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login')
    },
    {
      path: '/user',
      alias: '/member',
      component: () => import(/* webpackChunkName:"user"*/ './views/User'),//打包时会将注释相同的打包到一个文件
      meta: {
        requiresAuth: true,
      },
      children: [{
          path: '',
          name: 'user',
          component: () => import( /* webpackChunkName:"user"*/ './views/User/Profile')
        },
        {
          path: 'cart',
          name: 'cart',
          component: () => import( /* webpackChunkName:"user"*/ './views/User/Cart')
        }
      ]
    },


    {
      path: '/book',
      name: 'book',
      redirect: to => {
        let type = localStorage.getItem('book-type')
        return {
          name: type || 'book-choose'
        }
      }
    },
    {
      path: '/book-choose',
      name: 'book-choose',
      component: () => import( /* webpackChunkName:"book"*/ './views/Book/BookChoose')
    },
    {
      path: '/book-boy',
      name: 'book-boy',
      component: () => import( /* webpackChunkName:"book"*/ './views/Book/BookBoy')
    },
    {
      path: '/book-girl',
      name: 'book-girl',
      component: () => import( /* webpackChunkName:"book"*/ './views/Book/BookGirl')
    },

    {
      path: '*',
      component: ()=>import('./views/NotFound')
    }

  ],

  // 保存滚动条位置
  // scrollBehavior:()=>({y:0}),
  scrollBehavior(to, from, savedPosition) {
    // console.log(savedPosition)
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
});

// const whiteLists = ['home', 'about'];
// router.beforeEach((to, from, next) => {
  // console.log(to);
  // 鉴权
  //   if (whiteLists.includes(to.name)) {
  //     next();
  //   } else {
  //     // router.push({name: 'home'})
  //     next({
  //       name: 'about'
  //     });
  //   }
  // next();
// })



router.afterEach((to,fromt)=>{
    if (to.name === 'item') {
      NProgress.done();
    }
})

export default router;
