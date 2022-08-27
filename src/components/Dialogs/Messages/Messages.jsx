import styles from './Messages.module.css'
import {useSelector} from "react-redux";

const Messages = ()=> {
    let messages = useSelector(state=>state.dialogsPage.messages)
    debugger
    return (
        <div className={styles.content}>
            {messages.map(message =>
                  <p>{message.text}</p>
            )}
    </div>)
}

export default Messages
