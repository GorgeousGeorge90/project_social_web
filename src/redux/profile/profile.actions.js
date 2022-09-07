import {ADD_POST, DELETE_POST, SET_IS_FETCHING, SET_PROFILE, SET_STATUS, UPDATE_POST} from './profileReducer';
import {profileApi} from '../../api/api';


export const setProfile = profile => ({type: SET_PROFILE, payload: profile})
export const updatePost = text => ({type: UPDATE_POST, payload: text})
export const addPost = () => ({type: ADD_POST })
export const deletePost = id =>({type: DELETE_POST, payload:id})
export const setIsFetching = value =>({type: SET_IS_FETCHING, payload: value})
export const setStatus = text =>({type: SET_STATUS, payload: text})


export const setUserInfo = () => {
    return dispatch => {
        dispatch(setIsFetching(true))
        profileApi.getUser(22886)
            .then(response=> {
                dispatch(setProfile(response.data))
                dispatch(setIsFetching(false))
            })
    }
}


export const getUserStatus = () => {
    return dispatch => {
        profileApi.getStatus(22886)
            .then(response => {
                dispatch(setStatus(response.data))
            })
    }
}

export const updateStatus = text =>{
    return dispatch => {
        profileApi.upgradeStatus(text)
            .then(response => {
                if ( response.data.resultCode === 0 ) {
                    dispatch(setStatus(text))
                }
            })

    }
}