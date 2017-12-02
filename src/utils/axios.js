import axios from "axios";
import store from "../store";
import router from "../router";
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 5000                  // 请求超时时间
});

service.interceptors.request.use(
  config => {
    if (store.state.token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.Authorization = 'Bearer ' + store.state.token;
    }

    return config;
  },
  err => {
    return Promise.reject(err);
  });
// http response 拦截器
service.interceptors.response.use(
  response => {
    if (response.data.flag == undefined || response.data.flag == "success") {
      return Promise.resolve(response.data)
    } else {
      return Promise.reject(response.data)
    }
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 返回 401 清除token信息并跳转到登录页面

          router.replace({
            path: 'login',
            //query: {redirect: router.currentRoute.fullPath}
          })
      }
    }
    return Promise.reject(error.response.data)   // 返回接口返回的错误信息
  });

export default service;
