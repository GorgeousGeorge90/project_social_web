import styles from './Profile.module.css'
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import Preloader from "../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";



const Profile = (props) => {

    const isAuth = useSelector(state=>state.auth.isAuth)
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
            <ProfileInfo profile={props.profile}/>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            {!userId &&
                <Posts profile={props.profile}/>
            }
        </div>
    )
}

export default Profile