import React, {useEffect} from 'react';
import styles from './Posts.module.css'
import Post from "./Post /Post";
import {useDispatch, useSelector} from "react-redux";
import {ADD_POST, UPDATE_POST} from "../../../redux/profileReducer";
import {useForm} from 'react-hook-form';

const Posts = ()=>{
    let posts = useSelector(state=> state.profilePage.posts)
    let newPostText = useSelector(state=>state.profilePage.newPostText)
    const dispatch = useDispatch()
    const { register, handleSubmit, reset, watch, formState: {errors, isValid} } = useForm();
    const onSubmit = () => {
        dispatch({
            type: ADD_POST,
        })
        reset()
    }

    useEffect(()=>{
        const subscription = watch(data=> {
            dispatch({
                type: UPDATE_POST,
                payload: data.post,
            })
        })
            return ()=>{
            subscription.unsubscribe();
            }
        },[watch])


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
                {posts.map(post=> <Post post={post}/>)}
            </div>
        </>)
}

export default Posts