import {createStore, combineReducers, applyMiddleware} from "redux"
import profileReduser from './profileReduser';
import messagesReduser from './messagesReduser';
import sidebarReduser from './sidebarReduser';
import usersReduser from "./usersReduser";
import authReduser from "./Auth-reduser";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import appReducer from './app-reduser';

let redusers = combineReducers({
    profilePage: profileReduser,
    messagesPage: messagesReduser,
    sidebar: sidebarReduser,
    usersPage: usersReduser,
    auth: authReduser,
    form: formReducer,
    app: appReducer
})

let store = createStore(redusers, applyMiddleware(thunkMiddleware))

window.store = store

export default store;