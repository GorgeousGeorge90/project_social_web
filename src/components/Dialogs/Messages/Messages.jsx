import styles from './Messages.module.css'
import {useSelector} from 'react-redux';
import {getMessages} from '../../../selectors/dialogs.selectors';

const Messages = ()=> {
    const  messages = useSelector(state=>getMessages(state))
    return (
        <div className={styles.content}>
            {messages.map(message =>
                  <p>{message.text}</p>
            )}
    </div>)
}

export default Messages
