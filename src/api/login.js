import axios from '../utils/axios';
export function login(username,password) {
  return axios.post('/auth', {
    username: username,
    password: password
  });
}
export function getInfo(){
  return axios.get('/admin/getInfo');
}
