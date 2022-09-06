export const SET_USER = 'SET_USER'


const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

const authReducer = (state=initialState,action) => {
    switch (action.type) {
        case SET_USER: {
            return {
                ...state,
                ...action.payload,
            }
        }

    }

    return state
}


export default authReducer