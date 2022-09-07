import styles from './Post.module.css'
import ava from './../../../../assets/img/ava.jpeg'
import {useDispatch} from 'react-redux';
import {addLike, deletePost} from '../../../../redux/profile/profile.actions';
import {ADD_LIKE} from "../../../../redux/profile/profileReducer";

const Post = (props)=> {
    const post = props.post
    const {id} = post
    const dispatch = useDispatch()


    return (<div className={styles.post}>
        <div className={styles.avatar}>
            {props.profile.photos.small ? <img src={props.profile.photos.small} alt="avatar"/> :
                <img src={ava} alt="avatar"/>}
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