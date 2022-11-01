import styles from './Header.module.scss'
import logo1 from './../../assets/img/logo1.png'
import {getUserData, setUser} from './../../redux/auth/auth.actions'
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react';
import ReactSwitch from 'react-switch';
import {getIsAuth, getLogin} from '../../selectors/auth.selectors';
import {useNavigate} from 'react-router-dom';
import {authApi} from '../../api/api';




const Header  = ({theme, toggleTheme}) => {

    const isAuth = useSelector(state=>getIsAuth(state))
    const login = useSelector(state=>getLogin(state))
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(()=>{
        if (!isAuth) {
            navigate('/login')
        }
        dispatch(getUserData())
    }, [isAuth])

    return  (
        <header>
            <div className={styles.logo}>
                <img src={logo1} alt=""/>
            </div>
            <div className={styles.title}>
                <h1>Social Web ReactJS Project</h1>
                <p>The first version!</p>
            </div>
            <div className={styles.login}>
                {isAuth ? <p>
                    <span>{login}</span>
                    <button onClick={()=>{
                        authApi.logout()
                            .then(response=>{
                                if (response.data.resultCode === 0){
                                    dispatch(setUser(null,null,null,false))
                                }
                            })
                    }
                    }>LogOut</button>
                </p> :
                    <p>
                        not authorised
                    </p>}
                <div className={styles.toggle}>
                    <ReactSwitch checked={theme === 'dark'} onChange={toggleTheme}/>
                </div>
            </div>
        </header>
    )
}


export default Header

