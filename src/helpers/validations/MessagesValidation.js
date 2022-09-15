import * as yup from 'yup'

export const MessagesValidation = yup.object().shape({
    message: yup.string().min(1).max(100).required('Required')
})