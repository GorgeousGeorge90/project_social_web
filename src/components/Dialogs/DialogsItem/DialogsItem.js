import  styles from './DialogsItem.module.scss';
import  users_ava from './../../../assets/img/users_ava.png';
import {useDispatch, useSelector} from 'react-redux';
import {getSelect} from '../../../selectors/dialogs.selectors';
import {deleteSelected, getSelectUser} from '../../../redux/dialogs/dialogs.actions';
import {getUnfollowUser} from '../../../redux/users/users.actions';



const DialogsItem = ({user})=> {

    const selected = useSelector(state=>getSelect(state))
    const dispatch = useDispatch()


    let selectPerson = id => {
        dispatch(getSelectUser(id))
    }

    let unfollowPerson = (id, selected) =>{
        dispatch(getUnfollowUser(id, selected))
    }


    return (
        <div className={styles.dialogs}>
            <div onClick={()=>selectPerson(user.id)} className={selected === user.id && styles.selectedUser}>
                {user.photos.large !== null ? <img src={user.photos.large} alt='ava'/>:
                                <img src={users_ava} alt='ava'/>}
            </div>
            <p className={styles.name}>{user.name}</p>
            <p>
                <span onClick={()=>unfollowPerson(user.id, selected)}>&#128075;</span>
                <span onClick={()=>{
                    if (selected === user.id) {
                        dispatch(deleteSelected())
                    }
                }}>&#129305;</span>
            </p>
        </div>
    )
}

export default DialogsItem