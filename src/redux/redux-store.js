import {combineReducers} from 'redux';
import {legacy_createStore as createStore} from 'redux'
import {profileReducer} from './profileReducer';
import {dialogsReducer} from './dialogsReducer';


let reducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
})

export let store = createStore(reducer)