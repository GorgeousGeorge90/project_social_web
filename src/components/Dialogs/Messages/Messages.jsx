import styles from './Messages.module.scss';
import {useSelector} from 'react-redux';
import {getSelect, getSelectedDialog, getSelectedUser} from '../../../selectors/dialogs.selectors';
import {getProfile} from '../../../selectors/profile.selectors';
import Preloader from '../../common/Preloader/Preloader';
import users_ava from "../../../assets/img/users_ava.png";


const Messages = ()=> {
    const dialogs = useSelector(state=>getSelectedDialog(state))
    const [user] = useSelector(state=>getSelectedUser(state))
    const profile = useSelector(state=>getProfile(state))
    const selected = useSelector(state=>getSelect(state))
    if (profile === null ) return <Preloader/>
    if (!selected) return` You haven't any conversation, yet!`
    window.dialogs = dialogs
    const [dialog] = dialogs
    window.dialog = dialog


    return (
        <div className={styles.content}>
            <div className={styles.avatars}>
                <div className={styles.person}>
                    <img src={user.photos.small ? user.photos.small:users_ava } alt="user"/>
                    <span>{user.name}</span>
                </div>
                <img src={profile.photos.small} alt="me"/>
            </div>
            <div>
                {
                    dialog.userDialog.map(message=> {
                        return (
                                <div>
                                    {message.text}
                                    <span>x</span>
                               </div>
                        )
                    })
                }
            </div>
        </div>)
}

export default Messages
