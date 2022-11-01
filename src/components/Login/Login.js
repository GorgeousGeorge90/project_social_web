import styles from './Login.module.scss'
import {FormikForm} from '../common/LoginFormikForm/FormikForm';
import {connect} from 'react-redux';
import {loginUser} from '../../redux/auth/auth.actions';
import {useNavigate} from 'react-router-dom';
import {useEffect} from 'react';
import {getIsAuth} from '../../selectors/auth.selectors';

const Login = ({isAuth,loginUser})=> {
    const navigate = useNavigate()

    useEffect(()=>{
        if (isAuth === true) {
            navigate('/profile')
        }
    },[isAuth])


    return (
        <div className={styles.main}>
            <div className={styles.login}>
                <h1>Login</h1>
                <FormikForm login={loginUser}/>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    isAuth: getIsAuth(state),
})

export default connect(mapStateToProps, {loginUser})(Login)

