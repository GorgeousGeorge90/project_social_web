import styles from './Messages.module.css'
import {useSelector} from "react-redux";

const Messages = ()=> {
    const  messages = useSelector(state=>state.dialogsPage.messages)
    return (
        <div className={styles.content}>
            {messages.map(message =>
                  <p>{message.text}</p>
            )}
    </div>)
}

export default Messages
