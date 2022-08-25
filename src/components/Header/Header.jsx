import styles from './Header.module.css'
import logo from './../../assets/img/logo.png'

const Header  = () => {
    return  (
        <header>
            <div className={styles.logo}>
                <img src={logo} alt=""/>
            </div>
            <div className={styles.title}>
                <h1>Social Web</h1>
                <p>Just for fun!</p>
            </div>
        </header>
    )
}

export default Header