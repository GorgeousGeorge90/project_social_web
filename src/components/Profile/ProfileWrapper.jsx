import React from 'react';
import {connect} from 'react-redux';
import Profile from "./Profile";
import {
    deletePost,
    getUserStatus,
    setIsFetching,
    setProfile,
    setUserInfo,
    updatePost, updateStatus
} from '../../redux/profile/profile.actions';
import {getIsFetchingProfile, getPosts, getProfile, getStatus} from "../../selectors/profile.selectors";






class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.setUserInfo()
        this.props.getUserStatus()
            }


    render() {
        return <Profile {...this.props} />
    }
}

let mapStateToProps = state => ({
    profile: getProfile(state),
    posts: getPosts(state),
    isFetching: getIsFetchingProfile(state),
    status: getStatus(state)
})


export const ProfileWrapper = connect(mapStateToProps,
    {setProfile, updatePost, deletePost, setIsFetching,
        setUserInfo, getUserStatus, updateStatus})(ProfileContainer)