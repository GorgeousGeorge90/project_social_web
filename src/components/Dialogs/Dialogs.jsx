import styles from './Dialogs.module.css'
import Messages from './Messages/Messages';
import DialogsItem from './DialogsItem/DialogsItem'
import {useFormik} from 'formik';
import {useEffect} from "react";

const Dialogs = (props)=> {
    const {messages,newMessage, addNewMessage, updateNewMessage} = props

    const initialValues = {
        message:''
    }

    let  onSubmit = values => {
        console.log(values)
        addNewMessage()
    }

    const validate = values => {
        let errors = {}

        if (!values.message) {
            errors.message = 'Required'
        }

        return errors
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate,
    })

    // useEffect(value=>{
    //     let newMess = formik.values.message
    //     updateNewMessage(newMess)
    // },[value])


    return (
        <div className={styles.content}>
            <DialogsItem/>
            <Messages/>
            <div>
                <form onSubmit={formik.handleSubmit}>
                    <textarea
                        name='message'
                        onChange={formik.handleChange}
                        value={formik.values.message}
                    />
                    <button type='submit'>Send</button>
                </form>
            </div>
        </div>
    )
}

export default Dialogs