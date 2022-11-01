import {setUser} from './auth.actions';
import authReducer from "./authReducer";


const state = {
    id: 1,
    email:`Gambit@yndex.ru`,
    login: `Egor`,
    isAuth: true,
}

it('Logout user data!', ()=>{

    let action = setUser(null, null, null, false)

    let newState = authReducer(state,action)

    expect(newState).toStrictEqual({'id':null, 'email':null, 'login':null, 'isAuth':false})
})