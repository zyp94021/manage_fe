import axios from '../utils/axios';
export function findPage(search){
  return axios.get('/admin/findPage',{params:search});
}
export function getCompany(){
  return axios.get('/admin/getCompany');
}
export function addAdmin(form){
  return axios.post('/auth/register', form);
}
export function editAdmin(form){
  return axios.post('/admin/update', form);
}
export function deleteAdmin(list){
  return axios.post('/admin/delete', list);
}

