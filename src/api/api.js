import axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {
        'API-KEY':'f020ceeb-ada9-4061-bbae-9a51675c7f00',
    }
})


export const usersApi = {
    getUsers(pageSize = 15, currentPage = 1) {
       return instance.get(`/users?count=${pageSize}&page=${currentPage}`)
            .then(response=> {
                return response.data
            })
    },

    getAnotherUsers(pageNumber = 1, pageSize = 15) {
       return instance.get(`/users?page=${pageNumber}&pageSize=&{pageSize}`)
            .then(response=> {
                return response.data
            })
    },

    follow(userId) {
        return instance.post(`/follow/${userId}`, {})
    },

    unfollow(userId) {
        return instance.delete(`/follow/${userId}`)
    }

}

export const profileApi = {
    getUser(userId=2) {
        return instance.get(`/profile/${userId}`)
    }
}

export const authApi = {

    me() {
        return instance.get(`/auth/me`)
    },

    login(email,password,rememberMe) {
        return instance.post(`/auth/login`,{email,password,rememberMe})
    },

    logout() {
        return instance.delete(`/auth/login`)
    }
}

