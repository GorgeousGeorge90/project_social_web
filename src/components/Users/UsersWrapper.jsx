import React from 'react';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import {connect} from 'react-redux';
import {
    getAnotherUsers, getFollowUser, getUnfollowUser,
    getUsers,
    setCurrentPage,
    setFollow,
    setIsFetching,
    setTotalUsers,
    setUnfollow,
    setUsers
} from '../../redux/users/users.actions';



class UsersApi extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentPage)
    }


    onPageChange = pageNumber => {
       this.props.getAnotherUsers(pageNumber,this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching  ? <Preloader/> : null}
            <Users {...this.props}
                   onPageChange={this.onPageChange}
            />
        </>
    }
}


let mapStateToProps = state => ({
    users: state.usersPage.users,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
})



export const UsersWrapper = connect(mapStateToProps,
    {setUsers, setTotalUsers, setCurrentPage, setIsFetching, setFollow, setUnfollow,
        getUsers, getAnotherUsers, getFollowUser, getUnfollowUser})(UsersApi)
