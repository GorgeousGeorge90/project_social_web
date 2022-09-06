export const FOLLOW = 'FOLLOW'
export const UNFOLLOW = 'UNFOLLOW'
export const SET_USERS = 'SET_USERS'
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
export const SET_TOTAL_USERS = 'SET_TOTAL_USERS'
export const IS_FETCHING = 'IS_FETCHING'


const initialState = {
    users: [],
    pageSize: 15,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
}

const usersReducer = (state=initialState, action)=>{
    switch (action.type) {
        case SET_USERS: {
            return {
                ...state,
                users: action.payload,
            }
        }

        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                        if (user.id === action.payload) {
                            return {...user, followed: true}
                        } else {
                            return user
                        }
                    })
            }
        }

        case UNFOLLOW : {
            return {
                ...state,
                users:state.users.map(user=> {
                    if (user.id === action.payload) {
                        return {...user, followed: false}
                    } else {
                        return user
                    }
                })
            }
        }

        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.payload,
            }
        }

        case SET_TOTAL_USERS: {
            return {
                ...state,
                totalUsersCount: action.payload,
            }
        }

        case IS_FETCHING: {
            return {
                ...state,
                isFetching: action.payload,
            }
        }

        default: {
            return state
        }

    }
}

export default usersReducer
