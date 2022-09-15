import styles from './Profile.module.css'
import Posts from './Posts/Posts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {useSelector} from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';
import {useEffect} from 'react';
import Preloader from '../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import logo from './../../assets/img/logo.png'
import {getIsAuth} from '../../selectors/auth.selectors';



const Profile = (props) => {

    const isAuth = useSelector(state=>getIsAuth(state))
    const navigate = useNavigate()

    const {userId} = useParams()

    useEffect(()=>{
        if (isAuth === false) {
            navigate('/login')
        }
    },[isAuth])

    if (props.profile === null) return <Preloader/>
    return (
        <div className={styles.content}>
            <ProfileInfo {...props}/>
            <ProfileStatus {...props}/>
            {!userId ?
                <Posts {...props} />:
                <img src={logo} alt="logo"/>
            }
        </div>
    )
}

export default Profile