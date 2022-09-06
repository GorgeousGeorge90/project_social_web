import styles from './Users.module.css';
import users_ava from '../../assets/img/users_ava.png';
import {NavLink} from 'react-router-dom';



const Users = (props)=> {

    let pages = []

    let pageNumber = Math.ceil(props.totalUsersCount/props.pageSize)

    for (let i =1; i<= pageNumber; i++) {
        pages.push(i)
    }


    return (
        <div className={styles.wrapper}>
            {pages.map(p=><span className={props.currentPage === p && styles.selectedPage} onClick={()=>{props.onPageChange(p)}}>{p}</span>)}
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
                    <p>Status:{user.status}</p>
                    {user.followed ?

                        <button onClick={() => {
                                props.getUnfollowUser(user.id)
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