import styles from './Login.module.css'
import {FormikForm} from '../common/LoginFormikForm/FormikForm';
import {connect} from 'react-redux';
import {loginUser} from '../../redux/auth/auth.actions';
import {useNavigate} from "react-router-dom";

const Login = (props)=> {
    const {isAuth} = props
    const navigate = useNavigate()

    if (isAuth === true) {
        navigate('/profile')
    }

    return (
        <div className={styles.login}>
            <h1>Login</h1>
            <FormikForm login={props.loginUser}/>
        </div>
    )
}

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {loginUser})(Login)

