import {FOLLOW, IS_FETCHING, SET_CURRENT_PAGE, SET_TOTAL_USERS, SET_USERS, UNFOLLOW} from './usersReducer';
import {usersApi} from '../../api/api';

export const setUsers = users => ({type: SET_USERS, payload: users})
export const setTotalUsers = totalCount => ({type: SET_TOTAL_USERS, payload: totalCount})
export const setCurrentPage = currentPage => ({type: SET_CURRENT_PAGE, payload: currentPage})
export const setIsFetching = isFetching => ({type: IS_FETCHING, payload: isFetching})
export const  setFollow = userId =>({type: FOLLOW, payload: userId})
export const  setUnfollow = userId =>({type: UNFOLLOW, payload: userId})

export const getUsers = (pageSize=15, currentPage=1)=> {
    return dispatch => {
        dispatch(setIsFetching(true))
        usersApi.getUsers(pageSize, currentPage)
            .then(response => {
                dispatch(setIsFetching(false))
                dispatch(setUsers(response.items))
                dispatch(setTotalUsers(response.totalCount))
            })
    }
}

export const  getAnotherUsers = (pageNumber=1, pageSize=15)=> {
    return dispatch => {
        dispatch(setIsFetching(true))
        dispatch(setCurrentPage(pageNumber))
        usersApi.getAnotherUsers(pageNumber,pageSize)
            .then(response => {
                dispatch(setUsers(response.items))
                dispatch(setIsFetching(false))
            })
    }
}

export const getFollowUser = userId=> {
    return dispatch => {
        usersApi.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setFollow(userId))
                } else {
                    console.log(response.data.messages)
                }
            })
    }
}

export const getUnfollowUser = userId => {
    return dispatch => {
        usersApi.unfollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                   dispatch(setUnfollow(userId))
                } else {
                    console.log(response.data.messages)
                }
        })
    }
}

