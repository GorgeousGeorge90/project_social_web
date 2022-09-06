export const ADD_MESSAGE = 'ADD MESSAGE';
export const DELETE_MESSAGE = 'DELETE MESSAGE';


let initialState = {
        messages: [
            {id:1, text: 'Hello! How are you?'},
            {id:2, text: 'I am OK!'},
            {id:3, text: 'I am glad to hear it!'},
            {id:4, text: 'Nice weather, guys!'},
        ],
        dialogs: [
            {id:1 , name: 'Kate'},
            {id:2, name: 'Roman'},
            {id:3, name: 'Alex'},
            {id:4, name: 'Masha'},
        ],
        newMessage: '',
}

export const dialogsReducer = (state=initialState,action) => {
    switch (action.type) {

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
