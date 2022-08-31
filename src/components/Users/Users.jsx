import React from 'react';
import axios from 'axios';
import users_ava from '../../assets/img/users_ava.png';
import styles from './Users.module.css'

class Users extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => this.props.setUsers(response.data.items))
    }

    render() {
        return (
            <div className={styles.wrapper}>
                {this.props.users.map(user => <div key={user.id} className={styles.item}>
                    <div className={styles.ava}>
                        {user.photos.small != null ? <img src={user.photos.small} alt="ava"/> :
                            <img src={users_ava} alt="ava"/>
                            }
                    </div>
                    <div className={styles.description}>
                    <p>Name:{user.name}</p>
                    <p>Status:{user.status}</p>
                {user.follow === true ?
                    <button onClick={() => alert('Unfollow')}>Unfollow</button> :
                    <button onClick={() => alert('Follow')}>Follow</button>}
                    </div>
                </div> )
                }
            </div>
        )
    }
}

export default Users