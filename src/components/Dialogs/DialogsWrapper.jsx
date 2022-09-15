import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {getDialogs, getFollowUsers, getMessages, getSelect} from '../../selectors/dialogs.selectors';
import {
    addMessage,
    deleteMessage, getSelectUser,
    setFollowers,
    unfollowFriend,
} from '../../redux/dialogs/dialogs.actions';



const mapStateToProps = state =>({
    dialogs:getDialogs(state),
    messages:getMessages(state),
    followers:getFollowUsers(state),
    selected:getSelect(state),
})


export  const DialogsWrapper = connect(mapStateToProps, {setFollowers,unfollowFriend,addMessage,
    deleteMessage, getSelectUser})(Dialogs)