export const ADD_POST = 'ADD POST'
export const UPDATE_POST = 'UPDATE POST'
export const DELETE_POST = 'DELETE POST'
export const SET_PROFILE = 'SET_PROFILE'
export const SET_IS_FETCHING = 'SET_IS_FETCHING'

let initialState = {
        posts: [
            {id:1, text: 'This is my first post!', likes:2},
            {id:2, text: 'Hello to everyone!', likes:8},
            {id:3, text: 'I am really want to become a React Developer!',likes:4}
        ],
        newPostText: '',
        profile: null,
        isFetching: false,
}
 export const profileReducer = (state=initialState,action) =>{
        switch(action.type) {
            case UPDATE_POST: {
                return {
                    ...state,
                    newPostText: action.payload,
                }
            }
            case ADD_POST: {
                const newPost = {
                    id: state.posts.length,
                    text: state.newPostText,
                    likes: 8,
                        }
                    return {
                        ...state,
                        posts:[...state.posts, newPost]
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

            default: {
                return state
            }
    }
}