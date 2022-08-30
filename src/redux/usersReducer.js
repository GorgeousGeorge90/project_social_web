const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'


const initialState = {
    users: [
        {id:1, name: 'Egorka', status: 'I am so strong!', photos: { small: null, large: null }, followed: true },
        {id:2, name: 'Kate', status: 'I am so hot!', photos: { small: null, large: null }, followed: false },
        {id:3, name: 'Masha', status: 'I am going to become a pilot!', photos: { small: null, large: null }, followed: true },
    ]
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

export default usersReducer