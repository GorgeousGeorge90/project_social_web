export const ADD_MESSAGE = 'dialogs/ADD MESSAGE';
export const DELETE_MESSAGE = 'dialogs/DELETE MESSAGE';
export const SET_FOLLOWERS = 'dialogs/SET FOLLOWERS';
export const UNFOLLOW_USER = 'dialogs/UNFOLLOW USER';
export const GET_SELECT = 'dialogs/GET SELECT'


let initialState = {
        messages: [],
        dialogs: [],
        selected: JSON.parse(localStorage.getItem('selected')) || null,
        newMessage: '',
}

export const dialogsReducer = (state=initialState,action) => {
    switch (action.type) {

        case SET_FOLLOWERS : {
            return {
                ...state,
                dialogs: action.payload,
            }
        }

        case UNFOLLOW_USER: {
            return {
                ...state,
                dialogs: state.dialogs.filter(user => user.id !== action.payload)
            }

        }

        case GET_SELECT: {
            return {
                ...state,
                selected: action.payload,
            }
        }


        case ADD_MESSAGE: {
            const newMessage = {
                id: state.messages.length,
                text: action.payload,
            }
            return {
                ...state,
                messages: [...state.messages, newMessage]
            }
        }

        case DELETE_MESSAGE: {
            return {
                ...state,
                messages: state.messages.filter(message => message.id !== action.payload)
            }
        }


        default: {
            return state
        }
    }
}
