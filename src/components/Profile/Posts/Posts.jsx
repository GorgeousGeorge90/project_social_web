import styles from './Posts.module.css'

const Posts = ()=>{
    const posts = [
        {id:1, text: 'This is my first post!'},
        {id:2, text: 'Hello to everyone!'},
        {id:3, text: 'I am really want to become a React Developer!'}
    ]
    return (
        <div className={styles.posts}>
            {posts.map(post=> <p>{post.text}</p>)}
        </div>
    )
}

export default Posts