import Vue from "vue";
import Vuex from "vuex";
import {getInfo, login} from "../api/login";
import * as Cookie from "js-cookie";

Vue.use(Vuex);

const state = {
  token: Cookie.get('token'),
  adminInfo: '',
}
const mutations = {
  login(state, loginInfo){
    state.adminInfo = loginInfo.admin;
    state.token = loginInfo.token;
    Cookie.set('token', state.token);
  },
  logout(state){
    state.token = '';
    state.adminInfo = '';
    Cookie.remove('token');
  },
  saveInfo(state, adminInfo){
    state.adminInfo = adminInfo;
  }
}
const actions = {
  login({commit, dispatch}, loginForm){
    return new Promise((resolve, reject) => {
      login(loginForm.username, loginForm.password).then(response => {
        commit('login', response);
        resolve();
      }).catch((err) => {
        reject(err);
      })
    })
  },
  logout({commit}){
    return new Promise((resolve, reject) => {
      commit('logout');
      resolve();
    })
  },
  getInfo({dispatch, commit}){
    return new Promise((resolve, reject) => {
      if (state.adminInfo == '') {
        getInfo().then(response => {
          commit('saveInfo', response);
          resolve();
        }).catch(err => {
          console.log(err);
          reject(err);
        })
      } else {
        resolve();
      }
    })
  }
}


export default new Vuex.Store({
  state,
  actions,
  mutations,
})


