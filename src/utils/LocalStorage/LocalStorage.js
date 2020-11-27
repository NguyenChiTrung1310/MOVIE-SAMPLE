import { LOCAL_STORAGE_CREDENTIALS_KEY, LOCAL_STORAGE_PROFILE_KEY, LOCAL_STORAGE_TOKEN_KEY } from '../../constants/constant';


/* ========= USER TOKEN ========= */
export const storeUserToken = (token) => {
  localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, token);
}

/* ========= USER CREDENTIALS ========= */
// set 
export const storeCredentials = (token) => {
  localStorage.setItem(LOCAL_STORAGE_CREDENTIALS_KEY, token);
}

/* ========= PROFILE ========= */
// set 
export const storeProfile = (data) => {
  localStorage.setItem(LOCAL_STORAGE_PROFILE_KEY, data);
}


/* ========= GET DATA FRON LOCALSTORAGE ========= */

// get Data
export const getDataFromLocalStorage = (key) => {
  return localStorage.getItem(key);
}

// get Token
export const getTokenFromLocalStorage = () => {
  const token =  localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY);
  return token;
}


/* ========= LOGOUT and CLEAR LOCALSTORAGE ========= */

// CLEAR STORE
export const clearStoreFromLocalStorage = () => {
  localStorage.clear();
}

