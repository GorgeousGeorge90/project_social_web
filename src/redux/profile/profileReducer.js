export const ADD_POST = 'ADD POST'
export const DELETE_POST = 'DELETE POST'
export const SET_PROFILE = 'SET_PROFILE'
export const SET_IS_FETCHING = 'SET_IS_FETCHING'
export const SET_STATUS = 'SET_STATUS'
export const ADD_LIKE = 'ADD_LIKE'

let initialState = {
        posts: [],
        profile: null,
        isFetching: false,
        status: '',
}
 export const profileReducer = (state=initialState,action) =>{
        switch(action.type) {
            case ADD_POST: {
                const newPost = {
                    id: state.posts.length,
                    text: action.payload,
                    likes:0,
                        }
                    return {
                        ...state,
                        posts:[...state.posts, newPost]
                }
            }

            case ADD_LIKE: {
                return {
                    ...state,
                    posts: state.posts.map(post => {
                        if (post.id === action.payload) {
                            return {...post, likes: post.likes+=1}
                        } else {
                                return post
                            }
                        })
                    }
                }

            case DELETE_POST: {
                return {
                    ...state,
                    posts: state.posts.filter(post=> post.id !== action.payload)
                }
            }

            case SET_PROFILE: {
                return {
                    ...state,
                    profile: action.payload,
                }
            }

            case SET_IS_FETCHING: {
                return {
                    ...state,
                    isFetching: action.payload,
                }
            }

            case SET_STATUS: {
                return {
                    ...state,
                    status: action.payload,
                }

            }

            default: {
                return state
            }
    }
}