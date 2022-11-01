import styles from './Users.module.scss';
import users_ava from '../../assets/img/users_ava.png';
import {NavLink, useNavigate} from 'react-router-dom';
import Paginator from '../common/Paginator /Paginator';
import {useSelector} from "react-redux";
import {getIsAuth} from "../../selectors/auth.selectors";
import {useEffect} from "react";




const Users = (props)=> {

    const isAuth = useSelector(state=>getIsAuth(state))
    const navigate = useNavigate()
    useEffect(()=>{
        if (!isAuth) {
            navigate('/login')
        }
    },[isAuth])

    return (
        <div className={styles.wrapper}>
           <Paginator {...props} />
            {props.users.map(user => <div key={user.id} className={styles.item}>

                <div className={styles.ava}>
                    <NavLink to={`/profile/${user.id}`}>
                    {user.photos.small != null ? <img src={user.photos.small} alt="ava"/> :
                        <img src={users_ava} alt="ava"/>
                    }
                    </NavLink>
                </div>

                <div className={styles.description}>
                    <p>Name:{user.name}</p>
                    <p>Status:{user.status ? user.status: `no status`}</p>
                    {user.followed ?

                        <button onClick={() => {
                                props.getUnfollowUser(user.id, props.selected)
                                }}>Unfollow</button> :
                        <button onClick={() => {
                            props.getFollowUser(user.id)
                        }}>Follow</button>}

                </div>
            </div> )
            }
        </div>
    )
}


export default Users