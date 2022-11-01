export const SET_USER = 'auth/SET_USER'


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
                id: action.payload.id,
                email: action.payload.email,
                login: action.payload.login,
                isAuth: action.payload.isAuth,
            }
        }

        default: {
            return state
        }
    }
}


export default authReducer