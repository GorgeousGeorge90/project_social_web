import {useFormik} from "formik";
import {LoginSchema} from "../../../helpers/validations/LoginValidations";
import styles from "../../Login/Login.module.css";


export const FormikForm = (props)=>{
    const {login} = props
    const {values, handleSubmit, errors, handleBlur, touched, handleChange} = useFormik({
        initialValues: {
            email:'',
            password: '',
            confirmPassword:'',
            rememberMe: false,
        },
        validationSchema: LoginSchema,
        onSubmit: (values,actions) => {
            const {email, password, rememberMe } = values
            login(email, password, rememberMe)
            actions.resetForm()
        }
    })
    return (
        <form onSubmit={handleSubmit}>

            <p>
                <input name={'email'}
                       type={'text'}
                       value={values.email}
                       onChange={handleChange}
                       onBlur={handleBlur}
                       placeholder={'Enter your email'}
                       className={errors.email && touched.email ? styles.errors : null }
                />
            </p>
            {errors.email && touched.email ? <p className={styles.errors}>{errors.email}</p> : null}

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