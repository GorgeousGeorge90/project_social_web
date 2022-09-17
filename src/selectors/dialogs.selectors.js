import {createSelector} from 'reselect';
import {getAllUsers} from './users.selectors';


export const getDialogs = state => state.dialogsPage.dialogs
export const getSelect = state => state.dialogsPage.selected
export const getMessages = state => state.dialogsPage.messages

export const getSelectedDialog = createSelector(
    [
        getSelect,
        getMessages,
    ],
    (selected,messages)=>{
        return  messages.filter(dialog=> dialog.id === selected)
    }
)

export const getFollowUsers = createSelector(getAllUsers,(users)=>{
    return users.filter(user => user.followed === true)
})


export const getSelectedUser = createSelector(
    [
        getSelect,
        getFollowUsers,
    ],
    (selected,users) =>{
        return users.filter(user => user.id === selected)
    }
)


