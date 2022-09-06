import React from 'react';
import {connect} from 'react-redux';
import Profile from "./Profile";
import {deletePost, setIsFetching, setProfile, setUserInfo, updatePost} from '../../redux/profile/profile.actions';






class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.setUserInfo()
            }


    render() {
        return <Profile {...this.props} />
    }
}

let mapStateToProps = state => ({
    profile: state.profilePage.profile,
    posts: state.profilePage.posts,
    isFetching: state.profilePage.isFetching,
})


export const ProfileWrapper = connect(mapStateToProps,
    {setProfile, updatePost, deletePost, setIsFetching, setUserInfo})(ProfileContainer)