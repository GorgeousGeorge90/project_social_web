import styles from './ProfileStatus.module.css'
import {useState} from 'react';


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
