import styles from './Posts.module.css'
import Post from "./Post /Post";

const Posts = (props)=>{
    let posts = props.posts
    return (
        <div className={styles.posts}>
            {posts.map(post=> <Post post={post}/>)}
        </div>
    )
}

export default Posts