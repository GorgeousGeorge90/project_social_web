import styles from './Post.module.css'
import {useDispatch} from 'react-redux';
import {addLike, deletePost} from '../../../../redux/profile/profile.actions';
import users_ava from './../../../../assets/img/users_ava.png'


const Post = (props)=> {
    const post = props.post
    const {id} = post
    const dispatch = useDispatch()


    return (<div className={styles.post}>
        <div className={styles.avatar}>
            {props.profile.photos.small ? <img src={props.profile.photos.small} alt="avatar"/> :
                <img src={users_ava} alt="avatar"/>}
        </div>
        <div className={styles.text}>
            <p>{post.text}</p>
            <p>
                <span onClick={() => dispatch(addLike(id))}>&#129505;</span>
                {post.likes}
            </p>
            <span onClick={() => dispatch(deletePost(id))}>&#128465;</span>
        </div>
    </div>)
}

export default Post