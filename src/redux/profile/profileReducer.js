export const ADD_POST = 'profile/ADD POST'
export const DELETE_POST = 'profile/DELETE POST'
export const SET_PROFILE = 'profile/SET PROFILE'
export const SET_IS_FETCHING = 'profile/SET IS FETCHING'
export const SET_STATUS = 'profile/SET STATUS'
export const ADD_LIKE = 'profile/ADD LIKE'
export const SAVE_PHOTO = 'profile/SAVA PHOTO'

let initialState = {
        posts: JSON.parse(localStorage.getItem('posts')) || [],
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

            case SAVE_PHOTO: {
                return {
                    ...state,
                    profile: {
                        ...state.profile,
                        photos: action.payload,
                    }
                }

            }

            default: {
                return state
            }
    }
}