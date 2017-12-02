import Vue from "vue";
import Router from "vue-router";
import Login from "../pages/login.vue";
import Main from "../pages/main.vue";
import Home from "../pages/home.vue";

import NoAccess from "../pages/403.vue";
import store from "../store/index";
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '',
      meta: {
        requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
        index: []
      },
      component: Main,
      children: [
        {
          path: '',
          component: Home,
          meta: {
            requireAuth: true,
            index: []
          },
        },
        {
          path: '403',
          component: NoAccess,
          meta: {
            requireAuth: true,
            index: [{name: '未授权提示页'}]
          },
        }
      ]
    },

  ]
})
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
    if (store.state.token) {  // 通过vuex state获取当前的token是否存在
      store.dispatch('getInfo').then(() => {
        if (to.meta.hasAnyRole) {
          let role = store.state.adminInfo.role;
          for (let i = 0; i < role.length; i++) {
            if (to.meta.hasAnyRole.indexOf(role[i].roleName) > -1) {
              next();
              return;
            }
          }
          next({
            path: '/403'
          });

        } else {
          next();
        }
      }).catch(err => {
        console.log(err)
      });

    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    next();
  }

})
export default router;
