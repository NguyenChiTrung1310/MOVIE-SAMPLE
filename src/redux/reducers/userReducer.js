import { CLEAR_STORE, LOGIN_FAILURE, LOGIN_SUCCESS, REGISTER_FAILURE, REGISTER_SUCESS } from '../../constants/constant';

let initialState = {
  credentials: null,
  loginStatus: null,
  registerStatus:null,
};
  
const UserReducer = (state = initialState, action) => {

  const { type, loginStatus, payload } = action 

  switch (type) {
    case LOGIN_SUCCESS:
      state.credentials = payload;
      return { 
        ...state,
        loginStatus: loginStatus 
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loginStatus: loginStatus 
      } 
    case REGISTER_SUCESS:
      state.credentials = payload;
      return{
        ...state,
        loginStatus:false,
        registerStatus: type  
      }
    case REGISTER_FAILURE:
      return{
        ...state,
        loginStatus:false,
        registerStatus: type  
      }
    case CLEAR_STORE:
      state = undefined;
      return {
        ...state,
      }
    default:
      return state;
  }
};
  
export default UserReducer;