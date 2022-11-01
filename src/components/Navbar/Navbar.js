import CustomLink from '../common/CustomLink/CustomLink';
import {useSelector} from 'react-redux';
import {getFollowUsers} from '../../selectors/dialogs.selectors';
import {getProfile} from '../../selectors/profile.selectors';
import styles from './Navbar.module.scss';



const Navbar = ()=> {
    const followers = useSelector(state=>getFollowUsers(state))
    const profile = useSelector(state=>getProfile(state))

    return (
        <nav>
            <ul>
                <li><CustomLink to='/profile'>Profile</CustomLink></li>
                <li>
                    { followers.length === 0 || profile === null ? <span>Dialogs</span>:
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