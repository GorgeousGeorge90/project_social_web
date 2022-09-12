import styles from './Header.module.scss'
import logo1 from './../../assets/img/logo1.png'
import {getUserData, logoutUser} from './../../redux/auth/auth.actions'
import {connect} from 'react-redux'
import {useEffect} from "react";
import ReactSwitch from "react-switch";





const Header  = ({isAuth, logoutUser, login, getUserData, theme, toggleTheme}) => {
    useEffect(()=>{
        getUserData()
    }, [isAuth])

    return  (
        <header>
            <div className={styles.logo}>
                <img src={logo1} alt=""/>
            </div>
            <div className={styles.title}>
                <h1>Social Web ReactJS Project</h1>
                <p>Just for fun!</p>
            </div>
            <div className={styles.login}>
                {isAuth ? <p>
                    <span>{login}</span>
                    <button onClick={logoutUser}>LogOut</button>
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

const mapStateToProps = state =>({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {getUserData, logoutUser})(Header)

