import {connect} from 'react-redux';
import Users from './../components/Users/Users'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'


const initialState = {
    users: [],
}

const usersReducer = (state=initialState, action)=>{
    switch (action.type) {
        case SET_USERS: {
            return {
                ...state,
                users: [...state.users, ...action.payload]
            }
        }

        case FOLLOW: {
            return {
                ...state,
                users: [
                    ...state.users.filter(user => {
                        if (user.id === action.payload) {
                            user.followed = !user.followed
                        } else {
                            return user
                        }
                    })
                ]
            }
        }

        case UNFOLLOW : {
            return state
        }

        default: {
            return state
        }

    }
}

let mapStateToProps = state => ({
    users: state.usersPage.users
})

let mapDispatchToProps = dispatch => ({
    setUsers: users=> {
        dispatch({type: SET_USERS, payload: users})
    }
})

export default usersReducer

export const UsersWrapper = connect(mapStateToProps, mapDispatchToProps)(Users)