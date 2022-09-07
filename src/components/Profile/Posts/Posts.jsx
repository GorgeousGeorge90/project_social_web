import styles from './Posts.module.css'
import Post from "./Post /Post";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from 'react-hook-form';
import {addPost} from "../../../redux/profile/profile.actions";

const Posts = (props)=>{
    let posts = useSelector(state=> state.profilePage.posts)
    const dispatch = useDispatch()
    const { register, handleSubmit, reset, formState: {errors} } = useForm();
    const onSubmit = values => {
        dispatch(addPost(values.post))
        reset()
    }

    return (<>
                <h3>My Posts</h3>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <textarea placeholder='Typing..' {...register('post',{
                            required: 'This field is necessary!',
                            minLength:{
                                value:2,
                                message: 'Minimal length is 2 symbols!',
                            }
                        })} />
                        <button type='submit'>Post</button>
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