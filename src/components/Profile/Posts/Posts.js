import styles from './Posts.module.scss'
import Post from './Post /Post';
import {useForm} from 'react-hook-form';
import {useEffect} from 'react';
import {PostsSchema} from '../../../helpers/validations/PostsValidations';
import { yupResolver } from '@hookform/resolvers/yup';


const Posts = ({posts, addPost, ...args})=>{

    useEffect(()=> {
        localStorage.setItem('posts',JSON.stringify(posts))
    },[posts])

    const { register, handleSubmit, reset, formState: {errors} } = useForm({
        resolver:yupResolver(PostsSchema)});
    const onSubmit = values => {
        addPost(values.post)
        reset()
    }

    return (<>
                <h3><span className={styles.title}>My Posts:</span></h3>
                <div className={styles.main}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className={styles.field}>
                            <textarea placeholder='Typing...' {...register('post',
                                )} />
                            <button type='submit'>New post</button>
                        </div>
                        <div className={styles.errors}>
                            {errors?.post && <p>{errors?.post?.message || 'Error'}</p>}
                        </div>
                    </form>
                </div>
            <div className={styles.posts}>
                {
                    posts ? posts.map(post => <Post key={post.id} {...args} post={post}/>) :
                    <p>No posts, yet</p>
                }
            </div>
        </>)
}

export default Posts