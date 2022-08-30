import {connect} from 'react-redux';
import Dialogs from '../components/Dialogs/Dialogs';

const ADD_MESSAGE = 'ADD MESSAGE';
const UPDATE_MESSAGE = 'UPDATE MESSAGE';
const DELETE_MESSAGE = 'DELETE MESSAGE';


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
        case UPDATE_MESSAGE: {
            return {
                ...state,
                newMessage: action.payload,
            }
        }

        case ADD_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, state.newMessage]
            }
        }

        default: {
            return state
        }
    }
}

let updateAC = text =>({type: UPDATE_MESSAGE, payload: text})
let addAC = () =>({type: ADD_MESSAGE })


const mapStateToProps = state => ({
    messages: state.dialogsPage.messages,
    newMessage: state.dialogsPage.newMessage,
})

const mapDispatchToProps = dispatch => ({
    updateNewMessage: text=>{
        dispatch(updateAC(text))
    },
    addNewMessage: ()=>{
        dispatch(addAC())
    }
})


export  const DialogsWrapper = connect(mapStateToProps,mapDispatchToProps)(Dialogs)