import styles from './Users.module.css'
import {useSelector} from "react-redux";
import User from "./User/User";

const Users = ()=> {
    const users = useSelector(state => state.usersPage.users)
    return (<div className={styles.wrapper}>
            {users.map(user=><User user={user}/>)}
        </div>
    )
}




export default Users