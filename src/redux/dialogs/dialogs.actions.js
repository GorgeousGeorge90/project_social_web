import {ADD_MESSAGE, DELETE_MESSAGE, GET_SELECT, SET_FOLLOWERS, UNFOLLOW_USER} from './dialogsReducer';
import {usersApi} from "../../api/api";
import {setUnfollow} from "../users/users.actions";



export const addMessage = message => ({type: ADD_MESSAGE, payload: message})
export const deleteMessage = id => ({type: DELETE_MESSAGE, payload: id})
export const setFollowers = users => ({type: SET_FOLLOWERS, payload: users})
export const unfollowUser = id => ({type: UNFOLLOW_USER, payload: id})
export const getSelectUser = id => ({type: GET_SELECT, payload: id})


export const unfollowFriend = userId => {
    return async dispatch => {
        const response = await usersApi.unfollow(userId)
        if (response.data.resultCode === 0) {
            dispatch(unfollowUser(userId))
            dispatch(setUnfollow(userId))
        }
    }
}