import styles from './Dialogs.module.css'
import Messages from './Messages/Messages';
import DialogsItem from './DialogsItem/DialogsItem'
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom'
import {useEffect} from "react";
import {Form, isRequired} from '@altiore/form'
import {ADD_MESSAGE} from "../../redux/dialogs/dialogsReducer";
import {Field} from "../common/AltiorFrom/AltiorFrom";




const Dialogs = ()=> {
    const isAuth = useSelector(state=>state.auth.isAuth)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(()=>{
        if (isAuth === false) {
            navigate('/login')
        }
    },[isAuth])

    const handleSubmit = values => {
        dispatch({type: ADD_MESSAGE, payload: values.message})
    }

    return (
        <div className={styles.content}>
            <DialogsItem/>
            <Messages/>
            <div>
              <Form onSubmit={handleSubmit}>
                  <Field name={"message"} validate={isRequired()}/>
                  <button type={"submit"}>Send</button>
              </Form>
            </div>
        </div>
    )
}

export default Dialogs