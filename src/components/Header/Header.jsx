import styles from './Header.module.css'
import logo from './../../assets/img/logo.png'
import {getUserData, logoutUser} from './../../redux/auth/auth.actions'
import {connect} from 'react-redux'
import {useEffect} from "react";


const Header  = (props) => {
    const {isAuth, logoutUser, login, getUserData} = props

    useEffect(()=>{
        getUserData()
    }, [isAuth])

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
                {isAuth ? <p>
                    {login}
                    <button onClick={logoutUser}>LogOut</button>
                </p> :
                    <p>
                        not authorised
                    </p>}
            </div>
        </header>
    )
}

const mapStateToProps = state =>({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {getUserData, logoutUser})(Header)

