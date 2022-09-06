import {ADD_POST, DELETE_POST, SET_IS_FETCHING, SET_PROFILE, UPDATE_POST} from './profileReducer';
import {profileApi} from '../../api/api';


export const setProfile = profile => ({type: SET_PROFILE, payload: profile})
export const updatePost = text => ({type: UPDATE_POST, payload: text})
export const addPost = () => ({type: ADD_POST })
export const deletePost = id =>({type: DELETE_POST, payload:id})
export const setIsFetching = value =>({type: SET_IS_FETCHING, payload: value})


export const setUserInfo = () => {
    return dispatch => {
        dispatch(setIsFetching(true))
        profileApi.getUser(2)
            .then(response=> {
                dispatch(setProfile(response.data))
                dispatch(setIsFetching(false))
            })
    }
}