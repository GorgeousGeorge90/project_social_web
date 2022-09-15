export const GET_NEWS = 'news/GET NEWS';
export const GET_SINGLE ='news/GET_SINGLE';
export const SET_FETCHING = 'news/SET_FETCHING';

const initialState = {
    news: [],
    singleNews: null,
    isFetching: false,
}

const newsReducer = (state=initialState,action) => {
    switch (action.type) {
        case GET_NEWS: {
            return {
                ...state,
                news: action.payload,
            }
        }

        case GET_SINGLE: {
            return {
                ...state,
                singleNews: action.payload,
            }
        }

        case SET_FETCHING: {
            return {
                ...state,
                isFetching: action.payload,
            }
        }

        default:
            return state
    }
}

export default newsReducer