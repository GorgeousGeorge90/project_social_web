import {applyMiddleware, combineReducers} from 'redux';
import {legacy_createStore as createStore} from 'redux'
import {profileReducer} from './profile/profileReducer';
import {dialogsReducer} from './dialogs/dialogsReducer';
import usersReducer from './users/usersReducer';
import authReducer from './auth/authReducer';
import ThunkMiddleWare from 'redux-thunk';
import newsReducer from './news/newsReducer';


let reducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    newsPage:newsReducer,
})

export let store = createStore(reducer, applyMiddleware(ThunkMiddleWare))
window.store = store