import {connect} from 'react-redux';
import {deletePost, setIsFetching, setProfile, setUserInfo, updatePost} from '../../redux/profile/profile.actions';
import Profile from './Profile';
import {useParams} from 'react-router-dom';
import {useEffect} from 'react';




const ProfileContainer = (props)=>{

    // const {userId} = useParams()


    useEffect(()=>{
        props.setUserInfo()
    },[props])

    return <Profile {...props} />
}


let mapStateToProps = state => ({
    profile: state.profilePage.profile,
    posts: state.profilePage.posts,
    isFetching: state.profilePage.isFetching,
})


export const ProfileWrapper = connect(mapStateToProps,
    {setProfile, updatePost, deletePost, setIsFetching, setUserInfo})(ProfileContainer)