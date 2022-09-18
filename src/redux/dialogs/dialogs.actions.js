import {
    ADD_MESSAGE, ADD_NEW_DIALOG,
    DELETE_DIALOG,
    DELETE_MESSAGE, DELETE_SELECTED,
    GET_SELECT,
    SET_FOLLOWERS,
    UNFOLLOW_USER
} from './dialogsReducer';
import {usersApi} from "../../api/api";
import {setUnfollow} from "../users/users.actions";



export const addMessage = (message, id) => ({type: ADD_MESSAGE, payload:{message, id}})
export const deleteMessage = (dialogId, textId) => ({type: DELETE_MESSAGE, payload: {dialogId, textId}})
export const setFollowers = users => ({type: SET_FOLLOWERS, payload: users})
export const unfollowUser = id => ({type: UNFOLLOW_USER, payload: id})
export const getSelectUser = id => ({type: GET_SELECT, payload: id})
export const addNewDialog = id => ({type: ADD_NEW_DIALOG, payload: id })
export const deleteDialog = id => ({type: DELETE_DIALOG, payload: id})
export const deleteSelected = ()=> ({type: DELETE_SELECTED})


export const unfollowFriend = userId => {
    return async dispatch => {
        const response = await usersApi.unfollow(userId)
        if (response.data.resultCode === 0) {
            dispatch(unfollowUser(userId))
            dispatch(setUnfollow(userId))
            dispatch(deleteDialog(userId))
        }
    }
}