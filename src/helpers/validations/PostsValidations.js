import * as yup from 'yup'

export const PostsSchema = yup.object().shape({
    post: yup.string().min(2).max(50).required('Required'),
})