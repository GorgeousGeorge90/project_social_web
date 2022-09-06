import styles from './Profile.module.css'
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import Preloader from "../common/Preloader/Preloader";



const Profile = (props) => {

    const isAuth = useSelector(state=>state.auth.isAuth)
    const navigate = useNavigate()

    useEffect(()=>{
        if (isAuth === false) {
            navigate('/login')
        }
    },[isAuth])


    if (props.profile === null) return <Preloader/>
    return (
        <div className={styles.content}>
            <ProfileInfo profile={props.profile}/>
            <Posts profile={props.profile}/>
        </div>
    )
}

export default Profile