import styles from './Profile.module.css'
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className={styles.content}>
            <ProfileInfo profile={props.profile}/>
            <Posts profile={props.profile}/>
        </div>
    )
}

export default Profile