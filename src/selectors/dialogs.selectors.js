import {createSelector} from 'reselect';
import {getAllUsers} from './users.selectors';


export const getFollowUsers = createSelector(getAllUsers,(users)=>{
    return users.filter(user => user.followed === true)
})

export const getMessages = state => state.dialogsPage.messages
export const getDialogs = state => state.dialogsPage.dialogs
export const getSelect = state => state.dialogsPage.selected