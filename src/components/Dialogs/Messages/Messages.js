import styles from './Messages.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {getSelect, getSelectedDialog, getSelectedUser} from '../../../selectors/dialogs.selectors';
import {getProfile} from '../../../selectors/profile.selectors';
import users_ava from '../../../assets/img/users_ava.png';
import {useForm} from 'react-hook-form';
import {addMessage, deleteMessage} from '../../../redux/dialogs/dialogs.actions';
import {yupResolver} from '@hookform/resolvers/yup';
import {MessagesValidation} from '../../../helpers/validations/MessagesValidation';



const Messages = ()=> {
    const dialog = useSelector(state=>getSelectedDialog(state))
    const [user] = useSelector(state=>getSelectedUser(state))
    const profile = useSelector(state=>getProfile(state))
    const selected = useSelector(state=>getSelect(state))
    const dispatch = useDispatch()

    const { register, handleSubmit, reset, formState: {errors} } = useForm( {
        resolver: yupResolver(MessagesValidation),
    })

    if (!selected) return (
        <div className={styles.attention}>
            <img src='https://www.meme-arsenal.com/memes/a72a53c59f3a212c9210d7ffbc9fab9c.jpg' alt="sad"/>
            <p>{`No conversation!`}</p>
        </div>)


    const dataPack = selected =>{
        return data => {
            dispatch(addMessage(data.message,selected))
        }
    }

    const selectedData = dataPack(selected)
    const onSubmit =  data => {
        selectedData(data)
        reset()
    }

    const errorsStyle = {
        color: 'red',
        fontWeight: 'bolder',
    }

    return (
        <div className={styles.content}>
            <div className={styles.avatars}>
                <div className={styles.person}>
                    <img src={user.photos.small ? user.photos.small:users_ava } alt="user"/>
                    <span>{user.name}</span>
                </div>
                <div className={styles.me}>
                    <img src={profile.photos.small} alt="me"/>
                    <span>{profile.fullName}</span>
                </div>
            </div>
            <div className={styles.talk}>
                {
                    dialog.userDialog.map(message => {
                        return (
                            <div className={styles.message}>
                                   <span className={styles.text}>
                                        {message.text}
                                       <span onClick={() => {
                                           dispatch(deleteMessage(selected, message.id))
                                       }}>&#128163;</span>
                                   </span>
                            </div>)
                    })
                }
            </div>
            <div className={styles.form}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {errors.message ? <span style={errorsStyle}>{errors.message.message}</span>: null}
                    <textarea placeholder='Write a message...' {...register('message')}/>
                    <button type={"submit"}>Send</button>
                </form>
            </div>
        </div>)
}

export default Messages
