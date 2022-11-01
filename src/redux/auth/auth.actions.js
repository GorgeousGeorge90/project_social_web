import {SET_USER} from './authReducer';
import {authApi} from "../../api/api";


export const setUser = (id, email, login, isAuth) => ({type: SET_USER, payload:{id, email, login, isAuth}})


export const getUserData = ()=> {
    return async dispatch=> {
       const response = await authApi.me()
                if (response.data.resultCode === 0) {
                    const { id, email, login } = response.data.data
                   dispatch(setUser(id,email,login, true))
                }
    }
}

export const loginUser = (email, login, rememberMe) => {
    return async dispatch => {
        const response =  await authApi.login(email, login, rememberMe)
                if (response.data.resultCode === 0) {
                    dispatch(getUserData())
                } else {
                    alert(response.data.messages)
                }
    }
}

// export const logoutUser = (id,email,login,isAuth) => {
//     return async dispatch => {
//         const response = await authApi.logout()
//                 if (response.data.resulCode === 0 ) {
//                     dispatch(setUser(id,email,login,isAuth))
//                 }
//     }
// }

export const logoutUser = (id,email,login,isAuth) => {
    return dispatch => {
        authApi.logout()
            .then(response => {
                if (response.data.resulCode === 0) {
                    dispatch(setUser(id, email, login, isAuth))
                }
            })
    }
}