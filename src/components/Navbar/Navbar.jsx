import styles from './Navbar.module.css'
import CustomLink from "../common/CustomLink/CustomLink";



const Navbar = ()=> {
    return (
        <nav>
            <ul className={styles.menu}>
                <li><CustomLink to='/profile'>Profile</CustomLink></li>
                <li><CustomLink to='/dialogs'>Dialogs</CustomLink></li>
                <li><CustomLink to='/news'>News</CustomLink></li>
                <li><CustomLink to='/music'>Music</CustomLink></li>
                <li><CustomLink to='/settings'>Settings</CustomLink></li>
            </ul>
        </nav>
    )
}


export default Navbar