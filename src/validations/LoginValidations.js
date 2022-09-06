import * as yup from 'yup'

export const LoginSchema = yup.object().shape({
    login: yup.string().email('Please enter a valid email').required('Required'),
    password: yup.string().min(5).max(15).required('Required'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], `Passwords must match!`).required('Required')
})