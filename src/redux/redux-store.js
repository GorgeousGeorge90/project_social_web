import {combineReducers} from 'redux';
import {legacy_createStore as createStore} from 'redux'
import {profileReducer} from './profileReducer';
import {dialogsReducer} from './dialogsReducer';
import usersReducer from './usersReducer';


let reducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
})

export let store = createStore(reducer)
window.store = store