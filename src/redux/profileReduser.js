import { profileAPI } from "../API";
import { stopSubmit } from 'redux-form';

const ADD_POST = "ADD-POST";
const SET_PROFILE = "SET-PROFILE";
const SET_STATUS = "SET-STATUS";
const DELETE_POST = "DELETE_POST";
const CHANGE_PHOTO_SUCCESS = 'CHANGE_PHOTO_SUCCESS';

let initialState = {
  postsData: [
    { id: 1, message: "Hi, how are you?", likeCounter: "12" },
    { id: 2, message: "It's cold today", likeCounter: "11" },
    { id: 3, message: "Yo", likeCounter: "11" },
    { id: 4, message: "learning react", likeCounter: "11" },
    { id: 5, message: "want to be a developer", likeCounter: "11" }
  ],
  profile: null,
  status: "My status"
};

const profileReduser = (state = initialState, action) => {
  if (action.type === ADD_POST) {
    let newPost = {
      id: state.postsData.length+1,
      message: action.postNewText,
      likeCounter: 0
    }
    return {
      ...state,
      postsData: [newPost , ...state.postsData,],
    }
  }else if (action.type === SET_PROFILE) {
    return{
      ...state,
      profile: action.profile,
    }
  }else if (action.type === SET_STATUS) {
    return{
      ...state,
      status: action.status,
    }
  }else if (action.type === DELETE_POST) {
    return{
      ...state,
      postsData: state.postsData.filter(p=>p.id!==action.postId),
    }
  }else if (action.type === CHANGE_PHOTO_SUCCESS) {
    return{
      ...state,
     profile :{...state.profile, photos: action.photos}
    }
  }

  return state;
};
export let addPostAC = postNewText => ({ type: ADD_POST, postNewText });
export let deletePost = postId => ({ type: DELETE_POST, postId });

export let setProfile = profile => ({type: SET_PROFILE, profile})
export let setStatus = status => ({type: SET_STATUS, status});
export let changePhoto = photos => ({ type: CHANGE_PHOTO_SUCCESS, photos})

export const addPost = (postNewText)=>{
  return dispatch => { 
    dispatch(addPostAC(postNewText))
  }
}

export const getUser = userId => {
  return dispatch => {
    
  profileAPI.getUserProfile(userId)
    .then(response => {
      dispatch(setProfile(response))
    });
};
};

export const getStatus = userId => {

  return dispatch => {
    
  profileAPI.getStatus(userId)
    .then(response => {
      dispatch(setStatus(response))
    });
};
};
export const updateStatus = status => {
  return dispatch => {
    
  profileAPI.updateStatus(status)
    .then(response => {
        if(response.resultCode === 0){
      dispatch(setStatus(status))}
    });
};
};
export const savePhoto = photo => {
  return dispatch => {
    
  profileAPI.updatePhoto(photo)
    .then(response => {
        if(response.resultCode === 0){
      dispatch(changePhoto(response.data.photos))}
    });
};
};
export const saveProfile = profile => {
  return (dispatch, getState) => {
    let id = getState().auth.id
  return profileAPI.saveProfile(profile)
    .then(response => {
        if(response.data.resultCode === 0){
     dispatch(getUser(id))}else{
       dispatch(stopSubmit('editProfile', {_error: response.data.messages[0]}))
     }
    });
};
};

export default profileReduser;
