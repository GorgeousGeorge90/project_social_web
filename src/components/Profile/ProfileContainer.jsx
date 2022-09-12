import {connect} from 'react-redux';
import {
    deletePost,
    getUserStatus,
    setIsFetching,
    setProfile,
    setUserInfo,
    updateStatus,
    addPost,
    saveNewPhoto,
} from '../../redux/profile/profile.actions';
import Profile from './Profile';
import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
import {getIsFetchingProfile, getPosts, getProfile, getStatus} from "../../selectors/profile.selectors";




const ProfileContainer = (props)=>{

    const {userId} = useParams()

    useEffect(()=>{
        props.setUserInfo(userId)
        props.getUserStatus(userId)
    },[userId])



    return <Profile {...props}/>
}


let mapStateToProps = state => ({
    profile: getProfile(state),
    posts: getPosts(state),
    isFetching: getIsFetchingProfile(state),
    status: getStatus(state)
})


export const ProfileWrapper = connect(mapStateToProps,
    {setProfile, deletePost, setIsFetching,
        setUserInfo, getUserStatus, updateStatus, saveNewPhoto, addPost})(ProfileContainer)