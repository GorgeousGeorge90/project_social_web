import {FOLLOW, IS_FETCHING, SET_CURRENT_PAGE, SET_TOTAL_USERS, SET_USERS, UNFOLLOW} from './usersReducer';
import {usersApi} from '../../api/api';
import {deleteDialog, deleteSelected, unfollowUser} from "../dialogs/dialogs.actions";

export const setUsers = users => ({type: SET_USERS, payload: users})
export const setTotalUsers = totalCount => ({type: SET_TOTAL_USERS, payload: totalCount})
export const setCurrentPage = currentPage => ({type: SET_CURRENT_PAGE, payload: currentPage})
export const setIsFetching = isFetching => ({type: IS_FETCHING, payload: isFetching})
export const setFollow = userId =>({type: FOLLOW, payload: userId})
export const setUnfollow = userId =>({type: UNFOLLOW, payload: userId})

export const getUsers = (pageSize=15, currentPage=1)=> {
    return async dispatch => {
        dispatch(setIsFetching(true))
        const response =await usersApi.getUsers(pageSize, currentPage)
                dispatch(setIsFetching(false))
                dispatch(setUsers(response.data.items))
                dispatch(setTotalUsers(response.data.totalCount))
    }
}

export const  getAnotherUsers = (pageNumber=1, pageSize=15)=> {
    return async dispatch => {
        dispatch(setIsFetching(true))
        dispatch(setCurrentPage(pageNumber))
        const response = await usersApi.getAnotherUsers(pageNumber,pageSize)
                dispatch(setUsers(response.data.items))
                dispatch(setIsFetching(false))
    }
}

export const getFollowUser = userId=> {
    return async dispatch => {
       const response = await usersApi.follow(userId)
                if (response.data.resultCode === 0) {
                    dispatch(setFollow(userId))
                } else {
                    console.log(response.data.messages)
                }
    }
}

export const getUnfollowUser = (userId, selected) => {
    return async dispatch => {
       const response = await usersApi.unfollow(userId)
                if (response.data.resultCode === 0) {
                    if (userId === selected) {
                        dispatch(deleteSelected())
                    }
                    dispatch(unfollowUser(userId))
                    dispatch(setUnfollow(userId))
                    dispatch(deleteDialog(userId))
                } else {
                    console.log(response.data.messages)
                }
    }
}

