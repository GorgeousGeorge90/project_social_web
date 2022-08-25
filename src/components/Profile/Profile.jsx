import styles from './Profile.module.css'
import Posts from "./Posts/Posts";

const Profile = () => {
    return (
        <div className={styles.content}>
            Hello World!
            <Posts/>
        </div>
    )
}

export default Profile