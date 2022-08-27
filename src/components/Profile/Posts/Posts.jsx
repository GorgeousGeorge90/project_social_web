import React from 'react';
import styles from './Posts.module.css'
import Post from "./Post /Post";
import {useSelector} from "react-redux";

const Posts = ()=>{
    let posts = useSelector(state=> state.profilePage.posts)
    const newPostRef = React.createRef()

    let addPost = ()=>{
        let text = newPostRef.current.value
        alert(text)
    }

    return (<>
            <div>
                <h3>My Posts</h3>
                 <textarea ref={newPostRef}/>
             </div>
            <div>
                <button onClick={addPost}>Post</button>
            </div>
            <div className={styles.posts}>
                {posts.map(post=> <Post post={post}/>)}
            </div>
        </>)
}

export default Posts