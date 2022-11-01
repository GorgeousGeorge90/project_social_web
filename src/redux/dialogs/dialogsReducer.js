export const ADD_MESSAGE = 'dialogs/ADD MESSAGE';
export const DELETE_MESSAGE = 'dialogs/DELETE MESSAGE';
export const SET_FOLLOWERS = 'dialogs/SET FOLLOWERS';
export const UNFOLLOW_USER = 'dialogs/UNFOLLOW USER';
export const GET_SELECT = 'dialogs/GET SELECT';
export const ADD_NEW_DIALOG = 'dialogs/ADD NEW DIALOG';
export const DELETE_DIALOG = 'dialogs/DELETE DIALOG';
export const DELETE_SELECTED = 'dialogs/DELETE SELECTED';
export const SET_DIALOG ='dialogs/SET DIALOG';
export const SET_MESSAGES ='dialogs/SET MESSAGES'



let initialState = {
        messages: [],
        dialogs: [],
        selected: null,
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

        case DELETE_SELECTED: {
            return {
                ...state,
                selected:null,
            }
        }


        case ADD_MESSAGE: {
            const newMessage = {
                id: Date.now().toString(),
                text: action.payload.message,
            }
            return {
                ...state,
                messages: state.messages.map(dialog => {
                    if (dialog.id === action.payload.id) {
                        return {
                            ...dialog,
                            userDialog: [...dialog.userDialog, newMessage],
                        }
                    } else {
                            return dialog
                        }
                    })
            }
        }

        case DELETE_MESSAGE: {
            return {
                ...state,
                messages: state.messages.map(dialog =>{
                    if (dialog.id === action.payload.dialogId) {
                        return {
                            ...dialog,
                            userDialog: dialog.userDialog.filter(message => message.id !== action.payload.textId)
                        }
                    } else {
                        return dialog
                    }
                })
            }
        }

        case ADD_NEW_DIALOG: {
            const newDialog = {
                id: action.payload,
                userDialog: []
            }

            return {
                ...state,
                messages: [...state.messages, newDialog],
                    }
            }

        // case SET_DIALOG: {
        //     return {
        //         ...state,
        //         messages: localStorage.getItem(`${action.payload}`) || []
        //     }
        // }


        case DELETE_DIALOG: {
            return {
                ...state,
                messages: state.messages.filter(dialog=> dialog.id !== action.payload)
            }
        }

        case SET_MESSAGES: {
            return {
                ...state,
                messages: [...state.messages, action.payload]
            }

        }


        default: {
            return state
        }
    }
}
