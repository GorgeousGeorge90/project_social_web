import styles from './Header.module.css'
import logo from './../../assets/img/logo.png'
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {getUserData} from './../../redux/auth/auth.actions'


const Header  = () => {
    const isAuth = useSelector(state=> state.auth.isAuth)

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getUserData())
    },[isAuth])

    return  (
        <header>
            <div className={styles.logo}>
                <img src={logo} alt=""/>
            </div>
            <div className={styles.title}>
                <h1>Social Web</h1>
                <p>Just for fun!</p>
            </div>
            <div className={styles.login}>
                {isAuth ? <p>LogOUT</p> : <p>LogIN</p>}
            </div>
        </header>
    )
}

export default Header