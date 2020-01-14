import { profileAPI } from "../API";
import {stopSubmit} from 'redux-form';

const SET_USER_DATA = "SET-USER-DATA";
const SET_CAPTCHA_URL_SUCCESS = "SET_CAPTCHA_URL_SUCCESS";



let initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
  captchaUrl: null,
};
const authReduser = (state = initialState, action) => {
  if (action.type === SET_USER_DATA) {
    return {
      ...state,
     id: action.id,
     login: action.login,
     email: action.email,
     isAuth: action.isAuth
      }
    }else if (action.type === SET_CAPTCHA_URL_SUCCESS) {
      return {
        ...state,
        captchaUrl: action.url
        }
      }
  return state;
};
export let setUserData = (id, login, email, isAuth) => ({ type: SET_USER_DATA, id, login, email, isAuth});
export let setCaptchaUrl = (url) => ({ type: SET_CAPTCHA_URL_SUCCESS, url});

export const getAuth = () => {
  return dispatch => {
   return profileAPI.auth().then(response => {
      if (response.resultCode === 0) {
          
          let {
              id,
              login,
              email
          } = response.data
         
          dispatch(setUserData(id, login, email, true))
      }
    });
  }
}


export const login = (email, password, rememberMe=false, captcha=null) => {
 
  return dispatch => {
    profileAPI.login(email, password, rememberMe, captcha).then(response => {
      console.log(response)
      if (response.data.resultCode === 0) {
          dispatch(getAuth())
      }else{
        if(response.data.resultCode === 10){
          dispatch(getCaptchaUrl())
        }
        let errorMessage = response.data.messages?response.data.messages[0]:"some error"
      dispatch(stopSubmit('login', {_error: errorMessage}))
      }
    });
  }
}

export const getCaptchaUrl = () => {
  return dispatch => {
    profileAPI.getCaptchaUrl().then(response => {
     const captchaUrl = response.url
     dispatch(setCaptchaUrl(captchaUrl))
    });
  }
}

export const logout = () => {
  return dispatch => {
    profileAPI.logout().then(response => {
      if (response.data.resultCode === 0) {
          dispatch(setUserData(null, null, null, false))
      }
    });
  }
}



export default authReduser;
