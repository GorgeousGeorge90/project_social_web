import styles from './Dialogs.module.scss'
import Messages from './Messages/Messages';
import DialogsItem from './DialogsItem/DialogsItem'
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom'
import {useEffect} from "react";
import {getIsAuth} from "../../selectors/auth.selectors";
import {getDialogs, getFollowUsers} from "../../selectors/dialogs.selectors";
import {
    addNewDialog,
    deleteSelected,
    setFollowers
} from "../../redux/dialogs/dialogs.actions";




const Dialogs = ()=> {

    const isAuth = useSelector(state=>getIsAuth(state))
    const followers = useSelector(state=>getFollowUsers(state))
    const dialogs = useSelector(state=>getDialogs(state))
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(()=>{
       if (isAuth === false) {
           navigate('/login')
       }
    },[])

    useEffect(()=>{
        if (followers.length === 0){
            dispatch(deleteSelected())
            navigate('/users')
        } else {
            dispatch(setFollowers(followers))
            followers.forEach(follower=>{
                dispatch(addNewDialog(follower.id))
            })
        }
    },[followers])



    return (
        <div className={styles.content}>
            <div className={styles.users}>
                {
                    dialogs.map(user => <DialogsItem user={user}/>)
                }
            </div>
            <div className={styles.messages}>
                <Messages/>
            </div>
        </div>
    )
}

export default Dialogs