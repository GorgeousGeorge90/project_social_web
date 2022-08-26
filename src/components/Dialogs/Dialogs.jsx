import styles from './Dialogs.module.css'
import Messages from "./Messages/Messages";

const Dialogs = (props)=> {
    return (
        <div className={styles.content}>
            <Messages messages={props.dialogsPage.messages}/>
        </div>
    )
}

export default Dialogs