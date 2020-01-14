import { usersAPI } from "../API";

const FOLLOW_SUCCESS = "FOLLOW";
const UNFOLLOW_SUCCESS = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const TOTAL_USERS_COUNT = "TOTAL-USERS-COUNT";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const TOGGLE_FOLLOWING = "TOGGLE-FOLLOWING";

let initialState = {
  users: [],
  count: 20,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingProgressId: []
};
const usersReduser = (state = initialState, action) => {
  if (action.type === FOLLOW_SUCCESS) {
    return {
      ...state,
      users: state.users.map(user => {
        if (user.id === action.userId) {
          return { ...user, followed: true };
        }
        return user;
      })
    };
  } else if (action.type === UNFOLLOW_SUCCESS) {
    return {
      ...state,
      users: state.users.map(user => {
        if (user.id === action.userId) {
          return { ...user, followed: false };
        }
        return user;
      })
    };
  } else if (action.type === SET_USERS) {
    return {
      ...state,
      users: [...action.users]
    };
  } else if (action.type === TOTAL_USERS_COUNT) {
    return {
      ...state,
      totalUsersCount: action.totalUsers
    };
  } else if (action.type === SET_CURRENT_PAGE) {
    return {
      ...state,
      currentPage: action.currentPage
    };
  } else if (action.type === TOGGLE_IS_FETCHING) {
    return {
      ...state,
      isFetching: action.isFetching
    };
  } else if (action.type === TOGGLE_FOLLOWING) {
    return {
      ...state,
      followingProgressId: action.isFetching
        ? [...state.followingProgressId, action.userId]
        : state.followingProgressId.filter(id => id !== action.userId)
    };
  }
  return state;
};
export let followSuccess = userId => ({ type: FOLLOW_SUCCESS, userId });
export let unfollowSuccess = userId => ({ type: UNFOLLOW_SUCCESS, userId });
export let setUsers = users => ({ type: SET_USERS, users });
export let setTotalUsers = totalUsers => ({
  type: TOTAL_USERS_COUNT,
  totalUsers: totalUsers
});
export let setCurrentPage = currentPage => ({
  type: SET_CURRENT_PAGE,
  currentPage: currentPage
});
export let toggleIsFetching = isFetching => ({
  type: TOGGLE_IS_FETCHING,
  isFetching: isFetching
});
export let toggleFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_FOLLOWING,
  isFetching,
  userId
});

export const getUsers = (currentPage, count) => {
  return dispatch => {
    dispatch(toggleIsFetching(true));
    usersAPI.getUsers(currentPage, count).then(response => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(response.items));
      dispatch(setTotalUsers(response.totalCount));
    });
  };
};
export const onPageChange = (currentPage, count) => {
  return dispatch => {
    dispatch(setCurrentPage(currentPage));
    dispatch(toggleIsFetching(true));
    usersAPI.onPageChange(currentPage, count).then(response => {
      dispatch(setUsers(response.items));
      dispatch(toggleIsFetching(false));
    });
  };
};
export const follow = userId => {
  return dispatch => {
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.follow(userId).then(response => {
      if (response.resultCode === 0) {
        dispatch(followSuccess(userId));
      }
      dispatch(toggleFollowingProgress(false, userId));
    });
  };
};
export const unfollow = userId => {
  return dispatch => {
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.unfollow(userId).then(response => {
      if (response.resultCode === 0) {
        dispatch(unfollowSuccess(userId));
      }
      dispatch(toggleFollowingProgress(false, userId));
    });
  };
};

export default usersReduser;
