import styles from './ProfileInfo.module.scss'
import Preloader from '../../common/Preloader/Preloader';
import {useState} from "react";


const ProfileInfo = (props)=> {


    const [editMode, setEditMode] = useState(false)

    if(!props.profile) {
        return <Preloader/>
    }

    const  {fullName, contacts, userId, photos } = props.profile
    const {saveNewPhoto} = props

    const activeMode = ()=> {
        setEditMode(true)
    }

    const changePhoto = (e)=> {
        if (e.target.files.length) {
             saveNewPhoto(e.target.files[0])
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
                {!photos ? <Preloader color={'black'}/> : <img  src={photos.large} />}
            </div>
            <div className={styles.description}>
                <p>UserId: <span>{userId}</span></p>
                <p>Name: <span>{fullName}</span></p>
                <p>Contact:<span>{contacts.github ? contacts.github: `don't have any contacts` }</span></p>
            </div>
        </div>)
}


export default ProfileInfo