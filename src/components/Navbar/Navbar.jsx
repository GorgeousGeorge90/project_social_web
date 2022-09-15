import styles from './Navbar.module.scss';
import CustomLink from "../common/CustomLink/CustomLink";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {getFollowUsers} from "../../selectors/dialogs.selectors";




const Navbar = ()=> {
    const followers = useSelector(state=>getFollowUsers(state))

    return (
        <nav>
            <ul>
                <li><CustomLink to='/profile'>Profile</CustomLink></li>
                <li>
                    { followers.length === 0 ? <span>Dialogs</span>:
                        <CustomLink to='/dialogs'>Dialogs</CustomLink>
                    }
                </li>
                <li><CustomLink to='/users'>Users</CustomLink></li>
                <li><CustomLink to='/news'>News</CustomLink></li>
            </ul>
        </nav>
    )
}


export default Navbar