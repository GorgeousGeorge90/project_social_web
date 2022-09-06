import {ADD_MESSAGE, DELETE_MESSAGE} from './dialogsReducer';


export const addMessage = message => ({type: ADD_MESSAGE, payload: message})
export const deleteMessage = id => ({type: DELETE_MESSAGE, payload: id})