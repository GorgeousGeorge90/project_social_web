import styles from './ProfileInfo.module.scss'
import Preloader from '../../common/Preloader/Preloader';
import {useState} from 'react';


const ProfileInfo = ({profile,saveNewPhoto})=> {

    const [editMode, setEditMode] = useState(false)

    if(!profile) {
        return <Preloader/>
    }

    const  {fullName, contacts, userId, photos } = profile

    const activeMode = ()=> {
        setEditMode(true)
    }

    const changePhoto = (event)=> {
        if (event.target.files.length) {
             saveNewPhoto(event.target.files[0])
             setEditMode(false)
        }
    }

    return (
        <div className={styles.main}>
            <div className={styles.avatar} onClick={() =>{
                if (userId === 22886) {
                    activeMode()
                }
            }}>
                {editMode &&
                    <input onChange={changePhoto}  type='file'/>
                }
                {!photos ? <Preloader color={'black'}/> : <img  src={photos.large} alt={'logo'} />}
            </div>
            <div className={styles.description}>
                <p>UserId: <span>{userId}</span></p>
                <p>Name: <span>{fullName}</span></p>
                <p>Contact:<span>{contacts.github ? contacts.github: `don't have any contacts` }</span></p>
            </div>
        </div>)
}


export default ProfileInfo