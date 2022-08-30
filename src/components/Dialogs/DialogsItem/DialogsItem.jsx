import  styles from './DialogsItem.module.css'
import {useSelector} from 'react-redux';


const DialogsItem = ()=> {
    let dialogs = useSelector(state=>state.dialogsPage.dialogs)

    return (
        <div className={styles.dialogs}>
            {dialogs.map(dialog=> <p>{dialog.name}</p>)}
        </div>
    )
}

export default DialogsItem