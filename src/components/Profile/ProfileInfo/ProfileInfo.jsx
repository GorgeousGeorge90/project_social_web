import styles from './ProfileInfo.module.css'
import users_ava from './../../../assets/img/users_ava.png'
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props)=> {

    if(!props.profile) {
        return <Preloader/>
    }

    const {aboutMe, fullName, contacts, userId, photos } = props.profile

    return (
        <div className={styles.main}>
            <div className={styles.avatar}>
                {photos.large !== null ? <img src={photos.large} /> : <img  src={users_ava} />}
            </div>
            <div className={styles.description}>
                <p>UserId: <span>{userId}</span></p>
                <p>Name: <span>{fullName}</span></p>
                <p>Status:<span>{aboutMe}</span></p>
                <p>Contact:<span>{contacts.github}</span></p>
            </div>
        </div>)
}


export default ProfileInfo