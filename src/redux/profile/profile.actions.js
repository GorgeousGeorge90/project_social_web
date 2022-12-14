import {
    ADD_LIKE,
    ADD_POST,
    DELETE_POST,
    SET_POSTS,
    SET_IS_FETCHING,
    SET_PROFILE,
    SET_STATUS,
    SAVE_PHOTO
} from './profileReducer';
import {profileApi} from '../../api/api';



export const setProfile = profile => ({type: SET_PROFILE, payload: profile})
export const addPost = text => ({type: ADD_POST, payload:text })
export const addLike = id => ({type: ADD_LIKE, payload: id})
export const deletePost = id =>({type: DELETE_POST, payload:id})
export const setIsFetching = value =>({type: SET_IS_FETCHING, payload: value})
export const setStatus = text =>({type: SET_STATUS, payload: text})
export const savePhoto = photo =>({type: SAVE_PHOTO, payload: photo})


export const setUserInfo = (id) => {
    return async dispatch=> {
        dispatch(setIsFetching(true))
        const response = await profileApi.getUser(id)
                dispatch(setProfile(response.data))
                dispatch(setIsFetching(false))
    }
}


export const getUserStatus = () => {
    return async dispatch => {
        const response = await profileApi.getStatus(22886)
                dispatch(setStatus(response.data))
    }
}

export const updateStatus = text =>{
    return async dispatch => {
       const response = await profileApi.upgradeStatus(text)
                if ( response.data.resultCode === 0 ) {
                    dispatch(setStatus(text))
                }
    }
}

export const saveNewPhoto = photo =>{
    return async dispatch => {
        const response = await profileApi.updatePhotos(photo)
        dispatch(savePhoto(response.data.photos))
    }
}
