import { getAuth } from "./Auth-reduser";

const SET_INITIALIZED_APP = "SET-INITIALIZED";



let initialState = {
  initialized: false,
};
const appReducer = (state = initialState, action) => {
  if (action.type === SET_INITIALIZED_APP) {
    return {
      ...state,
      initialized: true
      }
    };
  return state;
};

export let setInitializing = () =>({ type: SET_INITIALIZED_APP});

export const initializeApp = () => {
  return dispatch => {
   let promise = dispatch(getAuth())
   promise.then(()=>{dispatch(setInitializing())}
    
   )
  }
}



export default appReducer;
