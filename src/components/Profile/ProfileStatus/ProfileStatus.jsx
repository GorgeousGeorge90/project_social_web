import styles from './ProfileStatus.module.css'
import {useEffect, useState} from 'react';
import {profileApi} from '../../../api/api';
import {getUserStatus} from "../../../redux/profile/profile.actions";


const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false)
    const [status,setStatus] = useState(props.status)



    const activeEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)

    }

    const changeMode = (e) => {
        setStatus(e.currentTarget.value)
    }

    if (props.profile.userId !== 22886) {
        return (<div className={styles.good}>
                <p>Have a nice day!</p>
            </div>
        )
    }

    return (
        <div className={styles.status}>
            {!editMode &&
                <p onDoubleClick={activeEditMode}>{status || `no status`}</p>
            }
            {editMode &&
                <input onChange={changeMode} autoFocus={true} onBlur={deactivateEditMode} value={status}/>
            }
        </div>
    )
}

export default ProfileStatus
