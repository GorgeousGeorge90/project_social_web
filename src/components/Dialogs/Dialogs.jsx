import styles from './Dialogs.module.css'
import Messages from './Messages/Messages';
import DialogsItem from './DialogsItem/DialogsItem'

const Dialogs = (props)=> {
    return (
        <div className={styles.content}>
            <DialogsItem/>
            <Messages/>
        </div>
    )
}

export default Dialogs