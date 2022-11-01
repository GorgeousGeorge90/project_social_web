import styles from './Post.module.scss'
import {useDispatch} from 'react-redux';
import {addLike, deletePost} from '../../../../redux/profile/profile.actions';
import users_ava from './../../../../assets/img/users_ava.png'


const Post = ({post, profile})=> {
    const {id} = post
    const dispatch = useDispatch()


    return (<div className={styles.post}>
        <div className={styles.avatar}>
            {profile.photos.small ? <img src={profile.photos.small} alt="avatar"/> :
                <img src={users_ava} alt="avatar"/>}
        </div>
        <div className={styles.text}>
            <p>{post.text}</p>
            <div className={styles.other}>
                <span onClick={() => dispatch(addLike(id))}>&#129505;</span>
                {post.likes}
                <span onClick={() => dispatch(deletePost(id))}>&#128465;</span>
            </div>
        </div>
    </div>)
}

export default Post