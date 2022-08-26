import styles from './ProfileInfo.module.css'
import ava from  '../../../assets/img/ava.jpeg'

const ProfileInfo = ()=> {
    // const person = [
    //     {id:1 , name: 'Egor', age: 31, job: 'ReactDev', city: 'Moscow'}
    // ]
    return (
        <div className={styles.main}>
        <div className={styles.avatar}>
            <img src={ava} alt="avatar"/>
        </div>
         <div className={styles.description}>
             <p>Name: <span>Egor</span></p>
             <p>Age:31</p>
             <p>Job:<span>ReactDev</span></p>
             <p>City:<span>Moscow</span></p>
         </div>
    </div>)
}


export default ProfileInfo