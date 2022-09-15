import  styles from './DialogsItem.module.scss';
import  users_ava from './../../../assets/img/users_ava.png';
import {useDispatch, useSelector} from 'react-redux';
import {getSelect} from '../../../selectors/dialogs.selectors';
import {getSelectUser, unfollowFriend} from '../../../redux/dialogs/dialogs.actions';





const DialogsItem = ({user})=> {

    const selected = useSelector(state=>getSelect(state))
    const dispatch = useDispatch()

    let selectPerson = id => {
        dispatch(getSelectUser(id))
        localStorage.setItem('selected', JSON.stringify(id))
    }

    let unfollowPerson = id =>{
        dispatch(unfollowFriend(id))
    }

    return (
        <div className={styles.dialogs}>
            <div onClick={()=>selectPerson(user.id)} className={selected === user.id && styles.selectedUser}>
                {user.photos.large !== null ? <img src={user.photos.large} alt='ava'/>:
                                <img src={users_ava} alt='ava'/>}
            </div>
            <p>{user.name}</p>
            <span onClick={()=>unfollowPerson(user.id)}>&#128075;</span>
        </div>
    )
}

export default DialogsItem