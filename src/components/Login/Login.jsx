import styles from './Login.module.css'
import {useFormik} from "formik";
import {LoginSchema} from "../../validations/LoginValidations";

const Login = ()=> {
    return (
        <div className={styles.login}>
            <h1>Login</h1>
            <FormikForm/>
        </div>
    )
}

const FormikForm = ()=>{
    const {values, handleSubmit, errors, handleBlur, touched, handleChange} = useFormik({
        initialValues: {
            login:'',
            password: '',
            confirmPassword:'',
            rememberMe: false,
        },
        validationSchema: LoginSchema,
        onSubmit: (values,actions) => {
            console.log(values)
            actions.resetForm()
        }
    })
    return (
        <form onSubmit={handleSubmit}>

            <p>
                <input name={'login'}
                       type={'text'}
                       value={values.login}
                       onChange={handleChange}
                       onBlur={handleBlur}
                       placeholder={'Enter your email'}
                       className={errors.login && touched.login ? styles.errors : null }
                />
            </p>
            {errors.login && touched.login ? <p className={styles.errors}>{errors.login}</p> : null}

            <p>
                <input name={'password'}
                       type={'password'}
                       value={values.password}
                       onChange={handleChange}
                       onBlur={handleBlur}
                       placeholder={'Enter your password'}
                       className={errors.password && touched.password ? styles.errors : null }
                />
            </p>
            {errors.password && touched.password  ? <p className={styles.errors}>{errors.password}</p>: null}

            <p>
                <input name={'confirmPassword'}
                       type={'password'}
                       value={values.confirmPassword}
                       onChange={handleChange}
                       onBlur={handleBlur}
                       placeholder={'Confirm your password'}
                       className={errors.confirmPassword && touched.confirmPassword ? styles.errors : null }
                       />
            </p>
            {errors.confirmPassword && touched.confirmPassword  ? <p className={styles.errors}>{errors.confirmPassword}</p>: null}


            <p>
                <label htmlFor='rememberMe'>remember me</label>
                <input name={'rememberMe'}
                       type={'checkbox'}
                       value={values.rememberMe}
                       onChange={handleChange}
                />remember me
            </p>

            <button  type={'submit'}>Submit</button>
        </form>
    )
}

export default Login