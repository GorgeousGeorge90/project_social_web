import styles from './Post.module.css'
import ava from './../../../../assets/img/ava.jpeg'

const Post = (props)=> {
    let post = props.post
    return (<div className={styles.post}>
        <div className={styles.avatar}>
            {props.profile.photos.small ? <img src={props.profile.photos.small} alt="avatar"/> :
                <img src={ava} alt="avatar"/>}
        </div>
        <div className={styles.text}>
        <p>{post.text}</p>
        <p>likes:{post.likes}</p>
        </div>
    </div>)
}

export default Post