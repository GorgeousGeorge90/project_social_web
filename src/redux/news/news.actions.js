import {GET_NEWS, GET_SINGLE, SET_FETCHING} from './newsReducer';
import {newsApi} from "../../api/api";


export const getNews = news => ({type: GET_NEWS, payload:news})
export const getSingleNews = news =>({type: GET_SINGLE, payload:news})
export const getFetching = isFetching =>({type: SET_FETCHING, payload: isFetching})


export const getAllData = () =>{
    return async dispatch =>{
        dispatch(getFetching(true))
        const response = await newsApi.getNewsAll()
        dispatch(getNews(response.data))
        dispatch(getFetching(false))
    }
}

export const getSingleData = id =>{
    return async dispatch=> {
        dispatch(getFetching(true))
        const response = await newsApi.getSingleRequest(id)
            dispatch(getSingleNews(response.data))
            dispatch(getFetching(false))
    }
}






