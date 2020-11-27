import axios from 'axios'
import { getTokenFromLocalStorage } from '../utils/LocalStorage/LocalStorage';

export const request = (url = '', method = '', data = {}) => {
  const config = {};

  const token = getTokenFromLocalStorage();
  

  if (token){
    config.headers = {
      Authorization: `Bearer ${token}`
    }
  }

  return axios({
    url: url,
    method: method,
    data: data,
    ...config,
  });
}

export default request;




  

