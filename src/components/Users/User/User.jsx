import styles from './User.module.css'
import users_ava from './../../../assets/img/users_ava.png';


const User = (props) => {
    let user = props.user
    return (
        <div className={styles.wrapper}>
            <div className={styles.ava}>
                <img src={users_ava} alt="ava"/>
            </div>
            <div className={styles.description}>
                <p>{user.name}</p>
                <p>{user.followed}</p>
                <p>{user.status}</p>
            </div>
        </div>
    )
}

export default User