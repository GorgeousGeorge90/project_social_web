import axios from 'axios';

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
    },

    getAnotherUsers(pageNumber = 1, pageSize = 15) {
       return instance.get(`/users?page=${pageNumber}&pageSize=&{pageSize}`)
    },

    follow(userId) {
        return instance.post(`/follow/${userId}`, {})
    },

    unfollow(userId) {
        return instance.delete(`/follow/${userId}`)
    }

}


export const profileApi = {

    getUser(userId = 22886) {
        return instance.get(`/profile/${userId}`)
    },

    getStatus(userId = 22886) {
        return instance.get(`/profile/status/${userId}`)
    },

    upgradeStatus(status) {
        return instance.put(`profile/status`,{status})
    },

    updatePhotos(photoFile) {
        const formData = new FormData()
        formData.append('image', photoFile)
        return  instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
    },
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

export const newsApi = {

    getNewsAll() {
        return axios.get('https://api.spaceflightnewsapi.net/v3/articles')
    },

    getSingleRequest(id) {
        return axios.get(`https://api.spaceflightnewsapi.net/v3/articles/${id}`)
    }
}




