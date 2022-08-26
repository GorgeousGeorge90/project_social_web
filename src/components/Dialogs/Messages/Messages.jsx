import styles from './Messages.module.css'

const Messages = (props)=> {
    let messages = props.messages
    debugger
    return (
        <div className={styles.content}>
            {messages.map(message =>
                  <p>{message.text}</p>
            )}
    </div>)
}

export default Messages
