import * as yup from 'yup'

export const LoginSchema = yup.object().shape({
    email: yup.string().email('Please enter a valid email').required('Required'),
    password: yup.string().min(4).max(15).required('Required'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], `Passwords must match!`).required('Required')
})