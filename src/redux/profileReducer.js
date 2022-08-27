const ADD_POST = 'ADD POST';
const UPDATE_POST = 'UPDATE POST';
const DELETE_POST = 'DELETE POST';

let initialState = {
        posts: [
            {id:1, text: 'This is my first post!', likes:2},
            {id:2, text: 'Hello to everyone!', likes:8},
            {id:3, text: 'I am really want to become a React Developer!',likes:4}
        ],
        newPostText: ''
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
                        }
                    return {
                        ...state,
                        posts:[...action.posts, newPost]
                }
            }
            default: {
                return state
            }
    }


}