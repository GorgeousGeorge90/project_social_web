import {
    getAllUsers,
    getCurrentPage,
    getIsFetching,
    getPageSize,
    getPortionSize,
    getTotalCount
} from '../../selectors/users.selectors';
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
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import {useEffect} from 'react';


const UsersContainer = (props)=> {

    useEffect(()=>{
        props.getUsers(props.pageSize,props.currentPage)
    },[props.currentPage])

    let onPageChange = pageNumber => {
        props.getAnotherUsers(pageNumber,props.pageSize)
    }

    return (<>
            {props.isFetching  ? <Preloader/> : null}
            <Users {...props}
                   onPageChange={onPageChange}
            />
        </>
    )
}


let mapStateToProps = state => ({
    users: getAllUsers(state),
    totalItemsCount: getTotalCount(state),
    pageSize: getPageSize(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    portionSize: getPortionSize(state),
})


export const UsersWrapper = connect(mapStateToProps,
    {setUsers, setTotalUsers, setCurrentPage, setIsFetching, setFollow, setUnfollow,
        getUsers, getAnotherUsers, getFollowUser, getUnfollowUser})(UsersContainer)


