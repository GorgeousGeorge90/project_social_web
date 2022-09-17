import styles from './Dialogs.module.scss'
import Messages from './Messages/Messages';
import DialogsItem from './DialogsItem/DialogsItem'
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom'
import {Form, isRequired} from '@altiore/form'
import {Field} from "../common/AltiorFrom/AltiorFrom";
import {useEffect} from "react";
import {getIsAuth} from "../../selectors/auth.selectors";
import {getDialogs, getFollowUsers, getSelect} from "../../selectors/dialogs.selectors";
import {
    addMessage,
    deleteSelected,
    setFollowers
} from "../../redux/dialogs/dialogs.actions";



const Dialogs = ()=> {

    const isAuth = useSelector(state=>getIsAuth(state))
    const followers = useSelector(state=>getFollowUsers(state))
    const dialogs = useSelector(state=>getDialogs(state))
    const selected = useSelector(state=>getSelect(state))
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
        }
    },[followers])



    const testFunc = selected=>{
        return values => {
            dispatch(addMessage(values.message,selected))
        }
    }

    const pushIt = testFunc(selected)


    const handleSubmit =  values => {
            pushIt(values)
    }


    return (
        <div className={styles.content}>
            <div className={styles.users}>
                {
                    dialogs.map(user => <DialogsItem user={user}/>)
                }
            </div>
            <div className={styles.messeges}>
                <Messages/>
                {
                    selected ?
                    <Form onSubmit={handleSubmit}>
                        <Field name={"message"} validate={isRequired()}/>
                        <button type={"submit"}>Send</button>
                    </Form>: null
                }
            </div>
        </div>
    )
}

export default Dialogs