import styles from './Posts.module.scss'
import Post from "./Post /Post";
import {useForm} from 'react-hook-form';
import {useEffect} from "react";


const Posts = (props)=>{
    const {posts, addPost} = props

    useEffect(()=> {
        localStorage.setItem('posts',JSON.stringify(posts))
    },[posts])

    const { register, handleSubmit, reset, formState: {errors} } = useForm();
    const onSubmit = values => {
        addPost(values.post)
        reset()
    }

    return (<>
                <h3><span className={styles.title}>My Posts:</span></h3>
                <div className={styles.main}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <textarea placeholder='Typing...' {...register('post',{
                            required: 'This field is necessary!',
                            minLength:{
                                value:2,
                                message: 'Minimal length is 2 symbols!',
                            }
                        })} />
                        <button type='submit'>New post</button>
                        <div style={{height: 40}}>
                            {errors?.post && <p>{errors?.post?.message || 'Error'}</p>}
                        </div>
                    </form>
                </div>
            <div className={styles.posts}>
                {
                    posts ? posts.map(post => <Post {...props} post={post}/>) :
                    <p>No posts, yet</p>
                }
            </div>
        </>)
}

export default Posts